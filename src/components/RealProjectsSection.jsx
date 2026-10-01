import React from 'react';

export default function RealProjectsSection() {
  return (
    <section id="projects" className="relative w-full pt-6 sm:pt-10 pb-16 sm:pb-20 bg-white text-neutral-900 rounded-b-4xl">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 reveal-on-scroll">
          <span className="text-xs font-semibold tracking-wider uppercase text-neutral-500 bg-neutral-100 px-4 py-1.5 rounded-full border border-neutral-200">
            The Ultimate Space to Perfect Your Editing Skills.
          </span>
          
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-neutral-900 leading-[1.1]">
            Learn by building <br className="hidden sm:inline" />
            <span className="text-black">real projects.</span>
          </h2>

          <p className="text-neutral-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            From cuts to masterpieces, practice makes you perfect! With hands-on, real projects and a <strong className="text-black font-bold">FREE 1-month CapCut account</strong>, you'll unlock creativity, sharpen skills, and craft cinematic results.
          </p>
        </div>

        {/* Main Mockup Image */}
        <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-neutral-200 reveal-on-scroll">
          <img
            src="/main/1/real-projects/main.png"
            alt="Learn by building real projects - CapCut Masterclass"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* 3 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto pt-6 reveal-on-scroll">
          
          {/* Card 1 */}
          <div className="rounded-3xl bg-neutral-950 text-white p-6 space-y-4 border border-neutral-800 flex flex-col justify-between shadow-xl">
            <div className="relative h-48 rounded-2xl overflow-hidden bg-neutral-900">
              <img
                src="/main/1/real-projects/motion.png"
                alt="Motion Graphics"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-white">Motion Graphics</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Master the techniques behind engaging motion graphics, animated elements, and visual effects used in professional videos.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="rounded-3xl bg-neutral-950 text-white p-6 space-y-4 border border-neutral-800 flex flex-col justify-between shadow-xl">
            <div className="relative h-48 rounded-2xl overflow-hidden bg-neutral-900">
              <img
                src="/main/1/real-projects/before-after.png"
                alt="Before & After"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-white">Before & After</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Create stunning visuals by enhancing colors, lighting, and contrast with professional color grading techniques.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="rounded-3xl bg-neutral-950 text-white p-6 space-y-4 border border-neutral-800 flex flex-col justify-between shadow-xl">
            <div className="relative h-48 rounded-2xl overflow-hidden bg-neutral-900">
              <img
                src="/main/1/real-projects/effect.png"
                alt="Effect & Transitions"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-white">Effect & Transitions</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Learn how to use professional effects and seamless transitions to create smooth, engaging videos that capture your audience's attention.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
