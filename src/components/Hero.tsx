import React from 'react';
import { ArrowRight, BookOpen, MessageCircle, PlayCircle } from 'lucide-react';

interface HeroProps {
  onExploreLectures: () => void;
  onExploreNotes: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreLectures, onExploreNotes }) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-14 sm:pt-14 sm:pb-20 border-b border-slate-800">
      
      {/* Background ambient light */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] h-[300px] bg-gradient-to-tr from-blue-600/15 via-indigo-500/15 to-amber-500/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Top Channel Trust Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs text-slate-300 mb-6 shadow-sm">
          <span className="flex h-2 w-2 rounded-full bg-emerald-400"></span>
          <span className="font-semibold text-amber-400">TEERTHA STUDY'S Official Hub</span>
          <span className="text-slate-500">•</span>
          <span>Mentored by Abhishek Sir</span>
        </div>

        {/* Hero Title */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-tight sm:leading-none">
          Master <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-amber-400 bg-clip-text text-transparent">MHT-CET & HSC Chemistry</span> with Confidence
        </h1>

        {/* Hero Description */}
        <p className="mt-4 sm:mt-6 text-sm sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          One-shot chapter revision, high-yield formula sheets, previous year solved questions, and step-by-step engineering CAP round college admission counseling.
        </p>

        {/* Call to Actions */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 max-w-lg mx-auto">
          <button
            onClick={onExploreNotes}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-sm shadow-lg shadow-blue-600/30 transition-all cursor-pointer active:scale-95"
          >
            <BookOpen className="w-4 h-4 text-amber-300" />
            <span>Download Free PDF Notes</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={onExploreLectures}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm border border-slate-700 transition-all shadow-md active:scale-95 cursor-pointer"
          >
            <PlayCircle className="w-4 h-4 text-red-500" />
            <span>Watch One-Shots</span>
          </button>

          <a
            href="https://wa.me/917709611681?text=Hello%20Abhishek%20Sir,%20I%20want%20to%20ask%20a%20doubt%20regarding%20MHT-CET/Counseling."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 font-semibold text-sm border border-emerald-500/30 transition-all shadow-md active:scale-95"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp</span>
          </a>
        </div>

        {/* Trust Badges Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          <div className="p-3 bg-slate-900/50 rounded-xl border border-slate-800/60 text-center">
            <p className="text-xl sm:text-2xl font-black text-amber-400">50,000+</p>
            <p className="text-xs text-slate-400 mt-0.5">Students Mentored</p>
          </div>
          <div className="p-3 bg-slate-900/50 rounded-xl border border-slate-800/60 text-center">
            <p className="text-xl sm:text-2xl font-black text-blue-400">99+ %ile</p>
            <p className="text-xs text-slate-400 mt-0.5">MHT-CET Top Scorers</p>
          </div>
          <div className="p-3 bg-slate-900/50 rounded-xl border border-slate-800/60 text-center">
            <p className="text-xl sm:text-2xl font-black text-emerald-400">100% Free</p>
            <p className="text-xs text-slate-400 mt-0.5">Verified Study PDFs</p>
          </div>
          <div className="p-3 bg-slate-900/50 rounded-xl border border-slate-800/60 text-center">
            <p className="text-xl sm:text-2xl font-black text-purple-400">CAP Guidance</p>
            <p className="text-xs text-slate-400 mt-0.5">COEP, VJTI, PICT, SPIT</p>
          </div>
        </div>

      </div>
    </section>
  );
};
