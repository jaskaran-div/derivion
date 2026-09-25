"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

export default function OurAlumni() {
  const [currentPage, setCurrentPage] = useState(0);

  const alumniData = [
    {
      name: "Sudhanshu Dhankar",
      role: "Analyst",
      company: "HSBC",
      companyLogo: "/Home/sudhanshu%20(2).png",
      batch: "Batch of 2025",
      photo: "/Home/sudhanshu%20(2).png",
      quote:
        '“I already had a strong academic base, but Derivion changed the difference between knowing theory and acting with discipline. The programme helped me connect market logic, risk awareness, and practical decision-making in a way that became immediately valuable in interviews and my finance role.”',
    },
    {
      name: "Nishant Dagar",
      role: "Funded Trader",
      company: "",
      companyLogo: "/Home/nishant%20(2).png",
      batch: "Batch of 2024",
      photo: "/Home/nishant%20(2).png",
      quote:
        '“The real shift was in my thinking. I stopped treating markets like theory and started approaching them with structure, risk control, and verification. That mindset sharpened my portfolio decisions and gave me a stronger story in front of hiring managers.”',
    },
    {
      name: "Aaryan Chakraborty",
      role: "Finance Analyst",
      company: "ZWC",
      companyLogo: "/Home/aaryan.png",
      batch: "Batch of 2024",
      photo: "/Home/aaryan.png",
      quote:
        '“Derivion gave me the clarity and practical framework I needed to move from curiosity to confidence. The combination of structured learning, market context, and mentor guidance helped me build a much sharper foundation for my career path.”',
    },
  ];

  const itemsPerPage = 3;
  const totalPages = Math.ceil(alumniData.length / itemsPerPage);
  const currentAlumni = alumniData.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <section id="alumni" className="w-full bg-white text-[#000000] py-8 sm:py-10 px-4 sm:px-6 lg:px-8 border-t border-[#D9D9D9]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-6 items-start">

          {/* ─── Left Sidebar: Title, Description & CTA ─── */}
          <div className="lg:col-span-4 space-y-4 sm:space-y-6 lg:sticky lg:top-28">
            <div className="space-y-2">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#ED1654]">
                Proven Network
              </span>
              <h2
                className="text-3xl sm:text-4xl tracking-tight text-[#000000] leading-tight"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Strong <span className="font-semibold italic">Alumni</span> base
              </h2>
            </div>
            <p className="text-[#111111] text-xs sm:text-sm md:text-base leading-relaxed font-normal">
              Derivion is building a growing network of market professionals, analysts, and traders who have taken their learning into real-world environments. From financial institutions to funded trading firms, our alumni carry forward the discipline, market insight, and practical thinking developed throughout their Derivion journey.

            </p>

            <Link
              href="/about"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-full bg-[#ED1654] hover:bg-[#d6124b] text-white text-xs sm:text-sm font-semibold transition-all duration-200 shadow-md hover:shadow-lg active:scale-95"
            >
              <span>EXPLORE NETWORK</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* ─── Right Side: Alumni Card Grid ─── */}
          <div className="lg:col-span-8 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {currentAlumni.map((alumnus, index) => {
                return (
                  <div
                    key={index}
                    className="group bg-[#0A0A0A] border border-[#141414] rounded-2xl overflow-hidden p-2.5 sm:p-3 transition-all duration-300 shadow-lg hover:border-[#737373]"
                  >
                    <div className="flex items-stretch gap-3 sm:gap-3.5">
                      <div className="relative w-[42%] min-w-[42%] overflow-hidden rounded-xl border border-[#141414] bg-[#141414]">
                        <Image
                          src={alumnus.photo}
                          alt={alumnus.name}
                          fill
                          className="object-cover object-center scale-105 group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-transparent" />
                      </div>

                      <div className="flex-1 min-w-0 py-1 pr-1">
                        <div className="flex items-center justify-between gap-2 mb-1.5">
                          <h3 className="text-sm sm:text-base font-bold text-white tracking-tight leading-tight truncate">
                            {alumnus.name}
                          </h3>
                          {alumnus.company ? (
                            <span className="inline-flex items-center rounded-full border border-[#A8FF24]/40 bg-[#A8FF24]/10 px-1.5 py-0.5 text-[8px] uppercase tracking-[0.12em] text-[#A8FF24] font-semibold whitespace-nowrap">
                              {alumnus.company}
                            </span>
                          ) : null}
                        </div>

                        <p className="text-[11px] text-[#D9D9D9] font-medium italic mb-2">
                          {alumnus.role}
                          {alumnus.company ? `, ${alumnus.company}` : ""}
                        </p>

                        <p className="text-[10.5px] leading-relaxed text-[#D9D9D9] italic line-clamp-3">
                          {alumnus.quote}
                        </p>

                        <div className="flex items-center justify-between pt-2.5 mt-2.5 border-t border-[#141414]">
                          <span className="inline-block px-2 py-1 rounded-md bg-[#141414] border border-[#737373]/30 text-[9px] font-medium text-[#D9D9D9]">
                            {alumnus.batch}
                          </span>
                          <span className="text-[9px] text-[#A8FF24] font-medium flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#A8FF24]" /> Verified Outcome
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* ─── Bottom Navigation & Pagination Indicators ─── */}
            <div className="flex items-center justify-between pt-3 border-t border-[#D9D9D9]">
              {/* Indicator Pills */}
              <div className="flex items-center gap-2">
                {Array.from({ length: totalPages }).map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentPage(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${currentPage === idx
                        ? "w-8 bg-[#ED1654]"
                        : "w-2.5 bg-[#D9D9D9] hover:bg-[#737373]"
                      }`}
                    aria-label={`Go to page ${idx + 1}`}
                  />
                ))}
              </div>

              {/* Slider Arrows */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() =>
                    setCurrentPage((prev) => (prev > 0 ? prev - 1 : totalPages - 1))
                  }
                  className="w-10 h-10 rounded-full border border-[#D9D9D9] bg-white hover:bg-[#D9D9D9]/30 text-[#737373] hover:text-[#000000] flex items-center justify-center transition-all active:scale-95 shadow-sm"
                  aria-label="Previous page"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() =>
                    setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : 0))
                  }
                  className="w-10 h-10 rounded-full border border-[#D9D9D9] bg-white hover:bg-[#D9D9D9]/30 text-[#737373] hover:text-[#000000] flex items-center justify-center transition-all active:scale-95 shadow-sm"
                  aria-label="Next page"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}