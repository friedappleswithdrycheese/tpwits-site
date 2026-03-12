import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | TPWITS",
  description:
    "Learn how TPWITS collects, uses, and protects your personal information. Our privacy policy outlines your rights and our commitment to data security.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-16 overflow-hidden bg-navy">
        <div className="container-custom relative z-10">
          <div className="max-w-3xl animate-fade-in-up">
            <span className="inline-block text-sm font-bold uppercase tracking-[0.2em] text-primary mb-4">
              Legal
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4">
              Privacy Policy
            </h1>
            <p className="text-sm text-white/60">
              Last updated: March 2026
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <p className="text-foreground-muted leading-relaxed mb-12">
              TPWITS Technologies (&ldquo;TPWITS,&rdquo; &ldquo;we,&rdquo;
              &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to
              protecting your privacy. This Privacy Policy explains how we
              collect, use, disclose, and safeguard your information when you
              visit our website or use our services.
            </p>

            <h2 className="heading-md mb-6">Information We Collect</h2>
            <p className="text-foreground-muted leading-relaxed mb-4">
              We may collect personal information that you voluntarily provide
              to us when you:
            </p>
            <ul className="list-disc list-inside text-foreground-muted leading-relaxed mb-8 space-y-2 pl-2">
              <li>Fill out a contact form or request a consultation</li>
              <li>Subscribe to our newsletter or marketing communications</li>
              <li>Apply for a position through our careers page</li>
              <li>Engage with us on social media platforms</li>
              <li>Communicate with us via email, phone, or other channels</li>
            </ul>
            <p className="text-foreground-muted leading-relaxed mb-12">
              This information may include your name, email address, phone
              number, company name, job title, and any other details you choose
              to provide. We also automatically collect certain technical
              information, including your IP address, browser type, operating
              system, referring URLs, and browsing behavior on our site.
            </p>

            <h2 className="heading-md mb-6">How We Use Your Information</h2>
            <p className="text-foreground-muted leading-relaxed mb-4">
              We use the information we collect for the following purposes:
            </p>
            <ul className="list-disc list-inside text-foreground-muted leading-relaxed mb-12 space-y-2 pl-2">
              <li>To respond to your inquiries and provide requested services</li>
              <li>To send you relevant marketing communications (with your consent)</li>
              <li>To improve our website, services, and user experience</li>
              <li>To analyze usage trends and measure the effectiveness of our content</li>
              <li>To comply with legal obligations and enforce our terms</li>
              <li>To protect the security and integrity of our platform</li>
            </ul>

            <h2 className="heading-md mb-6">Data Security</h2>
            <p className="text-foreground-muted leading-relaxed mb-12">
              We implement appropriate technical and organizational security
              measures to protect your personal information against unauthorized
              access, alteration, disclosure, or destruction. These measures
              include encryption, access controls, secure data storage, and
              regular security assessments. However, no method of transmission
              over the internet or electronic storage is completely secure, and
              we cannot guarantee absolute security.
            </p>

            <h2 className="heading-md mb-6">Cookies</h2>
            <p className="text-foreground-muted leading-relaxed mb-4">
              Our website uses cookies and similar tracking technologies to
              enhance your browsing experience and collect usage data. Cookies
              are small text files stored on your device that help us:
            </p>
            <ul className="list-disc list-inside text-foreground-muted leading-relaxed mb-4 space-y-2 pl-2">
              <li>Remember your preferences and settings</li>
              <li>Understand how you interact with our website</li>
              <li>Deliver relevant content and advertisements</li>
              <li>Analyze site traffic and performance</li>
            </ul>
            <p className="text-foreground-muted leading-relaxed mb-12">
              You can control cookie preferences through your browser settings.
              Please note that disabling certain cookies may affect the
              functionality of our website.
            </p>

            <h2 className="heading-md mb-6">Your Rights</h2>
            <p className="text-foreground-muted leading-relaxed mb-4">
              Depending on your jurisdiction, you may have the following rights
              regarding your personal data:
            </p>
            <ul className="list-disc list-inside text-foreground-muted leading-relaxed mb-4 space-y-2 pl-2">
              <li>
                <strong>Access:</strong> Request a copy of the personal data we
                hold about you
              </li>
              <li>
                <strong>Correction:</strong> Request correction of inaccurate or
                incomplete data
              </li>
              <li>
                <strong>Deletion:</strong> Request deletion of your personal
                data, subject to legal obligations
              </li>
              <li>
                <strong>Portability:</strong> Request transfer of your data to
                another service provider
              </li>
              <li>
                <strong>Objection:</strong> Object to certain processing
                activities, including direct marketing
              </li>
              <li>
                <strong>Withdrawal of Consent:</strong> Withdraw your consent at
                any time where processing is based on consent
              </li>
            </ul>
            <p className="text-foreground-muted leading-relaxed mb-12">
              To exercise any of these rights, please contact us using the
              information provided below.
            </p>

            <h2 className="heading-md mb-6">Contact Us</h2>
            <p className="text-foreground-muted leading-relaxed mb-4">
              If you have any questions about this Privacy Policy or our data
              practices, please contact us at:
            </p>
            <div className="bg-background-alt rounded-2xl p-6 md:p-8 mb-4">
              <p className="text-foreground font-semibold mb-1">
                TPWITS Technologies
              </p>
              <p className="text-foreground-muted text-sm mb-1">
                Email:{" "}
                <a
                  href="mailto:privacy@tpwits.com"
                  className="text-primary hover:text-primary-hover transition-colors"
                >
                  privacy@tpwits.com
                </a>
              </p>
              <p className="text-foreground-muted text-sm">
                Or visit our{" "}
                <Link
                  href="/contact"
                  className="text-primary hover:text-primary-hover transition-colors"
                >
                  Contact page
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
