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
  const [desktopCategoryOpen, setDesktopCategoryOpen] = useState<string | null>(null);

  // Nested structure for Programmes -> Categories -> Sub-Programmes
  const programmesData: {
    category: string;
    subItems: { name: string; href: string; comingSoon?: boolean }[];
  }[] = [
    {
      category: "Young Learners",
      subItems: [
        { name: "Sprout Literacy (Young Learners 9–11)", href: "/programs/sprout-literacy" },
        { name: "Bloom Literacy (Young Learners 11–14)", href: "/programs/bloom-literacy" },
      ],
    },
    {
      category: "Adult Learners",
      subItems: [
        { name: "Harvest Literacy (Adult Learners 18+)", href: "/programs/harvest-literacy" },
      ],
    },
    {
      category: "ISFT Awards",
      subItems: [
        {
          name: "ISFT Award in Introduction to Financial Trading",
          href: "/programs/isft-award-in-introduction-to-financial-trading",
        },
        // Coming soon: listed below the live awards and not linked yet.
        {
          name: "ISFT Award in Applied Financial Markets Trading",
          href: "/programs/isft-award-in-applied-financial-markets-trading",
          comingSoon: true,
        },
        {
          name: "ISFT Award in Introduction to Financial Markets",
          href: "/programs/isft-award-in-introduction-to-financial-markets",
          comingSoon: true,
        },
        // Hidden for now: these ISFT awards are not on sale yet. Uncomment to restore.
        // {
        //   name: "ISFT Award in Introduction to Futures Trading",
        //   href: "/programs/isft-award-in-introduction-to-futures-trading",
        // },
        // {
        //   name: "ISFT Award in Introduction to Risk Management",
        //   href: "/programs/isft-award-in-introduction-to-risk-management",
        // },
        // {
        //   name: "ISFT Award in Introduction to Trading Government Bonds",
        //   href: "/programs/isft-award-in-introduction-to-trading-government-bonds",
        // },
        // {
        //   name: "ISFT Certificate in Introduction to Technical Analysis in Trading",
        //   href: "/programs/isft-certificate-in-introduction-to-technical-analysis-in-trading",
        // },
        // {
        //   name: "ISFT Award in Introduction to Behavioural Psychology in Trading",
        //   href: "/programs/isft-award-in-introduction-to-behavioural-psychology-in-trading",
        // },
      ],
    },
  ];

  const isHomeActive = pathname === "/";
  const isProgrammesActive = pathname.startsWith("/programs");
  const isAboutActive = pathname === "/about";
  const isPartnersActive = pathname === "/partners";
  const isContactActive = pathname === "/contact";

  return (
    <header className="w-full bg-white/70 backdrop-blur-md border-b border-[#D9D9D9]/60 py-3 sm:py-4 px-4 sm:px-8 mx-auto sticky top-0 z-50">
      <nav aria-label="Primary" className="flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5 z-20 hover:opacity-90 transition-opacity">
            <Image
              src="/Home/derivion-logo.png"
              alt="Derivion Logo"
              width={50}
              height={50}
              className="h-8 sm:h-6 w-auto object-contain"
              priority
            />
        </Link>

        {/* Center Pill Navigation Menu (Desktop) */}
        <div className="hidden md:flex items-center gap-1.5 bg-[#D9D9D9]/30 p-1.5 rounded-full border border-[#D9D9D9]/70 shadow-inner">
          {/* Home Link */}
          <Link
            href="/"
            aria-current={isHomeActive ? "page" : undefined}
            className={`px-5 py-2 text-xs sm:text-sm font-medium rounded-full transition-all duration-200 ${
              isHomeActive
                ? "bg-[#D6124B] text-white shadow-md"
                : "text-[#737373] hover:text-[#000000] hover:bg-[#D9D9D9]/50"
            }`}
          >
            Home
          </Link>

          {/* Programmes Dropdown Menu */}
          <div className="relative group">
            <Link
              href="/programs"
              aria-current={pathname === "/programs" ? "page" : undefined}
              className={`flex items-center gap-1.5 px-5 py-2 text-xs sm:text-sm font-medium rounded-full transition-all duration-200 ${
                isProgrammesActive
                  ? "bg-[#D6124B] text-white shadow-md"
                  : "text-[#737373] hover:text-[#000000] hover:bg-[#D9D9D9]/50"
              }`}
            >
              <span>Programmes</span>
              <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180" />
            </Link>

            {/* Level 1 Dropdown: Categories */}
            <div className="absolute left-0 top-full pt-3 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto group-focus-within:opacity-100 group-focus-within:translate-y-0 group-focus-within:pointer-events-auto transition-all duration-200 z-50">
              <div className="bg-white border border-[#D9D9D9] rounded-2xl shadow-xl p-2 w-64 space-y-1">
                <Link
                  href="/programs"
                  className="flex items-center justify-between px-4 py-2 rounded-xl text-xs font-bold text-[#C20F42] hover:bg-[#D6124B]/10 transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Browse All Programmes</span>
                  </span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
                <div className="border-t border-[#D9D9D9]/60 my-1" />

                {programmesData.map((cat, idx) => (
                  <div
                    key={idx}
                    className="relative group/sub"
                    onMouseEnter={() => setDesktopCategoryOpen(cat.category)}
                    onMouseLeave={() => setDesktopCategoryOpen(null)}
                    onFocus={() => setDesktopCategoryOpen(cat.category)}
                    onBlur={(event) => {
                      const nextTarget = event.relatedTarget;
                      if (
                        !(nextTarget instanceof Node) ||
                        !event.currentTarget.contains(nextTarget)
                      ) {
                        setDesktopCategoryOpen(null);
                      }
                    }}
                  >
                    {/* Category Item */}
                    <button
                      type="button"
                      aria-expanded={desktopCategoryOpen === cat.category}
                      aria-controls={`desktop-programmes-${idx}`}
                      onClick={() =>
                        setDesktopCategoryOpen(
                          desktopCategoryOpen === cat.category ? null : cat.category,
                        )
                      }
                      className="flex w-full items-center justify-between px-4 py-2.5 rounded-xl text-left text-xs sm:text-sm text-[#141414] font-medium hover:bg-[#D9D9D9]/40 hover:text-[#000000] transition-colors"
                    >
                      <span>{cat.category}</span>
                      <ChevronRight className="w-3.5 h-3.5 text-[#737373]" />
                    </button>

                    <div
                      id={`desktop-programmes-${idx}`}
                      hidden={desktopCategoryOpen !== cat.category}
                      className="absolute left-full top-0 pl-2 transition-all duration-200 z-50"
                    >
                      <div className="bg-white border border-[#D9D9D9] rounded-2xl shadow-xl p-2 w-64 space-y-1">
                        {cat.subItems.map((sub, sIdx) =>
                          sub.comingSoon ? (
                            <span
                              key={sIdx}
                              aria-disabled="true"
                              className="block px-4 py-2.5 rounded-xl text-xs sm:text-sm text-[#A3A3A3] cursor-default"
                            >
                              {sub.name}
                              <ComingSoonTag />
                            </span>
                          ) : (
                            <Link
                              key={sIdx}
                              href={sub.href}
                              className="block px-4 py-2.5 rounded-xl text-xs sm:text-sm text-[#737373] hover:text-[#000000] hover:bg-[#D9D9D9]/40 transition-colors"
                            >
                              {sub.name}
                            </Link>
                          ),
                        )}
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
            aria-current={isAboutActive ? "page" : undefined}
            className={`px-5 py-2 text-xs sm:text-sm font-medium rounded-full transition-all duration-200 ${
              isAboutActive
                ? "bg-[#D6124B] text-white shadow-md"
                : "text-[#737373] hover:text-[#000000] hover:bg-[#D9D9D9]/50"
            }`}
          >
            About Us
          </Link>

          {/* Partners Link */}
          <Link
            href="/partners"
            aria-current={isPartnersActive ? "page" : undefined}
            className={`px-5 py-2 text-xs sm:text-sm font-medium rounded-full transition-all duration-200 ${
              isPartnersActive
                ? "bg-[#D6124B] text-white shadow-md"
                : "text-[#737373] hover:text-[#000000] hover:bg-[#D9D9D9]/50"
            }`}
          >
            Partners
          </Link>
        </div>

        {/* Right CTA Button */}
        <div className="hidden sm:flex items-center z-20">
          <Link
            href="/contact"
            aria-current={isContactActive ? "page" : undefined}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 shadow-sm active:scale-95 ${
              isContactActive
                ? "bg-[#D6124B] text-white"
                : "bg-[#D6124B] hover:bg-[#B50F40] text-white"
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
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile primary"
          className="md:hidden mt-3 p-4 bg-[#D9D9D9]/20 rounded-2xl border border-[#D9D9D9]/60 space-y-2 max-h-[calc(100dvh-6rem)] overflow-y-auto overscroll-contain"
        >
          {/* Mobile Home */}
          <Link
            href="/"
            aria-current={isHomeActive ? "page" : undefined}
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
              className="w-full flex items-center justify-between px-3 py-2 text-xs font-bold text-[#C20F42] uppercase tracking-wider hover:bg-[#D9D9D9]/30 rounded-lg"
            >
              <span>Explore All Programmes</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>

            {programmesData.map((cat, idx) => (
              <div key={idx} className="space-y-1">
                <button
                  type="button"
                  onClick={() =>
                    setMobileCategoryOpen(
                      mobileCategoryOpen === cat.category ? null : cat.category
                    )
                  }
                  aria-expanded={mobileCategoryOpen === cat.category}
                  aria-controls={`mobile-programmes-${idx}`}
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
                <div
                  id={`mobile-programmes-${idx}`}
                  hidden={mobileCategoryOpen !== cat.category}
                  className="pl-4 pr-2 space-y-1"
                >
                    {cat.subItems.map((sub, sIdx) =>
                      sub.comingSoon ? (
                        <span
                          key={sIdx}
                          aria-disabled="true"
                          className="block px-3 py-2.5 text-sm text-[#A3A3A3] cursor-default"
                        >
                          {sub.name}
                          <ComingSoonTag />
                        </span>
                      ) : (
                        <Link
                          key={sIdx}
                          href={sub.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block px-3 py-2.5 text-sm text-[#737373] hover:text-[#000000] rounded-md hover:bg-[#D9D9D9]/40"
                        >
                          {sub.name}
                        </Link>
                      ),
                    )}
                </div>
              </div>
            ))}
          </div>

          {/* Mobile About Us */}
          <Link
            href="/about"
            aria-current={isAboutActive ? "page" : undefined}
            onClick={() => setMobileMenuOpen(false)}
            className={`block w-full text-left px-4 py-2.5 text-sm font-medium rounded-xl transition-colors ${
              isAboutActive ? "bg-[#000000] text-white" : "text-[#737373] hover:bg-[#D9D9D9]/60"
            }`}
          >
            About Us
          </Link>

          {/* Mobile Partners */}
          <Link
            href="/partners"
            aria-current={isPartnersActive ? "page" : undefined}
            onClick={() => setMobileMenuOpen(false)}
            className={`block w-full text-left px-4 py-2.5 text-sm font-medium rounded-xl transition-colors ${
              isPartnersActive ? "bg-[#000000] text-white" : "text-[#737373] hover:bg-[#D9D9D9]/60"
            }`}
          >
            Partners
          </Link>

          {/* Mobile Contact Us CTA */}
          <Link
            href="/contact"
            aria-current={isContactActive ? "page" : undefined}
            onClick={() => setMobileMenuOpen(false)}
            className="w-full flex items-center justify-center gap-2 mt-3 px-4 py-3 rounded-xl bg-[#000000] text-white text-sm font-semibold"
          >
            <User className="w-4 h-4" />
            <span>Contact us</span>
          </Link>
        </nav>
      )}
    </header>
  );
}

function ComingSoonTag() {
  return (
    <span className="ml-2 inline-block align-middle rounded-full bg-[#111111] px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white">
      Coming Soon
    </span>
  );
}
