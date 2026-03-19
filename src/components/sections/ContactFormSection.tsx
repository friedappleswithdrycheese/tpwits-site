"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Button from "@/components/ui/Button";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { useFormSubmit } from "@/hooks/useFormSubmit";

const valueProps = [
  {
    quote:
      "Every engagement starts with a clear scope, timeline, and success criteria.",
    name: "Our Promise",
    title: "",
  },
  {
    quote:
      "Our engineers work as an extension of your team — your tools, your workflow.",
    name: "Embedded Teams",
    title: "",
  },
  {
    quote:
      "We measure success by business outcomes, not billable hours.",
    name: "Outcome-Focused",
    title: "",
  },
];

const serviceOptions = [
  "Select a service",
  "AI & Data Innovation",
  "Cloud & DevOps",
  "Custom Software Development",
  "Digital Transformation",
  "Staff Augmentation",
  "Other",
];

export default function ContactFormSection() {
  const sectionAnim = useScrollAnimation("contact");
  const [activeIndex, setActiveIndex] = useState(0);
  const [formData, setFormData] = useState({
    service: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    description: "",
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
          description: "",
        }),
    });

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % valueProps.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

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

  const inputClasses =
    "w-full border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-foreground-subtle bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-colors duration-200";

  return (
    <section className="section-padding relative bg-white">
      <motion.div {...sectionAnim} className="container-custom">
        {/* Section heading */}
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight mb-4">
            Power your next digital move.
          </h2>
          <p className="text-lg text-foreground-muted max-w-2xl mx-auto">
            Share your challenge. A senior solutions architect will respond within 24 hours with a scoped proposal and team recommendation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Left — Rotating testimonials */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.5 }}
            className="hidden lg:flex flex-col justify-center h-full"
          >
            <div className="mb-12">
              <p className="text-gray-500 text-sm">
                Why teams choose to work with us
              </p>
            </div>

            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-8">
              Why Work With Us
            </p>

            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className=""
                >
                  <blockquote className="text-lg md:text-xl font-medium text-foreground leading-relaxed mb-8">
                    &ldquo;{valueProps[activeIndex].quote}&rdquo;
                  </blockquote>
                  <div>
                    <p className="font-semibold text-foreground">
                      {valueProps[activeIndex].name}
                    </p>
                    <p className="text-sm text-foreground-subtle">
                      {valueProps[activeIndex].title}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Dots indicator */}
            <div className="flex gap-2 mt-8">
              {valueProps.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    i === activeIndex
                      ? "bg-gray-900 w-8"
                      : "w-2.5 bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`View value prop ${i + 1}`}
                />
              ))}
            </div>
          </motion.div>

          {/* Right — Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {isSuccess ? (
              <div className="rounded-2xl border border-green-200 bg-green-50 p-8 md:p-10 text-center">
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
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-border p-8 md:p-10 shadow-sm"
            >
              {/* Honeypot */}
              <input
                type="text"
                name="_honeypot"
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              {error && (
                <div className="flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4 mb-5">
                  <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-red-700">{error}</p>
                </div>
              )}

              {/* Service dropdown */}
              <div className="mb-5">
                <label
                  htmlFor="service"
                  className="block text-sm font-medium text-foreground mb-1.5"
                >
                  Service you&apos;re interested in
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className={inputClasses}
                >
                  {serviceOptions.map((opt) => (
                    <option key={opt} value={opt === "Select a service" ? "" : opt}>
                      {opt}
                    </option>
                  ))}
                </select>
                {fieldErrors.service && (
                  <p className="text-xs text-red-600 mt-1">{fieldErrors.service}</p>
                )}
              </div>

              {/* Name row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-foreground mb-1.5"
                  >
                    First name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="John"
                    className={inputClasses}
                    required
                  />
                  {fieldErrors.firstName && (
                    <p className="text-xs text-red-600 mt-1">{fieldErrors.firstName}</p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-foreground mb-1.5"
                  >
                    Last name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Doe"
                    className={inputClasses}
                    required
                  />
                  {fieldErrors.lastName && (
                    <p className="text-xs text-red-600 mt-1">{fieldErrors.lastName}</p>
                  )}
                </div>
              </div>

              {/* Email */}
              <div className="mb-5">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-foreground mb-1.5"
                >
                  Work email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@company.com"
                  className={inputClasses}
                  required
                />
                {fieldErrors.email && (
                  <p className="text-xs text-red-600 mt-1">{fieldErrors.email}</p>
                )}
              </div>

              {/* Phone */}
              <div className="mb-5">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-foreground mb-1.5"
                >
                  Phone number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 (555) 000-0000"
                  className={inputClasses}
                />
                {fieldErrors.phone && (
                  <p className="text-xs text-red-600 mt-1">{fieldErrors.phone}</p>
                )}
              </div>

              {/* Description */}
              <div className="mb-6">
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-foreground mb-1.5"
                >
                  Tell us about your project
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Brief description of your project or challenge..."
                  rows={4}
                  className={`${inputClasses} resize-none`}
                />
                {fieldErrors.description && (
                  <p className="text-xs text-red-600 mt-1">{fieldErrors.description}</p>
                )}
              </div>

              {/* Consent */}
              <div className="space-y-3 mb-6">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    className="mt-1 w-4 h-4 rounded border-border text-primary focus:ring-primary/20"
                  />
                  <span className="text-xs text-foreground-muted leading-relaxed">
                    I agree to receive marketing communications from TPWITS. You can unsubscribe at any time.
                  </span>
                </label>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    required
                    className="mt-1 w-4 h-4 rounded border-border text-primary focus:ring-primary/20"
                  />
                  <span className="text-xs text-foreground-muted leading-relaxed">
                    I agree to the{" "}
                    <a href="/terms-of-use" className="text-primary hover:underline">Terms of Use</a>
                    {" "}and{" "}
                    <a href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</a>.
                  </span>
                </label>
              </div>

              {/* Submit */}
              <Button type="submit" variant="primary" className="w-full" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Book Free Consultation
                    <Send className="w-4 h-4 ml-2" />
                  </>
                )}
              </Button>
            </form>
            )}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
