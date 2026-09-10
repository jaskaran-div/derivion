"use client";

import React, { useState } from "react";
import Image from "next/image";
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

  const totalPages = 4;

  return (
    <section className="w-full bg-white text-zinc-900 py-16 px-4 sm:px-8 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* ─── Left Sidebar: Title, Description & CTA ─── */}
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
            <h2 className="text-3xl sm:text-4xl font-serif tracking-tight text-white leading-tight">
              Strong <span className="font-semibold italic">Alumni</span> base
            </h2>
            <p className="text-zinc-800 text-sm sm:text-base leading-relaxed font-normal">
              Our alumni are entrepreneurs who have raised capital, leaders working with Founders directly in fast growing startups.
            </p>

            <button className="flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#E85C33] hover:bg-[#d44f28] text-white text-xs sm:text-sm font-semibold transition-all duration-200 shadow-lg active:scale-95">
              <span>KNOW MORE</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* ─── Right Side: Alumni Card Grid ─── */}
          <div className="lg:col-span-8 space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {alumniData.map((alumnus, index) => (
                <div
                  key={index}
                  className="relative group bg-zinc-900/90 border border-zinc-800 rounded-2xl overflow-hidden h-[230px] flex flex-col justify-between hover:border-zinc-700 transition-all duration-300 shadow-lg"
                >
                  {/* Background Profile Photo (Aligned Right) */}
                  <div className="absolute right-0 bottom-0 top-0 w-1/2 overflow-hidden opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500">
                    <div className="relative w-full h-full bg-gradient-to-l from-transparent via-zinc-900/40 to-zinc-900">
                      <Image
                        src={alumnus.photo}
                        alt={alumnus.name}
                        fill
                        className="object-cover object-top"
                      />
                    </div>
                  </div>

                  {/* Top Details (Name, Role, Company Tag) */}
                  <div className="relative z-10 p-4 space-y-2 w-3/5">
                    <h3 className="text-xs sm:text-sm font-bold text-white tracking-tight line-clamp-1">
                      {alumnus.name}
                    </h3>

                    <div className="space-y-0.5">
                      <p className="text-[11px] text-zinc-300 font-medium italic leading-tight">
                        {alumnus.role}
                      </p>
                      <span className="text-[10px] text-zinc-400 block font-light">
                        at
                      </span>
                    </div>

                    {/* Company Branding */}
                    <div className="pt-1">
                      <span className="text-xs font-black tracking-wider text-white uppercase font-sans">
                        {alumnus.company}
                      </span>
                    </div>
                  </div>

                  {/* Bottom Batch Tag */}
                  <div className="relative z-10 p-4">
                    <span className="inline-block px-2.5 py-1 rounded-md bg-zinc-800/90 border border-zinc-700/60 text-[10px] font-medium text-zinc-300">
                      {alumnus.batch}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* ─── Bottom Navigation & Pagination Indicators ─── */}
            <div className="flex items-center justify-between pt-4 border-t border-zinc-900">
              {/* Indicator Pills */}
              <div className="flex items-center gap-1.5">
                {Array.from({ length: totalPages }).map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentPage(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      currentPage === idx
                        ? "w-8 bg-[#E85C33]"
                        : "w-2 bg-zinc-800 hover:bg-zinc-700"
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
                  className="w-9 h-9 rounded-full border border-zinc-800 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white flex items-center justify-center transition-all active:scale-95"
                  aria-label="Previous page"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() =>
                    setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : 0))
                  }
                  className="w-9 h-9 rounded-full border border-zinc-800 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white flex items-center justify-center transition-all active:scale-95"
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