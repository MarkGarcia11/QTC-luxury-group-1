"use client";

import Link from "next/link";
import Container from "./ui/Container";

const footerColumns = [
  {
    title: "Explore",
    links: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about" },
      { label: "Our Services", href: "/#services" },
      { label: "Corporate Services", href: "/corporate" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Our Services",
    links: [
      { label: "Black Truck Service", href: "/black-truck-service" },
      { label: "Concierge Care", href: "/concierge-care" },
      { label: "Lifestyle Management", href: "/lifestyle-management" },
    ],
  },
];

const socialLinks = [
  { label: "Instagram", href: "#" },
  { label: "Facebook", href: "#" },
  { label: "TikTok", href: "#" },
  { label: "LinkedIn", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-espresso text-ivory relative overflow-hidden">
      <div className="noise-overlay" />
      <Container size="wide" className="relative z-10 pt-24 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-5">
            <div className="flex flex-col leading-none mb-8">
              <span className="font-serif text-[2.75rem] tracking-tight font-medium text-ivory">
                QTC
              </span>
              <span className="font-accent text-[0.65rem] tracking-[0.32em] uppercase mt-1 text-champagne">
                Luxury Group
              </span>
            </div>
            <p className="font-serif italic text-2xl text-champagne/90 mb-6">
              Elegance in Motion.
            </p>
            <p className="text-[0.85rem] leading-relaxed text-ivory/60 max-w-md font-light">
              Premium transportation, thoughtful concierge care, and
              personalized lifestyle experiences — thoughtfully arranged around
              you.
            </p>
          </div>

          {/* Link Columns */}
          {footerColumns.map((col) => (
            <div key={col.title} className="lg:col-span-2">
              <h4 className="font-accent text-[0.65rem] tracking-[0.28em] uppercase text-champagne mb-6">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="group text-[0.82rem] text-ivory/70 hover:text-ivory transition-colors duration-300 relative inline-block"
                    >
                      <span className="relative">
                        {link.label}
                        <span className="absolute left-0 -bottom-0.5 w-0 h-px bg-champagne transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-full" />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Connect Column */}
          <div className="lg:col-span-3">
            <h4 className="font-accent text-[0.65rem] tracking-[0.28em] uppercase text-champagne mb-6">
              Connect
            </h4>
            <div className="flex flex-col gap-3 mb-8">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="group text-[0.82rem] text-ivory/70 hover:text-champagne transition-colors duration-300 relative inline-block w-fit"
                >
                  <span className="relative">
                    {social.label}
                    <span className="absolute left-0 -bottom-0.5 w-0 h-px bg-champagne transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-full" />
                  </span>
                </Link>
              ))}
            </div>
            <p className="text-[0.75rem] text-ivory/50 leading-relaxed">
              Reach us through our inquiry form for questions and arrangements.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-8 border-t border-ivory/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-[0.7rem] tracking-wide text-ivory/40 font-light">
            © {new Date().getFullYear()} QTC Luxury Group. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            <Link
              href="#"
              className="text-[0.7rem] tracking-wide text-ivory/40 hover:text-ivory/80 transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-[0.7rem] tracking-wide text-ivory/40 hover:text-ivory/80 transition-colors duration-300"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
