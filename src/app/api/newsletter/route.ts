import { NextRequest, NextResponse } from "next/server";
import { getResend, FROM_EMAIL, TO_EMAIL } from "@/lib/resend";

async function verifyTurnstile(token: string): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret || !token) return true;

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 5000);

    const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ secret, response: token }),
      signal: controller.signal,
    });

    clearTimeout(timeout);
    const data = await res.json();
    return data.success === true;
  } catch {
    return true;
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, _honeypot, turnstileToken } = body;

    // Honeypot
    if (_honeypot) {
      return NextResponse.json({ success: true });
    }

    // Turnstile (fail open)
    const turnstileValid = await verifyTurnstile(turnstileToken || "");
    if (!turnstileValid) {
      return NextResponse.json(
        { success: false, error: "verification_failed", message: "Please verify you are human." },
        { status: 403 }
      );
    }

    // Validation
    if (!email?.trim()) {
      return NextResponse.json(
        { success: false, error: "validation", fields: { email: "Email is required" } },
        { status: 400 }
      );
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { success: false, error: "validation", fields: { email: "Please enter a valid email" } },
        { status: 400 }
      );
    }

    // Send notification via Resend
    if (!process.env.RESEND_API_KEY) {
      console.error("CRITICAL: RESEND_API_KEY is not set — newsletter signup lost");
      return NextResponse.json(
        { success: false, error: "service_unavailable", message: "Service temporarily unavailable." },
        { status: 500 }
      );
    }

    await getResend().emails.send({
      from: FROM_EMAIL,
      to: [TO_EMAIL],
      subject: `Newsletter signup: ${email}`,
      text: `New newsletter subscriber: ${email}`,
    });

    console.log(`Newsletter signup: ${email}`);

    return NextResponse.json({ success: true, message: "You're subscribed! Thank you." });
  } catch (error) {
    console.error("Newsletter signup error:", error);
    return NextResponse.json(
      { success: false, error: "server_error", message: "Something went wrong. Please try again." },
      { status: 503 }
    );
  }
}
