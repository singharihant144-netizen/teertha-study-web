import React from 'react';
import { X, Download } from 'lucide-react';
import type { Lecture } from '../types';

interface VideoModalProps {
  lecture: Lecture | null;
  onClose: () => void;
  onDownloadNotes: (lecture: Lecture) => void;
  isLoggedIn: boolean;
}

export const VideoModal: React.FC<VideoModalProps> = ({
  lecture,
  onClose,
  onDownloadNotes,
  isLoggedIn,
}) => {
  if (!lecture) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/90 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[95vh]">
        
        {/* Top Header */}
        <div className="flex items-center justify-between px-4 py-3 sm:px-6 sm:py-4 border-b border-slate-800 bg-slate-950">
          <div className="flex items-center gap-2 truncate mr-4">
            <span className="bg-red-600/20 text-red-400 border border-red-500/30 text-[10px] font-bold px-2 py-0.5 rounded uppercase">
              {lecture.subject}
            </span>
            <h3 className="text-sm sm:text-base font-bold text-white truncate">
              {lecture.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Embed Container (16:9 Aspect Ratio) */}
        <div className="relative w-full aspect-video bg-black">
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${lecture.youtubeId}?autoplay=1&rel=0`}
            title={lecture.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* Lecture Meta & Linked Notes */}
        <div className="p-4 sm:p-6 bg-slate-900/90 border-t border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="text-xs text-amber-400 font-semibold">{lecture.chapter}</p>
            <p className="text-sm text-slate-300 font-medium mt-0.5">
              Duration: {lecture.duration} • Views: {lecture.views || '15K+'}
            </p>
          </div>

          {lecture.hasNotes && (
            <div className="w-full sm:w-auto flex items-center gap-3">
              <button
                onClick={() => onDownloadNotes(lecture)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs sm:text-sm shadow-md transition-all active:scale-95 cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>{isLoggedIn ? 'Download Chapter Notes PDF' : 'Login to Download PDF'}</span>
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
