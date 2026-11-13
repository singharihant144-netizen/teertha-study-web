import React, { useState } from 'react';
import type { Lecture } from '../types';
import { Play, FileText, Clock, Eye } from 'lucide-react';
import { YoutubeIcon } from './YoutubeIcon';

interface LecturesSectionProps {
  lectures: Lecture[];
  onOpenVideo: (lecture: Lecture) => void;
  onDownloadNotes: (lecture: Lecture) => void;
  isLoggedIn: boolean;
}

export const LecturesSection: React.FC<LecturesSectionProps> = ({
  lectures,
  onOpenVideo,
  onDownloadNotes,
  isLoggedIn,
}) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'mht-cet' | 'hsc-board' | 'counseling'>('all');

  const filteredLectures = activeFilter === 'all'
    ? lectures
    : lectures.filter((l) => l.category === activeFilter);

  return (
    <section id="lectures" className="py-14 sm:py-20 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold mb-3">
              <YoutubeIcon className="w-3.5 h-3.5 text-red-500" />
              <span>Direct YouTube Channel Content</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Featured Video Lectures & Revision
            </h2>
            <p className="text-sm sm:text-base text-slate-400 mt-2 max-w-2xl">
              Distraction-free learning directly embedded from Abhishek Sir's YouTube channel (@teerthastudys).
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'All Content' },
              { id: 'mht-cet', label: 'MHT-CET' },
              { id: 'hsc-board', label: 'HSC Boards' },
              { id: 'counseling', label: 'CAP Counseling' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id as any)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  activeFilter === tab.id
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                    : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Lectures Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredLectures.map((lec) => (
            <div
              key={lec.id}
              className="group bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/5"
            >
              <div>
                {/* Thumbnail Preview Area */}
                <div
                  onClick={() => onOpenVideo(lec)}
                  className="relative aspect-video bg-slate-950 flex items-center justify-center cursor-pointer overflow-hidden"
                >
                  {/* Subtle placeholder gradient banner */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-slate-950 via-slate-900 to-indigo-950/60" />
                  
                  {/* Subject badge top-left */}
                  <span className="absolute top-3 left-3 z-10 text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-black/70 text-amber-400 border border-amber-400/20 backdrop-blur-sm">
                    {lec.subject}
                  </span>

                  {/* Duration badge bottom-right */}
                  <span className="absolute bottom-3 right-3 z-10 text-[10px] font-semibold px-2 py-0.5 rounded bg-black/80 text-white flex items-center gap-1">
                    <Clock className="w-3 h-3 text-slate-400" />
                    <span>{lec.duration}</span>
                  </span>

                  {/* Play Button Icon */}
                  <div className="relative z-10 w-12 h-12 rounded-full bg-red-600 group-hover:bg-red-500 text-white flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110">
                    <Play className="w-5 h-5 fill-current ml-0.5" />
                  </div>
                </div>

                {/* Details */}
                <div className="p-5">
                  <p className="text-xs font-semibold text-amber-400/90 mb-1">
                    {lec.chapter}
                  </p>
                  <h3
                    onClick={() => onOpenVideo(lec)}
                    className="font-bold text-white text-base leading-snug line-clamp-2 hover:text-amber-400 transition-colors cursor-pointer"
                  >
                    {lec.title}
                  </h3>

                  <div className="mt-3 flex items-center gap-3 text-xs text-slate-400">
                    <span className="flex items-center gap-1">
                      <Eye className="w-3.5 h-3.5 text-slate-500" />
                      <span>{lec.views || '12.5K'} views</span>
                    </span>
                    <span>•</span>
                    <span>Free Video Lesson</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-5 pt-0 border-t border-slate-800/80 flex items-center gap-2 mt-2">
                <button
                  onClick={() => onOpenVideo(lec)}
                  className="flex-1 py-2 px-3 rounded-xl bg-blue-600/10 hover:bg-blue-600/20 text-blue-400 border border-blue-500/20 text-xs font-semibold transition-all cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Watch Lecture</span>
                </button>

                {lec.hasNotes && (
                  <button
                    onClick={() => onDownloadNotes(lec)}
                    className="py-2 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-300 border border-slate-700 text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5"
                    title={isLoggedIn ? 'Download PDF Notes' : 'Login to download notes'}
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>Notes</span>
                  </button>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
