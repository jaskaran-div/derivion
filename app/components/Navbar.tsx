"use client";

import React, { useState } from "react";
import Image from "next/image";
import { User, Menu, X, ChevronDown, ChevronRight } from "lucide-react";

export default function Navbar() {
  const [activeTab, setActiveTab] = useState("Home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Track expanded items for mobile view
  const [mobileCategoryOpen, setMobileCategoryOpen] = useState<string | null>(null);

  // Nested structure for Programmes -> Categories -> Sub-Programmes
  const programmesData = [
    {
      category: "Trading & Markets",
      subItems: [
        { name: "Financial Markets & Derivatives", href: "#" },
        { name: "Technical Analysis & Charting", href: "#" },
        { name: "Algorithmic Trading", href: "#" },
      ],
    },
    {
      category: "Risk & Management",
      subItems: [
        { name: "Multi-Asset Risk Management", href: "#" },
        { name: "Portfolio Hedging Strategies", href: "#" },
      ],
    },
    {
      category: "Behavioral & Psychology",
      subItems: [
        { name: "Trading Psychology & Discipline", href: "#" },
        { name: "Performance Audit Lab", href: "#" },
      ],
    },
  ];

  return (
    <header className="w-full bg-white/60 backdrop-blur-md border-b border-white/30 py-4 px-4 sm:px-8 mx-auto sticky top-0 z-50">
      <nav className="flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <div className="flex items-center gap-2.5 z-20">
          <div className="flex items-center justify-center text-white font-bold text-lg shadow-sm">
            <Image src="/Home/derivion-logo.png" alt="Logo" width={60} height={60} />
          </div>
        </div>

        {/* Center Pill Navigation Menu (Desktop) */}
        <div className="hidden md:flex items-center gap-1.5 bg-zinc-100/80 p-1.5 rounded-full border border-zinc-200/60 shadow-inner">
          {/* Home Link */}
          <button
            onClick={() => setActiveTab("Home")}
            className={`px-5 py-2 text-xs sm:text-sm font-medium rounded-full transition-all duration-200 ${
              activeTab === "Home"
                ? "bg-zinc-900 text-white shadow-md"
                : "text-zinc-500 hover:text-zinc-900 hover:bg-zinc-200/50"
            }`}
          >
            Home
          </button>

          {/* Programmes Dropdown Menu */}
          <div className="relative group">
            <button
              onClick={() => setActiveTab("Programmes")}
              className={`flex items-center gap-1.5 px-5 py-2 text-xs sm:text-sm font-medium rounded-full transition-all duration-200 ${
                activeTab === "Programmes"
                  ? "bg-zinc-900 text-white shadow-md"
                  : "text-zinc-500 hover:text-zinc-900 hover:bg-zinc-200/50"
              }`}
            >
              <span>Programmes</span>
              <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180" />
            </button>

            {/* Level 1 Dropdown: Categories */}
            <div className="absolute left-0 top-full pt-3 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 z-50">
              <div className="bg-white border border-zinc-200 rounded-2xl shadow-xl p-2 w-64 space-y-1">
                {programmesData.map((cat, idx) => (
                  <div key={idx} className="relative group/sub">
                    {/* Category Item */}
                    <div className="flex items-center justify-between px-4 py-2.5 rounded-xl text-xs sm:text-sm text-zinc-700 font-medium hover:bg-zinc-100 hover:text-zinc-900 cursor-pointer transition-colors">
                      <span>{cat.category}</span>
                      <ChevronRight className="w-3.5 h-3.5 text-zinc-400" />
                    </div>

                    {/* Level 2 Sub-Dropdown: Opens on Hovering Category */}
                    <div className="absolute left-full top-0 pl-2 opacity-0 -translate-x-2 pointer-events-none group-hover/sub:opacity-100 group-hover/sub:translate-x-0 group-hover/sub:pointer-events-auto transition-all duration-200 z-50">
                      <div className="bg-white border border-zinc-200 rounded-2xl shadow-xl p-2 w-64 space-y-1">
                        {cat.subItems.map((sub, sIdx) => (
                          <a
                            key={sIdx}
                            href={sub.href}
                            className="block px-4 py-2.5 rounded-xl text-xs sm:text-sm text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 transition-colors"
                          >
                            {sub.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* About Us Link */}
          <button
            onClick={() => setActiveTab("About Us")}
            className={`px-5 py-2 text-xs sm:text-sm font-medium rounded-full transition-all duration-200 ${
              activeTab === "About Us"
                ? "bg-zinc-900 text-white shadow-md"
                : "text-zinc-500 hover:text-zinc-900 hover:bg-zinc-200/50"
            }`}
          >
            About Us
          </button>
        </div>

        {/* Right CTA Button */}
        <div className="hidden sm:flex items-center z-20">
          <button className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-zinc-900 hover:bg-zinc-800 text-white text-xs sm:text-sm font-semibold transition-all duration-200 shadow-sm active:scale-95">
            <User className="w-4 h-4 text-zinc-300" />
            <span>Contact us</span>
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-zinc-700 hover:bg-zinc-100"
          aria-label="Toggle navigation"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 p-4 bg-zinc-100 rounded-2xl border border-zinc-200 space-y-2">
          {/* Mobile Home */}
          <button
            onClick={() => {
              setActiveTab("Home");
              setMobileMenuOpen(false);
            }}
            className={`w-full text-left px-4 py-2.5 text-sm font-medium rounded-xl transition-colors ${
              activeTab === "Home" ? "bg-zinc-900 text-white" : "text-zinc-600 hover:bg-zinc-200/60"
            }`}
          >
            Home
          </button>

          {/* Mobile Programmes Nested Accordion */}
          <div className="bg-white/60 rounded-xl border border-zinc-200/80 p-2 space-y-1">
            <div className="px-3 py-2 text-xs font-bold text-zinc-400 uppercase tracking-wider">
              Programmes
            </div>
            {programmesData.map((cat, idx) => (
              <div key={idx} className="space-y-1">
                <button
                  onClick={() =>
                    setMobileCategoryOpen(
                      mobileCategoryOpen === cat.category ? null : cat.category
                    )
                  }
                  className="w-full flex items-center justify-between px-3 py-2 text-sm text-zinc-700 font-medium rounded-lg hover:bg-zinc-200/50"
                >
                  <span>{cat.category}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-zinc-400 transition-transform ${
                      mobileCategoryOpen === cat.category ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Expanded Sub-Items */}
                {mobileCategoryOpen === cat.category && (
                  <div className="pl-4 pr-2 space-y-1">
                    {cat.subItems.map((sub, sIdx) => (
                      <a
                        key={sIdx}
                        href={sub.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block px-3 py-2 text-xs text-zinc-600 hover:text-zinc-900 rounded-md hover:bg-zinc-200/40"
                      >
                        {sub.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile About Us */}
          <button
            onClick={() => {
              setActiveTab("About Us");
              setMobileMenuOpen(false);
            }}
            className={`w-full text-left px-4 py-2.5 text-sm font-medium rounded-xl transition-colors ${
              activeTab === "About Us" ? "bg-zinc-900 text-white" : "text-zinc-600 hover:bg-zinc-200/60"
            }`}
          >
            About Us
          </button>

          {/* Mobile Contact Us CTA */}
          <button className="w-full flex items-center justify-center gap-2 mt-3 px-4 py-3 rounded-xl bg-zinc-900 text-white text-sm font-semibold">
            <User className="w-4 h-4" />
            <span>Contact us</span>
          </button>
        </div>
      )}
    </header>
  );
}