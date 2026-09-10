'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const ChevronDownIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
  </svg>
);

const ExternalArrowIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 17L17 7M17 7H7M17 7V17" />
  </svg>
);

// Program data structure
const categories = [
  {
    id: 'undergraduate',
    name: 'Undergraduate',
    programmes: [
      { name: 'UG in Technology & Business Management', href: '/ug/tech-business' },
      { name: 'UG in Psychology & Marketing', href: '/ug/psychology-marketing' },
      { name: 'UG in Data Science & AI', href: '/ug/data-science' },
      { name: 'UG in Finance & Economics', href: '/ug/finance' },
    ],
  },
  {
    id: 'postgraduate',
    name: 'Postgraduate',
    programmes: [
      { name: 'PG in Business Leadership', href: '/pg/leadership' },
      { name: 'PG in Digital Marketing & Growth', href: '/pg/marketing' },
      { name: 'PG in Product Management', href: '/pg/product' },
    ],
  },
  {
    id: 'executive',
    name: 'Executive',
    programmes: [
      { name: 'Executive MBA', href: '/executive/mba' },
      { name: 'Senior Leadership Program', href: '/executive/leadership' },
    ],
  },
  {
    id: 'family-business',
    name: 'Family Business',
    programmes: [
      { name: 'Next-Gen Family Business Program', href: '/family-business/next-gen' },
    ],
  },
  {
    id: 'immersions',
    name: 'Immersions',
    programmes: [
      { name: 'Global Silicon Valley Immersion', href: '/immersions/silicon-valley' },
    ],
  },
  {
    id: 'coaching',
    name: '1:1 Executive Coaching',
    programmes: [
      { name: 'Personalized Executive Mentorship', href: '/coaching/mentorship' },
    ],
  },
];

export default function Navbar() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [isProgramsOpen, setIsProgramsOpen] = useState(false);

  return (
    <div className="relative w-full">
      {/* Light Navbar Theme */}
      <nav className="w-full bg-white text-zinc-900 border-b border-zinc-200 px-8 py-4 flex items-center justify-between font-sans z-50 relative shadow-sm">
        {/* Brand Logo Section */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Logo"
            width={160}
            height={40}
            priority
            className="h-auto w-auto max-h-10 object-contain"
          />
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center space-x-8">
          {/* Programs Mega-Menu Trigger */}
          <div 
            className="group relative"
            onMouseEnter={() => setIsProgramsOpen(true)}
            onMouseLeave={() => setIsProgramsOpen(false)}
          >
            <button className={`flex items-center space-x-1.5 text-base font-medium transition-colors py-2 focus:outline-none ${isProgramsOpen ? 'text-[#E61B43]' : 'hover:text-[#E61B43]'}`}>
              <span>Programs</span>
              <ChevronDownIcon className={`w-4 h-4 transition-transform duration-200 ${isProgramsOpen ? 'rotate-180 text-[#E61B43]' : ''}`} />
            </button>

            {/* Light Mega Dropdown Panel */}
            {isProgramsOpen && (
              <div className="absolute top-full -right-20 w-[800px] bg-white text-zinc-900 shadow-xl rounded-b-xl p-10 flex border border-zinc-200 z-50 transition-all">
                {/* Left Column: Categories */}
                <div className="w-1/2 pr-8 border-r border-zinc-200">
                  <span className="text-[11px] font-semibold tracking-widest text-zinc-400 uppercase block mb-6">
                    CATEGORY
                  </span>
                  <div className="space-y-4">
                    {categories.map((cat) => {
                      const isActive = activeCategory.id === cat.id;
                      return (
                        <button
                          key={cat.id}
                          onMouseEnter={() => setActiveCategory(cat)}
                          className={`w-full text-left text-2xl flex items-center justify-between font-serif transition-colors ${
                            isActive ? 'text-[#E61B43] font-normal' : 'text-zinc-500 hover:text-zinc-900'
                          }`}
                        >
                          <span>{cat.name}</span>
                          {isActive && <span className="text-xl text-[#E61B43]">→</span>}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Right Column: Programmes */}
                <div className="w-1/2 pl-12">
                  <span className="text-[11px] font-semibold tracking-widest text-zinc-400 uppercase block mb-6">
                    PROGRAMMES
                  </span>
                  <div className="space-y-5">
                    {activeCategory.programmes.map((prog, idx) => (
                      <Link
                        key={idx}
                        href={prog.href}
                        className="group/item flex items-center space-x-2 text-base font-semibold text-zinc-800 hover:text-[#E61B43] transition-colors"
                      >
                        <span>{prog.name}</span>
                        <ExternalArrowIcon className="w-4 h-4 opacity-0 group-hover/item:opacity-100 text-[#E61B43] transition-opacity" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="group relative">
            <Link
              href="/aboutus"
              className="text-base font-medium hover:text-[#E61B43] transition-colors"
            >
              About us
            </Link>
          </div>

          {/* Primary Action Button styled with the Candlestick Red theme color */}
          <button className="bg-[#E61B43] hover:bg-[#c91236] text-white rounded-full px-6 py-2.5 text-sm font-medium transition-all duration-200 tracking-wider shadow-sm">
            Contact us
          </button>
        </div>
      </nav>
    </div>
  );
}