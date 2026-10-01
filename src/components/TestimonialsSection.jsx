import React from 'react';

const TESTIMONIAL_ITEMS = [
  {
    name: "Kavindi Perera",
    role: "Freelance Video Editor · Colombo",
    text: "The color grading module alone was worth the entire course fee. My reels now get 10× more engagement and brands are actually reaching out to me.",
    initial: "K"
  },
  {
    name: "Tharushi Fernando",
    role: "Content Creator · Kandy",
    text: "I used to spend hours on a single edit. After completing the curriculum I finish professional-quality videos in under 90 minutes.",
    initial: "T"
  },
  {
    name: "Ravindu Silva",
    role: "Social Media Manager · Galle",
    text: "The step-by-step sound design and typography lessons elevated my videos to a commercial standard overnight. Highly recommended!",
    initial: "R"
  },
  {
    name: "Kasun Jayasuriya",
    role: "YouTube Creator · Kurunegala",
    text: "I went from knowing nothing about video editing to landing my first paid client within 6 weeks. The CapCut masterclass is genuinely life-changing.",
    initial: "K"
  },
  {
    name: "Dilini Amarasinghe",
    role: "Junior Video Editor · Negombo",
    text: "Motion graphics and text animations used to feel impossible. Now I create cinematic title sequences for every project. Absolutely worth it.",
    initial: "D"
  },
  {
    name: "Chathura Jayawardena",
    role: "Videographer · Matara",
    text: "The instructor breaks down complex AI tools into simple steps. I built my entire editing business on what I learned here and I am earning more than I ever expected.",
    initial: "C"
  },
  {
    name: "Nethmi Wickramasinghe",
    role: "Editing Studio Owner · Colombo",
    text: "Getting 2 months of CapCut Pro included gave me immediate access to all premium features while building real commercial projects.",
    initial: "N"
  },
  {
    name: "Shehan Bandara",
    role: "Digital Marketer · Gampaha",
    text: "The real client project modules gave me a portfolio that impressed agencies. I got hired full-time two months after finishing the course.",
    initial: "S"
  }
];

export default function TestimonialsSection() {
  return (
    <div id="testimonials" className="w-full py-16 sm:py-20 bg-white text-neutral-900 select-none reveal-on-scroll">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-neutral-900 leading-[1.1]">
            Real Results from Real Students.
          </h2>
          <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
            Over 5,000 students have transformed their editing skills — here is what they have to say.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {TESTIMONIAL_ITEMS.map((item, idx) => (
            <div
              key={idx}
              className="bg-neutral-50 rounded-3xl p-6 border border-neutral-200 flex flex-col justify-between space-y-4 hover:border-neutral-300 transition-all shadow-sm"
            >
              <div className="space-y-3">
                <div className="text-amber-400 text-sm tracking-tighter font-mono">
                  ★★★★★
                </div>
                <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed font-normal italic">
                  "{item.text}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-3 border-t border-neutral-200">
                <div className="w-9 h-9 rounded-full bg-black text-white font-bold text-sm flex items-center justify-center shrink-0">
                  {item.initial}
                </div>
                <div>
                  <h4 className="font-bold text-neutral-900 text-sm leading-tight">{item.name}</h4>
                  <span className="text-[11px] text-neutral-500 font-medium">{item.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
