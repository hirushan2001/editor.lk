import React, { useState } from 'react';

const CARDS = [
  {
    id: 'editing-fundamentals',
    category: 'Editing Fundamentals',
    title: 'Master the Fundamentals',
    description: 'Build a strong foundation in video editing. Learn timelines, cuts, sequencing, pacing, and the essential editing principles used in professional workflows.',
    image: '/main/1/what-u-learn/master-of-funde.png',
    initial: 'E',
    link: 'https://lms.editor.lk/payment'
  },
  {
    id: 'color-grading',
    category: 'Color Grading',
    title: 'Master Color Grading',
    description: 'Transform ordinary footage into cinematic visuals. Learn how to adjust colors, contrast, and lighting to create a professional look and enhance the mood of every video.',
    image: '/main/1/what-u-learn/master-of-color.png',
    initial: 'C',
    link: 'https://lms.editor.lk/payment'
  },
  {
    id: 'music-and-sound',
    category: 'Music & Sound effects',
    title: 'The Power of Sound',
    description: 'Discover how the right audio can enhance your videos with immersive music, impactful sound effects, and balanced audio.',
    image: '/main/1/what-u-learn/power-of-sound.png',
    initial: 'M',
    link: 'https://lms.editor.lk/payment'
  },
  {
    id: 'typography',
    category: 'Typography',
    title: 'Professional Typography',
    description: 'Learn how to create professional titles, captions, and animated text that make your videos more engaging, clear, and visually appealing.',
    image: '/main/1/what-u-learn/typo.png',
    initial: 'T',
    link: 'https://lms.editor.lk/payment'
  }
];



export default function WhatYouLearn() {
  const [activeCard, setActiveCard] = useState(0);

  return (
    <div id="curriculum">
      <div id="features">
        <section className="relative w-full lg:min-h-screen pt-6 sm:pt-24 pb-8 sm:pb-16 px-4 sm:px-6 lg:px-8 bg-white text-neutral-900 rounded-t-4xl overflow-visible lg:overflow-hidden select-none">
          <div className="max-w-[1440px] mx-auto flex flex-col items-center">
            
            {/* Header */}
            <div className="text-center mt-2 md:mt-0 max-w-xl lg:max-w-4xl mx-auto mb-4 sm:mb-14 reveal-on-scroll">
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-neutral-900 leading-[1.08]">
                What You'll Learn
              </h2>
              <p className="mt-2 sm:mt-6 text-xs sm:text-lg text-neutral-600 font-normal leading-relaxed max-w-7xl mx-auto px-2">
                From beginner basics to advanced CapCut lessons, every step helps you craft cinematic, impressive videos that deliver real professional results - 100% recommended for editors ready to shine.
              </p>
            </div>

            {/* Desktop Card Accordion Stack */}
            <div className="hidden lg:flex w-full flex-col lg:flex-row gap-4 sm:gap-5 h-auto lg:h-[530px] reveal-on-scroll">
              {CARDS.map((card, index) => {
                const isActive = activeCard === index;
                return (
                  <div
                    key={card.id}
                    onClick={() => setActiveCard(index)}
                    className={`accordion-card flex-1 min-w-0 relative rounded-3xl overflow-hidden cursor-pointer flex flex-col justify-between transition-all duration-500 ease-in-out ${
                      isActive
                        ? 'flex-[3.5] bg-black text-white shadow-2xl shadow-black/50 border border-neutral-800'
                        : 'flex-1 bg-[#F3F3F5] hover:bg-[#E8E8EC] text-neutral-900 border border-neutral-200/80'
                    }`}
                  >
                    {/* Header category title */}
                    <div className="z-10 px-6 pt-6 pb-4 flex items-center justify-between">
                      <h3 className={`font-bold text-base sm:text-lg transition-colors duration-300 ${
                        isActive ? 'text-white' : 'text-neutral-900'
                      }`}>
                        {card.category}
                      </h3>
                      {!isActive && (
                        <div className="w-8 h-8 rounded-full bg-neutral-200/80 flex items-center justify-center text-neutral-700 font-bold text-sm">
                          →
                        </div>
                      )}
                    </div>

                    {/* Image Container */}
                    <div className="relative w-full flex-1 min-h-[260px] overflow-hidden">
                      <img
                        alt={card.title}
                        src={card.image}
                        className={`object-cover w-full h-full transition-transform duration-700 ${
                          isActive ? 'scale-105' : 'scale-100 filter brightness-95'
                        }`}
                      />
                    </div>

                    {/* Active Expanded Content Footer */}
                    {isActive ? (
                      <div className="z-10 p-6 flex items-end justify-between gap-3 bg-gradient-to-t from-black via-black/90 to-transparent">
                        <div className="space-y-1.5 max-w-md">
                          <h4 className="text-base sm:text-lg font-bold tracking-tight text-white">
                            {card.title}
                          </h4>
                          <p className="text-xs leading-relaxed line-clamp-2 text-neutral-300">
                            {card.description}
                          </p>
                        </div>

                        <div className="shrink-0">
                          <a
                            href={card.link}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#E8344A] to-[#FF6B35] text-white font-bold text-sm transition-all duration-300 shadow-lg hover:scale-105 w-12 h-12"
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                            </svg>
                          </a>
                        </div>
                      </div>
                    ) : (
                      <div className="z-10 p-6 flex items-end justify-between gap-3">
                        <div className="space-y-1.5 max-w-md">
                          <h4 className="text-base sm:text-lg font-bold tracking-tight text-neutral-900">
                            {card.title}
                          </h4>
                          <p className="text-xs leading-relaxed line-clamp-2 text-neutral-500">
                            {card.description}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Mobile Cards Stack View */}
            <div className="block lg:hidden w-full max-w-96 sm:max-w-md md:max-w-lg mx-auto -mt-3">
              <div className="relative w-full space-y-4">
                {CARDS.map((card, index) => (
                  <div
                    key={card.id}
                    className="rounded-3xl overflow-hidden bg-black text-white border border-white/15 flex flex-col justify-between shadow-xl"
                  >
                    <a
                      className="h-12.5 flex items-center gap-3 px-4 bg-black border-b border-white/10 shrink-0 transition-colors duration-300"
                      href={card.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="w-6 h-6 rounded-lg bg-[#FF5533] flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-black text-sm leading-none">{card.initial}</span>
                      </div>
                      <h3 className="font-bold text-sm tracking-tight text-white flex-1">{card.category}</h3>
                      <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <path d="m9 18 6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    </a>

                    <div className="relative w-full h-56 bg-neutral-950 overflow-hidden">
                      <img alt={card.title} src={card.image} className="w-full h-full object-cover object-center" />
                    </div>

                    <div className="p-5 bg-black border-t border-white/10 shrink-0 space-y-1.5">
                      <h4 className="text-base font-bold text-white tracking-tight">{card.title}</h4>
                      <p className="text-xs text-neutral-300 leading-relaxed font-normal">{card.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>
      </div>
    </div>
  );
}

