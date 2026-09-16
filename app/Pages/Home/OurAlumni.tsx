"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

export default function OurAlumni() {
  const [currentPage, setCurrentPage] = useState(0);

  const alumniData = [
    {
      name: "Richa Pherwani",
      role: "Marketing Lead",
      company: "COMET",
      companyLogo: "/logos/comet.png",
      batch: "Batch of 2025",
      photo: "/alumni/richa.jpg",
    },
    {
      name: "Piyush Verma",
      role: "Category Manager",
      company: "hyperpure",
      companyLogo: "/logos/hyperpure.png",
      batch: "Batch of 2024",
      photo: "/alumni/piyush.jpg",
    },
    {
      name: "Varun Bali",
      role: "Founder's Office",
      company: "Swipe",
      companyLogo: "/logos/swipe.png",
      batch: "Batch of 2024",
      photo: "/alumni/varun.jpg",
    },
    {
      name: "Atishay Nijhawan",
      role: "Senior Manager",
      company: "BLUE TOKAI",
      companyLogo: "/logos/bluetokai.png",
      batch: "Batch of 2025",
      photo: "/alumni/atishay.jpg",
    },
    {
      name: "Akshita Rajput",
      role: "Head of Operations",
      company: "BPR Hub",
      companyLogo: "/logos/bprhub.png",
      batch: "Batch of 2024",
      photo: "/alumni/akshita.jpg",
    },
    {
      name: "Adarsh Iyer",
      role: "Founder's Office",
      company: "CULTURE",
      companyLogo: "/logos/culture.png",
      batch: "Batch of 2025",
      photo: "/alumni/adarsh.jpg",
    },
    {
      name: "Neha Moda",
      role: "Senior Manager",
      company: "zepto",
      companyLogo: "/logos/zepto.png",
      batch: "Batch of 2024",
      photo: "/alumni/neha.jpg",
    },
    {
      name: "Chaitanya Sawhney",
      role: "Entrepreneur in Residence",
      company: "NOTO",
      companyLogo: "/logos/noto.png",
      batch: "Batch of 2025",
      photo: "/alumni/chaitanya.jpg",
    },
  ];

  const itemsPerPage = 4;
  const totalPages = Math.ceil(alumniData.length / itemsPerPage);
  const currentAlumni = alumniData.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <section id="alumni" className="w-full bg-white text-[#000000] py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-t border-[#D9D9D9]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">

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
            <p className="text-[#737373] text-xs sm:text-sm md:text-base leading-relaxed font-normal">
              Our alumni are entrepreneurs who have raised capital, leaders working with Founders directly in fast growing startups, and quantitative analysts managing institutional capital.
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
                const initials = alumnus.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("");

                return (
                  <div
                    key={index}
                    className="relative group bg-[#0A0A0A] border border-[#141414] rounded-2xl overflow-hidden p-5 flex flex-col justify-between hover:border-[#737373] transition-all duration-300 shadow-lg min-h-[190px]"
                  >
                    {/* Top Row: Name, Role & Initial Avatar */}
                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-1">
                        <h3 className="text-sm sm:text-base font-bold text-white tracking-tight">
                          {alumnus.name}
                        </h3>
                        <p className="text-xs text-[#D9D9D9] font-medium italic">
                          {alumnus.role}
                        </p>
                        <p className="text-xs text-[#737373]">
                          at <span className="font-bold text-white uppercase tracking-wider">{alumnus.company}</span>
                        </p>
                      </div>

                      {/* Monogram / Avatar Emblem */}
                      <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#141414] to-[#0A0A0A] border border-[#737373]/40 flex items-center justify-center shrink-0 shadow-inner group-hover:border-[#A8FF24] transition-colors">
                        <span className="text-xs font-bold tracking-wider text-[#D9D9D9] group-hover:text-[#A8FF24] transition-colors">
                          {initials}
                        </span>
                      </div>
                    </div>

                    {/* Bottom Row: Batch Pill & Network tag */}
                    <div className="flex items-center justify-between pt-4 border-t border-[#141414]">
                      <span className="inline-block px-2.5 py-1 rounded-md bg-[#141414] border border-[#737373]/30 text-[10px] font-medium text-[#D9D9D9]">
                        {alumnus.batch}
                      </span>
                      <span className="text-[10px] text-[#A8FF24] font-medium flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#A8FF24]" /> Verified Outcome
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* ─── Bottom Navigation & Pagination Indicators ─── */}
            <div className="flex items-center justify-between pt-4 border-t border-[#D9D9D9]">
              {/* Indicator Pills */}
              <div className="flex items-center gap-2">
                {Array.from({ length: totalPages }).map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentPage(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      currentPage === idx
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