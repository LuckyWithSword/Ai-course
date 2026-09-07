import React from 'react';
import { ArrowUp, Terminal, Shield, FileText } from 'lucide-react';

interface FooterProps {
  onNavClick: (id: string) => void;
  onOpenEnrollment: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavClick, onOpenEnrollment }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#171717] text-[#EFE5CD] border-t-4 border-[#171717] pt-16 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-12 border-b-2 border-[#333333]">
          
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-[#F6A51B] text-[#171717] font-display text-2xl flex items-center justify-center font-bold border border-[#EFE5CD]">
                AM
              </div>
              <div>
                <span className="font-display text-4xl uppercase tracking-wider block text-[#EFE5CD]">
                  AI MASTERY
                </span>
                <span className="font-mono text-[10px] tracking-widest text-[#EFE5CD]/60 uppercase block">
                  INDEPENDENT DESIGN × SYSTEMS ENGINEERING
                </span>
              </div>
            </div>

            <p className="font-sans text-xs sm:text-sm text-[#EFE5CD]/80 leading-relaxed max-w-sm">
              An original editorial AI education platform and digital learning system. Moving practitioners from passive consumers to autonomous AI builders and operators.
            </p>

            <div className="font-mono text-xs text-[#F6A51B] pt-2">
              EDITION 2026 // BATCH 04 // LIFETIME TUITION ₹6,899
            </div>
          </div>

          {/* Navigation Column */}
          <div className="lg:col-span-3 space-y-3 font-mono text-xs">
            <span className="font-bold uppercase tracking-wider text-[#F13B2F] block">
              PLATFORM EXPLORATION
            </span>
            <ul className="space-y-2 text-[#EFE5CD]/80">
              <li>
                <button
                  onClick={() => onNavClick('curriculum')}
                  className="hover:text-[#F6A51B] transition-colors"
                >
                  CURRICULUM (12 MODULES)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('projects')}
                  className="hover:text-[#F6A51B] transition-colors"
                >
                  SIGNATURE PROJECTS (08 BUILDS)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('challenges')}
                  className="hover:text-[#F6A51B] transition-colors"
                >
                  CHALLENGES & SPRINT ARENA
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('pricing')}
                  className="hover:text-[#F6A51B] transition-colors"
                >
                  TUITION & ADMISSIONS (₹6,899)
                </button>
              </li>
            </ul>
          </div>

          {/* Trust & Legal Column */}
          <div className="lg:col-span-4 space-y-3 font-mono text-xs">
            <span className="font-bold uppercase tracking-wider text-[#078C4C] block">
              TRUST, GOVERNANCE & POLICIES
            </span>
            <ul className="space-y-2 text-[#EFE5CD]/80">
              <li className="flex items-center space-x-2">
                <span className="text-[#078C4C]">✓</span>
                <span>7-DAY UNCONDITIONAL REFUND POLICY</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-[#078C4C]">✓</span>
                <span>LIFETIME CURRICULUM UPGRADES INCLUDED</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-[#078C4C]">✓</span>
                <span>PRIVACY BY DESIGN // ZERO TRACKER HARVESTING</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-[#078C4C]">✓</span>
                <span>COMMERCIAL SOW & CONTRACT TEMPLATES INCLUDED</span>
              </li>
            </ul>

            <div className="pt-3">
              <button
                onClick={onOpenEnrollment}
                className="px-4 py-2 bg-[#F6A51B] text-[#171717] hover:bg-[#F13B2F] hover:text-[#EFE5CD] font-bold uppercase tracking-wider transition-colors border border-[#171717]"
              >
                JOIN THE COURSE — ₹6,899
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Utility Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs text-[#EFE5CD]/60">
          <div className="flex items-center space-x-4">
            <span>© 2026 AI MASTERY. ALL RIGHTS RESERVED.</span>
            <span>•</span>
            <span className="text-[#EFE5CD]/90">AN ORIGINAL SYSTEM.</span>
          </div>

          <div className="flex items-center space-x-6">
            <span className="text-[#078C4C]">SECURE // SSL 256-BIT</span>
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-1 text-[#EFE5CD] hover:text-[#F6A51B] transition-colors"
            >
              <span>BACK TO TOP</span>
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
