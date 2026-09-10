"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Download, Quote } from "lucide-react";

export default function Placement() {
  const stats = [
    { value: "26L", label: "Average CTC (in Lakhs)" },
    { value: "58%", label: "In founder facing roles" },
    { value: "2.8X", label: "Average CTC jump" },
    { value: "500+", label: "Partner startups" },
    { value: "36.5L", label: "Top 25% Avg. CTC" },
  ];

  return (
    <section className="w-full bg-zinc-900 py-12 sm:py-16 px-4 sm:px-8 text-white">
      <div className="max-w-7xl mx-auto bg-zinc-950 border border-zinc-800 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* ─── Left Column: Quote, Stats & CTAs ─── */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
            {/* Quote Block */}
            <div className="space-y-3">
              <Quote className="w-8 h-8 text-[#E85C33] opacity-80" />
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed font-light italic">
                &ldquo;Outcomes here aren&apos;t just placements; instead they are measured by the responsibility you earn through founder-facing roles, real ownership, and the ability to make decisions that move business.&rdquo;
              </p>
            </div>

            {/* Metrics & Statistics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 py-4 border-y border-zinc-800/80">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`flex flex-col space-y-1 ${
                    index !== stats.length - 1
                      ? "sm:border-r sm:border-zinc-800/60 sm:pr-2"
                      : ""
                  }`}
                >
                  <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                    {stat.value}
                  </span>
                  <span className="text-[11px] sm:text-xs text-zinc-400 font-medium leading-tight">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button className="flex items-center gap-2 px-6 py-3 rounded-full border border-zinc-700 hover:border-zinc-500 bg-zinc-900 hover:bg-zinc-800 text-white text-xs sm:text-sm font-semibold transition-all duration-200">
                <span>LEARN MORE</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#E85C33] hover:bg-[#d44f28] text-white text-xs sm:text-sm font-semibold transition-all duration-200 shadow-lg active:scale-95">
                <span>DOWNLOAD PLACEMENT REPORT</span>
                <Download className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* ─── Right Column: Featured Media / Press Article Card ─── */}
          <div className="lg:col-span-5 bg-white text-zinc-900 rounded-2xl overflow-hidden shadow-lg border border-zinc-200 flex flex-col justify-between">
            <div className="p-6 sm:p-8 space-y-4">
              {/* Publication Header */}
              <div className="flex items-center justify-between border-b border-zinc-100 pb-4">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 bg-[#E85C33] text-white font-extrabold text-xs rounded">
                    ET
                  </span>
                  <span className="font-serif font-bold text-base sm:text-lg tracking-tight text-zinc-900">
                    The Economic Times
                  </span>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#E85C33] bg-[#E85C33]/10 px-2 py-1 rounded">
                  Education
                </span>
              </div>

              {/* Main Headline */}
              <h3 className="text-xl sm:text-2xl font-bold font-serif leading-snug text-zinc-900">
                New-age B-school report highlights strong startup placements and early offers
              </h3>
            </div>

            {/* Card Footer Media Row */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 p-6 bg-zinc-50 border-t border-zinc-100 items-center">
              <div className="sm:col-span-5 relative h-32 sm:h-full min-h-[100px] rounded-lg overflow-hidden bg-zinc-300">
                {/* Replace src with your actual press/classroom photo */}
                <Image
                  src="/hero-classroom.jpg"
                  alt="Placement presentation"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="sm:col-span-7 space-y-1">
                <span className="text-[10px] font-bold text-[#E85C33] uppercase tracking-wider">
                  Synopsis
                </span>
                <p className="text-[11px] sm:text-xs text-zinc-600 leading-relaxed line-clamp-4">
                  Derivion, a startup-focused, AI-first institution backed by industry leaders, released independently audited outcomes showing strong average CTCs for its cohorts with 60% of graduates in founder-facing roles.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}