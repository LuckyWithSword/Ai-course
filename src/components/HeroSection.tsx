import React from 'react';
import { ArrowDown, ArrowUpRight, Terminal, Layers, Sparkles, ShieldCheck } from 'lucide-react';

interface HeroSectionProps {
  onOpenEnrollment: () => void;
  onExploreCurriculum?: () => void;
  onOpenCurriculum?: () => void;
  onOpenDashboard?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenEnrollment,
  onExploreCurriculum,
  onOpenCurriculum,
  onOpenDashboard,
}) => {
  const handleExplore = onOpenCurriculum || onExploreCurriculum || (() => {});

  return (
    <section id="overview" className="relative w-full bg-[#F6A51B] py-6 sm:py-12 lg:py-16 px-3 sm:px-6 lg:px-8">
      {/* Editorial Decorative Grid Guidelines / Registration Crosshairs */}
      <div className="hidden sm:block absolute top-4 left-4 text-[#171717]/30 font-mono text-xs select-none pointer-events-none">
        ✛ REG.TOP-L [001.2026]
      </div>
      <div className="hidden sm:block absolute top-4 right-4 text-[#171717]/30 font-mono text-xs select-none pointer-events-none">
        REG.TOP-R ✛
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Poster Container Card */}
        <div className="bg-[#EFE5CD] border-3 sm:border-4 border-[#171717] shadow-[6px_6px_0px_#171717] sm:shadow-[10px_10px_0px_#171717] relative overflow-hidden">
          {/* Top Poster Information Header Band */}
          <div
            id="hero-header-band"
            className="border-b-2 sm:border-b-3 border-[#171717] bg-[#EFE5CD] px-2.5 xs:px-4 sm:px-6 lg:px-8 py-2 sm:py-2.5 lg:py-3 flex items-center justify-between gap-2 sm:gap-4 font-mono text-[10px] xs:text-[11px] sm:text-xs uppercase tracking-wider w-full"
          >
            <div className="flex items-center space-x-1.5 xs:space-x-2 sm:space-x-3 min-w-0 shrink">
              <span className="bg-[#171717] text-[#EFE5CD] px-1.5 xs:px-2 py-0.5 font-bold text-[9px] xs:text-[10px] sm:text-xs shrink-0">
                VOL. 01
              </span>
              <span className="font-semibold text-[#171717] truncate text-[10px] xs:text-[11px] sm:text-xs">
                AI MASTERY COURSE & WORKSTATION
              </span>
            </div>
            <div className="flex items-center space-x-1.5 xs:space-x-2 sm:space-x-4 text-[#171717]/80 text-[9px] xs:text-[10px] sm:text-xs shrink-0">
              <span className="hidden sm:inline">ISSUE 2026 // ED. 04</span>
              <span className="hidden md:inline">SYSTEM STATUS: VERIFIED</span>
              <span className="bg-[#078C4C] text-[#EFE5CD] px-1.5 xs:px-2 py-0.5 font-bold text-[9px] xs:text-[10px] sm:text-xs whitespace-nowrap">
                ACTIVE REGISTRATION
              </span>
            </div>
          </div>

          {/* Main Cover Poster Body */}
          <div className="p-4 sm:p-8 lg:p-14">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              
              {/* Left Column: Giant Display Headline & Editorial Thesis */}
              <div className="lg:col-span-8 flex flex-col justify-between">
                <div>
                  {/* Micro Metadata */}
                  <div className="flex items-center space-x-2 text-[11px] sm:text-xs font-mono text-[#F13B2F] font-bold tracking-widest uppercase mb-3">
                    <span className="w-3 h-0.5 bg-[#F13B2F]"></span>
                    <span>AN ORIGINAL AI EDUCATION PLATFORM & DIGITAL LABORATORY</span>
                  </div>

                  {/* Main Condensed Headline */}
                  <h1 className="font-display text-5xl xs:text-6xl sm:text-7xl md:text-8xl lg:text-[112px] leading-[0.88] tracking-tight uppercase text-[#171717] mb-6 break-words">
                    LEARN AI.
                    <br />
                    <span className="text-[#0759A8] block">BUILD WITH IT.</span>
                  </h1>

                  {/* Editorial Manifesto Lead */}
                  <p className="font-sans text-base sm:text-xl md:text-2xl text-[#171717] max-w-2xl font-medium leading-snug mb-6 sm:mb-8">
                    Not a pile of outdated video walkthroughs. An engineering and creative system that transforms you from a passive prompt user into an autonomous AI Builder.
                  </p>

                  {/* Transformation Chain */}
                  <div className="bg-[#F7F1E3] border-2 border-[#171717] p-3 sm:p-4 mb-6 sm:mb-8">
                    <div className="text-[11px] sm:text-xs font-mono text-[#171717]/70 uppercase tracking-wider mb-2 font-bold flex items-center justify-between">
                      <span>THE PROGRESSION CURVE</span>
                      <span>BEGINNER → BUILDER</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-1 sm:gap-1.5 font-mono text-[11px] sm:text-xs md:text-sm font-bold">
                      <span className="bg-[#EFE5CD] border border-[#171717] px-2 py-0.5 sm:px-2.5 sm:py-1 text-[#171717]">01. LEARN AI</span>
                      <span className="text-[#F13B2F]">→</span>
                      <span className="bg-[#EFE5CD] border border-[#171717] px-2 py-0.5 sm:px-2.5 sm:py-1 text-[#171717]">02. CREATE</span>
                      <span className="text-[#F13B2F]">→</span>
                      <span className="bg-[#0759A8] text-[#EFE5CD] px-2 py-0.5 sm:px-2.5 sm:py-1">03. AUTOMATE</span>
                      <span className="text-[#F13B2F]">→</span>
                      <span className="bg-[#078C4C] text-[#EFE5CD] px-2 py-0.5 sm:px-2.5 sm:py-1">04. BUILD</span>
                      <span className="text-[#F13B2F]">→</span>
                      <span className="bg-[#F13B2F] text-[#EFE5CD] px-2 py-0.5 sm:px-2.5 sm:py-1">05. MONETIZE</span>
                    </div>
                  </div>
                </div>

                {/* Primary Action Buttons */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2 w-full">
                  <button
                    onClick={onOpenEnrollment}
                    className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-[#171717] text-[#EFE5CD] hover:bg-[#F13B2F] hover:text-[#EFE5CD] border-2 border-[#171717] font-display text-xl sm:text-2xl md:text-3xl tracking-wider uppercase transition-all flex items-center justify-center space-x-2 sm:space-x-3 shadow-[4px_4px_0px_#0759A8] active:translate-x-0.5 active:translate-y-0.5 min-h-[48px]"
                  >
                    <span>GET ACCESS — ₹6,899</span>
                    <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" />
                  </button>

                  <button
                    onClick={handleExplore}
                    className="w-full sm:w-auto px-6 py-3.5 sm:py-4 bg-[#EFE5CD] text-[#171717] hover:bg-[#171717] hover:text-[#EFE5CD] border-2 border-[#171717] font-display text-lg sm:text-xl md:text-2xl tracking-wider uppercase transition-all flex items-center justify-center space-x-2 shadow-[4px_4px_0px_#171717] active:translate-x-0.5 active:translate-y-0.5 min-h-[48px]"
                  >
                    <span>VIEW 12 MODULES</span>
                    <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                  </button>
                </div>
              </div>

              {/* Right Column: Editorial Product Card & Schematic Object */}
              <div className="lg:col-span-4 flex flex-col space-y-4">
                
                {/* Price & Admission Ticket Block */}
                <div className="bg-[#0759A8] text-[#EFE5CD] border-2 border-[#171717] p-4 sm:p-5 shadow-[4px_4px_0px_#171717]">
                  <div className="flex justify-between items-start border-b border-[#EFE5CD]/30 pb-3 mb-3">
                    <div>
                      <span className="text-[10px] font-mono tracking-widest uppercase text-[#EFE5CD]/80 block">TUITION FEE</span>
                      <div className="font-display text-5xl sm:text-6xl tracking-tight leading-none text-[#F6A51B]">
                        ₹6,899
                      </div>
                    </div>
                    <span className="bg-[#F13B2F] text-[#EFE5CD] text-[10px] font-mono font-bold px-2 py-1 uppercase tracking-wider">
                      ONE-TIME
                    </span>
                  </div>

                  <p className="text-xs font-mono text-[#EFE5CD]/90 mb-4 leading-relaxed">
                    Zero fake urgency. No countdown timers. Complete lifetime access to curriculum, project blueprints, code templates, prompt vault, and student control room.
                  </p>

                  <div className="space-y-1.5 font-mono text-xs border-t border-[#EFE5CD]/30 pt-3">
                    <div className="flex justify-between">
                      <span className="text-[#EFE5CD]/70">CURRICULUM:</span>
                      <span className="font-bold text-[#EFE5CD]">12 DEEP MODULES</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#EFE5CD]/70">PROJECTS:</span>
                      <span className="font-bold text-[#EFE5CD]">8 PRODUCTION BUILDS</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#EFE5CD]/70">PROMPT VAULT:</span>
                      <span className="font-bold text-[#EFE5CD]">100+ BLUEPRINTS</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#EFE5CD]/70">TRACK SCOPE:</span>
                      <span className="font-bold text-[#F6A51B]">FOUNDATION → ADVANCED</span>
                    </div>
                  </div>
                </div>

                {/* Geometric Badge / Curriculum Access Teaser */}
                <div className="bg-[#171717] text-[#EFE5CD] border-2 border-[#171717] p-4 sm:p-5 shadow-[4px_4px_0px_#F6A51B]">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono tracking-widest text-[#F6A51B] uppercase font-bold">
                      CURRICULUM ACCESS
                    </span>
                    <span className="text-[#078C4C] font-mono text-xs font-bold flex items-center">
                      <span className="w-2 h-2 bg-[#078C4C] rounded-full mr-1.5 animate-ping"></span>
                      ENROLLMENT OPEN
                    </span>
                  </div>

                  <div className="bg-[#262626] border border-[#404040] p-3 mb-3 font-mono text-xs space-y-1">
                    <div className="flex justify-between text-[#EFE5CD]/60">
                      <span>PROGRAM SCOPE</span>
                      <span className="text-[#EFE5CD] font-bold">12 PRODUCTION MODULES</span>
                    </div>
                    <div className="w-full bg-[#171717] h-2 border border-[#404040] overflow-hidden">
                      <div className="bg-[#078C4C] h-full w-[100%]"></div>
                    </div>
                    <div className="flex justify-between text-[10px] text-[#EFE5CD]/70 pt-0.5">
                      <span>48 PRACTICE SESSIONS</span>
                      <span className="text-[#078C4C]">8 INDUSTRIAL BUILDS</span>
                    </div>
                  </div>

                  <button
                    onClick={handleExplore}
                    className="w-full py-2.5 bg-[#EFE5CD] text-[#171717] hover:bg-[#F6A51B] font-mono text-xs font-bold tracking-wider uppercase transition-colors text-center block min-h-[40px]"
                  >
                    EXPLORE 12 MODULES →
                  </button>
                </div>

                {/* Cultural Credibility & No Slop Stamp */}
                <div className="border-2 border-[#171717] bg-[#F7F1E3] p-3 text-xs font-mono text-[#171717]/80 flex items-center space-x-3">
                  <div className="w-7 h-7 bg-[#078C4C] text-[#EFE5CD] flex items-center justify-center font-bold text-sm shrink-0">
                    ✓
                  </div>
                  <div>
                    <span className="font-bold text-[#171717] block">NO FABRICATED REVIEWS</span>
                    <span>100% genuine code architectures, prompts, and practical systems.</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Bottom Poster Bar with Statistics Strip */}
          <div className="border-t-2 sm:border-t-3 border-[#171717] bg-[#171717] text-[#EFE5CD] px-3 sm:px-8 py-3 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 font-mono text-xs">
            <div>
              <span className="text-[#EFE5CD]/60 block text-[9px] sm:text-[10px]">TOTAL LESSONS</span>
              <span className="font-display text-xl sm:text-2xl text-[#F6A51B]">48+ SESSIONS</span>
            </div>
            <div>
              <span className="text-[#EFE5CD]/60 block text-[9px] sm:text-[10px]">CURRICULUM RUNTIME</span>
              <span className="font-display text-xl sm:text-2xl text-[#EFE5CD]">140+ HOURS</span>
            </div>
            <div>
              <span className="text-[#EFE5CD]/60 block text-[9px] sm:text-[10px]">CAPSTONE SYSTEM</span>
              <span className="font-display text-xl sm:text-2xl text-[#078C4C]">PRODUCTION APP</span>
            </div>
            <div>
              <span className="text-[#EFE5CD]/60 block text-[9px] sm:text-[10px]">CREDENTIAL</span>
              <span className="font-display text-xl sm:text-2xl text-[#F13B2F]">VERIFIED BADGE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
