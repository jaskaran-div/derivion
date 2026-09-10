"use client";

import React from "react";
import Image from "next/image";

export default function StudentSuccess() {
    // Replace these with your actual logo paths or keep as SVG/Text representations
    const companies = [
        { name: "JPMC", logo: "/Home/jpmc-logo.svg" },
        { name: "Barclays", logo: "/Home/barclays-logo.png" },
        { name: "bank of england", logo: "/Home/Bank-of-England-logo.png" },
        { name: "Plane", logo: "/logos/plane.svg" },
        { name: "Avenue", logo: "/logos/avenue.svg" },
        { name: "Gusto", logo: "/logos/gusto.svg" },
        { name: "Elevate", logo: "/logos/elevate.svg" },
    ];

    return (
        <section className="w-full bg-white py-10 px-4 sm:px-8 border-y border-zinc-100">
            <div className="max-w-7xl mx-auto space-y-6">
                {/* Concise Top Heading */}
                <p className="text-center text-xs sm:text-2xl font-bold  text-black uppercase">
                    Where Our Graduates Work
                </p>

                {/* Logo Container with Gradient Mask & Pause-On-Hover */}
                <div className="group relative mt-18 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
                    <div className="flex w-max items-center justify-around gap-12 sm:gap-16 animate-marquee group-hover:[animation-play-state:paused] py-2">
                        {/* First Set of Logos */}
                        {companies.map((company, index) => (
                            <div
                                key={`logo-1-${index}`}
                                className="flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer h-8"
                            >
                                {/* Image version (uncomment when you have actual image files) */}
                                {/* <Image src={company.logo} alt={company.name} width={120} height={32} className="h-7 w-auto object-contain" /> */}

                                <Image
                                    src={company.logo}
                                    alt={`${company.name} logo`}
                                    width={120}
                                    height={32}
                                    className="h-12 w-auto object-contain"
                                />
                            </div>
                        ))}

                        {/* Duplicated Set for Seamless Infinite Loop */}
                        {companies.map((company, index) => (
                            <div
                                key={`logo-2-${index}`}
                                className="flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer h-8"
                            >
                                <Image
                                    src={company.logo}
                                    alt={`${company.name} logo`}
                                    width={120}
                                    height={32}
                                    className="h-12 w-auto object-contain"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}