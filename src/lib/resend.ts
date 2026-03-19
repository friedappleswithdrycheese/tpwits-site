import { Resend } from "resend";

// Lazy-init to avoid build-time errors when RESEND_API_KEY is not set
let _resend: Resend | null = null;

export function getResend(): Resend {
  if (!_resend) {
    if (!process.env.RESEND_API_KEY) {
      throw new Error("RESEND_API_KEY is not set");
    }
    _resend = new Resend(process.env.RESEND_API_KEY);
  }
  return _resend;
}

export const FROM_EMAIL = "TPWITS <noreply@tpwits.com>";
export const TO_EMAIL = process.env.CONTACT_EMAIL || "hello@tpwits.com";
