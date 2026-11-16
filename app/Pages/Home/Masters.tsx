"use client";

import Image from "next/image";
import AnimateOnScroll from "@/app/components/AnimateOnScroll";

export default function Masters() {
  const cards: {
    id: number;
    name: string;
    title: string;
    image?: string;
    link: string;
  }[] = [
      {
        id: 1,
        name: "Neil Crammond",
        title: "Programme Curator - Head Trainer",
        image: "https://isftglobal.com/wp-content/uploads/2026/11/neil.png",
        link: "https://www.linkedin.com/in/neil-crammond-54b98116/",
      },
      {
        id: 2,
        name: "Peter Glancy",
        title: "Tutor",
        image: "https://isftglobal.com/wp-content/uploads/2026/11/peter-transparent.png",
        link: "https://www.linkedin.com/in/peterglancy/",
      },
      {
        id: 3,
        name: "Tony Andrews",
        title: "Tutor",
        image: "https://isftglobal.com/wp-content/uploads/2026/11/tony.png",
        link: "https://www.linkedin.com/in/tony-andrews-299020228/",
      },
      {
        id: 4,
        name: "Ratender Dhull",
        title: "Tutor",
        image: "https://isftglobal.com/wp-content/uploads/2026/03/Ratender-Dull-150x150-1.webp",
        link: "https://www.linkedin.com/in/ratender-dhull/",
      },
      {
        id: 5,
        name: "Varun Kumar Patel",
        title: "Tutor",
        image: "https://isftglobal.com/wp-content/uploads/2026/11/Varunkumar-Patel.png",
        link: "https://www.linkedin.com/in/vaarunkumar-patel-2b729859/",
      },
    ];

  return (
    <section id="disciplines" className="w-full bg-white text-[#000000] py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-t border-[#D9D9D9]">
      <div className="max-w-7xl mx-auto">
        {/* Header: title + intro */}
        <AnimateOnScroll animation="fade-up" duration={700} className="mb-8 sm:mb-10">
          <div className="space-y-3 max-w-xl">
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl tracking-tight text-[#000000] leading-[1.15]"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Our <span className="italic font-normal text-[#C20F42]">mentors</span>
            </h2>
            <p className="text-[#737373] text-xs sm:text-sm md:text-base leading-relaxed font-normal">
              Our mentors bring together practical experience in finance, digital systems, AI literacy, and cyber awareness, helping learners build confidence, critical thinking, and responsible decision-making.
            </p>
          </div>
        </AnimateOnScroll>

        {/* Team grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4 lg:gap-6 max-w-xs sm:max-w-none mx-auto">
          {cards.map((card, i) => (
            <AnimateOnScroll key={card.id} animation="fade-up" delay={i * 100} duration={700}>
              <a
                href={card.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${card.name} on LinkedIn (opens in a new tab)`}
                className="group block"
              >
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg bg-[#EDEDED]">
                  {card.image && (
                    <Image
                      src={card.image}
                      alt={`${card.name}, ${card.title}`}
                      fill
                      sizes="(max-width: 640px) 320px, 33vw"
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  )}
                </div>
                <div className="pt-3">
                  <h3 className="text-sm sm:text-base font-medium text-[#000000] group-hover:text-[#C20F42] transition-colors">
                    {card.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#737373]">{card.title}</p>
                </div>
              </a>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
