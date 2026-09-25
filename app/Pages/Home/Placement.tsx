"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download, Quote } from "lucide-react";

export default function Placement() {
  const stats = [
    { value: "3", label: "Core Programmes" },
    { value: "5", label: "Key Literacies" },
    { value: "13.5h", label: "Curriculum Content" },
    { value: "9–18+", label: "Age Progression" },
    { value: "100%", label: "Reflex-First Focus" },
  ];

  return (
    <section id="framework" className="w-full bg-[#141414] py-12 sm:py-16 px-4 sm:px-8 text-white">
      <div className="max-w-7xl mx-auto bg-[#0A0A0A] border border-[#141414] rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">

          {/* ─── Left Column: Quote, Stats & CTAs ─── */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
            {/* Quote Block */}
            <div className="space-y-3">
              <Quote className="w-8 h-8 text-[#ED1654] opacity-90" />
              <p className="text-white text-sm sm:text-base leading-relaxed font-light italic">
                “Real-world competence in modern markets isn&apos;t built through passive memorisation; it is measured by the clarity of your instincts, your habit of independent verification, and the reflexes you deploy when risk emerges.”
              </p>
            </div>

            {/* Metrics & Statistics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 py-4 border-y border-white/10">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="flex flex-col space-y-1 p-2 rounded-xl bg-white/[0.02]"
                >
                  <span className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${index === 0 ? "text-[#A8FF24]" : "text-white"}`}>
                    {stat.value}
                  </span>
                  <span className="text-[11px] sm:text-xs text-white/80 font-medium leading-tight">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2">
              <Link
                href="/about"
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-[#737373] hover:border-[#D9D9D9] bg-[#0A0A0A] hover:bg-[#141414] text-white text-xs sm:text-sm font-semibold transition-all duration-200"
              >
                <span>LEARN MORE</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/programs"
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#ED1654] hover:bg-[#d6124b] text-white text-xs sm:text-sm font-semibold transition-all duration-200 shadow-lg active:scale-95"
              >
                <span>VIEW PROGRAMMES</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* ─── Right Column: Featured Media / Curriculum Perspective Card ─── */}
          <div className="lg:col-span-5 bg-white text-[#000000] rounded-2xl overflow-hidden shadow-lg border border-[#D9D9D9] flex flex-col justify-between">
            <div className="p-5 sm:p-8 space-y-3 sm:space-y-4">
              {/* Publication Header */}
              <div className="flex items-center justify-between border-b border-[#D9D9D9] pb-3 sm:pb-4">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 bg-[#ED1654] text-white font-extrabold text-xs rounded">
                    DERIVION
                  </span>
                  <span
                    className="font-bold text-base sm:text-lg tracking-tight text-[#000000]"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    Curriculum Framework
                  </span>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#ED1654] bg-[#ED1654]/10 px-2 py-1 rounded">
                  Methodology
                </span>
              </div>

              {/* Main Headline */}
              <h3
                className="text-lg sm:text-2xl font-bold leading-snug text-[#000000]"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Reconstructed Case Studies &amp; Instinctive Defence: Education for Real Risk
              </h3>
            </div>

            {/* Card Footer Media Row */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 p-4 sm:p-6 bg-[#D9D9D9]/20 border-t border-[#D9D9D9] items-center">
              <div className="sm:col-span-5 relative h-36 sm:h-full min-h-[110px] rounded-lg overflow-hidden bg-[#D9D9D9]">
                <Image
                  src="/Home/hero-section.jpg"
                  alt="Derivion educational session"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="sm:col-span-7 space-y-1">
                <span className="text-[10px] font-bold text-[#ED1654] uppercase tracking-wider">
                  Approach
                </span>
                <p className="text-[11px] sm:text-xs text-[#111111]/80 leading-relaxed line-clamp-4">
                  Derivion connects financial mechanics, screen psychology, and cybersecurity into automated personal reflexes: Stop &amp; Ask for young minds, Verify Before You Act for teenagers, and Judge, Verify &amp; Know Your Recourse for earning adults.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}