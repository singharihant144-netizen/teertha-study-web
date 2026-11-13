import React from 'react';
import { Building2 } from 'lucide-react';

export const CollegeTrustBar: React.FC = () => {
  const colleges = [
    { name: 'COEP Tech University', city: 'Pune', tag: 'Cutoff: 99.4+ %ile' },
    { name: 'VJTI Mumbai', city: 'Matunga', tag: 'Cutoff: 99.2+ %ile' },
    { name: 'PICT Pune', city: 'Dhankawadi', tag: 'CS/IT Cutoff: 99.1+ %ile' },
    { name: 'SPIT Mumbai', city: 'Andheri', tag: 'Cutoff: 98.9+ %ile' },
    { name: 'Walchand College', city: 'Sangli', tag: 'Govt. Aided' },
    { name: 'PCCOE Pune', city: 'Akrudi', tag: 'Autonomous' },
  ];

  return (
    <div className="border-b border-slate-800 bg-slate-950/40 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400">
            Target Top Maharashtra Engineering & Pharmacy Institutes
          </p>
        </div>

        {/* College Pills Horizontal Scroll / Grid */}
        <div className="flex items-center justify-start md:justify-center gap-3 overflow-x-auto pb-2 scrollbar-none">
          {colleges.map((col, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-colors"
            >
              <div className="w-6 h-6 rounded-md bg-blue-500/10 text-blue-400 flex items-center justify-center">
                <Building2 className="w-3.5 h-3.5" />
              </div>
              <div className="text-left">
                <p className="text-xs font-bold text-slate-200 whitespace-nowrap">
                  {col.name}
                </p>
                <p className="text-[10px] text-amber-400/90 font-medium">
                  {col.city} • {col.tag}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
