"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { services } from "@/data/services";
import { Linkedin, Twitter, Facebook, Mail, Phone, MapPin, ArrowRight, ArrowUpRight } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Footer() {
  return (
    <footer className="bg-navy text-white relative overflow-hidden">
      {/* Background gradient mesh */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/3 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
      </div>

      {/* Pre-footer CTA */}
      <div className="border-b border-white/[0.06] relative">
        <div className="container-wide py-12 md:py-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col lg:flex-row items-center justify-between gap-8 p-8 md:p-10 rounded-2xl bg-gradient-to-br from-white/[0.04] to-transparent border border-white/[0.06]"
          >
            <div className="text-center lg:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 text-balance">
                Ready to transform your business?
              </h3>
              <p className="text-base text-white/50 max-w-lg">
                Let&apos;s discuss how we can help you achieve your technology goals.
              </p>
            </div>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary-hover text-white font-semibold rounded-xl transition-all duration-300 whitespace-nowrap hover:shadow-[0_8px_30px_rgba(232,113,58,0.3)] hover:-translate-y-0.5"
            >
              Get started
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-wide py-16 md:py-20 relative">
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8"
        >
          {/* Brand Column */}
          <motion.div variants={fadeInUp} className="lg:col-span-4">
            <Link href="/" className="inline-block mb-6 group">
              <Image
                src="/logo-white.png"
                alt="TPWITS"
                width={140}
                height={54}
                className="h-10 w-auto opacity-90 group-hover:opacity-100 transition-opacity"
              />
            </Link>
            <p className="text-white/45 text-sm leading-relaxed mb-8 max-w-sm">
              TPWITS is an award-winning global technology partner helping
              businesses modernize systems, integrate AI, and build custom
              solutions that scale.
            </p>

            <div className="space-y-3 mb-8">
              <a
                href="mailto:hello@tpwits.com"
                className="group flex items-center gap-3 text-sm text-white/50 hover:text-primary transition-colors"
              >
                <span className="w-8 h-8 rounded-lg bg-white/[0.04] flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-4 h-4" />
                </span>
                hello@tpwits.com
              </a>
              <a
                href="tel:+1234567890"
                className="group flex items-center gap-3 text-sm text-white/50 hover:text-primary transition-colors"
              >
                <span className="w-8 h-8 rounded-lg bg-white/[0.04] flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-4 h-4" />
                </span>
                +1 (234) 567-890
              </a>
            </div>

            <div className="flex gap-2">
              {[
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                { icon: Twitter, href: "#", label: "Twitter" },
                { icon: Facebook, href: "#", label: "Facebook" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded-xl bg-white/[0.04] flex items-center justify-center text-white/60 hover:bg-primary hover:text-white hover:scale-105 transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Services Links */}
          <motion.div variants={fadeInUp} className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white/70 mb-6">
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="group inline-flex items-center gap-1 text-sm text-white/45 hover:text-primary transition-colors"
                  >
                    {service.title}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company Links */}
          <motion.div variants={fadeInUp} className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white/70 mb-6">
              Company
            </h4>
            <ul className="space-y-3">
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
                    className="group inline-flex items-center gap-1 text-sm text-white/45 hover:text-primary transition-colors"
                  >
                    {label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Offices */}
          <motion.div variants={fadeInUp} className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white/70 mb-6">
              Global Offices
            </h4>
            <div className="space-y-5">
              {[
                {
                  city: "San Francisco",
                  country: "USA",
                  address: "Innovation Hub, Suite 450, San Francisco, CA 94105",
                },
                {
                  city: "Lahore",
                  country: "Pakistan",
                  address: "TPWITS Tower, Gulberg III, Lahore 54000",
                },
                {
                  city: "Dubai",
                  country: "UAE",
                  address: "Business Bay, Executive Tower, Dubai",
                },
                {
                  city: "London",
                  country: "UK",
                  address: "15 Finsbury Square, London EC2A 1AH",
                },
              ].map(({ city, country, address }) => (
                <div key={city} className="group">
                  <h5 className="text-sm font-semibold text-white/80 mb-1 group-hover:text-primary transition-colors">
                    {country}
                  </h5>
                  <p className="text-xs text-white/35 leading-relaxed flex items-start gap-2">
                    <MapPin className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-white/25" />
                    {address}
                  </p>
                </div>
              ))}
            </div>

            {/* Newsletter */}
            <div className="mt-10 p-5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
              <h5 className="text-sm font-semibold text-white mb-3">
                Subscribe to our newsletter
              </h5>
              <div className="flex gap-2">
                <label htmlFor="newsletter-email" className="sr-only">Email address</label>
                <input
                  type="email"
                  id="newsletter-email"
                  placeholder="Work email"
                  className="flex-1 min-w-0 px-4 py-3 bg-white/[0.04] border border-white/[0.08] rounded-lg text-sm text-white placeholder-white/30 focus:outline-none focus:border-primary/50 focus:bg-white/[0.06] transition-all"
                />
                <button className="flex-shrink-0 px-4 py-3 bg-primary text-white rounded-lg text-sm font-semibold hover:bg-primary-hover transition-all hover:shadow-[0_4px_20px_rgba(232,113,58,0.3)]">
                  Subscribe
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/[0.06] relative">
        <div className="container-wide py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/35">
            &copy; {new Date().getFullYear()} TPWITS Technologies. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            <Link
              href="/privacy-policy"
              className="text-xs text-white/35 hover:text-white/60 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-use"
              className="text-xs text-white/35 hover:text-white/60 transition-colors"
            >
              Terms of Use
            </Link>
            <Link
              href="/sitemap"
              className="text-xs text-white/35 hover:text-white/60 transition-colors"
            >
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
