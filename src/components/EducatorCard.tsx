import React from 'react';
import { BadgeCheck, MessageCircle, Sparkles, Users } from 'lucide-react';
import { YoutubeIcon } from './YoutubeIcon';

export const EducatorCard: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 border-b border-slate-800 bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950/40 border border-slate-800 p-6 sm:p-10 lg:p-12 overflow-hidden shadow-2xl">
          
          {/* Subtle ambient lighting */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            
            {/* Educator Avatar / Visual Block */}
            <div className="flex-shrink-0 text-center">
              <div className="relative mx-auto w-32 h-32 sm:w-40 sm:h-40 rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-amber-500 p-1 shadow-2xl shadow-blue-500/20">
                <div className="w-full h-full bg-slate-950 rounded-[14px] flex flex-col items-center justify-center p-3 text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-amber-400 flex items-center justify-center text-white text-2xl font-black shadow-inner">
                    AS
                  </div>
                  <span className="mt-2 text-xs font-bold text-white tracking-tight">
                    Abhishek Sir
                  </span>
                  <span className="text-[10px] text-amber-400 font-semibold">
                    Chemistry Specialist
                  </span>
                </div>
                
                {/* Verified floating badge */}
                <div className="absolute -bottom-2.5 -right-2.5 bg-emerald-500 text-slate-950 p-1.5 rounded-full shadow-lg border-2 border-slate-950 flex items-center gap-1">
                  <BadgeCheck className="w-4 h-4 fill-current" />
                </div>
              </div>

              <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-[11px] font-semibold text-slate-300">
                <Users className="w-3.5 h-3.5 text-blue-400" />
                <span>50K+ Aspirants Guided</span>
              </div>
            </div>

            {/* Educator Narrative & Credentials */}
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Mentorship & Guidance</span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                "Every student deserves conceptual clarity & honest admission guidance."
              </h2>
              
              <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
                I run <strong>TEERTHA STUDY'S</strong> with a single mission: to cut through the confusion in MHT-CET, HSC Board preparation, and complicated CAP round counseling. Through structured one-shot lectures, error-free formula sheets, and personal doubt clearing, we help you secure your dream engineering or pharmacy branch in top Maharashtra institutions.
              </p>

              {/* Action Buttons */}
              <div className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-3">
                <a
                  href="https://wa.me/917709611681?text=Hello%20Abhishek%20Sir,%20I%20am%20from%20Teertha%20Study's%20website%20and%20need%20guidance."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs sm:text-sm shadow-lg shadow-emerald-500/20 transition-all cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Ask Abhishek Sir Directly (+91 7709611681)</span>
                </a>

                <a
                  href="https://www.youtube.com/@teerthastudys"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs sm:text-sm border border-slate-700 transition-all"
                >
                  <YoutubeIcon className="w-4 h-4 text-red-500" />
                  <span>Subscribe on YouTube</span>
                </a>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
