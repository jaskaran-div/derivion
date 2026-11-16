
"use client";

import Image from "next/image";
import AnimateOnScroll from "@/app/components/AnimateOnScroll";

export default function Masters() {
  const cards = [
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
    <section
      id="disciplines"
      className="w-full bg-white text-[#000000] py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 border-t border-[#D9D9D9]"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section heading */}
        <AnimateOnScroll animation="fade-up" duration={700}>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5 mb-12 lg:mb-16">

            <div className="max-w-xl">
              <p className="text-[11px] tracking-[0.25em] uppercase text-[#C20F42] font-semibold mb-4">
                The people behind the learning
              </p>

              <h2
                className="text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[#000000] leading-[1.08]"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Meet our{" "}
                <span className="italic font-normal text-[#C20F42]">
                  mentors.
                </span>
              </h2>
            </div>

            <p className="text-[#737373] text-sm sm:text-base leading-relaxed max-w-md lg:pb-1">
              Our mentors bring together practical experience in finance,
              digital systems, AI literacy and cyber awareness, helping
              learners build confidence, critical thinking and responsible
              decision-making.
            </p>

          </div>
        </AnimateOnScroll>

        {/* Mentor cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-5">

          {cards.map((card, i) => (
            <AnimateOnScroll
              key={card.id}
              animation="fade-up"
              delay={i * 100}
              duration={700}
              className="min-w-0"
            >
              <article className="group h-full">

                {/* Portrait */}
                <a
                  href={card.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${card.name} on LinkedIn (opens in a new tab)`}
                  className="block"
                >
                  <div className="relative aspect-[4/4.4] w-full overflow-hidden bg-[#F1F1F1]">

                    <Image
                      src={card.image}
                      alt={`${card.name}, ${card.title}`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    />

                    {/* LinkedIn action */}
                    <div className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#C20F42] shadow-sm transition-all duration-300 group-hover:bg-[#C20F42] group-hover:text-white">
                      <svg
                        viewBox="0 0 24 24"
                        className="h-[17px] w-[17px]"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M19 0h-14C2.239 0 0 2.239 0 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5V5c0-2.761-2.239-5-5-5zM7.12 20H3.56V9h3.56v11zM5.34 7.5a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM20 20h-3.56v-5.36c0-1.28-.02-2.93-1.79-2.93-1.79 0-2.06 1.4-2.06 2.84V20H9.03V9h3.42v1.5h.05c.48-.86 1.64-1.77 3.37-1.77 3.6 0 4.27 2.37 4.27 5.45V20z" />
                      </svg>
                    </div>
                  </div>
                </a>

                {/* Profile details */}
                <div className="pt-5">

                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-[11px] font-medium tracking-[0.15em] text-[#C20F42]">
                      0{card.id}
                    </span>
                    <span className="h-px flex-1 bg-[#D9D9D9]" />
                    <span className="text-[10px] uppercase tracking-[0.16em] text-[#737373]">
                      Mentor
                    </span>
                  </div>

                  <a
                    href={card.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <h3 className="text-xl sm:text-[22px] leading-tight font-medium tracking-tight text-[#000000] transition-colors duration-300 group-hover:text-[#C20F42]">
                      {card.name}
                    </h3>
                  </a>

                  <p className="text-sm text-[#737373] mt-2 leading-relaxed">
                    {card.title}
                  </p>

                </div>
              </article>
            </AnimateOnScroll>
          ))}

        </div>
      </div>
    </section>
  );
}
