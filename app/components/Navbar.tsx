"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { User, Menu, X, ChevronDown, ChevronRight, BookOpen } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileCategoryOpen, setMobileCategoryOpen] = useState<string | null>(null);

  // Nested structure for Programmes -> Categories -> Sub-Programmes
  const programmesData = [
    {
      category: "Kids",
      subItems: [
        { name: "Sprout Literacy (Ages 9–11)", href: "/programs/sprout-literacy" },
        { name: "Bloom Literacy (Ages 11–14)", href: "/programs/bloom-literacy" },
      ],
    },
    {
      category: "Adults",
      subItems: [
        { name: "Harvest Literacy (Adults 18+)", href: "/programs/harvest-literacy" },
      ],
    },
  ];

  const isHomeActive = pathname === "/";
  const isProgrammesActive = pathname.startsWith("/programs");
  const isAboutActive = pathname === "/about";
  const isContactActive = pathname === "/contact";

  return (
    <header className="w-full bg-white/70 backdrop-blur-md border-b border-[#D9D9D9]/60 py-4 px-4 sm:px-8 mx-auto sticky top-0 z-50">
      <nav className="flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5 z-20 hover:opacity-90 transition-opacity">
            <Image
              src="/Home/derivion-logo.png"
              alt="Derivion Logo"
              width={60}
              height={60}
              className="h-10 sm:h-12 w-auto object-contain"
              priority
            />
        </Link>

        {/* Center Pill Navigation Menu (Desktop) */}
        <div className="hidden md:flex items-center gap-1.5 bg-[#D9D9D9]/30 p-1.5 rounded-full border border-[#D9D9D9]/70 shadow-inner">
          {/* Home Link */}
          <Link
            href="/"
            className={`px-5 py-2 text-xs sm:text-sm font-medium rounded-full transition-all duration-200 ${
              isHomeActive
                ? "bg-[#000000] text-white shadow-md"
                : "text-[#737373] hover:text-[#000000] hover:bg-[#D9D9D9]/50"
            }`}
          >
            Home
          </Link>

          {/* Programmes Dropdown Menu */}
          <div className="relative group">
            <Link
              href="/programs"
              className={`flex items-center gap-1.5 px-5 py-2 text-xs sm:text-sm font-medium rounded-full transition-all duration-200 ${
                isProgrammesActive
                  ? "bg-[#000000] text-white shadow-md"
                  : "text-[#737373] hover:text-[#000000] hover:bg-[#D9D9D9]/50"
              }`}
            >
              <span>Programmes</span>
              <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180" />
            </Link>

            {/* Level 1 Dropdown: Categories */}
            <div className="absolute left-0 top-full pt-3 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 z-50">
              <div className="bg-white border border-[#D9D9D9] rounded-2xl shadow-xl p-2 w-64 space-y-1">
                <Link
                  href="/programs"
                  className="flex items-center justify-between px-4 py-2 rounded-xl text-xs font-bold text-[#ED1654] hover:bg-[#ED1654]/10 transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Browse All Programmes</span>
                  </span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
                <div className="border-t border-[#D9D9D9]/60 my-1" />

                {programmesData.map((cat, idx) => (
                  <div key={idx} className="relative group/sub">
                    {/* Category Item */}
                    <div className="flex items-center justify-between px-4 py-2.5 rounded-xl text-xs sm:text-sm text-[#141414] font-medium hover:bg-[#D9D9D9]/40 hover:text-[#000000] cursor-pointer transition-colors">
                      <span>{cat.category}</span>
                      <ChevronRight className="w-3.5 h-3.5 text-[#737373]" />
                    </div>

                    {/* Level 2 Sub-Dropdown: Opens on Hovering Category */}
                    <div className="absolute left-full top-0 pl-2 opacity-0 -translate-x-2 pointer-events-none group-hover/sub:opacity-100 group-hover/sub:translate-x-0 group-hover/sub:pointer-events-auto transition-all duration-200 z-50">
                      <div className="bg-white border border-[#D9D9D9] rounded-2xl shadow-xl p-2 w-64 space-y-1">
                        {cat.subItems.map((sub, sIdx) => (
                          <Link
                            key={sIdx}
                            href={sub.href}
                            className="block px-4 py-2.5 rounded-xl text-xs sm:text-sm text-[#737373] hover:text-[#000000] hover:bg-[#D9D9D9]/40 transition-colors"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* About Us Link */}
          <Link
            href="/about"
            className={`px-5 py-2 text-xs sm:text-sm font-medium rounded-full transition-all duration-200 ${
              isAboutActive
                ? "bg-[#000000] text-white shadow-md"
                : "text-[#737373] hover:text-[#000000] hover:bg-[#D9D9D9]/50"
            }`}
          >
            About Us
          </Link>
        </div>

        {/* Right CTA Button */}
        <div className="hidden sm:flex items-center z-20">
          <Link
            href="/contact"
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 shadow-sm active:scale-95 ${
              isContactActive
                ? "bg-[#ED1654] text-white"
                : "bg-[#000000] hover:bg-[#141414] text-white"
            }`}
          >
            <User className="w-4 h-4 text-[#D9D9D9]" />
            <span>Contact us</span>
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-[#141414] hover:bg-[#D9D9D9]/40"
          aria-label="Toggle navigation"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 p-4 bg-[#D9D9D9]/20 rounded-2xl border border-[#D9D9D9]/60 space-y-2">
          {/* Mobile Home */}
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className={`block w-full text-left px-4 py-2.5 text-sm font-medium rounded-xl transition-colors ${
              isHomeActive ? "bg-[#000000] text-white" : "text-[#737373] hover:bg-[#D9D9D9]/60"
            }`}
          >
            Home
          </Link>

          {/* Mobile Programmes Nested Accordion */}
          <div className="bg-white/70 rounded-xl border border-[#D9D9D9]/80 p-2 space-y-1">
            <Link
              href="/programs"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-between px-3 py-2 text-xs font-bold text-[#ED1654] uppercase tracking-wider hover:bg-[#D9D9D9]/30 rounded-lg"
            >
              <span>Explore All Programmes</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>

            {programmesData.map((cat, idx) => (
              <div key={idx} className="space-y-1">
                <button
                  onClick={() =>
                    setMobileCategoryOpen(
                      mobileCategoryOpen === cat.category ? null : cat.category
                    )
                  }
                  className="w-full flex items-center justify-between px-3 py-2 text-sm text-[#141414] font-medium rounded-lg hover:bg-[#D9D9D9]/50"
                >
                  <span>{cat.category}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#737373] transition-transform ${
                      mobileCategoryOpen === cat.category ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Expanded Sub-Items */}
                {mobileCategoryOpen === cat.category && (
                  <div className="pl-4 pr-2 space-y-1">
                    {cat.subItems.map((sub, sIdx) => (
                      <Link
                        key={sIdx}
                        href={sub.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block px-3 py-2 text-xs text-[#737373] hover:text-[#000000] rounded-md hover:bg-[#D9D9D9]/40"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile About Us */}
          <Link
            href="/about"
            onClick={() => setMobileMenuOpen(false)}
            className={`block w-full text-left px-4 py-2.5 text-sm font-medium rounded-xl transition-colors ${
              isAboutActive ? "bg-[#000000] text-white" : "text-[#737373] hover:bg-[#D9D9D9]/60"
            }`}
          >
            About Us
          </Link>

          {/* Mobile Contact Us CTA */}
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full flex items-center justify-center gap-2 mt-3 px-4 py-3 rounded-xl bg-[#000000] text-white text-sm font-semibold"
          >
            <User className="w-4 h-4" />
            <span>Contact us</span>
          </Link>
        </div>
      )}
    </header>
  );
}