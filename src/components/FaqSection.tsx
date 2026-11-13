import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Are all study materials, formula sheets, and lectures 100% free?',
      a: 'Yes, 100% of the video lectures, chapter mind maps, and formula revision PDFs uploaded on TEERTHA STUDY’S platform are free for students. There are no hidden charges.',
    },
    {
      q: 'Why do I need to log in to download the PDF notes?',
      a: 'Login is required to protect study materials from unauthorized scraping and mass link leaking on external channels. It also ensures you receive official updates, errata, and notification of new batches from Abhishek Sir.',
    },
    {
      q: 'How does the direct WhatsApp doubt support work?',
      a: 'At the bottom right of every page, you will find the "Ask your doubts directly to the sir" button. Tapping it directly opens WhatsApp to Abhishek Sir (+91 7709611681) with a pre-filled greeting. You can ask your doubts directly.',
    },
    {
      q: 'How does Abhishek Sir help in MHT-CET CAP Round counseling?',
      a: 'Abhishek Sir provides detailed guidance on college cutoffs (COEP, VJTI, PICT, SPIT), branch vs. college preference list creation, TFWS options, and avoiding common option-form filling blunders that cause students to lose seats.',
    },
    {
      q: 'Can I access this website smoothly on my mobile phone?',
      a: 'Yes! The website is engineered with a mobile-first responsive architecture. All videos, chapter notes, and doubt links work seamlessly on any smartphone or tablet without layout glitches.',
    },
  ];

  return (
    <section className="py-14 sm:py-20 border-b border-slate-800 bg-slate-950/40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-2">
            Everything you need to know about TEERTHA STUDY'S platform & resources.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="border border-slate-800 bg-slate-900/60 rounded-2xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between p-4 sm:p-5 text-left text-xs sm:text-sm font-bold text-white hover:text-amber-400 transition-colors cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 transition-transform duration-200 flex-shrink-0 ml-2 ${
                      isOpen ? 'transform rotate-180 text-amber-400' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs text-slate-300 leading-relaxed border-t border-slate-800/60 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
