import React from 'react';
import { MessageCircle, GraduationCap, ShieldCheck, Phone } from 'lucide-react';
import { YoutubeIcon } from './YoutubeIcon';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand Info */}
          <div className="space-y-3 md:col-span-1">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-amber-500 flex items-center justify-center text-white">
                <GraduationCap className="w-5 h-5" />
              </div>
              <span className="font-extrabold text-white text-base">
                TEERTHA <span className="text-amber-400">STUDY'S</span>
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed text-xs">
              Maharashtra's dedicated platform for MHT-CET, HSC Chemistry, and engineering college admission guidance by Abhishek Sir.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.youtube.com/@teerthastudys"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-red-600/10 text-red-500 hover:bg-red-600/20 flex items-center justify-center border border-red-500/20 transition-colors"
                title="YouTube Channel"
              >
                <YoutubeIcon className="w-4 h-4 text-red-500" />
              </a>
              <a
                href="https://wa.me/917709611681?text=Hello%20Abhishek%20Sir"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 flex items-center justify-center border border-emerald-500/20 transition-colors"
                title="WhatsApp Support"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px] mb-3">
              Study Material
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#notes" className="hover:text-amber-400 transition-colors">
                  MHT-CET Chemistry Formulas
                </a>
              </li>
              <li>
                <a href="#notes" className="hover:text-amber-400 transition-colors">
                  HSC Board Revision Notes
                </a>
              </li>
              <li>
                <a href="#notes" className="hover:text-amber-400 transition-colors">
                  Previous Year Solved PYQs
                </a>
              </li>
              <li>
                <a href="#notes" className="hover:text-amber-400 transition-colors">
                  Organic Reaction Mindmaps
                </a>
              </li>
            </ul>
          </div>

          {/* Admission & Counseling */}
          <div>
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px] mb-3">
              CAP Counseling
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#batches" className="hover:text-amber-400 transition-colors">
                  COEP & VJTI Cutoff Analysis
                </a>
              </li>
              <li>
                <a href="#batches" className="hover:text-amber-400 transition-colors">
                  Option Form Strategy
                </a>
              </li>
              <li>
                <a href="#batches" className="hover:text-amber-400 transition-colors">
                  TFWS & Category Quotas
                </a>
              </li>
              <li>
                <a href="#batches" className="hover:text-amber-400 transition-colors">
                  Branch Selection Guidance
                </a>
              </li>
            </ul>
          </div>

          {/* Official Contact & Direct Help */}
          <div>
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px] mb-3">
              Direct Teacher Support
            </h4>
            <div className="space-y-2 text-slate-300">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span className="font-mono">+91 7709611681</span>
              </div>
              <p className="text-[11px] text-slate-400 leading-snug">
                Students can directly contact Abhishek Sir for doubt clearing, batch queries, and admission guidance via WhatsApp.
              </p>
              <div className="pt-2">
                <span className="inline-flex items-center gap-1.5 text-[11px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full font-medium">
                  <ShieldCheck className="w-3 h-3" />
                  <span>Free SSL & Encrypted Data</span>
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Credits */}
        <div className="mt-10 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-500 text-[11px]">
          <p>© {new Date().getFullYear()} TEERTHA STUDY'S (Abhishek Sir). All Rights Reserved.</p>
          <p className="flex items-center gap-1">
            Built for Maharashtra students preparing for MHT-CET, HSC & Engineering Admissions.
          </p>
        </div>

      </div>
    </footer>
  );
};
