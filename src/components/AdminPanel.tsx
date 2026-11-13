import React, { useState } from 'react';
import { X, Plus, Video, FileText, Users, CheckCircle2 } from 'lucide-react';
import type { Lecture, StudyMaterial, StudentProfile } from '../types';

interface AdminPanelProps {
  isOpen: boolean;
  onClose: () => void;
  onAddLecture: (lecture: Lecture) => void;
  onAddMaterial: (material: StudyMaterial) => void;
  studentLeads: StudentProfile[];
}

export const AdminPanel: React.FC<AdminPanelProps> = ({
  isOpen,
  onClose,
  onAddLecture,
  onAddMaterial,
  studentLeads,
}) => {
  const [activeTab, setActiveTab] = useState<'lecture' | 'material' | 'leads'>('lecture');

  // New Lecture Form State
  const [lecTitle, setLecTitle] = useState('');
  const [lecSubject, setLecSubject] = useState<'Chemistry' | 'Physics' | 'Mathematics' | 'Counseling'>('Chemistry');
  const [lecCategory, setLecCategory] = useState<'mht-cet' | 'hsc-board' | 'counseling'>('mht-cet');
  const [lecYtId, setLecYtId] = useState('');
  const [lecChapter, setLecChapter] = useState('');
  const [lecDuration, setLecDuration] = useState('1 hr 30 min');
  const [lecNotesTitle, setLecNotesTitle] = useState('');

  // New Material Form State
  const [matTitle, setMatTitle] = useState('');
  const [matSubject, setMatSubject] = useState('Chemistry');
  const [matChapter, setMatChapter] = useState('');
  const [matSize, setMatSize] = useState('3.5 MB');
  const [matPages, setMatPages] = useState(20);

  const [notification, setNotification] = useState('');

  if (!isOpen) return null;

  const handleCreateLecture = (e: React.FormEvent) => {
    e.preventDefault();
    if (!lecTitle || !lecYtId) return;

    // Extract YT video ID if a full URL was pasted
    let videoId = lecYtId;
    if (videoId.includes('v=')) {
      videoId = videoId.split('v=')[1].split('&')[0];
    } else if (videoId.includes('youtu.be/')) {
      videoId = videoId.split('youtu.be/')[1].split('?')[0];
    }

    const newLec: Lecture = {
      id: 'lec-' + Date.now(),
      title: lecTitle,
      subject: lecSubject as any,
      category: lecCategory,
      youtubeId: videoId,
      chapter: lecChapter || 'Chemistry Chapter',
      duration: lecDuration,
      views: 'Just Added',
      hasNotes: Boolean(lecNotesTitle),
      notesTitle: lecNotesTitle || undefined,
      notesSize: '2.5 MB',
    };

    onAddLecture(newLec);
    setNotification('New Lecture added successfully to the catalog!');
    setLecTitle('');
    setLecYtId('');
    setLecChapter('');
    setLecNotesTitle('');
    setTimeout(() => setNotification(''), 3000);
  };

  const handleCreateMaterial = (e: React.FormEvent) => {
    e.preventDefault();
    if (!matTitle) return;

    const newMat: StudyMaterial = {
      id: 'mat-' + Date.now(),
      title: matTitle,
      subject: matSubject,
      category: 'Official Notes',
      chapter: matChapter || 'General Revision',
      fileSize: matSize,
      pages: Number(matPages) || 15,
      downloadCount: 0,
      badge: 'NEW RESOURCE',
      downloadUrl: '#',
    };

    onAddMaterial(newMat);
    setNotification('Study Material PDF added successfully!');
    setMatTitle('');
    setMatChapter('');
    setTimeout(() => setNotification(''), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto text-slate-100">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-amber-400 font-bold text-xs uppercase tracking-wider bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                Teacher Admin Portal
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
              Manage Content & Student Leads
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {notification && (
          <div className="mt-4 p-3 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs rounded-xl flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
            <span>{notification}</span>
          </div>
        )}

        {/* Tab Switcher */}
        <div className="flex gap-2 my-6 border-b border-slate-800 pb-2">
          <button
            onClick={() => setActiveTab('lecture')}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'lecture'
                ? 'bg-blue-600 text-white'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Video className="w-3.5 h-3.5" />
            <span>Add YouTube Lecture</span>
          </button>
          <button
            onClick={() => setActiveTab('material')}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'material'
                ? 'bg-blue-600 text-white'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Upload Notes / PDF</span>
          </button>
          <button
            onClick={() => setActiveTab('leads')}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'leads'
                ? 'bg-blue-600 text-white'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Users className="w-3.5 h-3.5" />
            <span>Student Leads ({studentLeads.length})</span>
          </button>
        </div>

        {/* TAB 1: Add Lecture */}
        {activeTab === 'lecture' && (
          <form onSubmit={handleCreateLecture} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Lecture Title
              </label>
              <input
                type="text"
                required
                value={lecTitle}
                onChange={(e) => setLecTitle(e.target.value)}
                placeholder="e.g. Coordination Compounds Full One-Shot | MHT-CET 2025"
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-amber-400"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  YouTube Video Link or ID
                </label>
                <input
                  type="text"
                  required
                  value={lecYtId}
                  onChange={(e) => setLecYtId(e.target.value)}
                  placeholder="e.g. https://youtu.be/xxxx or xxxx"
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-amber-400 font-mono text-xs"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Chapter / Sub-heading
                </label>
                <input
                  type="text"
                  value={lecChapter}
                  onChange={(e) => setLecChapter(e.target.value)}
                  placeholder="e.g. Inorganic Chemistry - Chapter 9"
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-amber-400"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Category
                </label>
                <select
                  value={lecCategory}
                  onChange={(e) => setLecCategory(e.target.value as any)}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-amber-400"
                >
                  <option value="mht-cet">MHT-CET</option>
                  <option value="hsc-board">HSC Board</option>
                  <option value="counseling">CAP Counseling</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Subject
                </label>
                <select
                  value={lecSubject}
                  onChange={(e) => setLecSubject(e.target.value as any)}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-amber-400"
                >
                  <option value="Chemistry">Chemistry</option>
                  <option value="Physics">Physics</option>
                  <option value="Mathematics">Mathematics</option>
                  <option value="Counseling">Counseling</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Duration
                </label>
                <input
                  type="text"
                  value={lecDuration}
                  onChange={(e) => setLecDuration(e.target.value)}
                  placeholder="e.g. 1 hr 40 min"
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-amber-400"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Associated Notes Title (Optional)
              </label>
              <input
                type="text"
                value={lecNotesTitle}
                onChange={(e) => setLecNotesTitle(e.target.value)}
                placeholder="e.g. Coordination Compounds Notes & Formula Sheet.pdf"
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-amber-400"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <Plus className="w-4 h-4" />
              <span>Publish Lecture to Website</span>
            </button>
          </form>
        )}

        {/* TAB 2: Add Study Material */}
        {activeTab === 'material' && (
          <form onSubmit={handleCreateMaterial} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Document / Notes Title
              </label>
              <input
                type="text"
                required
                value={matTitle}
                onChange={(e) => setMatTitle(e.target.value)}
                placeholder="e.g. HSC 2025 Chemistry Top 100 Most Expected Numericals"
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-amber-400"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Subject / Topic
                </label>
                <input
                  type="text"
                  value={matSubject}
                  onChange={(e) => setMatSubject(e.target.value)}
                  placeholder="e.g. Chemistry"
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Chapter / Topic
                </label>
                <input
                  type="text"
                  value={matChapter}
                  onChange={(e) => setMatChapter(e.target.value)}
                  placeholder="e.g. Electrochemistry"
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Estimated File Size
                </label>
                <input
                  type="text"
                  value={matSize}
                  onChange={(e) => setMatSize(e.target.value)}
                  placeholder="e.g. 4.2 MB"
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-amber-400"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Total Pages
              </label>
              <input
                type="number"
                value={matPages}
                onChange={(e) => setMatPages(Number(e.target.value))}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-amber-400"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <Plus className="w-4 h-4" />
              <span>Add PDF Material</span>
            </button>
          </form>
        )}

        {/* TAB 3: Student Leads */}
        {activeTab === 'leads' && (
          <div className="space-y-3">
            <p className="text-xs text-slate-400">
              Students who have registered to download study materials. You can contact them directly on WhatsApp for counseling batches:
            </p>

            {studentLeads.length === 0 ? (
              <div className="p-8 text-center bg-slate-950 border border-slate-800 rounded-xl text-slate-500 text-xs">
                No student leads recorded yet. Sign up using the "Login / Register" button to see it populate here in real-time!
              </div>
            ) : (
              <div className="overflow-x-auto border border-slate-800 rounded-xl">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-950 text-slate-400 font-semibold border-b border-slate-800">
                    <tr>
                      <th className="p-3">Student Name</th>
                      <th className="p-3">WhatsApp Phone</th>
                      <th className="p-3">Email</th>
                      <th className="p-3">Target Exam</th>
                      <th className="p-3">WhatsApp Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800 bg-slate-900/60">
                    {studentLeads.map((s) => (
                      <tr key={s.id} className="hover:bg-slate-800/40">
                        <td className="p-3 font-semibold text-white">{s.fullName}</td>
                        <td className="p-3 font-mono text-emerald-400">+91 {s.phone}</td>
                        <td className="p-3 text-slate-300">{s.email}</td>
                        <td className="p-3">
                          <span className="px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20 text-[10px] font-bold">
                            {s.targetExam}
                          </span>
                        </td>
                        <td className="p-3">
                          <a
                            href={`https://wa.me/91${s.phone}?text=Hello%20${encodeURIComponent(s.fullName)},%20this%20is%20Abhishek%20Sir%20from%20Teertha%20Study's.`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-emerald-400 hover:text-emerald-300 font-bold underline"
                          >
                            Chat on WhatsApp
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
};
