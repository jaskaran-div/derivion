"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function WhyUs() {
  return (
    <section className="w-full bg-white text-zinc-900 py-16 px-4 sm:px-8 border-t border-zinc-100">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* ─── Header: Title & CTA Button ─── */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif tracking-tight text-zinc-900 font-medium uppercase">
            Why Choose <span className="italic font-normal text-[#E85C33]">Derivion</span>?
          </h2>
          <button className="flex items-center gap-2 px-6 py-2.5 rounded-full border border-zinc-900 hover:bg-zinc-900 hover:text-white text-zinc-900 text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-200">
            <span>SEE ALL DETAILS</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* ─── Bento Layout Grid ─── */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Top Left Card: Image + Text Side-by-Side */}
          <div className="md:col-span-5 bg-zinc-50 border border-zinc-200/80 rounded-2xl overflow-hidden p-4 sm:p-5 flex flex-col sm:flex-row items-center gap-5 hover:shadow-lg transition-all duration-300">
            <div className="relative w-full sm:w-1/2 h-44 rounded-xl overflow-hidden bg-zinc-200 shrink-0">
              <Image
                src="/why-us/practitioner.jpg"
                alt="Practitioner-led learning"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-2">
              <h3 className="text-base sm:text-lg font-bold font-sans uppercase tracking-tight text-zinc-900 leading-snug">
                PRACTITIONER-LED CURRICULUM
              </h3>
              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal">
                Designed for real-world market execution and high-impact leadership.
              </p>
            </div>
          </div>

          {/* Top Right Featured Large Card */}
          <div className="md:col-span-7 bg-zinc-900 text-white border border-zinc-800 rounded-2xl overflow-hidden relative min-h-[220px] group flex flex-col justify-end p-6 sm:p-8 hover:shadow-xl transition-all duration-300">
            <div className="absolute inset-0 z-0 opacity-40 group-hover:scale-105 transition-transform duration-500">
              <Image
                src="/why-us/trading-floor.jpg"
                alt="Institutional grade environment"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative z-10 space-y-2 max-w-lg">
              <span className="text-[10px] font-bold text-[#E85C33] uppercase tracking-widest bg-black/40 px-2.5 py-1 rounded backdrop-blur-sm">
                IMMERSIVE EXPERIENCE
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-sans uppercase tracking-tight text-white">
                INSTITUTIONAL-GRADE TRADING LABS
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                Train on live order-matching engines, multi-asset risk management software, and high-frequency algorithms.
              </p>
            </div>
          </div>

          {/* Bottom Left Tall Card */}
          <div className="md:col-span-5 bg-zinc-50 border border-zinc-200/80 rounded-2xl overflow-hidden relative min-h-[240px] group flex flex-col justify-end p-6 sm:p-8 hover:shadow-lg transition-all duration-300">
            <div className="absolute inset-0 z-0 opacity-20 group-hover:scale-105 transition-transform duration-500">
              <Image
                src="/why-us/analytics.jpg"
                alt="Market analytics"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative z-10 space-y-2">
              <h3 className="text-lg sm:text-xl font-bold font-sans uppercase tracking-tight text-zinc-900">
                1-ON-1 FOUNDER MENTORSHIP
              </h3>
              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                Direct access to industry partners, hedge fund founders, and startup leaders.
              </p>
            </div>
          </div>

          {/* Bottom Right Card: Image + Text Side-by-Side */}
          <div className="md:col-span-7 bg-zinc-50 border border-zinc-200/80 rounded-2xl overflow-hidden p-4 sm:p-5 flex flex-col sm:flex-row items-center gap-5 hover:shadow-lg transition-all duration-300">
            <div className="relative w-full sm:w-1/2 h-48 rounded-xl overflow-hidden bg-zinc-200 shrink-0">
              <Image
                src="/why-us/outcomes.jpg"
                alt="World class placement outcomes"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-2">
              <h3 className="text-base sm:text-lg font-bold font-sans uppercase tracking-tight text-zinc-900 leading-snug">
                GUARANTEED CAREER TRANSFORMATION
              </h3>
              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal">
                Audited 2.8X average CTC jumps, 500+ partner companies, and guaranteed founder-facing roles.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}