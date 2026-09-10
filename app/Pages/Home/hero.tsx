"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
    return (
        <section className="w-full bg-white max-w-7xl mx-auto px-4 sm:px-8 py-6">
            {/* ─── Top Hero Media Frame ─── */}
            <div className="relative w-full h-[360px] sm:h-[420px] md:h-[480px] rounded-[32px] sm:rounded-[40px] overflow-hidden bg-zinc-200 shadow-sm">
                {/* Main Background Image (Replace '/hero-classroom.jpg' with your image) */}
                <iframe
                    className="absolute inset-0 w-full h-full object-cover"
                    src="https://www.youtube.com/embed/qUfVSh4eaDE?autoplay=1&mute=1&loop=1&playlist=qUfVSh4eaDE&controls=0&rel=0&modestbranding=1"
                    title="Derivion Hero Video"
                    allow="encrypted-media"
                    allowFullScreen
                />

                {/* Bottom-Right Inverted Curved Frame Box */}
                <div className="absolute bottom-0 right-0 bg-white pt-6 pl-6 sm:pt-8 sm:pl-8 rounded-tl-[32px] sm:rounded-tl-[40px] max-w-full sm:max-w-xl md:max-w-2xl">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pr-2">
                        <p className="text-xs sm:text-sm text-zinc-600 font-normal leading-relaxed max-w-md">
                            We are committed to inspiring minds and igniting change through
                            transformative education, groundbreaking research, and a
                            dedication to social responsibility.
                        </p>

                        <button className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#E85C33] hover:bg-[#d44f28] text-white text-xs sm:text-sm font-medium transition-all duration-200 shrink-0 shadow-md hover:shadow-lg active:scale-95">
                            <span>Learn More</span>
                            <ArrowUpRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>

            {/* ─── Bottom Content Row: Title Left + Stats Right ─── */}
            <div className="mt-10 md:mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left Heading */}
                <div className="lg:col-span-6 space-y-2">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-zinc-900 tracking-tight leading-[1.1]">
                        Inspiring Minds, <br />
                        Igniting Change at <br />
                        Derivion
                    </h1>
                </div>

                {/* Right Stats: 3 Overlapping Circles */}
                <div className="lg:col-span-6 flex items-center justify-start lg:justify-center -space-x-4 overflow-x-auto py-2">
                    {/* Stat Circle 1 */}
                    {/* <div className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full border border-zinc-200 bg-white/80 backdrop-blur-sm flex flex-col items-center justify-center text-center p-3 shrink-0 shadow-sm hover:z-10 transition-transform duration-300 hover:scale-105">
            <span className="text-2xl sm:text-3xl font-bold text-[#E85C33]">
              85+
            </span>
            <span className="text-[10px] sm:text-xs text-zinc-500 font-medium mt-1 leading-tight max-w-[80px]">
              Years of Experiences
            </span>
          </div> */}

                    {/* Stat Circle 2 */}
                    <div className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full border border-zinc-200 bg-white/80 backdrop-blur-sm flex flex-col items-center justify-center text-center p-3 shrink-0 shadow-sm hover:z-10 transition-transform duration-300 hover:scale-105">
                        <span className="text-2xl sm:text-3xl font-bold text-[#E85C33]">
                            50+
                        </span>
                        <span className="text-[10px] sm:text-xs text-zinc-500 font-medium mt-1 leading-tight max-w-[80px]">
                            Success Students
                        </span>
                    </div>

                    {/* Stat Circle 3 */}
                    <div className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full border border-zinc-200 bg-white/80 backdrop-blur-sm flex flex-col items-center justify-center text-center p-3 shrink-0 shadow-sm hover:z-10 transition-transform duration-300 hover:scale-105">
                        <span className="text-2xl sm:text-3xl font-bold text-[#E85C33]">
                            10+
                        </span>
                        <span className="text-[10px] sm:text-xs text-zinc-500 font-medium mt-1 leading-tight max-w-[80px]">
                            Study Programs
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}