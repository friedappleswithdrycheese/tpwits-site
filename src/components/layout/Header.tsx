"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { navigation } from "@/data/navigation";
import {
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  Brain,
  Code2,
  Cloud,
  Blocks,
  Shield,
  Compass,
  Gauge,
  Puzzle,
  Rocket,
} from "lucide-react";
import Button from "@/components/ui/Button";

const iconMap: Record<string, React.ElementType> = {
  Brain,
  Code2,
  Cloud,
  Blocks,
  Shield,
  Compass,
  Gauge,
  Puzzle,
  Rocket,
};

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm py-3"
          : "bg-gradient-to-b from-black/30 to-transparent py-5"
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="relative z-10 flex-shrink-0">
          <Image
            src={scrolled ? "/logo-dark.png" : "/logo-white.png"}
            alt="TPWITS"
            width={140}
            height={54}
            className="h-10 w-auto"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-0.5">
          {navigation.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => setActiveMenu(item.label)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <Link
                href={item.href}
                className={`flex items-center gap-1 px-4 py-2 text-sm transition-colors duration-200 rounded-lg ${
                  scrolled
                    ? "font-medium text-foreground hover:text-primary"
                    : "font-semibold text-white hover:text-white/80"
                }`}
              >
                {item.label}
                {item.children && (
                  <ChevronDown className="w-3.5 h-3.5 opacity-80" />
                )}
              </Link>

              {/* Mega Menu for Services */}
              {item.megaMenu && item.children && (
                <AnimatePresence>
                  {activeMenu === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 w-[700px] bg-white rounded-2xl shadow-2xl border border-border p-6 mt-2 overflow-hidden"
                    >
                      <div className="grid grid-cols-3 gap-2">
                        {item.children.map((child) => {
                          const Icon = child.icon
                            ? iconMap[child.icon]
                            : null;
                          return (
                            <Link
                              key={child.label}
                              href={child.href}
                              className="flex items-start gap-3 p-3 rounded-xl hover:bg-background-alt transition-colors group"
                            >
                              {Icon && (
                                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                                  <Icon className="w-[18px] h-[18px] text-primary" />
                                </div>
                              )}
                              <div>
                                <div className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                                  {child.label}
                                </div>
                                {child.description && (
                                  <div className="text-xs text-foreground-subtle mt-0.5 leading-relaxed">
                                    {child.description}
                                  </div>
                                )}
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                      <div className="mt-4 pt-4 border-t border-border">
                        <Link
                          href="/services"
                          className="text-sm font-semibold text-primary hover:text-primary-hover flex items-center gap-1 transition-colors"
                        >
                          View all services
                          <ChevronRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}

              {/* Dropdown for other items */}
              {!item.megaMenu && item.children && (
                <AnimatePresence>
                  {activeMenu === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 w-64 bg-white rounded-xl shadow-2xl border border-border py-2 mt-2 overflow-hidden"
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block px-5 py-2.5 text-sm text-foreground-muted hover:text-primary hover:bg-background-alt transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </nav>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-3">
          <div className="hidden lg:block">
            <Button href="/contact" variant={scrolled ? "primary" : "white"} size="sm">
              Get in touch
            </Button>
          </div>

          <button
            className="lg:hidden relative z-10 p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className={`w-6 h-6 ${scrolled ? "text-foreground" : "text-white"}`} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-white z-40 lg:hidden overflow-y-auto pt-20"
          >
            <div className="container-custom py-6">
              {navigation.map((item) => (
                <div key={item.label} className="border-b border-border">
                  {item.children ? (
                    <>
                      <button
                        onClick={() =>
                          setMobileSubmenu(
                            mobileSubmenu === item.label ? null : item.label
                          )
                        }
                        className="flex items-center justify-between w-full py-4 text-lg font-semibold text-foreground"
                      >
                        {item.label}
                        <ChevronDown
                          className={`w-5 h-5 transition-transform ${
                            mobileSubmenu === item.label ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {mobileSubmenu === item.label && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="pb-4 pl-4 space-y-1">
                              {item.children.map((child) => (
                                <Link
                                  key={child.label}
                                  href={child.href}
                                  className="block py-2 text-foreground-muted hover:text-primary text-sm"
                                  onClick={() => setMobileOpen(false)}
                                >
                                  {child.label}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="block py-4 text-lg font-semibold text-foreground"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              <div className="mt-6">
                <Button href="/contact" variant="primary" size="lg" className="w-full">
                  Get in touch
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
