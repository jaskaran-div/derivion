"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, BookOpen, Clock, Users } from "lucide-react";
import { PROGRAMMES, programmeHref, newTabProps } from "@/app/data/programmes";
import AnimateOnScroll from "@/app/components/AnimateOnScroll";

export default function OurProgrammes() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Young Learners", "Adult Learners", "ISFT Awards", "ISFT Premium"];

  // Filter programmes based on active category selection
  const filteredProgrammes =
    activeCategory === "All"
      ? PROGRAMMES
      : PROGRAMMES.filter((p) => p.category === activeCategory);

  return (
    <section id="programmes" className="w-full bg-[#F9FAFB] text-[#111111] py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-t border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* ─── Top Header & Category Filter Tabs ─── */}
        <AnimateOnScroll animation="fade-up" duration={600} className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#C20F42] flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#C20F42]" />
              <span>Derivion Curriculum Catalogue</span>
            </span>
            <h2
              className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#111111]"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Our Featured <span className="italic font-normal text-[#C20F42]">Programmes</span>
            </h2>
            <p className="text-xs sm:text-sm text-[#6B7280]">
              Explore practitioner-crafted education calibrated for young minds, teenagers, and adult decision-makers.
            </p>
          </div>

          <Link
            href="/programs"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#D6124B] hover:bg-[#B50F40] text-white text-xs sm:text-sm font-semibold transition-all shadow-sm shrink-0"
          >
            <span>View Full Catalogue</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </AnimateOnScroll>

        {/* ─── Interactive Filter Tabs ─── */}
        <AnimateOnScroll
          as="div"
          animation="fade-up"
          delay={100}
          duration={600}
          className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 pt-1 border-b border-[#E5E7EB]"
          role="group"
          aria-label="Filter featured programmes by category"
        >
          {categories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 text-xs sm:text-sm font-semibold rounded-full transition-all duration-200 shrink-0 ${
                  isActive
                    ? "bg-[#111111] text-white shadow-sm"
                    : "bg-white text-[#4B5563] hover:text-[#111111] border border-[#E5E7EB] hover:bg-[#F3F4F6]"
                }`}
              >
                {category}
              </button>
            );
          })}
        </AnimateOnScroll>

        {/* ─── Compact User-Friendly Grid Layout (3 Columns) ─── */}
        <AnimateOnScroll animation="fade-up" delay={200} duration={700}>
          <div className="-mx-4 px-4 scroll-px-4 flex gap-4 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-2 sm:mx-0 sm:px-0 sm:pb-0 sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-6 sm:overflow-visible">
            {filteredProgrammes.slice(0, 6).map((prog) => (
              <div
                key={prog.id}
                className="w-[82%] shrink-0 snap-start sm:w-auto bg-white border border-[#E5E7EB] rounded-2xl p-4 sm:p-5 flex flex-col justify-between hover:shadow-md hover:border-[#D1D5DB] transition-all duration-300 group space-y-4"
              >
                <div className="space-y-3.5">
                  {/* Image Frame */}
                  <div className="relative w-full h-40 sm:h-44 rounded-xl overflow-hidden bg-[#F3F4F6]">
                    <Image
                      src={prog.heroImage}
                      alt={prog.title}
                      fill
                      sizes="(max-width: 640px) 82vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 flex items-center gap-2">
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-md bg-white/95 text-[#C20F42] shadow-sm">
                        {prog.category}
                      </span>
                      {prog.comingSoon && (
                        <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-md bg-[#111111] text-white shadow-sm">
                          Coming Soon
                        </span>
                      )}
                    </div>
                    <div className="absolute bottom-3 right-3">
                      <span className="text-[10px] font-semibold text-white bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded-md">
                        {prog.targetAge}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs text-[#6B7280]">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-[#C20F42]" />
                        {prog.duration}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-[#111111] leading-snug line-clamp-2">
                      {prog.comingSoon ? (
                        prog.title
                      ) : (
                        <Link href={programmeHref(prog)} {...newTabProps(programmeHref(prog))} className="hover:text-[#C20F42] transition-colors">
                          {prog.title}
                        </Link>
                      )}
                    </h3>

                    <p className="text-xs text-[#6B7280] leading-relaxed line-clamp-2">
                      {prog.description}
                    </p>
                  </div>
                </div>

                {/* Action Button (coming-soon programmes have no page yet) */}
                {!prog.comingSoon && (
                  <div className="pt-2">
                    <Link
                      href={programmeHref(prog)}
                      {...newTabProps(programmeHref(prog))}
                      className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl bg-[#F3F4F6] hover:bg-[#D6124B] text-[#111111] hover:text-white text-xs font-semibold transition-all duration-200"
                    >
                      <span>Explore Programme</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        </AnimateOnScroll>

        {/* View All Bottom Banner */}
        <AnimateOnScroll animation="fade-up" delay={250} duration={600} className="text-center pt-4">
          <Link
            href="/programs"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#111111] hover:bg-[#111111] text-[#111111] hover:text-white text-xs font-bold uppercase tracking-wider transition-all"
          >
            <span>Explore All {PROGRAMMES.length} Programmes, ISFT Awards &amp; Premium</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </AnimateOnScroll>

      </div>
    </section>
  );
}