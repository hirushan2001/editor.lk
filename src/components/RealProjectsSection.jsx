

import React from 'react';

export default function RealProjectsSection() {
  return (
    <section id="projects" className="relative w-full pt-6 sm:pt-10 pb-16 sm:pb-20 bg-white text-neutral-900 rounded-b-4xl">
      <div className="max-w-340 2xl:max-w-408 mx-auto px-4 sm:px-6 lg:px-8 text-center mb-6 sm:mb-14 reveal-on-scroll">
        <p className="text-xs sm:text-lg text-[#4B5563] tracking-normal sm:tracking-wide font-normal mb-1.5 sm:mb-0">
          The Ultimate Space to Perfect Your Editing Skills.
        </p>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-neutral-900 leading-[1.1]">
          Learn by building <br className="sm:hidden" /> real projects.
        </h2>
        <p className="mt-2.5 sm:mt-3 text-xs sm:text-lg text-[#4B5563] max-w-2xl mx-auto leading-relaxed">
          From cuts to masterpieces, practice makes you perfect!
        </p>
      </div>

      {/* Main Showcase Image */}
      <div className="w-full flex justify-center overflow-hidden px-6 reveal-on-scroll">
        <div className="real-projects-img relative w-full mx-auto aspect-video max-h-165 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-neutral-200">
          <img
            src="/main/1/real-projects/main.png"
            alt="Learn by building real projects - CapCut Masterclass"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>

      <div className="max-w-350 2xl:max-w-408 mx-auto px-4 sm:px-6 lg:px-8 mt-6 sm:mt-14 text-center sm:text-left reveal-on-scroll">
        <p className="text-xs sm:text-base text-[#4B5563] leading-relaxed max-w-xl mx-auto sm:mx-0">
          With hands-on, real projects and a <strong className="text-neutral-900 font-bold">FREE 1-month CapCut account</strong>, you'll unlock creativity, sharpen skills, and craft cinematic results.
        </p>
      </div>

      {/* 3 Project Feature Cards */}
      <div className="max-w-350 2xl:max-w-408 mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 reveal-on-scroll">
        
        {/* Card 1 */}
        <div className="project-card flex flex-col gap-5 group cursor-pointer">
          <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden shadow-md border border-neutral-200">
            <img
              src="/main/1/real-projects/motion.png"
              alt="Motion Graphics"
              className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-bold text-neutral-900 tracking-tight">Motion Graphics</h3>
            <p className="mt-1.5 text-sm text-[#4B5563] leading-relaxed line-clamp-3">
              Master the techniques behind engaging motion graphics, animated elements, and visual effects used in professional videos.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="project-card flex flex-col gap-5 group cursor-pointer">
          <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden shadow-md border border-neutral-200">
            <img
              src="/main/1/real-projects/before-after.png"
              alt="Before & After"
              className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-bold text-neutral-900 tracking-tight">Before & After</h3>
            <p className="mt-1.5 text-sm text-[#4B5563] leading-relaxed line-clamp-3">
              Create stunning visuals by enhancing colors, lighting, and contrast with professional color grading techniques.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="project-card flex flex-col gap-5 group cursor-pointer">
          <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden shadow-md border border-neutral-200">
            <img
              src="/main/1/real-projects/effect.png"
              alt="Effect & Transitions"
              className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-bold text-neutral-900 tracking-tight">Effect & Transitions</h3>
            <p className="mt-1.5 text-sm text-[#4B5563] leading-relaxed line-clamp-3">
              Learn how to use professional effects and seamless transitions to create smooth, engaging videos that capture your audience's attention.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

