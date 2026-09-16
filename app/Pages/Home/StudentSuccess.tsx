"use client";

import React from "react";
import Image from "next/image";

export default function StudentSuccess() {
    const companies = [
        { name: "J.P. Morgan", logo: "/Home/jpmc-logo.svg" },
        { name: "Barclays", logo: "/Home/Barclays-Logo.png" },
        { name: "Bank of England", logo: "/Home/Bank-of-England-logo.png" },
        { name: "Bank of America", logo: "/Home/Bank_of_America-Logo.svg" },
        { name: "eToro", logo: "/Home/etoro-logo.png" },
        { name: "Macquarie", logo: "/Home/macquare-logo.webp" },
        { name: "JB Drax Honoré", logo: "/Home/jbdrax-logo.png" },
        { name: "Future First", logo: "/Home/future-first.png" },
        { name: "Paragon", logo: "/Home/paragon-logo.png" },
        { name: "Rathbones", logo: "/Home/rathbones logo.png" },
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
                    <div className="flex w-max items-center justify-around gap-8 sm:gap-14 animate-marquee group-hover:[animation-play-state:paused] py-2">
                        {/* First Set of Logos */}
                        {companies.map((company, index) => (
                            <div
                                key={`logo-1-${index}`}
                                className="flex items-center justify-center grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer h-8 sm:h-10 px-2"
                            >
                                <Image
                                    src={company.logo}
                                    alt={`${company.name} logo`}
                                    width={120}
                                    height={40}
                                    className="h-7 sm:h-9 w-auto max-w-[110px] sm:max-w-[140px] object-contain"
                                />
                            </div>
                        ))}

                        {/* Duplicated Set for Seamless Infinite Loop */}
                        {companies.map((company, index) => (
                            <div
                                key={`logo-2-${index}`}
                                className="flex items-center justify-center grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer h-8 sm:h-10 px-2"
                            >
                                <Image
                                    src={company.logo}
                                    alt={`${company.name} logo`}
                                    width={120}
                                    height={40}
                                    className="h-7 sm:h-9 w-auto max-w-[110px] sm:max-w-[140px] object-contain"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}