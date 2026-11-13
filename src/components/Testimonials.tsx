import React from 'react';
import { Star, Quote, CheckCircle } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: 'Prathamesh Mandlik',
      score: '99.14 Percentile',
      college: 'VJTI Mumbai (Computer Engg)',
      text: "Abhishek Sir's option form filling strategy and CAP round cutoff analysis was the exact reason I got into VJTI. The mistake-avoidance tips in his videos are unmatched.",
      exam: 'MHT-CET 2024',
    },
    {
      name: 'Sanjana Kadam',
      score: '98.82 Percentile',
      college: 'COEP Tech, Pune',
      text: "Chemistry Solid State and Thermodynamics were my weakest chapters. The one-shot revision lectures and formula sheets helped me score full marks in physical chemistry.",
      exam: 'HSC + CET 2024',
    },
    {
      name: 'Rohit Deshmukh',
      score: '98.45 Percentile',
      college: 'PICT Pune (IT)',
      text: "Whenever I was stuck on complicated organic conversion reactions, I messaged on WhatsApp and Abhishek Sir personally guided me. Genuinely grateful!",
      exam: 'MHT-CET 2024',
    },
  ];

  return (
    <section className="py-14 sm:py-20 border-b border-slate-800 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold mb-3">
            <CheckCircle className="w-3.5 h-3.5" />
            <span>Real Student Experiences</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Hall of Fame: Aspirants to Engineers
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2">
            See how Abhishek Sir's teaching and admission counseling transformed MHT-CET journeys.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="relative bg-slate-900/60 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-slate-700 transition-all shadow-lg"
            >
              <div>
                {/* 5-star rating */}
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <Quote className="w-8 h-8 text-blue-500/20 mb-2" />
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic">
                  "{rev.text}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 font-bold text-sm">
                  {rev.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-white leading-tight">
                    {rev.name}
                  </h4>
                  <p className="text-[11px] text-amber-400 font-semibold mt-0.5">
                    {rev.score} • {rev.college}
                  </p>
                  <p className="text-[10px] text-slate-400 font-medium">
                    {rev.exam}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
