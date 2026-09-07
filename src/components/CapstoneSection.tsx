import React from 'react';
import { ArrowDown, Check, ShieldCheck, ExternalLink, Award } from 'lucide-react';

interface CapstoneSectionProps {
  onOpenEnrollment: () => void;
}

export const CapstoneSection: React.FC<CapstoneSectionProps> = ({
  onOpenEnrollment,
}) => {
  const progression = [
    {
      stage: '01',
      title: 'RESEARCH',
      desc: 'Conduct deep market audits, identify operational friction points, and formulate quantitative ROI hypotheses.',
      color: 'bg-[#EFE5CD] text-[#171717]',
    },
    {
      stage: '02',
      title: 'AI CORE',
      desc: 'Architect system prompts, model routing matrices, few-shot schemas, and hallucination-free retrieval context.',
      color: 'bg-[#0759A8] text-[#EFE5CD]',
    },
    {
      stage: '03',
      title: 'AUTOMATION',
      desc: 'Engineer event triggers, API webhooks, JSON transformers, and fail-safe dead-letter queue recovery.',
      color: 'bg-[#078C4C] text-[#EFE5CD]',
    },
    {
      stage: '04',
      title: 'APPLICATION',
      desc: 'Develop a responsive frontend interface with real-time streaming, accessible forms, and error states.',
      color: 'bg-[#171717] text-[#EFE5CD]',
    },
    {
      stage: '05',
      title: 'DEPLOYMENT',
      desc: 'Containerize backend Node microservices, enforce rate-limiting, and ship live to production cloud infrastructure.',
      color: 'bg-[#F13B2F] text-[#EFE5CD]',
    },
    {
      stage: '06',
      title: 'BUSINESS',
      desc: 'Draft client documentation, package commercial scope of work agreements, and integrate Stripe invoicing.',
      color: 'bg-[#F6A51B] text-[#171717]',
    },
  ];

  return (
    <section className="w-full bg-[#F6A51B] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b-4 border-[#171717]">
      <div className="max-w-7xl mx-auto">
        
        <div className="bg-[#171717] text-[#EFE5CD] border-3 sm:border-4 border-[#171717] p-6 sm:p-12 lg:p-16 shadow-[10px_10px_0px_#0759A8] relative overflow-hidden">
          
          {/* Header Metadata */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b-2 border-[#333333] pb-6 mb-12 font-mono text-xs">
            <div className="flex items-center space-x-2 text-[#F6A51B]">
              <span className="w-2.5 h-2.5 bg-[#F6A51B]"></span>
              <span className="font-bold uppercase tracking-widest">MODULE 12 CLIMAX MILESTONE</span>
            </div>
            <span className="bg-[#078C4C] text-[#EFE5CD] px-3 py-1 font-bold uppercase">
              CERTIFICATION GRADE ARTIFACT
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Headline */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div>
                <h2 className="font-display text-6xl sm:text-8xl lg:text-9xl uppercase tracking-tight leading-[0.85] text-[#EFE5CD] mb-8">
                  BUILD
                  <br />
                  YOUR OWN
                  <br />
                  <span className="text-[#F6A51B]">AI SYSTEM.</span>
                </h2>

                <p className="font-sans text-base sm:text-lg text-[#EFE5CD]/90 font-medium leading-relaxed mb-8 max-w-xl">
                  You do not graduate with a meaningless certificate of course completion. You defend and publish a working, production-ready AI application that solves an actual commercial problem.
                </p>

                <div className="bg-[#262626] border border-[#404040] p-5 space-y-3 font-mono text-xs text-[#EFE5CD]/80 mb-8">
                  <div className="font-bold text-[#EFE5CD] uppercase flex items-center space-x-2">
                    <ShieldCheck className="w-4 h-4 text-[#078C4C]" />
                    <span>CAPSTONE GRADUATION RUBRIC:</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-[#078C4C] font-bold">✓</span>
                    <span>Live accessible URL deployed to containerized cloud hosting.</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-[#078C4C] font-bold">✓</span>
                    <span>Server-side API proxy protecting private frontier model keys.</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-[#078C4C] font-bold">✓</span>
                    <span>Minimum 1 autonomous tool-calling or event-driven webhook loop.</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-[#078C4C] font-bold">✓</span>
                    <span>Tested against 20 edge-case failure inputs with graceful recovery.</span>
                  </div>
                </div>
              </div>

              <div>
                <button
                  onClick={onOpenEnrollment}
                  className="px-8 py-4 bg-[#F6A51B] text-[#171717] hover:bg-[#F13B2F] hover:text-[#EFE5CD] font-display text-2xl uppercase tracking-wider transition-colors border-2 border-[#171717] shadow-[4px_4px_0px_#EFE5CD] flex items-center space-x-2"
                >
                  <Award className="w-6 h-6" />
                  <span>COMMENCE YOUR CAPSTONE — ₹6,899</span>
                </button>
              </div>
            </div>

            {/* Right Graphic Vertical/Diagonal Progression */}
            <div className="lg:col-span-6 space-y-3">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#EFE5CD]/60 block mb-2">
                THE 6-TIERED ARTIFACT PROGRESSION:
              </span>

              {progression.map((item, idx) => (
                <div
                  key={item.stage}
                  className={`${item.color} border-2 border-[#171717] p-4 flex items-center justify-between shadow-[3px_3px_0px_#0759A8] transition-transform hover:translate-x-1`}
                >
                  <div className="flex items-center space-x-4">
                    <span className="font-display text-3xl leading-none opacity-60">
                      {item.stage}
                    </span>
                    <div>
                      <h4 className="font-display text-2xl uppercase tracking-wider leading-none mb-1">
                        {item.title}
                      </h4>
                      <p className="font-sans text-xs opacity-90 leading-tight max-w-sm">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  {idx < progression.length - 1 ? (
                    <ArrowDown className="w-5 h-5 shrink-0 opacity-70" />
                  ) : (
                    <Award className="w-5 h-5 shrink-0 text-[#171717]" />
                  )}
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
