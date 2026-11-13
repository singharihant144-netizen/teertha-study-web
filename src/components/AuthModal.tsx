import React, { useState } from 'react';
import { X, Lock, CheckCircle2, Phone, Mail, User, ShieldCheck } from 'lucide-react';
import type { StudentProfile } from '../types';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (student: StudentProfile) => void;
  initialMessage?: string;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  onSuccess,
  initialMessage,
}) => {
  const [authMode, setAuthMode] = useState<'options' | 'email' | 'google-profile'>('options');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [targetExam, setTargetExam] = useState<'MHT-CET' | 'JEE' | 'NEET' | 'HSC Board' | 'General Counseling'>('MHT-CET');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  // Handle Google One-Click / Sign-In Simulation
  const handleGoogleSignIn = () => {
    setLoading(true);
    setError('');
    
    // Simulate Google OAuth response
    setTimeout(() => {
      setLoading(false);
      // Switch to Profile Completion Step to capture student's Phone Number & Target Exam!
      setFullName('Teertha Aspirant');
      setEmail('student.aspirant@gmail.com');
      setAuthMode('google-profile');
    }, 600);
  };

  // Complete Google Registration with collected Phone & Exam
  const handleCompleteGoogleProfile = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone || phone.trim().length < 10) {
      setError('Please provide a valid 10-digit WhatsApp number to receive notes and updates.');
      return;
    }

    const student: StudentProfile = {
      id: 'stud_' + Date.now(),
      fullName: fullName || 'MHT-CET Aspirant',
      email: email || 'student@gmail.com',
      phone: phone.trim(),
      targetExam,
      joinedAt: new Date().toISOString(),
    };

    onSuccess(student);
    onClose();
  };

  // Handle Direct Email/Password Registration
  const handleEmailAuth = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim()) {
      setError('Please enter your full name.');
      return;
    }
    if (!email.trim() || !email.includes('@')) {
      setError('Please enter a valid email address.');
      return;
    }
    if (!phone.trim() || phone.trim().length < 10) {
      setError('Please enter a valid 10-digit phone number for WhatsApp verification.');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      const student: StudentProfile = {
        id: 'stud_' + Date.now(),
        fullName: fullName.trim(),
        email: email.trim(),
        phone: phone.trim(),
        targetExam,
        joinedAt: new Date().toISOString(),
      };
      onSuccess(student);
      onClose();
    }, 700);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-md bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-6 sm:p-8 overflow-hidden text-slate-100">
        
        {/* Decorative background glow */}
        <div className="absolute -top-16 -right-16 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center mb-6">
          <div className="inline-flex p-3 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400 mb-3">
            <Lock className="w-6 h-6 text-amber-400" />
          </div>
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
            {authMode === 'google-profile' ? 'One Final Step' : 'Unlock Study Materials'}
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            {initialMessage || 'Login to access high-yield PDF notes, formulas & counseling guides.'}
          </p>
        </div>

        {error && (
          <div className="mb-4 p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs text-left">
            {error}
          </div>
        )}

        {/* View 1: Main Auth Options */}
        {authMode === 'options' && (
          <div className="space-y-4">
            {/* Google One-Tap / Sign-In Button */}
            <button
              onClick={handleGoogleSignIn}
              disabled={loading}
              className="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-xl bg-white text-slate-900 font-semibold text-sm hover:bg-slate-100 transition-all shadow-md active:scale-98 cursor-pointer disabled:opacity-60"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>
              <span>{loading ? 'Connecting Google...' : 'Continue with Google'}</span>
            </button>

            <div className="relative flex py-2 items-center">
              <div className="flex-grow border-t border-slate-800"></div>
              <span className="flex-shrink mx-4 text-xs uppercase text-slate-500 font-semibold tracking-wider">
                Or continue with Email
              </span>
              <div className="flex-grow border-t border-slate-800"></div>
            </div>

            <button
              onClick={() => setAuthMode('email')}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-800 hover:bg-slate-700/80 text-white font-medium text-sm border border-slate-700 transition-all cursor-pointer"
            >
              <Mail className="w-4 h-4 text-amber-400" />
              <span>Register with Email & Phone</span>
            </button>

            <div className="flex items-center justify-center gap-2 pt-2 text-[11px] text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>100% Free • Verified Student Access Only</span>
            </div>
          </div>
        )}

        {/* View 2: Complete Profile (Mandatory Lead Collection for Google Auth) */}
        {authMode === 'google-profile' && (
          <form onSubmit={handleCompleteGoogleProfile} className="space-y-4">
            <div className="p-3 bg-blue-500/10 border border-blue-500/20 rounded-xl text-left text-xs text-blue-300">
              <p className="font-semibold text-white">Google Account Verified!</p>
              <p className="text-slate-400 mt-0.5">
                Abhishek Sir sends direct MHT-CET notes & CAP Round alerts via WhatsApp. Please confirm your details:
              </p>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5 text-left">
                Full Name
              </label>
              <div className="relative">
                <User className="absolute left-3 top-3 w-4 h-4 text-slate-500" />
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Aditya Patil"
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl pl-9 pr-3 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5 text-left">
                WhatsApp Phone Number <span className="text-amber-400">*</span>
              </label>
              <div className="relative">
                <div className="absolute left-3 top-2.5 flex items-center gap-1 text-xs text-slate-400 font-medium border-r border-slate-700 pr-2">
                  <Phone className="w-3.5 h-3.5 text-emerald-400" />
                  <span>+91</span>
                </div>
                <input
                  type="tel"
                  required
                  maxLength={10}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                  placeholder="98XXXXXXXX"
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl pl-20 pr-3 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400 font-mono tracking-wider"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5 text-left">
                Target Exam / Preparation
              </label>
              <select
                value={targetExam}
                onChange={(e) => setTargetExam(e.target.value as any)}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
              >
                <option value="MHT-CET">MHT-CET (Engineering / Pharmacy)</option>
                <option value="HSC Board">Class 12th HSC Maharashtra Board</option>
                <option value="JEE">JEE Main & Advanced</option>
                <option value="NEET">NEET UG</option>
                <option value="General Counseling">Engineering CAP Round Counseling</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-amber-500 text-white font-bold text-sm hover:opacity-95 shadow-lg shadow-blue-500/20 transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>Unlock All Notes & Complete Registration</span>
            </button>
          </form>
        )}

        {/* View 3: Email + Phone Registration */}
        {authMode === 'email' && (
          <form onSubmit={handleEmailAuth} className="space-y-3.5">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1 text-left">
                Student Full Name
              </label>
              <input
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="e.g. Rohit Shinde"
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-amber-400"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1 text-left">
                Email Address
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-amber-400"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1 text-left">
                WhatsApp Phone Number
              </label>
              <div className="relative">
                <span className="absolute left-3 top-2 text-xs text-slate-400">+91</span>
                <input
                  type="tel"
                  required
                  maxLength={10}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                  placeholder="98XXXXXXXX"
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl pl-12 pr-3 py-2 text-sm text-white focus:outline-none focus:border-amber-400 font-mono"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1 text-left">
                Target Exam
              </label>
              <select
                value={targetExam}
                onChange={(e) => setTargetExam(e.target.value as any)}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-amber-400"
              >
                <option value="MHT-CET">MHT-CET 2025/2026</option>
                <option value="HSC Board">HSC 12th Board</option>
                <option value="General Counseling">CAP Round Counseling</option>
                <option value="JEE">JEE Main</option>
                <option value="NEET">NEET UG</option>
              </select>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-lg shadow-blue-500/25 transition-all cursor-pointer disabled:opacity-50"
            >
              {loading ? 'Registering...' : 'Register & Unlock PDFs'}
            </button>

            <button
              type="button"
              onClick={() => setAuthMode('options')}
              className="w-full text-xs text-slate-400 hover:text-white transition-colors pt-1 cursor-pointer"
            >
              ← Back to other login methods
            </button>
          </form>
        )}

      </div>
    </div>
  );
};
