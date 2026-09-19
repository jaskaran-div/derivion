"use client";

import React from "react";
import Image from "next/image";

export default function StudentSuccess() {
    const companies = [
        { name: "J.P. Morgan", logo: "https://isftglobal.com/wp-content/uploads/2026/09/jpmc-logo.svg" },
        { name: "Barclays", logo: "https://isftglobal.com/wp-content/uploads/2026/09/Barclays-Logo-scaled.png" },
        { name: "Bank of England", logo: "https://isftglobal.com/wp-content/uploads/2026/09/Bank-of-England-logo.png" },
        { name: "Bank of America", logo: "https://isftglobal.com/wp-content/uploads/2026/09/Bank_of_America-Logo.svg" },
        { name: "eToro", logo: "https://isftglobal.com/wp-content/uploads/2026/09/Etoro_logo.svg" },
        { name: "Macquarie", logo: "https://isftglobal.com/wp-content/uploads/2026/09/macquare-logo-Photoroom.png" },
        { name: "JB Drax Honoré", logo: "https://isftglobal.com/wp-content/uploads/2026/09/jbdrax-logo.png" },
        { name: "Future First", logo: "https://isftglobal.com/wp-content/uploads/2026/09/future-first.png" },
        { name: "Paragon", logo: "https://isftglobal.com/wp-content/uploads/2026/09/paragon-logo.png" },
        { name: "Rathbones", logo: "https://isftglobal.com/wp-content/uploads/2026/09/rathbones-logo.png" },
    ];

    return (
        <section className="w-full bg-white py-8 sm:py-12 px-4 sm:px-6 lg:px-8 border-y border-[#D9D9D9]">
            <div className="max-w-7xl mx-auto space-y-4 sm:space-y-6">
                {/* Section Subheading */}
                <div className="text-center space-y-1">
                    <p className="text-xs sm:text-sm font-semibold tracking-widest text-[#737373] uppercase">
                        Alumni &amp; Student Placements
                    </p>
                    <h2
                        className="text-lg sm:text-2xl font-bold text-[#000000] tracking-tight"
                        style={{ fontFamily: "var(--font-serif)" }}
                    >
                        Where Our Graduates Work
                    </h2>
                </div>

                {/* Logo Container with Gradient Mask & Pause-On-Hover */}
                <div className="group relative mt-6 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                    <div className="flex w-max items-center justify-around gap-7 sm:gap-12 md:gap-16 animate-marquee group-hover:[animation-play-state:paused] py-4">
                        {/* First Set of Logos */}
                        {companies.map((company, index) => (
                            <div
                                key={`logo-1-${index}`}
                                className="flex items-center justify-center grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer h-16 sm:h-20 md:h-24 px-4 sm:px-5"
                            >
                                <Image
                                    src={company.logo}
                                    alt={`${company.name} logo`}
                                    width={220}
                                    height={90}
                                    className="h-12 w-auto max-w-[180px] sm:h-16 sm:max-w-[220px] md:h-20 md:max-w-[260px] object-contain"
                                />
                            </div>
                        ))}

                        {/* Duplicated Set for Seamless Infinite Loop */}
                        {companies.map((company, index) => (
                            <div
                                key={`logo-2-${index}`}
                                className="flex items-center justify-center grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer h-16 sm:h-20 md:h-24 px-4 sm:px-5"
                            >
                                <Image
                                    src={company.logo}
                                    alt={`${company.name} logo`}
                                    width={220}
                                    height={90}
                                    className="h-12 w-auto max-w-[180px] sm:h-16 sm:max-w-[220px] md:h-20 md:max-w-[260px] object-contain"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}