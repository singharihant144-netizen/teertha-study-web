import React, { useState } from 'react';
import { Download, Lock, CheckCircle, Shield, AlertCircle, Sparkles } from 'lucide-react';
import type { StudyMaterial, StudentProfile } from '../types';

interface NotesSectionProps {
  materials: StudyMaterial[];
  student: StudentProfile | null;
  onRequireAuth: () => void;
}

export const NotesSection: React.FC<NotesSectionProps> = ({
  materials,
  student,
  onRequireAuth,
}) => {
  const [downloadingId, setDownloadingId] = useState<string | null>(null);
  const [downloadSuccessId, setDownloadSuccessId] = useState<string | null>(null);

  const handleDownloadClick = (material: StudyMaterial) => {
    if (!student) {
      onRequireAuth();
      return;
    }

    // Simulate secure signed URL creation and download trigger
    setDownloadingId(material.id);
    setTimeout(() => {
      setDownloadingId(null);
      setDownloadSuccessId(material.id);

      // Trigger dummy download in browser
      const element = document.createElement('a');
      const file = new Blob(
        [
          `TEERTHA STUDY'S - Official Study Material\nSubject: ${material.subject}\nChapter: ${material.chapter}\nMentored by Abhishek Sir\nSupport: +91 7709611681\nStudent: ${student.fullName} (${student.phone})\nGenerated with 60-second temporary secure token.\nVisit: https://www.youtube.com/@teerthastudys`
        ],
        { type: 'text/plain' }
      );
      element.href = URL.createObjectURL(file);
      element.download = `${material.title.replace(/\s+/g, '_')}_TeerthaStudy.txt`;
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);

      setTimeout(() => setDownloadSuccessId(null), 4000);
    }, 1200);
  };

  return (
    <section id="notes" className="py-14 sm:py-20 border-b border-slate-800 bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Verified High-Yield Resources</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Study Notes & Formula Sheets
            </h2>
            <p className="text-sm sm:text-base text-slate-400 mt-2 max-w-2xl">
              Free chapter summaries, formula mind maps, and official CAP round counseling documents created by Abhishek Sir.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-400 bg-slate-900 border border-slate-800 px-3 py-2 rounded-xl">
            <Shield className="w-4 h-4 text-amber-400" />
            <span>Secure 60s Expiring Signed Token Protection</span>
          </div>
        </div>

        {/* Notes Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {materials.map((mat) => {
            const isDownloading = downloadingId === mat.id;
            const isSuccess = downloadSuccessId === mat.id;

            return (
              <div
                key={mat.id}
                className="group relative bg-slate-900/80 border border-slate-800 hover:border-slate-700 rounded-2xl p-5 flex flex-col justify-between transition-all duration-200 hover:shadow-xl hover:shadow-blue-500/5"
              >
                <div>
                  {/* Badge */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-extrabold tracking-wider uppercase px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20">
                      {mat.badge || mat.category}
                    </span>
                    <span className="text-[11px] text-slate-400 font-medium">
                      {mat.fileSize}
                    </span>
                  </div>

                  {/* Title & Chapter */}
                  <h3 className="font-bold text-white text-base leading-snug line-clamp-2 group-hover:text-amber-400 transition-colors">
                    {mat.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-2 line-clamp-1">
                    {mat.chapter}
                  </p>

                  <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                    <span>{mat.pages} Pages</span>
                    <span>{mat.downloadCount.toLocaleString()} Downloads</span>
                  </div>
                </div>

                {/* Download CTA with Lock / Unlock state */}
                <div className="mt-5">
                  <button
                    onClick={() => handleDownloadClick(mat)}
                    disabled={isDownloading}
                    className={`w-full py-2.5 px-3 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer ${
                      student
                        ? isSuccess
                          ? 'bg-emerald-600 text-white'
                          : 'bg-blue-600 hover:bg-blue-500 text-white shadow-md shadow-blue-600/25'
                        : 'bg-slate-800 hover:bg-slate-700 text-amber-300 border border-slate-700'
                    }`}
                  >
                    {isDownloading ? (
                      <>
                        <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Generating Secure Link...</span>
                      </>
                    ) : isSuccess ? (
                      <>
                        <CheckCircle className="w-4 h-4 text-white" />
                        <span>Downloaded!</span>
                      </>
                    ) : student ? (
                      <>
                        <Download className="w-4 h-4" />
                        <span>Download PDF</span>
                      </>
                    ) : (
                      <>
                        <Lock className="w-4 h-4 text-amber-400" />
                        <span>Login to Download</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Notice on Security */}
        <div className="mt-8 p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 flex items-center gap-3 text-xs text-slate-400">
          <AlertCircle className="w-4 h-4 text-blue-400 flex-shrink-0" />
          <p>
            <strong className="text-slate-300">Why is login required?</strong> All study materials are protected by Supabase signed tokens to prevent mass link leaks on external channels and ensure that students receive official updates and corrections directly from Abhishek Sir.
          </p>
        </div>

      </div>
    </section>
  );
};
