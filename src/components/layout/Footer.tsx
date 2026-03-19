"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { services } from "@/data/services";
import { Mail, MapPin, Loader2, CheckCircle } from "lucide-react";
import { useFormSubmit } from "@/hooks/useFormSubmit";

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const {
    isLoading: nlLoading,
    isSuccess: nlSuccess,
    error: nlError,
    submit: nlSubmit,
    reset: nlReset,
  } = useFormSubmit({
    url: "/api/newsletter",
    onSuccess: () => setNewsletterEmail(""),
  });

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    nlSubmit({ email: newsletterEmail });
  };

  return (
    <footer className="bg-navy text-white">
      {/* Pre-footer CTA */}
      <div className="border-b border-white/10">
        <div className="container-custom py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
              Ready to transform your business?
            </h3>
            <p className="text-sm text-white/50">
              Let&apos;s discuss how we can help you achieve your technology goals.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary hover:bg-primary-hover text-white font-semibold rounded-xl transition-colors duration-300 whitespace-nowrap"
          >
            Get started
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link href="/">
              <Image
                src="/logo-white.png"
                alt="TPWITS"
                width={140}
                height={54}
                className="h-10 w-auto mb-6"
              />
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-6 max-w-sm">
              TPWITS is an award-winning global technology partner helping
              businesses modernize systems, integrate AI, and build custom
              solutions that scale.
            </p>

            <div className="space-y-3 mb-6">
              <a
                href="mailto:hello@tpwits.com"
                className="flex items-center gap-3 text-sm text-white/50 hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                hello@tpwits.com
              </a>
            </div>

            {/* TODO: Add real social media links when accounts are created */}
          </div>

          {/* Services Links */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold uppercase tracking-[0.15em] text-white mb-5">
              Services
            </h4>
            <ul className="space-y-2.5">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-sm text-white/50 hover:text-primary transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold uppercase tracking-[0.15em] text-white mb-5">
              Company
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "About Us", href: "/about" },
                { label: "Careers", href: "/careers" },
                { label: "Case Studies", href: "/case-studies" },
                { label: "Blog", href: "/blog" },
                { label: "Contact", href: "/contact" },
                { label: "Privacy Policy", href: "/privacy-policy" },
                { label: "Terms of Use", href: "/terms-of-use" },
              ].map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-white/50 hover:text-primary transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Offices */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold uppercase tracking-[0.15em] text-white mb-5">
              Global Offices
            </h4>
            <div className="space-y-5">
              {[
                { city: "Lahore", country: "Pakistan" },
                { city: "San Francisco", country: "USA" },
                { city: "Dubai", country: "UAE" },
                { city: "London", country: "UK" },
              ].map(({ city, country }) => (
                <div key={city}>
                  <h5 className="text-sm font-semibold text-white mb-1">
                    {country}
                  </h5>
                  <p className="text-xs text-white/40 leading-relaxed flex items-start gap-2">
                    <MapPin className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" />
                    {city}, {country}
                  </p>
                </div>
              ))}
            </div>

            {/* Newsletter */}
            <div className="mt-8">
              <h5 className="text-sm font-semibold text-white mb-3">
                Subscribe to our newsletter
              </h5>
              {nlSuccess ? (
                <div className="flex items-center gap-2 text-sm text-green-400">
                  <CheckCircle className="w-4 h-4" />
                  <span>Subscribed!</span>
                  <button
                    type="button"
                    onClick={nlReset}
                    className="text-xs text-white/50 hover:text-white/80 ml-2 underline"
                  >
                    Subscribe another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit}>
                  {/* Honeypot */}
                  <input
                    type="text"
                    name="_honeypot"
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                  <div className="flex gap-2">
                    <label htmlFor="newsletter-email" className="sr-only">Email address</label>
                    <input
                      type="email"
                      id="newsletter-email"
                      placeholder="Work email"
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      required
                      className="flex-1 min-w-0 px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-sm text-white placeholder-white/40 focus:outline-none focus:border-primary transition-colors"
                    />
                    <button
                      type="submit"
                      disabled={nlLoading}
                      className="flex-shrink-0 px-4 py-2.5 bg-primary text-white rounded-lg text-sm font-semibold hover:bg-primary-hover transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {nlLoading ? (
                        <Loader2 className="w-4 h-4 animate-spin" />
                      ) : (
                        "Subscribe"
                      )}
                    </button>
                  </div>
                  {nlError && (
                    <p className="text-xs text-red-400 mt-2">{nlError}</p>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/45">
            &copy; {new Date().getFullYear()} TPWITS Technologies. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy-policy"
              className="text-xs text-white/45 hover:text-white/60 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-use"
              className="text-xs text-white/45 hover:text-white/60 transition-colors"
            >
              Terms of Use
            </Link>
            <Link
              href="/site-map"
              className="text-xs text-white/45 hover:text-white/60 transition-colors"
            >
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
