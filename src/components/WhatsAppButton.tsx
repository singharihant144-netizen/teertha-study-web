import React from 'react';
import { MessageCircle } from 'lucide-react';

interface WhatsAppButtonProps {
  phoneNumber?: string;
  studentName?: string;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  phoneNumber = '917709611681',
  studentName,
}) => {
  const greeting = studentName
    ? `Hello Abhishek Sir, I am ${studentName} studying on Teertha Study's platform. I have a doubt regarding MHT-CET / HSC / CAP Counseling.`
    : `Hello Abhishek Sir, I am on the Teertha Study's website. I have a doubt regarding MHT-CET / HSC Board / CAP Round counseling. Please guide me.`;

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(greeting)}`;

  return (
    <aside 
      aria-label="Direct Teacher WhatsApp Support"
      className="fixed bottom-4 right-3 sm:bottom-6 sm:right-6 z-50 flex items-center"
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center gap-2.5 px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs sm:text-sm shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 whatsapp-glow border border-emerald-300/40"
      >
        {/* Pulsing indicator dot */}
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>

        {/* WhatsApp Icon */}
        <MessageCircle className="w-5 h-5 text-slate-950 fill-current" />

        {/* Dedicated User Text */}
        <div className="flex flex-col text-left leading-tight">
          <span className="text-[10px] uppercase tracking-wider text-emerald-950 font-extrabold opacity-85">
            Instant Guidance
          </span>
          <span className="text-xs sm:text-sm font-black text-slate-950 tracking-tight">
            Ask your doubts directly to the sir
          </span>
        </div>

        {/* Phone number tooltip tag on desktop hover */}
        <span className="hidden lg:group-hover:inline-block bg-slate-900 text-white text-[11px] px-2 py-0.5 rounded-full ml-1 border border-slate-700">
          +91 7709611681
        </span>
      </a>
    </aside>
  );
};
