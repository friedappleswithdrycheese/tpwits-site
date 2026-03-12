"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/components/ui/Button";
import { Send } from "lucide-react";

const testimonials = [
  {
    quote:
      "We migrated 140+ microservices to a cloud-native architecture in 18 weeks — on time and 12% under budget. TPWITS brought the senior architects other firms only promise in the pitch deck.",
    name: "Sarah Mitchell",
    title: "CTO, FinEdge Solutions",
  },
  {
    quote:
      "Their AI team automated 83% of our clinical document review pipeline, saving 6,200 staff hours per quarter. The technical depth of their engineers set them apart from every vendor we evaluated.",
    name: "James Rodriguez",
    title: "VP of Engineering, MedCore Health",
  },
  {
    quote:
      "TPWITS embedded a 20-person squad that delivered our omnichannel platform in five months. Revenue per digital customer is up 31% since launch — they understood the business case, not just the code.",
    name: "Amina Khalid",
    title: "Director of Digital, RetailNova",
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
  const [activeIndex, setActiveIndex] = useState(0);
  const [formData, setFormData] = useState({
    service: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    description: "",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
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
    // Form submission logic
    console.log("Form submitted:", formData);
  };

  const inputClasses =
    "w-full border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-foreground-subtle bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-colors duration-200";

  return (
    <section className="section-padding relative bg-white">
      <div className="container-custom">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight mb-4">
            Power your next digital move.
          </h2>
          <p className="text-lg text-foreground-muted max-w-2xl mx-auto">
            Share your challenge. A senior solutions architect will respond within 24 hours with a scoped proposal and team recommendation.
          </p>
        </motion.div>

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
                Join 500+ enterprises that trust TPWITS
              </p>
            </div>

            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-8">
              What Our Clients Say
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
                    &ldquo;{testimonials[activeIndex].quote}&rdquo;
                  </blockquote>
                  <div>
                    <p className="font-semibold text-foreground">
                      {testimonials[activeIndex].name}
                    </p>
                    <p className="text-sm text-foreground-subtle">
                      {testimonials[activeIndex].title}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Dots indicator */}
            <div className="flex gap-2 mt-8">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    i === activeIndex
                      ? "bg-gray-900 w-8"
                      : "w-2.5 bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`View testimonial ${i + 1}`}
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
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-border p-8 md:p-10 shadow-sm"
            >
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
              <Button type="submit" variant="primary" className="w-full">
                Book Free Consultation
                <Send className="w-4 h-4 ml-2" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
