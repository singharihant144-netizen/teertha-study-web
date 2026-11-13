import React from 'react';
import { LogOut, ShieldCheck, GraduationCap, Sparkles } from 'lucide-react';
import type { StudentProfile } from '../types';
import { YoutubeIcon } from './YoutubeIcon';

interface NavbarProps {
  student: StudentProfile | null;
  onOpenAuth: () => void;
  onLogout: () => void;
  isAdmin: boolean;
  onToggleAdmin: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  student,
  onOpenAuth,
  onLogout,
  isAdmin,
  onToggleAdmin,
}) => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800 bg-slate-950/85 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Brand Logo & Title */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-tr from-blue-700 via-indigo-600 to-amber-500 p-0.5 shadow-lg shadow-indigo-500/20 flex items-center justify-center">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-amber-400" />
              </div>
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-extrabold text-lg sm:text-xl tracking-tight text-white">
                  TEERTHA <span className="text-amber-400">STUDY'S</span>
                </span>
                <span className="hidden xs:inline-block text-[10px] uppercase font-bold bg-blue-500/10 text-blue-400 border border-blue-500/20 px-2 py-0.5 rounded-full">
                  Abhishek Sir
                </span>
              </div>
              <p className="text-xs text-slate-400 hidden sm:block">
                MHT-CET • JEE • NEET • HSC Boards • Admissions
              </p>
            </div>
          </div>

          {/* Center Navigation Links */}
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium text-slate-300">
            <a href="#batches" className="hover:text-amber-400 transition-colors">
              Batches
            </a>
            <a href="#lectures" className="hover:text-amber-400 transition-colors">
              Lectures
            </a>
            <a href="#notes" className="hover:text-amber-400 transition-colors flex items-center space-x-1">
              <span>Study Notes</span>
              <span className="text-[10px] bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-1.5 py-0.2 rounded font-bold">
                Free PDF
              </span>
            </a>
            <a href="#batches" className="hover:text-amber-400 transition-colors">
              CAP Counseling
            </a>
          </nav>

          {/* Right Action Area */}
          <div className="flex items-center space-x-3">
            
            {/* YouTube Direct Link */}
            <a
              href="https://www.youtube.com/@teerthastudys"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-red-600/10 text-red-400 border border-red-500/20 hover:bg-red-600/20 transition-all"
              title="Visit Abhishek Sir's Official YouTube Channel"
            >
              <YoutubeIcon className="w-4 h-4 text-red-500" />
              <span className="hidden sm:inline">YouTube</span>
            </a>

            {/* Admin Toggle button for testing & management */}
            <button
              onClick={onToggleAdmin}
              className={`text-xs px-2.5 py-1.5 rounded-lg border flex items-center space-x-1 font-medium transition-all cursor-pointer ${
                isAdmin
                  ? 'bg-amber-500/20 text-amber-300 border-amber-500/50'
                  : 'bg-slate-800/60 text-slate-400 border-slate-700 hover:text-white'
              }`}
              title="Toggle Teacher/Admin Mode to add or manage content"
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span className="hidden lg:inline">{isAdmin ? 'Admin Active' : 'Admin'}</span>
            </button>

            {/* Student Auth Section */}
            {student ? (
              <div className="flex items-center space-x-2 bg-slate-900 border border-slate-700/80 rounded-xl px-2.5 py-1.5">
                <div className="w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center text-xs font-bold text-white uppercase">
                  {student.fullName.charAt(0)}
                </div>
                <div className="text-left hidden sm:block">
                  <p className="text-xs font-semibold text-white leading-tight truncate max-w-[110px]">
                    {student.fullName}
                  </p>
                  <p className="text-[10px] text-amber-400 font-medium">
                    {student.targetExam}
                  </p>
                </div>
                <button
                  onClick={onLogout}
                  className="p-1 text-slate-400 hover:text-red-400 transition-colors ml-1 cursor-pointer"
                  title="Logout"
                >
                  <LogOut className="w-3.5 h-3.5" />
                </button>
              </div>
            ) : (
              <button
                onClick={onOpenAuth}
                className="relative inline-flex items-center justify-center px-4 py-2 text-xs sm:text-sm font-semibold text-white transition-all bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl hover:from-blue-500 hover:to-indigo-500 shadow-md shadow-blue-600/30 active:scale-95 cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5 mr-1.5 text-amber-300 animate-pulse" />
                <span>Login / Register</span>
              </button>
            )}

          </div>

        </div>
      </div>
    </header>
  );
};
