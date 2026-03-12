import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Use | TPWITS",
  description:
    "Read the terms and conditions governing your use of the TPWITS website and services. Understand your rights, responsibilities, and our policies.",
};

export default function TermsOfUsePage() {
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
              Terms of Use
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
              Welcome to the TPWITS Technologies website. By accessing or using
              this website and our services, you agree to be bound by these
              Terms of Use. Please read them carefully before using our site. If
              you do not agree with any part of these terms, you should not use
              this website.
            </p>

            <h2 className="heading-md mb-6">Acceptance of Terms</h2>
            <p className="text-foreground-muted leading-relaxed mb-12">
              By accessing and using this website, you accept and agree to be
              bound by these Terms of Use, our Privacy Policy, and all
              applicable laws and regulations. These terms apply to all
              visitors, users, and others who access or use our website. TPWITS
              reserves the right to update or modify these terms at any time
              without prior notice. Your continued use of the website following
              any changes constitutes your acceptance of the revised terms.
            </p>

            <h2 className="heading-md mb-6">Use License</h2>
            <p className="text-foreground-muted leading-relaxed mb-4">
              Permission is granted to temporarily access the materials on the
              TPWITS website for personal, non-commercial, transitory viewing
              only. This is the grant of a license, not a transfer of title,
              and under this license you may not:
            </p>
            <ul className="list-disc list-inside text-foreground-muted leading-relaxed mb-4 space-y-2 pl-2">
              <li>Modify or copy the materials</li>
              <li>
                Use the materials for any commercial purpose or public display
              </li>
              <li>
                Attempt to decompile or reverse-engineer any software contained
                on the website
              </li>
              <li>
                Remove any copyright or other proprietary notations from the
                materials
              </li>
              <li>
                Transfer the materials to another person or mirror the materials
                on any other server
              </li>
            </ul>
            <p className="text-foreground-muted leading-relaxed mb-12">
              This license shall automatically terminate if you violate any of
              these restrictions and may be terminated by TPWITS at any time.
              Upon termination, you must destroy any downloaded materials in
              your possession.
            </p>

            <h2 className="heading-md mb-6">Disclaimer</h2>
            <p className="text-foreground-muted leading-relaxed mb-12">
              The materials on the TPWITS website are provided on an
              &ldquo;as-is&rdquo; basis. TPWITS makes no warranties, expressed
              or implied, and hereby disclaims and negates all other warranties,
              including without limitation implied warranties or conditions of
              merchantability, fitness for a particular purpose, or
              non-infringement of intellectual property or other violation of
              rights. Further, TPWITS does not warrant or make any
              representations concerning the accuracy, likely results, or
              reliability of the use of the materials on its website or
              otherwise relating to such materials or on any sites linked to
              this site.
            </p>

            <h2 className="heading-md mb-6">Limitations</h2>
            <p className="text-foreground-muted leading-relaxed mb-12">
              In no event shall TPWITS Technologies or its suppliers be liable
              for any damages (including, without limitation, damages for loss
              of data or profit, or due to business interruption) arising out of
              the use or inability to use the materials on the TPWITS website,
              even if TPWITS or an authorized representative has been notified
              orally or in writing of the possibility of such damage. Because
              some jurisdictions do not allow limitations on implied warranties
              or limitations of liability for consequential or incidental
              damages, these limitations may not apply to you.
            </p>

            <h2 className="heading-md mb-6">Governing Law</h2>
            <p className="text-foreground-muted leading-relaxed mb-12">
              These Terms of Use shall be governed by and construed in
              accordance with the laws of the State of California, United
              States, without regard to its conflict of law provisions. Any
              disputes arising under or in connection with these terms shall be
              subject to the exclusive jurisdiction of the courts located in San
              Francisco County, California. By using this website, you consent
              to the jurisdiction and venue of such courts.
            </p>

            <h2 className="heading-md mb-6">Contact</h2>
            <p className="text-foreground-muted leading-relaxed mb-4">
              If you have any questions about these Terms of Use, please contact
              us:
            </p>
            <div className="bg-background-alt rounded-2xl p-6 md:p-8 mb-4">
              <p className="text-foreground font-semibold mb-1">
                TPWITS Technologies
              </p>
              <p className="text-foreground-muted text-sm mb-1">
                Email:{" "}
                <a
                  href="mailto:legal@tpwits.com"
                  className="text-primary hover:text-primary-hover transition-colors"
                >
                  legal@tpwits.com
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
