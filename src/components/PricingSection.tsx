import React from 'react';
import { ArrowUpRight, Check, ShieldCheck, Lock, HelpCircle } from 'lucide-react';

interface PricingSectionProps {
  onOpenEnrollment: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({
  onOpenEnrollment,
}) => {
  const inclusions = [
    { label: 'COURSE', detail: '12 Comprehensive modules covering foundations to enterprise agent architecture.' },
    { label: 'PROJECTS', detail: '8 End-to-end production portfolio builds with step-by-step schematics and code.' },
    { label: 'PROMPT VAULT', detail: '100+ Production-tested prompt scaffolds for business, synthesis, and code.' },
    { label: 'AUTOMATION BLUEPRINTS', detail: 'Event-driven webhook flows, n8n templates, and self-healing API loops.' },
    { label: 'AI TOOL DIRECTORY', detail: 'Curated ecosystem guide classified strictly by job-to-be-done.' },
    { label: 'CHALLENGES', detail: 'Industrial sprint arena with automated schema validation and evaluation rubrics.' },
    { label: 'CAPSTONE', detail: 'Guided development and review of a deployable commercial AI business system.' },
    { label: 'CERTIFICATE', detail: 'Cryptographically verifiable digital credential as an AI Architect.' },
  ];

  return (
    <section id="pricing" className="w-full bg-[#F6A51B] py-12 sm:py-20 lg:py-24 px-3 sm:px-6 lg:px-8 border-b-4 border-[#171717]">
      <div className="max-w-7xl mx-auto">
        
        {/* Editorial Offer Sheet */}
        <div className="bg-[#EFE5CD] border-3 sm:border-4 border-[#171717] shadow-[6px_6px_0px_#171717] sm:shadow-[12px_12px_0px_#171717] relative overflow-hidden">
          
          {/* Header Banner */}
          <div className="bg-[#0759A8] text-[#EFE5CD] px-4 sm:px-10 py-3 sm:py-4 border-b-3 border-[#171717] flex flex-wrap items-center justify-between gap-3 font-mono text-xs">
            <div className="flex items-center space-x-2">
              <span className="bg-[#F6A51B] text-[#171717] px-2 py-0.5 font-bold uppercase">
                TUITION INVOICE
              </span>
              <span className="font-bold">STANDARD COMMERCIAL ENROLLMENT</span>
            </div>
            <span className="bg-[#171717] text-[#EFE5CD] px-2.5 py-1 font-bold uppercase text-[11px] sm:text-xs">
              NO SUBSCRIPTIONS • LIFETIME ENROLLMENT
            </span>
          </div>

          <div className="p-4 sm:p-10 lg:p-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Details & Price Column */}
              <div className="lg:col-span-5 flex flex-col justify-between border-b lg:border-b-0 lg:border-r-2 border-[#171717] pb-8 lg:pb-0 lg:pr-12">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-[#F13B2F] font-bold block mb-2">
                    ONE-TIME FLAT TUITION
                  </span>

                  {/* Huge Bold Condensed Price Numerals */}
                  <div className="flex items-baseline space-x-2 mb-4">
                    <span className="font-display text-6xl sm:text-8xl lg:text-9xl text-[#171717] leading-none tracking-tight break-words">
                      ₹6,899
                    </span>
                    <span className="font-mono text-xs uppercase font-bold text-[#171717]/70">
                      INR NET
                    </span>
                  </div>

                  <p className="font-sans text-xs sm:text-sm md:text-base text-[#171717] font-medium leading-relaxed mb-6">
                    No recurring monthly charges. No paywalled future modules. You get instant, unrestricted access to the entire 12-module curriculum, all 8 portfolio builds, prompt vault, and the student control room.
                  </p>

                  <div className="bg-[#F7F1E3] border-2 border-[#171717] p-3 sm:p-4 mb-6 font-mono text-xs space-y-2 text-[#171717]/90">
                    <div className="flex items-center space-x-2 text-[#078C4C] font-bold">
                      <ShieldCheck className="w-4 h-4 shrink-0" />
                      <span>7-DAY UNCONDITIONAL REFUND POLICY</span>
                    </div>
                    <p className="text-[11px] leading-relaxed">
                      If within 7 days you feel the architectural depth does not justify your investment, email support for an immediate, no-questions-asked refund.
                    </p>
                  </div>
                  <div className="flex items-center space-x-2 text-[11px] font-mono text-[#F13B2F] font-bold uppercase tracking-wider mb-4 bg-[#F7F1E3] border border-[#F13B2F]/40 px-3 py-2">
                    <span className="w-2 h-2 rounded-full bg-[#F13B2F] animate-pulse shrink-0"></span>
                    <span>Cohort Intake Closes: 14 September 2026</span>
                  </div>
                </div>

                <div>
                  <button
                    onClick={onOpenEnrollment}
                    className="w-full py-4 sm:py-5 bg-[#171717] text-[#EFE5CD] hover:bg-[#F13B2F] hover:text-[#EFE5CD] font-display text-2xl sm:text-4xl uppercase tracking-wider transition-all border-2 border-[#171717] shadow-[4px_4px_0px_#0759A8] sm:shadow-[5px_5px_0px_#0759A8] flex items-center justify-center space-x-3 active:translate-x-0.5 active:translate-y-0.5 min-h-[48px]"
                  >
                    <span>GET ACCESS — ₹6,899</span>
                    <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6" />
                  </button>
                  <span className="text-[10px] font-mono text-[#171717]/60 block text-center mt-2 uppercase tracking-wider">
                    SECURE INSTANT ACCESS • ENCRYPTED CHECKOUT
                  </span>
                </div>
              </div>

              {/* Right: The 8-Point Inclusion Ledger */}
              <div className="lg:col-span-7">
                <span className="font-mono text-xs uppercase font-bold tracking-widest text-[#171717]/70 block mb-4">
                  EVERYTHING INCLUDED IN YOUR TUITION:
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {inclusions.map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-[#F7F1E3] border-2 border-[#171717] p-4 shadow-[3px_3px_0px_#171717] flex flex-col justify-between"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-display text-2xl uppercase tracking-wide text-[#0759A8]">
                          {item.label}
                        </span>
                        <span className="w-5 h-5 bg-[#078C4C] text-[#EFE5CD] flex items-center justify-center text-xs font-bold">
                          ✓
                        </span>
                      </div>
                      <p className="font-sans text-xs text-[#171717]/90 leading-snug font-medium">
                        {item.detail}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Anti-Scam Transparency Note */}
                <div className="mt-6 border-t-2 border-[#171717] pt-4 font-mono text-xs text-[#171717]/80 flex items-center space-x-3">
                  <div className="w-6 h-6 bg-[#171717] text-[#EFE5CD] flex items-center justify-center font-bold text-xs shrink-0">
                    !
                  </div>
                  <div>
                    <span className="font-bold text-[#171717]">HONEST TRANSPARENCY:</span> The ₹6,899 fee covers the complete curriculum, blueprints, and updates. LLM API consumption during coding projects is paid directly to model providers at raw developer token rates (~$0.50-$2.00 typical student budget).
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
