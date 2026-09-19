"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function WhyUs() {
  return (
    <section id="why-us" className="w-full bg-white text-[#000000] py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-t border-[#D9D9D9]">
      <div className="max-w-7xl mx-auto space-y-8 sm:space-y-10">

        {/* ─── Header: Title & CTA Button ─── */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#ED1654]">
              The Derivion Advantage
            </span>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl tracking-tight text-[#000000] font-medium"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Why Choose <span className="italic font-normal text-[#ED1654]">Derivion</span>?
            </h2>
          </div>
          <Link
            href="/about"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full border border-[#000000] hover:bg-[#000000] hover:text-white text-[#000000] text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-200"
          >
            <span>SEE ALL DETAILS</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* ─── Bento Layout Grid ─── */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6">

          {/* Top Left Card: Image + Text Side-by-Side */}
          <div className="md:col-span-5 bg-[#D9D9D9]/20 border border-[#D9D9D9] rounded-2xl overflow-hidden p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5 hover:shadow-lg transition-all duration-300">
            <div className="relative w-full sm:w-1/2 h-44 rounded-xl overflow-hidden bg-[#D9D9D9] shrink-0">
              <Image
                src="/Home/hero-section.jpg"
                alt="Practitioner-crafted education"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-1.5">
              <h3 className="text-sm sm:text-base font-bold uppercase tracking-tight text-[#000000] leading-snug">
                PRACTITIONER-CRAFTED CURRICULA
              </h3>
              <p className="text-xs sm:text-sm text-[#737373] leading-relaxed font-normal">
                Designed around actual economic shifts, digital payment realities, and modern cyber risk vectors.
              </p>
            </div>
          </div>

          {/* Top Right Featured Large Card */}
          <div className="md:col-span-7 bg-[#0A0A0A] text-white border border-[#141414] rounded-2xl overflow-hidden relative min-h-[220px] sm:min-h-[240px] group flex flex-col justify-end p-6 sm:p-8 hover:shadow-xl transition-all duration-300">
            <div className="absolute inset-0 z-0 opacity-40 group-hover:scale-105 transition-transform duration-500">
              <Image
                src="/Home/hero-section.jpg"
                alt="Holistic multi-pillar education"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative z-10 space-y-2 max-w-lg">
              <span className="inline-block text-[10px] font-bold text-[#A8FF24] uppercase tracking-widest bg-black/50 px-2.5 py-1 rounded backdrop-blur-sm border border-[#A8FF24]/30">
                COMPREHENSIVE ECOSYSTEM
              </span>
              <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-white">
                INTEGRATED 5-PILLAR PROTECTION
              </h3>
              <p className="text-xs sm:text-sm text-[#D9D9D9] leading-relaxed">
                Combining Financial, Digital, AI, Cyber, and Legal literacy into a single unified capability built for modern life.
              </p>
            </div>
          </div>

          {/* Bottom Left Tall Card */}
          <div className="md:col-span-5 bg-[#D9D9D9]/20 border border-[#D9D9D9] rounded-2xl overflow-hidden relative min-h-[200px] sm:min-h-[220px] group flex flex-col justify-end p-6 sm:p-8 hover:shadow-lg transition-all duration-300">
            <div className="absolute inset-0 z-0 opacity-20 group-hover:scale-105 transition-transform duration-500">
              <Image
                src="/Home/hero-section.jpg"
                alt="Reflex-driven habits"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative z-10 space-y-2">
              <span className="text-[10px] font-bold text-[#ED1654] uppercase tracking-widest">
                ACTIONABLE DEFENCE
              </span>
              <h3 className="text-lg sm:text-xl font-bold uppercase tracking-tight text-[#000000]">
                REFLEX-DRIVEN PEDAGOGY
              </h3>
              <p className="text-xs sm:text-sm text-[#737373] leading-relaxed">
                Instilling automated behavioural reflexes: Stop &amp; Ask, Verify Before You Act, and Statutory Recourse.
              </p>
            </div>
          </div>

          {/* Bottom Right Card: Image + Text Side-by-Side */}
          <div className="md:col-span-7 bg-[#D9D9D9]/20 border border-[#D9D9D9] rounded-2xl overflow-hidden p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5 hover:shadow-lg transition-all duration-300">
            <div className="relative w-full sm:w-1/2 h-48 rounded-xl overflow-hidden bg-[#D9D9D9] shrink-0">
              <Image
                src="/Home/hero-section.jpg"
                alt="Reconstructed Case Studies"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-1.5">
              <h3 className="text-sm sm:text-base font-bold uppercase tracking-tight text-[#000000] leading-snug">
                RECONSTRUCTED CASE STUDIES
              </h3>
              <p className="text-xs sm:text-sm text-[#737373] leading-relaxed font-normal">
                Deconstructing market collapses, rogue losses, synthetic voice scams, and predatory debt traps to inoculate capital before risk arrives.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}