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
  ArrowRight,
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl shadow-[0_1px_0_rgba(0,0,0,0.05)] py-3"
          : "bg-gradient-to-b from-black/40 to-transparent py-5"
      }`}
    >
      <div className="container-wide flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="relative z-10 flex-shrink-0 group">
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <Image
              src={scrolled ? "/logo-dark.png" : "/logo-white.png"}
              alt="TPWITS"
              width={140}
              height={54}
              className="h-10 w-auto transition-opacity duration-300"
              priority
            />
          </motion.div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navigation.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => setActiveMenu(item.label)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <Link
                href={item.href}
                className={`relative flex items-center gap-1.5 px-4 py-2 text-sm transition-all duration-300 rounded-lg group ${
                  scrolled
                    ? "font-medium text-foreground hover:text-primary"
                    : "font-semibold text-white/90 hover:text-white"
                }`}
              >
                <span className="relative">
                  {item.label}
                  {/* Underline on hover */}
                  <span 
                    className={`absolute -bottom-0.5 left-0 w-0 h-0.5 rounded-full transition-all duration-300 group-hover:w-full ${
                      scrolled ? 'bg-primary' : 'bg-white'
                    }`} 
                  />
                </span>
                {item.children && (
                  <motion.span
                    animate={{ rotate: activeMenu === item.label ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="w-3.5 h-3.5 opacity-70" />
                  </motion.span>
                )}
              </Link>

              {/* Mega Menu for Services */}
              {item.megaMenu && item.children && (
                <AnimatePresence>
                  {activeMenu === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.98 }}
                      transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                      className="absolute top-full left-1/2 -translate-x-1/2 w-[720px] bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 mt-3 overflow-hidden"
                    >
                      {/* Subtle gradient background */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.02] to-transparent pointer-events-none" />
                      
                      <div className="relative grid grid-cols-3 gap-2">
                        {item.children.map((child) => {
                          const Icon = child.icon ? iconMap[child.icon] : null;
                          return (
                            <Link
                              key={child.label}
                              href={child.href}
                              className="flex items-start gap-3 p-3 rounded-xl hover:bg-background-alt transition-all duration-300 group/item"
                            >
                              {Icon && (
                                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover/item:bg-primary/15 group-hover/item:scale-105 transition-all duration-300">
                                  <Icon className="w-5 h-5 text-primary" />
                                </div>
                              )}
                              <div>
                                <div className="text-sm font-semibold text-foreground group-hover/item:text-primary transition-colors flex items-center gap-1">
                                  {child.label}
                                  <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300" />
                                </div>
                                {child.description && (
                                  <div className="text-xs text-foreground-muted mt-0.5 leading-relaxed line-clamp-2">
                                    {child.description}
                                  </div>
                                )}
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                      <div className="relative mt-4 pt-4 border-t border-border/50">
                        <Link
                          href="/services"
                          className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-hover transition-colors group/link"
                        >
                          View all services
                          <ChevronRight className="w-4 h-4 group-hover/link:translate-x-0.5 transition-transform" />
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
                      initial={{ opacity: 0, y: 8, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.98 }}
                      transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                      className="absolute top-full left-0 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 py-2 mt-3 overflow-hidden"
                    >
                      {item.children.map((child, i) => (
                        <motion.div
                          key={child.label}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.03 }}
                        >
                          <Link
                            href={child.href}
                            className="flex items-center justify-between px-5 py-2.5 text-sm text-foreground-muted hover:text-primary hover:bg-background-alt transition-all duration-200 group/item"
                          >
                            {child.label}
                            <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-200" />
                          </Link>
                        </motion.div>
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
            className="lg:hidden relative z-10 p-2 rounded-lg hover:bg-white/10 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <motion.div
              animate={{ rotate: mobileOpen ? 90 : 0 }}
              transition={{ duration: 0.2 }}
            >
              {mobileOpen ? (
                <X className="w-6 h-6 text-foreground" />
              ) : (
                <Menu className={`w-6 h-6 ${scrolled ? "text-foreground" : "text-white"}`} />
              )}
            </motion.div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="fixed inset-0 bg-white z-40 lg:hidden overflow-y-auto pt-20"
          >
            <div className="container-wide py-6">
              {navigation.map((item, index) => (
                <motion.div 
                  key={item.label} 
                  className="border-b border-border/50"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
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
                        <motion.span
                          animate={{ rotate: mobileSubmenu === item.label ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronDown className="w-5 h-5 text-foreground-muted" />
                        </motion.span>
                      </button>
                      <AnimatePresence>
                        {mobileSubmenu === item.label && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="pb-4 pl-4 space-y-1">
                              {item.children.map((child, i) => (
                                <motion.div
                                  key={child.label}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: i * 0.03 }}
                                >
                                  <Link
                                    href={child.href}
                                    className="block py-2.5 text-foreground-muted hover:text-primary text-sm transition-colors"
                                    onClick={() => setMobileOpen(false)}
                                  >
                                    {child.label}
                                  </Link>
                                </motion.div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="block py-4 text-lg font-semibold text-foreground hover:text-primary transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </motion.div>
              ))}
              <motion.div 
                className="mt-8"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Button href="/contact" variant="primary" size="lg" className="w-full">
                  Get in touch
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
