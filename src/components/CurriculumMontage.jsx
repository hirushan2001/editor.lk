import React from 'react';

export default function CurriculumMontage() {
  return (
    <div className="relative w-full py-16 bg-[#08080A] reveal-on-scroll">
      <div className="relative w-full overflow-hidden bg-neutral-950 flex flex-col items-center justify-center border-b border-white/5 min-h-[360px] sm:min-h-[440px]">
        
        {/* Background Montage banner */}
        <div className="absolute inset-0 w-full h-full opacity-90">
          <img
            alt="CapCut Masterclass Curriculum Background"
            className="object-cover object-top w-full h-full"
            src="/main/1/footer/ui-montage.png"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0C0C0C] via-black/40 to-[#0C0C0C] pointer-events-none"></div>

        {/* Text Foreground */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center space-y-4">
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight drop-shadow-2xl">
            All You’ll Learn Here.
          </h2>
          <p className="text-neutral-200 text-sm sm:text-base max-w-xl mx-auto leading-relaxed drop-shadow-lg font-medium">
            This is our complete curriculum - every skill, tool, and lesson from basics to mastery.
          </p>
          <div className="pt-4 flex justify-center">
            <a
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#E8344A] to-[#FF6B35] hover:from-orange-600 hover:to-red-600 text-white font-bold text-sm sm:text-base transition-all duration-300 shadow-lg shadow-orange-500/25 hover:scale-105 cursor-pointer select-none px-7 py-3 w-44 h-12 text-base shadow-2xl"
              href="https://lms.editor.lk/payment"
              target="_blank"
              rel="noreferrer"
            >
              <span>Enroll Now</span>
              <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Grid of UI montage feature cards */}
      <div className="relative w-full bg-[#08080A] pt-6 pb-4 sm:pt-8 sm:pb-6">
        <div className="w-full max-w-[1660px] mx-auto px-2 sm:px-6">
          <div className="grid grid-cols-3 lg:grid-cols-6 gap-1.5 sm:gap-3.5 w-full items-start">
            
            {/* Col 1 */}
            <div className="flex flex-col gap-2 sm:gap-3">
              <div className="relative h-24 sm:h-50 w-full shrink-0 rounded-xl sm:rounded-2xl overflow-hidden group bg-neutral-900 border border-white/10 shadow-md">
                <img alt="Key Frame" className="object-cover object-bottom transition-transform duration-500 group-hover:scale-105 w-full h-full" src="/main/1/footer/keyframe2.png" />
              </div>
              <div className="relative h-16 sm:h-28 w-full shrink-0 rounded-xl sm:rounded-2xl overflow-hidden group bg-neutral-900 border border-white/10 shadow-md">
                <img alt="Speed Panel" className="object-cover object-bottom transition-transform duration-500 group-hover:scale-105 w-full h-full" src="/main/1/footer/speed pannel.png" />
              </div>
              <div className="relative h-28 sm:h-52 w-full shrink-0 rounded-xl sm:rounded-2xl overflow-hidden group bg-neutral-900 border border-white/10 shadow-md">
                <img alt="Frame 27" className="object-cover object-bottom transition-transform duration-500 group-hover:scale-105 w-full h-full" src="/main/1/footer/basic.png" />
              </div>
            </div>

            {/* Col 2 */}
            <div className="flex flex-col gap-2 sm:gap-3">
              <div className="relative h-44 sm:h-88 w-full shrink-0 rounded-xl sm:rounded-2xl overflow-hidden group bg-neutral-900 border border-white/10 shadow-md">
                <img alt="Compound Clip" className="object-cover object-bottom transition-transform duration-500 group-hover:scale-105 w-full h-full" src="/main/1/footer/compound.png" />
              </div>
              <div className="relative h-24 sm:h-45 w-full shrink-0 rounded-xl sm:rounded-2xl overflow-hidden group bg-neutral-900 border border-white/10 shadow-md">
                <img alt="Camera Moments" className="object-cover object-bottom transition-transform duration-500 group-hover:scale-105 w-full h-full" src="/main/1/footer/camera.png" />
              </div>
            </div>

            {/* Col 3 */}
            <div className="flex flex-col gap-2 sm:gap-3">
              <div className="relative h-24 sm:h-50 w-full shrink-0 rounded-xl sm:rounded-2xl overflow-hidden group bg-neutral-900 border border-white/10 shadow-md">
                <img alt="Music" className="object-cover object-center transition-transform duration-500 group-hover:scale-105 w-full h-full" src="/main/1/footer/Frame 27.png" />
              </div>
              <div className="relative h-44 sm:h-82 w-full shrink-0 rounded-xl sm:rounded-2xl overflow-hidden group bg-neutral-900 border border-white/10 shadow-md">
                <img alt="Effects & Transitions" className="object-cover object-bottom transition-transform duration-500 group-hover:scale-105 w-full h-full" src="/main/1/footer/effect.png" />
              </div>
            </div>

            {/* Col 4 */}
            <div className="flex flex-col gap-2 sm:gap-3">
              <div className="relative h-44 sm:h-88 w-full shrink-0 rounded-xl sm:rounded-2xl overflow-hidden group bg-neutral-900 border border-white/10 shadow-md">
                <img alt="Create your own Portfolio" className="object-cover object-top transition-transform duration-500 group-hover:scale-105 w-full h-full" src="/main/1/footer/protfolio.png" />
              </div>
              <div className="relative h-24 sm:h-45 w-full shrink-0 rounded-xl sm:rounded-2xl overflow-hidden group bg-neutral-900 border border-white/10 shadow-md">
                <img alt="How to get Clients" className="object-cover object-bottom transition-transform duration-500 group-hover:scale-105 w-full h-full" src="/main/1/footer/hot to get cliens.png" />
              </div>
            </div>

            {/* Col 5 */}
            <div className="flex flex-col gap-2 sm:gap-3">
              <div className="relative h-24 sm:h-45 w-full shrink-0 rounded-xl sm:rounded-2xl overflow-hidden group bg-neutral-900 border border-white/10 shadow-md">
                <img alt="How to Price Your Edit" className="object-cover object-bottom transition-transform duration-500 group-hover:scale-105 w-full h-full" src="/main/1/footer/mucis.png" />
              </div>
              <div className="relative h-44 sm:h-88 w-full shrink-0 rounded-xl sm:rounded-2xl overflow-hidden group bg-neutral-900 border border-white/10 shadow-md">
                <img alt="Color Grading" className="object-cover object-bottom transition-transform duration-500 group-hover:scale-105 w-full h-full" src="/main/1/footer/color.png" />
              </div>
            </div>

            {/* Col 6 */}
            <div className="flex flex-col gap-2 sm:gap-3">
              <div className="relative h-44 sm:h-88 w-full shrink-0 rounded-xl sm:rounded-2xl overflow-hidden group bg-neutral-900 border border-white/10 shadow-md">
                <img alt="Real time Client Projects" className="object-cover object-bottom transition-transform duration-500 group-hover:scale-105 w-full h-full" src="/main/1/footer/how to.png" />
              </div>
              <div className="relative h-24 sm:h-45 w-full shrink-0 rounded-xl sm:rounded-2xl overflow-hidden group bg-neutral-900 border border-white/10 shadow-md">
                <img alt="Real time Client Projects" className="object-cover object-bottom transition-transform duration-500 group-hover:scale-105 w-full h-full" src="/main/1/footer/realtime.png" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
