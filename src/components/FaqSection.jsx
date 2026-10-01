import React, { useState } from 'react';

const FAQS = [
  {
    num: "01",
    question: "Does CapCut work for long-format videos too?",
    answer: "Yes! CapCut handles long-form YouTube videos, podcasts, and documentaries seamlessly with advanced multi-track timelines, proxies, and audio editing tools."
  },
  {
    num: "02",
    question: "How long do I have access to this course?",
    answer: "You get 4 months of full access to all course modules, practical project files, and content updates during your access period, so you can learn at your own pace."
  },
  {
    num: "03",
    question: "Do I need any prior editing experience?",
    answer: "No prior experience is needed. The course begins with editing fundamentals and guides you step-by-step to advanced cinematic techniques."
  },
  {
    num: "04",
    question: "Can I learn CapCut on Windows or Mac?",
    answer: "Yes! The masterclass covers CapCut Desktop (Windows/Mac) with complete step-by-step practical workflows."
  },
  {
    num: "05",
    question: "Is the free CapCut Pro account included?",
    answer: "Yes, upon enrolling in the Masterclass, you will receive 01 months of full CapCut Pro access included with your student account."
  }
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div id="faq" className="w-full py-16 sm:py-20 bg-white text-neutral-900 border-t border-neutral-200 select-none reveal-on-scroll">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-neutral-900 leading-[1.1]">
            Frequently Asked Questions
          </h2>
          <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
            Everything you need to know before joining the CapCut Masterclass. Get started with professional mobile and desktop editing today.
          </p>
        </div>

        {/* Accordion List */}
        <div className="max-w-3xl mx-auto space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-neutral-200 bg-neutral-50 overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-sm font-bold text-neutral-400">{faq.num}</span>
                    <span className="font-bold text-neutral-900 text-base sm:text-lg">{faq.question}</span>
                  </div>
                  <div className="w-7 h-7 rounded-full bg-white border border-neutral-200 flex items-center justify-center text-neutral-600 shrink-0">
                    {isOpen ? '−' : '+'}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-xs sm:text-sm text-neutral-600 leading-relaxed border-t border-neutral-200/80 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
