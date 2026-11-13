import React from 'react';
import { Flame, ChevronRight } from 'lucide-react';

interface NoticeBannerProps {
  onBannerClick: () => void;
}

export const NoticeBanner: React.FC<NoticeBannerProps> = ({ onBannerClick }) => {
  return (
    <div className="bg-gradient-to-r from-amber-500/10 via-blue-500/10 to-indigo-500/10 border-y border-amber-500/20 py-2.5 px-4 text-xs">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
        <div className="flex items-center gap-2">
          <span className="flex items-center gap-1 bg-amber-500 text-slate-950 font-extrabold text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wider">
            <Flame className="w-3 h-3 fill-current" />
            Live Update
          </span>
          <span className="text-slate-300 font-medium truncate max-w-xl">
            MHT-CET Chemistry Solid State & Thermodynamics Chapter Formula PDFs now uploaded! Free to download for registered students.
          </span>
        </div>
        <button
          onClick={onBannerClick}
          className="text-amber-400 hover:text-amber-300 font-semibold inline-flex items-center gap-1 transition-colors cursor-pointer"
        >
          <span>View Notes</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
