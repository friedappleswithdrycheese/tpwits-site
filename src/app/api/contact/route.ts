import { NextRequest, NextResponse } from "next/server";
import { getResend, FROM_EMAIL, TO_EMAIL } from "@/lib/resend";

async function verifyTurnstile(token: string): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret || !token) return true; // Fail open if not configured

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
    return true; // Fail open on error/timeout
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, message, service, _honeypot, turnstileToken } = body;

    // Honeypot check — bots fill hidden fields
    if (_honeypot) {
      return NextResponse.json({ success: true }); // Silent reject
    }

    // Turnstile verification (fail open)
    const turnstileValid = await verifyTurnstile(turnstileToken || "");
    if (!turnstileValid) {
      return NextResponse.json(
        { success: false, error: "verification_failed", message: "Please verify you are human." },
        { status: 403 }
      );
    }

    // Validation
    const errors: Record<string, string> = {};
    if (!firstName?.trim()) errors.firstName = "First name is required";
    if (!lastName?.trim()) errors.lastName = "Last name is required";
    if (!email?.trim()) errors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = "Please enter a valid email";
    if (message && message.length > 5000) errors.message = "Message is too long (max 5000 characters)";

    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        { success: false, error: "validation", fields: errors },
        { status: 400 }
      );
    }

    // Send via Resend
    if (!process.env.RESEND_API_KEY) {
      console.error("CRITICAL: RESEND_API_KEY is not set — contact form submission lost");
      return NextResponse.json(
        { success: false, error: "service_unavailable", message: "Service temporarily unavailable. Please try again later." },
        { status: 500 }
      );
    }

    await getResend().emails.send({
      from: FROM_EMAIL,
      to: [TO_EMAIL],
      subject: `New contact from ${firstName} ${lastName}${service ? ` — ${service}` : ""}`,
      text: [
        `Name: ${firstName} ${lastName}`,
        `Email: ${email}`,
        phone ? `Phone: ${phone}` : null,
        service ? `Service: ${service}` : null,
        message ? `\nMessage:\n${message}` : null,
      ]
        .filter(Boolean)
        .join("\n"),
      replyTo: email,
    });

    console.log(`Contact form submission from ${email}`);

    return NextResponse.json({ success: true, message: "Your message has been sent. We'll respond within 24 hours." });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { success: false, error: "server_error", message: "Something went wrong. Please try again." },
      { status: 503 }
    );
  }
}
