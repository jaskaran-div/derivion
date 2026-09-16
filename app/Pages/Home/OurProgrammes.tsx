"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  Play,
  GraduationCap,
  Building2,
  Clock,
  Hourglass,
  ArrowRight,
} from "lucide-react";
import { PROGRAMMES } from "@/app/data/programmes";

export default function OurProgrammes() {
  const [activeCategory, setActiveCategory] = useState("Undergraduate");
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const categories = [
    "Undergraduate",
    "Postgraduate",
    "Executive",
    "Family Business",
    "Immersions",
  ];

  // Filter programmes based on active category selection
  const filteredProgrammes = PROGRAMMES.filter(
    (p) => p.category === activeCategory
  );
  const displayProgrammes =
    filteredProgrammes.length > 0 ? filteredProgrammes : PROGRAMMES;

  // Handle horizontal scroll via top right arrows
  const handleScroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 360;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="programmes" className="w-full bg-[#0A0A0A] text-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-t border-[#141414]">
      <div className="max-w-7xl mx-auto space-y-6 sm:space-y-8">

        {/* ─── Header: Section Title + View All Link ─── */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
          <div className="space-y-1">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#ED1654]">
              Curriculum
            </span>
            <h2
              className="text-3xl sm:text-4xl font-medium tracking-tight text-white italic"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Our Programmes
            </h2>
          </div>

          <Link
            href="/programs"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#A8FF24] hover:text-white transition-colors"
          >
            <span>View All Programmes</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* ─── Control Row: Category Tabs + Slider Arrows ─── */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-2">
          {/* Pill Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0 no-scrollbar">
            {categories.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 sm:px-5 py-2 text-xs sm:text-sm font-medium rounded-full transition-all duration-200 shrink-0 ${
                    isActive
                      ? "bg-white text-[#0A0A0A] shadow-md font-semibold"
                      : "bg-[#141414]/80 text-[#737373] hover:text-white hover:bg-[#141414] border border-[#141414]"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {/* Slider Controls */}
          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={() => handleScroll("left")}
              className="w-10 h-10 rounded-full border border-[#141414] bg-[#0A0A0A] hover:bg-[#141414] hover:border-[#737373] flex items-center justify-center transition-colors text-[#D9D9D9] hover:text-white active:scale-95"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => handleScroll("right")}
              className="w-10 h-10 rounded-full border border-[#141414] bg-[#0A0A0A] hover:bg-[#141414] hover:border-[#737373] flex items-center justify-center transition-colors text-[#D9D9D9] hover:text-white active:scale-95"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* ─── Horizontal Carousel Track ─── */}
        <div
          ref={scrollContainerRef}
          className="flex items-stretch gap-4 sm:gap-6 overflow-x-auto pb-6 pt-2 scroll-smooth no-scrollbar snap-x snap-mandatory"
        >
          {displayProgrammes.map((prog) => (
            <div
              key={prog.id}
              className="w-[85vw] max-w-[340px] sm:w-[380px] md:w-[420px] bg-[#141414]/90 border border-[#141414]/80 rounded-2xl p-4 sm:p-5 flex flex-col justify-between shrink-0 snap-start hover:border-[#737373]/80 transition-all duration-300 shadow-xl group"
            >
              <div className="space-y-4 sm:space-y-5">
                {/* Media Container with Overlay Play Button */}
                <div className="relative w-full h-44 sm:h-52 rounded-xl overflow-hidden bg-[#0A0A0A]">
                  <Image
                    src={prog.heroImage}
                    alt={prog.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <Link
                      href={`/programs/${prog.slug}`}
                      className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300"
                    >
                      <Play className="w-5 h-5 fill-white ml-0.5" />
                    </Link>
                  </div>
                </div>

                {/* Title & Description */}
                <div className="space-y-2">
                  <h3 className="text-lg sm:text-xl font-bold text-white leading-snug">
                    <Link href={`/programs/${prog.slug}`} className="hover:text-[#ED1654] transition-colors">
                      {prog.title}
                    </Link>
                  </h3>
                  <p className="text-xs sm:text-sm text-[#737373] leading-relaxed line-clamp-3 font-normal">
                    {prog.description}
                  </p>
                </div>
              </div>

              {/* 2x2 Specs Grid */}
              <div className="grid grid-cols-2 gap-4 pt-5 mt-5 border-t border-[#141414]/80">
                {/* Format */}
                <div className="flex items-start gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-[#0A0A0A] border border-[#141414]/50 flex items-center justify-center text-[#737373] shrink-0 mt-0.5">
                    <GraduationCap className="w-3.5 h-3.5" />
                  </div>
                  <div className="space-y-0.5">
                    <span className="text-[11px] font-semibold text-[#D9D9D9] block">
                      Format
                    </span>
                    <span className="text-[11px] text-[#737373] block leading-tight truncate">
                      {prog.format}
                    </span>
                  </div>
                </div>

                {/* Eligibility */}
                <div className="flex items-start gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-[#0A0A0A] border border-[#141414]/50 flex items-center justify-center text-[#737373] shrink-0 mt-0.5">
                    <Building2 className="w-3.5 h-3.5" />
                  </div>
                  <div className="space-y-0.5">
                    <span className="text-[11px] font-semibold text-[#D9D9D9] block">
                      Eligibility
                    </span>
                    <span className="text-[11px] text-[#737373] block leading-tight truncate">
                      {prog.eligibility}
                    </span>
                  </div>
                </div>

                {/* Duration */}
                <div className="flex items-start gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-[#0A0A0A] border border-[#141414]/50 flex items-center justify-center text-[#737373] shrink-0 mt-0.5">
                    <Clock className="w-3.5 h-3.5" />
                  </div>
                  <div className="space-y-0.5">
                    <span className="text-[11px] font-semibold text-[#D9D9D9] block">
                      Duration
                    </span>
                    <span className="text-[11px] text-[#737373] block leading-tight truncate">
                      {prog.duration}
                    </span>
                  </div>
                </div>

                {/* Deadline */}
                <div className="flex items-start gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-[#0A0A0A] border border-[#141414]/50 flex items-center justify-center text-[#737373] shrink-0 mt-0.5">
                    <Hourglass className="w-3.5 h-3.5 text-[#A8FF24]" />
                  </div>
                  <div className="space-y-0.5">
                    <span className="text-[11px] font-semibold text-[#D9D9D9] block">
                      Deadline
                    </span>
                    <span className="text-[11px] text-[#A8FF24] font-medium block leading-tight truncate">
                      {prog.deadline}
                    </span>
                  </div>
                </div>
              </div>

              {/* Card Action Link */}
              <div className="pt-4 mt-4 border-t border-[#141414]/60">
                <Link
                  href={`/programs/${prog.slug}`}
                  className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl bg-[#0A0A0A] hover:bg-[#ED1654] text-white text-xs font-semibold transition-all duration-200"
                >
                  <span>Explore Curriculum</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}