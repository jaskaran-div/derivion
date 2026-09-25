"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mail, Phone, MapPin, Clock } from "lucide-react";

// Clean inline SVGs for Social Logos
function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

function TwitterIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function YoutubeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

export default function Footer() {
  const programmeLinks = [
    { name: "Sprout Literacy (Young Learners 9–11)", href: "/programs/sprout-literacy" },
    { name: "Bloom Literacy (Young Learners 11–14)", href: "/programs/bloom-literacy" },
    { name: "Harvest Literacy (Adult Learners 18+)", href: "/programs/harvest-literacy" },
    { name: "All Programmes Catalogue", href: "/programs" },
  ];

  const quickLinks = [
    { name: "All Programmes", href: "/programs" },
    { name: "About Derivion", href: "/about" },
    { name: "Contact & Admissions", href: "/contact" },
    { name: "Core Learning Pillars", href: "/#pillars" },
    { name: "Curricular Disciplines", href: "/#disciplines" },
    { name: "Why Derivion", href: "/#why-us" },
  ];

  const socialLinks = [
    { name: "LinkedIn", icon: LinkedinIcon, href: "https://www.linkedin.com/company/derivion-international/" },
    { name: "Twitter", icon: TwitterIcon, href: "https://x.com" },
    { name: "Instagram", icon: InstagramIcon, href: "https://www.instagram.com/isftglobal/" },
    { name: "YouTube", icon: YoutubeIcon, href: "www.youtube.com/@DerivionInternational" },
  ];

  return (
    <footer className="w-full bg-[#0A0A0A] text-white pt-16 pb-8 px-4 sm:px-8 border-t border-[#141414]">
      <div className="max-w-7xl mx-auto space-y-12">

        {/* ─── Top Callout CTA Card ─── */}
        {/* <div className="bg-gradient-to-r from-[#141414] via-[#141414] to-[#141414]/80 border border-[#141414]/80 rounded-3xl p-6 sm:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2 max-w-2xl">
            <h3
              className="text-2xl sm:text-3xl tracking-tight text-white"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Build safe financial instincts &amp;{" "}
              <span className="italic font-normal text-[#ED1654]">real market capability</span>
            </h3>
            <p className="text-[#737373] text-xs sm:text-sm font-normal">
              Explore Derivion&apos;s practitioner-crafted curricula for young minds, teenagers, and adult decision-makers.
            </p>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <Link
              href="/programs"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#ED1654] hover:bg-[#d6124b] text-white text-xs sm:text-sm font-semibold transition-all duration-200 shadow-lg active:scale-95"
            >
              <span>Explore Programmes</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div> */}

        {/* ─── Main Footer Content Grid ─── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8 pt-4">

          {/* Brand Info (Col 1) */}
          <div className="sm:col-span-2 md:col-span-4 space-y-4">
            <Link href="/" className="inline-flex items-center gap-3 w-fit">
              <Image
                src="/footer/derivion-logo.png"
                alt="Derivion Logo"
                width={360}
                height={150}
                className="w-[170px] sm:w-[70px] md:w-[100px] lg:w-[160px] h-auto object-contain drop-shadow-[0_0_14px_rgba(237,22,84,0.2)]"
              />
            </Link>

            <p className="text-white text-xs sm:text-sm leading-relaxed max-w-sm">
              Derivion is a forward-looking educational institute empowering learners across financial literacy, digital systems, AI awareness, and risk intelligence.
            </p>

            {/* Quick Stats Pill */}
            <div className="flex items-center gap-4 py-2 text-xs font-semibold text-[#D9D9D9]">
              <div>
                <span className="text-[#A8FF24] font-bold">3</span> Targeted Programmes
              </div>
              <div className="w-1 h-1 rounded-full bg-[#141414]" />
              <div>
                <span className="text-[#A8FF24] font-bold">5</span> Core Literacies
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-1">
              {socialLinks.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <a
                    key={idx}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.name}
                    className="w-9 h-9 rounded-full bg-[#141414] border border-[#141414] hover:border-[#737373] hover:bg-[#141414] text-white hover:text-white flex items-center justify-center transition-colors"
                  >
                    <IconComponent className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links (Col 2) */}
          <div className="space-y-4 md:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#D9D9D9]">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="text-xs sm:text-sm text-white hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programmes (Col 3) */}
          <div className="space-y-4 md:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#D9D9D9]">
              Programmes
            </h4>
            <ul className="space-y-2.5">
              {programmeLinks.map((prog, idx) => (
                <li key={idx}>
                  <Link
                    href={prog.href}
                    className="text-xs sm:text-sm text-white hover:text-white transition-colors block line-clamp-1"
                  >
                    {prog.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details (Col 4) */}
          <div className="sm:col-span-2 md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#D9D9D9]">
              Get in Touch
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-white">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#ED1654] shrink-0 mt-0.5" />
                <span>Plot No 42, Phase IV, Sector 18, Gurugram, Sarhol, Haryana 122015</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#ED1654] shrink-0" />
                <a href="mailto:info@derivion.in" className="hover:text-white transition-colors">
                  info@derivion.in
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#ED1654] shrink-0" />
                <a href="tel:+917056057913" className="hover:text-white transition-colors">
                  +91 70560 57913
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#ED1654] shrink-0 mt-0.5" />
                <span>Office 3A:1, Rathbone House, Dexter House, Croydon CR0 1BT, United Kingdom</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-[#ED1654] shrink-0" />
                <span>Mon-Fri: 10:30am-6:30pm</span>
              </li>
            </ul>
          </div>

        </div>

        {/* ─── Bottom Sub-Footer ─── */}
        <div className="pt-8 border-t border-[#141414] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/70">
          <p>&copy; {new Date().getFullYear()} Derivion. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-[#D9D9D9] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-[#D9D9D9] transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}