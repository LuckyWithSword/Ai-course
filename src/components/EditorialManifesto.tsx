import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Cpu,
  Wand2,
  RefreshCw,
  Code2,
  TrendingUp,
  CheckSquare,
  XCircle,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Layers,
  Sparkles,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';

export const EditorialManifesto: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [viewMode, setViewMode] = useState<'slide' | 'grid'>('slide');

  const steps = [
    {
      num: '01',
      title: 'LEARN AI',
      subtitle: 'FIRST PRINCIPLES',
      color: 'bg-[#EFE5CD] text-[#171717]',
      accentColor: 'text-[#F13B2F]',
      badgeBg: 'bg-[#F13B2F] text-[#EFE5CD]',
      desc: 'Understand what is mathematically occurring inside the transformer. Master token bounds, probability vectors, attention degradation, and model architecture routing.',
      icon: Cpu,
      skills: ['Transformer Mathematics', 'Token Window Optimization', 'Attention Routing', 'Probability Vectors'],
      deliverable: 'Mathematical Architecture Notebook & Token Budget Framework',
    },
    {
      num: '02',
      title: 'CREATE WITH AI',
      subtitle: 'EDITORIAL PRODUCTION',
      color: 'bg-[#0759A8] text-[#EFE5CD]',
      accentColor: 'text-[#F6A51B]',
      badgeBg: 'bg-[#F6A51B] text-[#171717]',
      desc: 'Harness multimodal models for structured long-form writing, editorial art direction, visual campaign posters, synthetic voice narration, and cinematic b-roll.',
      icon: Wand2,
      skills: ['Long-form Editorial Craft', 'Poster & Campaign Art Direction', 'Voice Cloning & TTS', 'Synthetic B-Roll'],
      deliverable: 'Full Multimodal Design System & Content Engine',
    },
    {
      num: '03',
      title: 'AUTOMATE WITH AI',
      subtitle: 'EVENT-DRIVEN WORKFLOWS',
      color: 'bg-[#078C4C] text-[#EFE5CD]',
      accentColor: 'text-[#EFE5CD]',
      badgeBg: 'bg-[#171717] text-[#EFE5CD] border border-[#EFE5CD]/40',
      desc: 'Break free from conversational web chats. Connect webhooks, REST APIs, JSON validation schemas, and self-healing pipelines that run autonomously 24/7.',
      icon: RefreshCw,
      skills: ['Webhook & REST Pipelines', 'Structured JSON Enforcement', 'Self-Healing Fallbacks', 'Scheduled Cron Daemons'],
      deliverable: 'Autonomous Multi-Tool Event Orchestrator',
    },
    {
      num: '04',
      title: 'BUILD WITH AI',
      subtitle: 'PRODUCTION SOFTWARE',
      color: 'bg-[#171717] text-[#EFE5CD] border-2 border-[#EFE5CD]/30',
      accentColor: 'text-[#078C4C]',
      badgeBg: 'bg-[#078C4C] text-[#EFE5CD]',
      desc: 'Engineer full-stack web applications, custom vector RAG search indices, ReAct agent loops with multi-tool calling, and deploy containerized apps to Cloud Run.',
      icon: Code2,
      skills: ['TypeScript Frontends', 'Express API Proxies', 'Vector RAG Indices', 'Containerized Cloud Run'],
      deliverable: 'Production Enterprise SaaS Application',
    },
    {
      num: '05',
      title: 'MONETIZE AI',
      subtitle: 'COMMERCIAL VALUE',
      color: 'bg-[#F13B2F] text-[#EFE5CD]',
      accentColor: 'text-[#EFE5CD]',
      badgeBg: 'bg-[#171717] text-[#EFE5CD]',
      desc: 'Package your technical capabilities into high-margin service retainers ($2,500-$10,000), write airtight proposals, and solve real revenue-generating business bottlenecks.',
      icon: TrendingUp,
      skills: ['Retainer Architecture ($5k-$10k)', 'Technical Proposal Scoping', 'Client Handoff Protocol', 'ROI Justification'],
      deliverable: 'High-Ticket Commercial AI Service Offering',
    },
  ];

  useEffect(() => {
    if (!isPlaying || viewMode !== 'slide') return;
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % steps.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPlaying, viewMode, steps.length]);

  const goToSlide = (index: number) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % steps.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + steps.length) % steps.length);
  };

  const activeStep = steps[currentSlide];
  const ActiveIcon = activeStep.icon;

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 60 : -60,
      opacity: 0,
      scale: 0.98,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: 'spring', stiffness: 320, damping: 32 },
        opacity: { duration: 0.28 },
        scale: { duration: 0.28 },
      },
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 60 : -60,
      opacity: 0,
      scale: 0.98,
      transition: {
        x: { type: 'spring', stiffness: 320, damping: 32 },
        opacity: { duration: 0.2 },
        scale: { duration: 0.2 },
      },
    }),
  };

  return (
    <section className="w-full bg-[#171717] text-[#EFE5CD] py-12 sm:py-20 lg:py-24 px-3 sm:px-6 lg:px-8 border-b-4 border-[#171717]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end pb-8 sm:pb-12 border-b-2 border-[#333333]">
          <div className="lg:col-span-8">
            <div className="flex items-center space-x-2 text-[11px] sm:text-xs font-mono text-[#F6A51B] uppercase tracking-widest mb-3">
              <span>MANIFESTO // 01</span>
              <span>•</span>
              <span>CORE ARCHITECTURAL THESIS</span>
            </div>
            <h2 className="font-display text-4xl xs:text-5xl sm:text-7xl lg:text-8xl leading-none uppercase tracking-tight text-[#EFE5CD] break-words">
              NOT A TYPICAL SAAS COURSE.
              <br />
              <span className="text-[#F6A51B]">AN AI CRAFT LABORATORY.</span>
            </h2>
          </div>
          <div className="lg:col-span-4 font-mono text-xs text-[#EFE5CD]/80 leading-relaxed">
            Most online AI courses are passive video playlists of someone prompting ChatGPT to write an email.
            <br /><br />
            AI Mastery was engineered as an editorial design workshop and systems engineering school. You will build actual software, configure real event pipelines, and deploy autonomous agents.
          </div>
        </div>

        {/* The 5-Phase Transformation Cards & Animated Slide */}
        <div id="manifesto-transformation-slide" className="pt-8 sm:pt-12">
          {/* Top Control and Meta Strip */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-[#333333]">
            <div className="flex items-center space-x-3">
              <span className="text-[11px] sm:text-xs font-mono tracking-widest text-[#F6A51B] uppercase font-bold">
                SYSTEM CURRICULUM TRANSFORMATION
              </span>
              <span className="text-[#EFE5CD]/40">•</span>
              <span className="text-[11px] sm:text-xs font-mono tracking-widest text-[#EFE5CD]/70 uppercase">
                PHASE 0{currentSlide + 1} OF 05
              </span>
            </div>

            {/* Slide Navigation Controls */}
            <div className="flex items-center space-x-2 self-end sm:self-auto">
              <button
                onClick={() => setViewMode(viewMode === 'slide' ? 'grid' : 'slide')}
                className="px-2.5 py-1.5 min-h-[36px] font-mono text-[11px] tracking-wider uppercase border border-[#EFE5CD]/30 text-[#EFE5CD]/80 hover:text-[#EFE5CD] hover:border-[#EFE5CD] transition-colors flex items-center space-x-1"
                title={viewMode === 'slide' ? 'Switch to Grid View' : 'Switch to Slide View'}
              >
                <Layers className="w-3 h-3" />
                <span>{viewMode === 'slide' ? 'GRID' : 'SLIDE'}</span>
              </button>

              {viewMode === 'slide' && (
                <>
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className={`px-2.5 py-1.5 min-h-[36px] font-mono text-[11px] tracking-wider uppercase border transition-colors flex items-center space-x-1 ${
                      isPlaying
                        ? 'bg-[#078C4C] text-[#EFE5CD] border-[#078C4C]'
                        : 'border-[#EFE5CD]/30 text-[#EFE5CD]/80 hover:text-[#EFE5CD] hover:border-[#EFE5CD]'
                    }`}
                    title={isPlaying ? 'Pause Auto-Advance' : 'Play Auto-Advance'}
                  >
                    {isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
                    <span>{isPlaying ? 'PAUSE' : 'AUTO'}</span>
                  </button>

                  <div className="flex items-center space-x-1 pl-1">
                    <button
                      onClick={handlePrev}
                      className="w-9 h-9 min-h-[36px] min-w-[36px] bg-[#262626] hover:bg-[#F6A51B] hover:text-[#171717] text-[#EFE5CD] border border-[#404040] flex items-center justify-center transition-colors shadow-[2px_2px_0px_#000000]"
                      aria-label="Previous Phase Slide"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={handleNext}
                      className="w-9 h-9 min-h-[36px] min-w-[36px] bg-[#262626] hover:bg-[#F6A51B] hover:text-[#171717] text-[#EFE5CD] border border-[#404040] flex items-center justify-center transition-colors shadow-[2px_2px_0px_#000000]"
                      aria-label="Next Phase Slide"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Phase Selector Tabs */}
          <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-5 gap-2 mb-6">
            {steps.map((step, idx) => {
              const isActive = currentSlide === idx;
              return (
                <button
                  key={step.num}
                  onClick={() => {
                    setViewMode('slide');
                    goToSlide(idx);
                  }}
                  className={`text-left p-2.5 sm:p-3 min-h-[44px] border-2 transition-all font-mono relative overflow-hidden ${
                    isActive
                      ? 'border-[#F6A51B] bg-[#262626] text-[#EFE5CD] shadow-[2px_2px_0px_#F6A51B]'
                      : 'border-[#333333] bg-[#1a1a1a] text-[#EFE5CD]/60 hover:text-[#EFE5CD] hover:border-[#555555]'
                  }`}
                >
                  <div className="flex items-center justify-between text-[10px] sm:text-xs">
                    <span className={`font-bold ${isActive ? 'text-[#F6A51B]' : 'text-[#EFE5CD]/60'}`}>
                      PHASE {step.num}
                    </span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F6A51B] animate-pulse"></span>
                    )}
                  </div>
                  <div className="font-display text-sm sm:text-base tracking-wider truncate uppercase mt-0.5 text-[#EFE5CD]">
                    {step.title}
                  </div>
                  {isActive && (
                    <motion.div
                      layoutId="activeSlideIndicator"
                      className="absolute bottom-0 left-0 right-0 h-1 bg-[#F6A51B]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Animated Slide Showcase View */}
          {viewMode === 'slide' ? (
            <div className="relative overflow-hidden min-h-[420px] sm:min-h-[380px]">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={currentSlide}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className={`w-full ${activeStep.color} border-3 border-[#171717] p-6 sm:p-8 lg:p-10 shadow-[6px_6px_0px_#000000] relative`}
                >
                  {/* Top Blueprint Band in Slide */}
                  <div className="flex flex-wrap items-center justify-between gap-3 pb-5 mb-6 border-b border-current/20">
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <span className="px-2 py-0.5 font-mono text-xs font-bold uppercase tracking-wider bg-[#171717] text-[#EFE5CD]">
                        PHASE {activeStep.num} // 05
                      </span>
                      <span className="font-mono text-xs tracking-widest uppercase opacity-80">
                        {activeStep.subtitle}
                      </span>
                    </div>

                    <div className="flex items-center space-x-2">
                      <span className="font-mono text-[10px] sm:text-xs uppercase px-2 py-0.5 border border-current font-bold">
                        CORE REQUIREMENT
                      </span>
                    </div>
                  </div>

                  {/* Main Slide Layout Grid */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Left Column: Big typography & narrative */}
                    <div className="lg:col-span-8 space-y-4">
                      <div className="flex items-start space-x-4">
                        <span className={`font-display text-6xl sm:text-7xl lg:text-8xl leading-none font-bold ${activeStep.accentColor}`}>
                          {activeStep.num}
                        </span>
                        <div>
                          <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl uppercase tracking-wider leading-none">
                            {activeStep.title}
                          </h3>
                          <span className="font-mono text-xs tracking-widest uppercase opacity-75 mt-1 block">
                            SYSTEM TRANSFORMATION VECTOR
                          </span>
                        </div>
                      </div>

                      <p className="font-sans text-sm sm:text-base leading-relaxed opacity-95 max-w-3xl pt-2">
                        {activeStep.desc}
                      </p>

                      {/* Key Competencies / Skills Tags */}
                      <div className="pt-4 space-y-2">
                        <span className="font-mono text-[11px] uppercase tracking-wider opacity-80 block font-bold">
                          KEY COMPETENCY VECTORS:
                        </span>
                        <div className="flex flex-wrap gap-1.5 sm:gap-2">
                          {activeStep.skills.map((skill, sIdx) => (
                            <span
                              key={sIdx}
                              className="px-2.5 py-1 text-xs font-mono border border-current/40 bg-black/10 tracking-tight"
                            >
                              ✓ {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right Column: Icon Display, Deliverable Card & Interactive Stepper */}
                    <div className="lg:col-span-4 flex flex-col justify-between h-full space-y-5">
                      <div className="bg-black/10 border-2 border-current/30 p-5 space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-[10px] uppercase tracking-wider opacity-75 font-bold">
                            PRIMARY ARTIFACT
                          </span>
                          <div className="w-10 h-10 border-2 border-current flex items-center justify-center">
                            <ActiveIcon className="w-5 h-5" />
                          </div>
                        </div>
                        <div className="font-mono text-xs font-bold uppercase leading-snug">
                          {activeStep.deliverable}
                        </div>
                        <div className="text-[10px] font-mono opacity-80 flex items-center space-x-1.5 pt-1">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#078C4C]" />
                          <span>Industry-Verified Evaluation Standard</span>
                        </div>
                      </div>

                      {/* Advance CTA Button */}
                      <div className="flex items-center space-x-2 pt-2">
                        <button
                          onClick={handleNext}
                          className="w-full py-3 px-4 font-mono text-xs font-bold uppercase tracking-wider bg-[#171717] text-[#EFE5CD] hover:bg-[#F6A51B] hover:text-[#171717] border-2 border-[#171717] transition-colors flex items-center justify-center space-x-2 shadow-[3px_3px_0px_rgba(0,0,0,0.3)] min-h-[44px]"
                        >
                          <span>ADVANCE TO PHASE 0{((currentSlide + 1) % steps.length) + 1}</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Slide Footer Pagination Bar */}
                  <div className="mt-8 pt-4 border-t border-current/20 flex items-center justify-between font-mono text-[11px]">
                    <div className="flex items-center space-x-1.5">
                      {steps.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => goToSlide(i)}
                          className={`h-2 transition-all min-h-[24px] flex items-center justify-center px-1 focus:outline-hidden`}
                          aria-label={`Jump to Phase ${i + 1}`}
                        >
                          <span
                            className={`block h-2 rounded-none transition-all ${
                              i === currentSlide
                                ? 'w-8 bg-current'
                                : 'w-2 bg-current/30 hover:bg-current/60'
                            }`}
                          />
                        </button>
                      ))}
                    </div>

                    <div className="flex items-center space-x-3">
                      <span className="opacity-80">TRANSFORMATION STAGE {currentSlide + 1} / {steps.length}</span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          ) : (
            /* Alternate Grid Layout for Comparison */
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {steps.map((step, idx) => {
                const IconComponent = step.icon;
                return (
                  <div
                    key={step.num}
                    onClick={() => {
                      goToSlide(idx);
                      setViewMode('slide');
                    }}
                    className={`${step.color} border-2 border-[#171717] p-5 flex flex-col justify-between h-full shadow-[4px_4px_0px_#333333] transition-transform hover:-translate-y-1 cursor-pointer`}
                  >
                    <div>
                      <div className="flex justify-between items-start mb-4">
                        <span className={`font-display text-4xl ${step.accentColor}`}>
                          {step.num}
                        </span>
                        <div className="w-8 h-8 border border-current flex items-center justify-center">
                          <IconComponent className="w-4 h-4" />
                        </div>
                      </div>
                      <span className="text-[10px] font-mono tracking-widest uppercase opacity-80 block">
                        {step.subtitle}
                      </span>
                      <h3 className="font-display text-2xl uppercase tracking-wider mb-3 leading-tight">
                        {step.title}
                      </h3>
                      <p className="font-sans text-xs opacity-90 leading-relaxed mb-4">
                        {step.desc}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-current/20 font-mono text-[10px] uppercase flex items-center justify-between">
                      <span>VIEW DETAILS</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Anti-Slop Discipline & Standards Comparison Box */}
        <div className="mt-12 bg-[#262626] border-2 border-[#333333] p-6 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* The Cliché Banned Stuff */}
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-xs font-mono text-[#F13B2F] uppercase font-bold tracking-wider">
                <XCircle className="w-4 h-4" />
                <span>WHAT IS STRICTLY BANNED HERE</span>
              </div>
              <ul className="space-y-2 font-mono text-xs text-[#EFE5CD]/70">
                <li className="flex items-start space-x-2">
                  <span className="text-[#F13B2F] font-bold">✕</span>
                  <span>Fake income screenshots or get-rich-quick million dollar claims.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-[#F13B2F] font-bold">✕</span>
                  <span>Generic glowing purple/blue gradients or floating translucent glass cards.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-[#F13B2F] font-bold">✕</span>
                  <span>Artificial scarcity countdown timers designed to manipulate purchase urgency.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-[#F13B2F] font-bold">✕</span>
                  <span>Superficial "Top 50 AI Tools You Must Try" lists with zero architectural depth.</span>
                </li>
              </ul>
            </div>

            {/* The Real Craft */}
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-xs font-mono text-[#078C4C] uppercase font-bold tracking-wider">
                <CheckSquare className="w-4 h-4" />
                <span>THE CRAFTSMANSHIP COMMITMENT</span>
              </div>
              <ul className="space-y-2 font-mono text-xs text-[#EFE5CD]/90">
                <li className="flex items-start space-x-2">
                  <span className="text-[#078C4C] font-bold">✓</span>
                  <span>Real production TypeScript schemas, Node server proxies, and ReAct agent loops.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-[#078C4C] font-bold">✓</span>
                  <span>Honest technical taxonomy: what AI handles with ease vs where code is strictly required.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-[#078C4C] font-bold">✓</span>
                  <span>8 tangible, portfolio-defensible deliverables with verified evaluation rubrics.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-[#078C4C] font-bold">✓</span>
                  <span>Transparent flat pricing of ₹6,899 for lifetime curriculum and updates.</span>
                </li>
              </ul>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
