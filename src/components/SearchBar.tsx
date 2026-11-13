import React from 'react';
import { Search, X } from 'lucide-react';

interface SearchBarProps {
  query: string;
  onChange: (val: string) => void;
  onSelectTag: (tag: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  query,
  onChange,
  onSelectTag,
}) => {
  const quickTags = [
    'Solid State',
    'Thermodynamics',
    'CAP Cutoffs',
    'Organic Reactions',
    'Formula Sheet',
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 -mt-6 sm:-mt-8 relative z-20">
      <div className="bg-slate-900/90 border border-slate-700/80 rounded-2xl p-2.5 sm:p-3 shadow-2xl backdrop-blur-md">
        
        {/* Input container */}
        <div className="relative flex items-center">
          <Search className="absolute left-3.5 w-4 h-4 text-slate-400 pointer-events-none" />
          <input
            type="text"
            value={query}
            onChange={(e) => onChange(e.target.value)}
            placeholder="Search chapters, formula PDFs, CAP counseling topics..."
            className="w-full bg-slate-950/80 border border-slate-800 rounded-xl pl-10 pr-10 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
          />
          {query && (
            <button
              onClick={() => onChange('')}
              className="absolute right-3 p-1 text-slate-400 hover:text-white rounded-md cursor-pointer"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Quick Tag Suggestions */}
        <div className="flex items-center gap-1.5 pt-2.5 overflow-x-auto text-[11px] scrollbar-none">
          <span className="text-slate-400 text-[10px] uppercase font-bold pl-1 flex-shrink-0">
            Quick search:
          </span>
          {quickTags.map((tag) => (
            <button
              key={tag}
              onClick={() => onSelectTag(tag)}
              className="flex-shrink-0 px-2 py-0.5 rounded-lg bg-slate-800/80 hover:bg-slate-700/80 text-slate-300 hover:text-amber-400 border border-slate-700 text-[10px] font-medium transition-all cursor-pointer"
            >
              {tag}
            </button>
          ))}
        </div>

      </div>
    </div>
  );
};
