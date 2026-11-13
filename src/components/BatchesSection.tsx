import React from 'react';
import type { Batch } from '../types';
import { CheckCircle2, PlayCircle, Sparkles } from 'lucide-react';

interface BatchesSectionProps {
  batches: Batch[];
  onSelectBatch: (batchId: string) => void;
}

export const BatchesSection: React.FC<BatchesSectionProps> = ({
  batches,
  onSelectBatch,
}) => {
  return (
    <section id="batches" className="py-14 sm:py-20 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Curated Study Programs</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Explore Dedicated Batches & Guidance
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2">
            Free structured preparation, one-shots, and admission counseling roadmaps designed for Maharashtra aspirants.
          </p>
        </div>

        {/* Batches Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {batches.map((batch) => (
            <div
              key={batch.id}
              className="relative bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 hover:border-slate-700 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/10"
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    {batch.badge}
                  </span>
                  <span className="text-xs font-semibold text-slate-400">
                    {batch.targetYear}
                  </span>
                </div>

                {/* Title & Tagline */}
                <h3 className="text-xl font-bold text-white tracking-tight mb-2">
                  {batch.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
                  {batch.tagline}
                </p>

                {/* Batch Highlights */}
                <div className="space-y-2.5 py-4 border-t border-slate-800 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>{batch.totalLectures}+ Curated Video Lectures</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>{batch.totalNotes}+ Downloadable PDFs & Mindmaps</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>Direct Doubt Support via WhatsApp</span>
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="mt-6 pt-4 border-t border-slate-800">
                <button
                  onClick={() => onSelectBatch(batch.id)}
                  className="w-full py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700/80 text-white font-semibold text-xs sm:text-sm border border-slate-700 flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <PlayCircle className="w-4 h-4 text-amber-400" />
                  <span>Start Learning for Free</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
