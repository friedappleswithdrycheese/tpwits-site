import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/data/services";
import { industries } from "@/data/company";

export const metadata: Metadata = {
  title: "Sitemap | TPWITS",
  description:
    "Navigate the TPWITS website. Find links to all our pages, services, industries, company information, and resources.",
};

const mainPages = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "About Us", href: "/about" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Blog", href: "/blog" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

const companyPages = [
  { label: "About Us", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

const resourcePages = [
  { label: "Case Studies", href: "/case-studies" },
  { label: "Blog", href: "/blog" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Use", href: "/terms-of-use" },
];

export default function SitemapPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-16 overflow-hidden bg-navy">
        <div className="container-custom relative z-10">
          <div className="max-w-3xl animate-fade-in-up">
            <span className="inline-block text-sm font-bold uppercase tracking-[0.2em] text-primary mb-4">
              Navigation
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4">
              Sitemap
            </h1>
            <p className="text-lg text-white/60 leading-relaxed">
              A complete directory of all pages on the TPWITS website.
            </p>
          </div>
        </div>
      </section>

      {/* Sitemap Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16">
            {/* Main Pages */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-[0.15em] text-primary mb-6">
                Main Pages
              </h2>
              <ul className="space-y-3">
                {mainPages.map((page) => (
                  <li key={page.href}>
                    <Link
                      href={page.href}
                      className="text-foreground font-medium hover:text-primary transition-colors"
                    >
                      {page.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-[0.15em] text-primary mb-6">
                Services
              </h2>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/services"
                    className="text-foreground font-semibold hover:text-primary transition-colors"
                  >
                    All Services
                  </Link>
                </li>
                {services.map((service) => (
                  <li key={service.slug} className="pl-4">
                    <Link
                      href={`/services/${service.slug}`}
                      className="text-foreground-muted hover:text-primary transition-colors text-sm"
                    >
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Industries */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-[0.15em] text-primary mb-6">
                Industries
              </h2>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/industries"
                    className="text-foreground font-semibold hover:text-primary transition-colors"
                  >
                    All Industries
                  </Link>
                </li>
                {industries.map((industry) => (
                  <li key={industry.slug} className="pl-4">
                    <Link
                      href={`/industries/${industry.slug}`}
                      className="text-foreground-muted hover:text-primary transition-colors text-sm"
                    >
                      {industry.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-[0.15em] text-primary mb-6">
                Company
              </h2>
              <ul className="space-y-3">
                {companyPages.map((page) => (
                  <li key={page.href}>
                    <Link
                      href={page.href}
                      className="text-foreground font-medium hover:text-primary transition-colors"
                    >
                      {page.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <h2 className="text-xs font-bold uppercase tracking-[0.15em] text-primary mb-6 mt-12">
                Resources
              </h2>
              <ul className="space-y-3">
                {resourcePages.map((page) => (
                  <li key={page.href}>
                    <Link
                      href={page.href}
                      className="text-foreground font-medium hover:text-primary transition-colors"
                    >
                      {page.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
