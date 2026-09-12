"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";

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
    { name: "Trading & Markets", href: "#" },
    { name: "Financial Markets & Derivatives", href: "#" },
    { name: "Technical Analysis & Charting", href: "#" },
    { name: "Algorithmic Trading", href: "#" },
    { name: "Multi-Asset Risk Management", href: "#" },
    { name: "Behavioral & Psychology", href: "#" },
  ];

  const quickLinks = [
    { name: "Our Programmes", href: "#" },
    { name: "Our Alumni", href: "#" },
    { name: "Derivion Masters", href: "#" },
    { name: "Why Derivion", href: "#" },
    { name: "Placements Report", href: "#" },
  ];

  const socialLinks = [
    { name: "LinkedIn", icon: LinkedinIcon, href: "#" },
    { name: "Twitter", icon: TwitterIcon, href: "#" },
    { name: "Instagram", icon: InstagramIcon, href: "#" },
    { name: "YouTube", icon: YoutubeIcon, href: "#" },
  ];

  return (
    <footer className="w-full bg-zinc-950 text-white pt-16 pb-8 px-4 sm:px-8 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* ─── Top Callout CTA Card ─── */}
        <div className="bg-gradient-to-r from-zinc-900 via-zinc-900 to-zinc-900/80 border border-zinc-800 rounded-3xl p-6 sm:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2 max-w-2xl">
            <h3 className="text-2xl sm:text-3xl font-serif tracking-tight text-white">
              Ready to accelerate your career in <span className="italic font-normal text-[#E85C33]">markets & leadership</span>?
            </h3>
            <p className="text-zinc-400 text-xs sm:text-sm font-normal">
              Join our upcoming cohort and learn directly from top practitioners and founders.
            </p>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#E85C33] hover:bg-[#d44f28] text-white text-xs sm:text-sm font-semibold transition-all duration-200 shadow-lg active:scale-95">
              <span>Apply Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* ─── Main Footer Content Grid ─── */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-4">
          
          {/* Brand Info (Col 1) */}
          <div className="md:col-span-4 space-y-2">
            <div className="flex items-center gap-3">
              <Image
                src="/footer/derivion-logo.png"
                alt="Derivion Logo"
                width={140}
                height={100}
                className="object-cover"
              />
              {/* <span className="text-xl font-bold tracking-tight text-white">
                Derivion
              </span> */}
            </div>

            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              An AI-first, practitioner-led institute empowering the next generation of traders, risk managers, and market leaders.
            </p>

            {/* Quick Stats Pill */}
            <div className="flex items-center gap-4 py-2 text-xs font-semibold text-zinc-300">
              <div>
                <span className="text-[#E85C33] font-bold">2.8X</span> Avg CTC Jump
              </div>
              <div className="w-1 h-1 rounded-full bg-zinc-700" />
              <div>
                <span className="text-[#E85C33] font-bold">500+</span> Partners
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <a
                    key={idx}
                    href={item.href}
                    aria-label={item.name}
                    className="w-9 h-9 rounded-full bg-zinc-900 border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-800 text-zinc-400 hover:text-white flex items-center justify-center transition-colors"
                  >
                    <IconComponent className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links (Col 2) */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-200">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="text-xs sm:text-sm text-zinc-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programmes (Col 3) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-200">
              Programmes
            </h4>
            <ul className="space-y-2.5">
              {programmeLinks.map((prog, idx) => (
                <li key={idx}>
                  <Link
                    href={prog.href}
                    className="text-xs sm:text-sm text-zinc-400 hover:text-white transition-colors block line-clamp-1"
                  >
                    {prog.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details (Col 4) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-200">
              Get in Touch
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-zinc-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#E85C33] shrink-0 mt-0.5" />
                <span>Derivion Campus, Institutional Area, Sector 44, Gurugram</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#E85C33] shrink-0" />
                <span>admissions@derivion.edu</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#E85C33] shrink-0" />
                <span>+91 (0) 124 456 7890</span>
              </li>
            </ul>
          </div>

        </div>

        {/* ─── Bottom Sub-Footer ─── */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>&copy; {new Date().getFullYear()} Derivion Institute. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-zinc-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-zinc-300 transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-zinc-300 transition-colors">
              Cookie Settings
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}