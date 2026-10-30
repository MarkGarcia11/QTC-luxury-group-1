"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Button from "./ui/Button";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/#services" },
  { label: "Corporate", href: "/corporate" },
  { label: "Contact", href: "/contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu open
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

  const onDarkHero = isHome && !scrolled;

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
          scrolled
            ? "bg-ivory/85 backdrop-blur-xl shadow-[0_1px_0_0_rgba(33,29,26,0.06)] py-4"
            : "py-6 md:py-8",
          mobileOpen && "bg-transparent backdrop-blur-none"
        )}
      >
        <div className="max-w-[1680px] mx-auto px-6 md:px-12 lg:px-16 flex items-center justify-between">
          {/* Wordmark */}
          <Link href="/" className="flex items-center group">
            <div
              className={cn(
                "flex flex-col leading-none transition-colors duration-500",
                onDarkHero ? "text-ivory" : "text-espresso"
              )}
            >
              <span className="font-serif text-[1.4rem] md:text-[1.65rem] tracking-tight font-medium">
                QTC
              </span>
              <span className="font-accent text-[0.55rem] md:text-[0.6rem] tracking-[0.32em] uppercase mt-0.5 opacity-80">
                Luxury Group
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav
            className={cn(
              "hidden lg:flex items-center gap-10 transition-colors duration-500",
              onDarkHero ? "text-ivory" : "text-espresso"
            )}
          >
            {navLinks.map((link) => {
              const isActive =
                link.href === pathname ||
                (link.href === "/#services" && pathname === "/");
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={cn(
                    "nav-link text-[0.72rem] tracking-[0.22em] uppercase font-medium transition-opacity duration-300 hover:opacity-70",
                    isActive && "active"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-5">
            <Button
              href="/contact"
              variant={onDarkHero ? "outline" : "primary"}
              size="sm"
            >
              Book Your Experience
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={cn(
              "lg:hidden relative z-[60] w-10 h-10 flex items-center justify-center transition-colors duration-300",
              onDarkHero && !mobileOpen ? "text-ivory" : "text-espresso"
            )}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Fullscreen Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-ivory lg:hidden"
          >
            <div className="h-full flex flex-col justify-center px-8 pt-24 pb-12">
              <nav className="flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.7,
                      delay: 0.2 + i * 0.08,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="font-serif text-[2.25rem] leading-tight text-espresso hover:text-bronze transition-colors block py-2"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.7 }}
                className="mt-auto"
              >
                <Button
                  href="/contact"
                  size="lg"
                  className="w-full sm:w-auto"
                  onClick={() => setMobileOpen(false)}
                >
                  Book Your Experience
                </Button>
                <p className="font-accent text-[0.65rem] tracking-[0.24em] uppercase text-taupe mt-8">
                  &ldquo;Elegance in Motion.&rdquo;
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
