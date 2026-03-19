"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Send,
  Clock,
  MessageSquare,
  CheckCircle,
  AlertCircle,
  Loader2,
} from "lucide-react";
import { useFormSubmit } from "@/hooks/useFormSubmit";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    service: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const { isLoading, isSuccess, error, fieldErrors, submit, reset } =
    useFormSubmit({
      url: "/api/contact",
      onSuccess: () =>
        setFormData({
          service: "",
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        }),
    });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submit(formData);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-20 bg-navy overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-primary/8 blur-[150px]" />
        </div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-block text-sm font-bold uppercase tracking-[0.2em] text-primary mb-4">
              Get in Touch
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Let&apos;s build something great together.
            </h1>
            <p className="text-lg text-white/60 leading-relaxed">
              Tell us about your project and we&apos;ll schedule a free consultation
              with our experts.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-16 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-foreground mb-8">
                Contact information
              </h2>

              <div className="space-y-6 mb-12">
                <a
                  href="mailto:hello@tpwits.com"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-foreground-subtle mb-0.5">Email us</div>
                    <div className="text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                      hello@tpwits.com
                    </div>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-foreground-subtle mb-0.5">
                      Business hours
                    </div>
                    <div className="text-base font-semibold text-foreground">
                      Mon - Fri, 9:00 AM - 6:00 PM EST
                    </div>
                  </div>
                </div>
              </div>

              {/* Offices */}
              <h3 className="text-lg font-bold text-foreground mb-4">Our offices</h3>
              <div className="space-y-4">
                {[
                  { city: "Lahore, Pakistan", address: "Engineering Hub" },
                  { city: "San Francisco, USA", address: "Headquarters" },
                  { city: "Dubai, UAE", address: "Regional Office" },
                ].map((office) => (
                  <div key={office.city} className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <div className="text-sm font-semibold text-foreground">
                        {office.city}
                      </div>
                      <div className="text-xs text-foreground-subtle">{office.address}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-background-alt rounded-2xl p-8 md:p-10">
                <div className="flex items-center gap-3 mb-8">
                  <MessageSquare className="w-5 h-5 text-primary" />
                  <h2 className="text-xl font-bold text-foreground">
                    Tell us about your project
                  </h2>
                </div>

                {isSuccess ? (
                  <div className="rounded-xl border border-green-200 bg-green-50 p-6 text-center">
                    <CheckCircle className="w-10 h-10 text-green-600 mx-auto mb-3" />
                    <h3 className="text-lg font-bold text-foreground mb-1">
                      Message sent!
                    </h3>
                    <p className="text-sm text-foreground-muted mb-4">
                      Thank you for reaching out. A senior solutions architect will respond within 24 hours.
                    </p>
                    <button
                      type="button"
                      onClick={reset}
                      className="text-sm font-semibold text-primary hover:underline"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Honeypot */}
                  <input
                    type="text"
                    name="_honeypot"
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  {error && (
                    <div className="flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4">
                      <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-red-700">{error}</p>
                    </div>
                  )}

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      How can we help you?
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-border text-sm bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                    >
                      <option value="">Select a service</option>
                      <option value="ai">AI & Data Innovation</option>
                      <option value="engineering">
                        Digital Product Engineering
                      </option>
                      <option value="cloud">Cloud & Infrastructure</option>
                      <option value="web3">Web3 & Blockchain</option>
                      <option value="security">Cybersecurity</option>
                      <option value="advisory">Advisory & Strategy</option>
                      <option value="dedicated">Dedicated Teams</option>
                      <option value="other">Other</option>
                    </select>
                    {fieldErrors.service && (
                      <p className="text-xs text-red-600 mt-1">{fieldErrors.service}</p>
                    )}
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-border text-sm bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                        placeholder="John"
                      />
                      {fieldErrors.firstName && (
                        <p className="text-xs text-red-600 mt-1">{fieldErrors.firstName}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-border text-sm bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                        placeholder="Doe"
                      />
                      {fieldErrors.lastName && (
                        <p className="text-xs text-red-600 mt-1">{fieldErrors.lastName}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-border text-sm bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                      placeholder="john@company.com"
                    />
                    {fieldErrors.email && (
                      <p className="text-xs text-red-600 mt-1">{fieldErrors.email}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-border text-sm bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                      placeholder="+1 (234) 567-890"
                    />
                    {fieldErrors.phone && (
                      <p className="text-xs text-red-600 mt-1">{fieldErrors.phone}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Describe your project
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border border-border text-sm bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                      placeholder="Tell us about your project goals, timeline, and any specific requirements..."
                    />
                    {fieldErrors.message && (
                      <p className="text-xs text-red-600 mt-1">{fieldErrors.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-primary text-white rounded-xl font-semibold hover:bg-primary-hover hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Book Free Consultation
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <p className="text-xs text-foreground-subtle mt-4">
                    By submitting this form, you agree to our{" "}
                    <a href="/privacy-policy" className="text-primary hover:underline">
                      Privacy Policy
                    </a>{" "}
                    and{" "}
                    <a href="/terms-of-use" className="text-primary hover:underline">
                      Terms of Use
                    </a>
                    .
                  </p>
                </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
