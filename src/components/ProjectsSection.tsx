import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { Project } from '../types';
import {
  ArrowUpRight,
  CheckCircle2,
  Laptop,
  Smartphone,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Columns,
  Grid,
  MoveRight,
  Layers,
} from 'lucide-react';

interface ProjectsSectionProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
  completedProjectIds: string[];
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  projects,
  onSelectProject,
  completedProjectIds,
}) => {
  const [filter, setFilter] = useState<'ALL' | 'BEGINNER' | 'INTERMEDIATE' | 'ADVANCED'>('ALL');
  const [viewMode, setViewMode] = useState<'scroll' | 'grid'>('scroll');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(false);

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const filteredProjects = projects.filter((proj) => {
    if (filter === 'ALL') return true;
    return proj.difficulty.toUpperCase() === filter;
  });

  const updateScrollMetrics = () => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    const maxScroll = scrollWidth - clientWidth;
    const progress = maxScroll > 0 ? (scrollLeft / maxScroll) * 100 : 0;
    setScrollProgress(Math.min(100, Math.max(0, progress)));
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < maxScroll - 10);

    const firstCard = el.firstElementChild as HTMLElement | null;
    const cardWidth = firstCard ? firstCard.offsetWidth + 24 : 500;
    const idx = Math.round(scrollLeft / cardWidth);
    setActiveIndex(Math.min(filteredProjects.length - 1, Math.max(0, idx)));
  };

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    el.addEventListener('scroll', updateScrollMetrics, { passive: true });
    updateScrollMetrics();
    return () => el.removeEventListener('scroll', updateScrollMetrics);
  }, [filteredProjects, viewMode]);

  // Reset scroll when filter changes
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
      setActiveIndex(0);
      setScrollProgress(0);
    }
  }, [filter]);

  // Auto-scroll loop
  useEffect(() => {
    if (!isAutoScrolling || viewMode !== 'scroll') return;
    const interval = setInterval(() => {
      const el = scrollContainerRef.current;
      if (!el) return;
      const { scrollLeft, scrollWidth, clientWidth } = el;
      const maxScroll = scrollWidth - clientWidth;
      const firstCard = el.firstElementChild as HTMLElement | null;
      const cardWidth = firstCard ? firstCard.offsetWidth + 24 : 500;
      if (scrollLeft >= maxScroll - 15) {
        el.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        el.scrollBy({ left: cardWidth, behavior: 'smooth' });
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [isAutoScrolling, viewMode, filteredProjects.length]);

  const handleScrollLeft = () => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const firstCard = el.firstElementChild as HTMLElement | null;
    const cardWidth = firstCard ? firstCard.offsetWidth + 24 : 500;
    el.scrollBy({ left: -cardWidth, behavior: 'smooth' });
  };

  const handleScrollRight = () => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const firstCard = el.firstElementChild as HTMLElement | null;
    const cardWidth = firstCard ? firstCard.offsetWidth + 24 : 500;
    el.scrollBy({ left: cardWidth, behavior: 'smooth' });
  };

  const handleScrollToCard = (index: number) => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const firstCard = el.firstElementChild as HTMLElement | null;
    const cardWidth = firstCard ? firstCard.offsetWidth + 24 : 500;
    el.scrollTo({ left: index * cardWidth, behavior: 'smooth' });
  };

  const renderCardContent = (project: Project) => {
    const isCompleted = completedProjectIds.includes(project.id);
    return (
      <div className="bg-[#EFE5CD] text-[#171717] border-3 border-[#171717] shadow-[6px_6px_0px_#0759A8] hover:shadow-[8px_8px_0px_#F6A51B] flex flex-col justify-between h-full relative overflow-hidden transition-shadow">
        {/* Registration Crosshair */}
        <div className="absolute top-2 right-2 text-[#171717]/20 font-mono text-[10px]">
          ✛ P.{project.number}
        </div>

        <div className="p-5 sm:p-7 flex-1 flex flex-col justify-between">
          <div>
            {/* Top Bar with Number & Difficulty */}
            <div className="flex items-center justify-between border-b-2 border-[#171717] pb-3 mb-4">
              <div className="flex items-baseline space-x-2.5">
                <span className="font-display text-4xl sm:text-5xl text-[#F13B2F] leading-none">
                  {project.number}
                </span>
                <span className="font-mono text-xs uppercase font-bold tracking-widest text-[#171717]/70">
                  EXHIBIT
                </span>
              </div>

              <div className="flex items-center space-x-2">
                <span className="px-2 py-0.5 bg-[#171717] text-[#EFE5CD] font-mono text-[10px] uppercase font-bold">
                  {project.difficulty}
                </span>
                {isCompleted && (
                  <span className="bg-[#078C4C] text-[#EFE5CD] px-2 py-0.5 font-mono text-[10px] font-bold flex items-center space-x-1">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>COMPLETED</span>
                  </span>
                )}
              </div>
            </div>

            {/* Title & Subtitle */}
            <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl uppercase tracking-tight mb-1.5 leading-none">
              {project.title}
            </h3>
            <p className="font-sans text-xs sm:text-sm font-semibold text-[#0759A8] mb-3">
              {project.subtitle}
            </p>

            <p className="font-sans text-xs text-[#171717]/90 leading-relaxed mb-5 font-medium">
              {project.description}
            </p>

            {/* Graphic Blueprint Schematic Strip */}
            <div className="bg-[#F7F1E3] border-2 border-[#171717] p-3 mb-5 space-y-1.5">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#171717]/70 font-bold block">
                ARCHITECTURE BLUEPRINT:
              </span>
              <div className="space-y-1">
                {project.architectureSteps.slice(0, 2).map((step, idx) => (
                  <div key={idx} className="flex items-start space-x-2 font-mono text-xs">
                    <span className="text-[#F13B2F] font-bold">0{idx + 1}.</span>
                    <span className="text-[#171717]/90 line-clamp-1">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Skills & Tools Tags */}
          <div className="space-y-3 font-mono text-xs pt-2">
            <div>
              <span className="text-[10px] text-[#171717]/60 uppercase tracking-widest block mb-1">
                SKILLS ACQUIRED:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {project.skills.slice(0, 4).map((skill, idx) => (
                  <span key={idx} className="bg-[#E5DAC0] text-[#171717] px-2 py-0.5 text-[11px] font-bold">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <span className="text-[10px] text-[#171717]/60 uppercase tracking-widest block mb-1">
                STACK & TOOLS:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {project.tools.slice(0, 4).map((tool, idx) => (
                  <span key={idx} className="border border-[#171717] text-[#171717] px-2 py-0.5 text-[11px]">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Action Strip */}
        <div className="border-t-2 border-[#171717] bg-[#171717] text-[#EFE5CD] p-3 sm:p-4 flex items-center justify-between gap-2.5">
          <div className="flex items-center space-x-1.5 font-mono text-[11px] text-[#EFE5CD]/70">
            {project.recommendedDevice === 'Any Device' ? (
              <>
                <Smartphone className="w-3.5 h-3.5 text-[#078C4C]" />
                <span>ANY DEVICE</span>
              </>
            ) : (
              <>
                <Laptop className="w-3.5 h-3.5 text-[#F6A51B]" />
                <span>DESKTOP OPTIMAL</span>
              </>
            )}
          </div>

          <button
            onClick={() => onSelectProject(project)}
            className="px-3.5 py-2 bg-[#F6A51B] text-[#171717] hover:bg-[#F13B2F] hover:text-[#EFE5CD] font-mono text-xs font-bold uppercase tracking-wider transition-colors flex items-center space-x-1.5 min-h-[40px]"
          >
            <span>VIEW BLUEPRINT</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    );
  };

  return (
    <section id="projects" className="w-full bg-[#171717] text-[#EFE5CD] py-12 sm:py-20 lg:py-24 px-3 sm:px-6 lg:px-8 border-b-4 border-[#171717]">
      <div className="max-w-7xl mx-auto">
        
        {/* Exhibition Header */}
        <div className="border-b-2 border-[#333333] pb-8 sm:pb-10 mb-8 sm:mb-12">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <div className="flex items-center space-x-2 text-[11px] sm:text-xs font-mono text-[#F6A51B] uppercase font-bold tracking-widest mb-2">
                <span>09 • SIGNATURE PORTFOLIO</span>
                <span>•</span>
                <span>8 PRODUCTION BUILDS</span>
              </div>
              <h2 className="font-display text-5xl xs:text-6xl sm:text-8xl lg:text-9xl uppercase tracking-tight text-[#EFE5CD] leading-[0.88] break-words">
                BUILD
                <br />
                <span className="text-[#0759A8]">SOMETHING.</span>
              </h2>
            </div>

            <div className="max-w-md font-mono text-xs text-[#EFE5CD]/80 space-y-3">
              <p>
                Recruiters and clients do not care how many prompt tutorials you watched. They care what software you have designed, built, and shipped.
              </p>
              <p className="text-[#F6A51B]">
                Each project produces a verifiable, interactive artifact ready for your commercial portfolio.
              </p>
            </div>
          </div>

          {/* Controls & Filter Bar */}
          <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-[#333333] flex flex-col md:flex-row items-center justify-center gap-4 sm:gap-6 font-mono text-xs w-full">
            {/* Filter by Difficulty */}
            <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
              <span className="text-[#EFE5CD]/60 font-bold mr-1 text-[11px] uppercase tracking-wider">FILTER:</span>
              {(['ALL', 'BEGINNER', 'INTERMEDIATE', 'ADVANCED'] as const).map((lvl) => (
                <button
                  key={lvl}
                  onClick={() => setFilter(lvl)}
                  className={`px-3 sm:px-3.5 py-1.5 border uppercase tracking-wider font-bold transition-all min-h-[38px] flex items-center justify-center text-[11px] ${
                    filter === lvl
                      ? 'bg-[#EFE5CD] text-[#171717] border-[#EFE5CD] shadow-[2px_2px_0px_#F6A51B]'
                      : 'text-[#EFE5CD]/80 border-[#EFE5CD]/40 hover:text-[#EFE5CD] hover:border-[#EFE5CD] hover:bg-[#262626]'
                  }`}
                >
                  {lvl}
                </button>
              ))}
            </div>

            {/* Subtle divider on larger screens */}
            <div className="hidden md:block w-px h-6 bg-[#333333]" />

            {/* View Mode & Carousel Controls */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              <button
                onClick={() => setViewMode(viewMode === 'scroll' ? 'grid' : 'scroll')}
                className="px-3 py-1.5 min-h-[38px] font-mono text-[11px] tracking-wider uppercase border border-[#EFE5CD]/30 text-[#EFE5CD]/80 hover:text-[#EFE5CD] hover:border-[#EFE5CD] bg-[#1f1f1f] transition-colors flex items-center justify-center space-x-1.5"
                title={viewMode === 'scroll' ? 'Switch to Grid View' : 'Switch to Scrolling View'}
              >
                {viewMode === 'scroll' ? <Grid className="w-3.5 h-3.5" /> : <Columns className="w-3.5 h-3.5" />}
                <span>{viewMode === 'scroll' ? 'GRID' : 'SCROLL'}</span>
              </button>

              {viewMode === 'scroll' && (
                <>
                  <button
                    onClick={() => setIsAutoScrolling(!isAutoScrolling)}
                    className={`px-3 py-1.5 min-h-[38px] font-mono text-[11px] tracking-wider uppercase border transition-colors flex items-center justify-center space-x-1.5 ${
                      isAutoScrolling
                        ? 'bg-[#078C4C] text-[#EFE5CD] border-[#078C4C]'
                        : 'border-[#EFE5CD]/30 text-[#EFE5CD]/80 hover:text-[#EFE5CD] hover:border-[#EFE5CD] bg-[#1f1f1f]'
                    }`}
                    title={isAutoScrolling ? 'Pause Auto Scroll' : 'Start Auto Scroll'}
                  >
                    {isAutoScrolling ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                    <span>{isAutoScrolling ? 'PAUSE' : 'AUTO'}</span>
                  </button>

                  <div className="flex items-center space-x-1.5">
                    <button
                      onClick={handleScrollLeft}
                      disabled={!canScrollLeft}
                      className="w-9 h-9 min-h-[38px] min-w-[38px] bg-[#262626] hover:bg-[#F6A51B] hover:text-[#171717] disabled:opacity-30 disabled:hover:bg-[#262626] disabled:hover:text-[#EFE5CD] text-[#EFE5CD] border border-[#404040] flex items-center justify-center transition-colors shadow-[2px_2px_0px_#000000]"
                      aria-label="Scroll left"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={handleScrollRight}
                      disabled={!canScrollRight}
                      className="w-9 h-9 min-h-[38px] min-w-[38px] bg-[#262626] hover:bg-[#F6A51B] hover:text-[#171717] disabled:opacity-30 disabled:hover:bg-[#262626] disabled:hover:text-[#EFE5CD] text-[#EFE5CD] border border-[#404040] flex items-center justify-center transition-colors shadow-[2px_2px_0px_#000000]"
                      aria-label="Scroll right"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Scrolling Cards Section */}
        {viewMode === 'scroll' ? (
          <div className="relative">
            {/* Scroll Container with animated cards */}
            <div
              ref={scrollContainerRef}
              className="flex gap-5 sm:gap-6 overflow-x-auto snap-x snap-mandatory pb-6 pt-2 scroll-smooth focus:outline-hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {filteredProjects.map((project, idx) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.04, duration: 0.35, ease: 'easeOut' }}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  className="w-[85vw] xs:w-[440px] sm:w-[480px] lg:w-[520px] shrink-0 snap-start flex flex-col h-auto"
                >
                  {renderCardContent(project)}
                </motion.div>
              ))}
            </div>

            {/* Interactive Scroll Tracker & Indicator Bar */}
            <div className="mt-4 pt-4 border-t border-[#333333] space-y-3">
              {/* Progress Bar Track */}
              <div className="w-full bg-[#262626] h-1.5 border border-[#333333] relative overflow-hidden">
                <motion.div
                  className="bg-[#F6A51B] h-full"
                  style={{ width: `${Math.max(5, scrollProgress)}%` }}
                  transition={{ ease: 'linear', duration: 0.1 }}
                />
              </div>

              {/* Bottom Nav Row: Meta status, direct jump pills, & arrows */}
              <div className="flex items-center justify-between flex-wrap gap-3 font-mono text-xs">
                <div className="flex items-center space-x-2 text-[#EFE5CD]/70">
                  <span className="text-[#F6A51B] font-bold text-[11px]">
                    EXHIBIT 0{activeIndex + 1} // 0{filteredProjects.length}
                  </span>
                  <span className="hidden sm:inline text-[#EFE5CD]/40">•</span>
                  <span className="hidden sm:inline text-[11px] text-[#EFE5CD]/60 flex items-center space-x-1">
                    <span>SWIPE OR USE ARROWS</span>
                    <MoveRight className="w-3.5 h-3.5 inline" />
                  </span>
                </div>

                {/* Direct Jump Indicators */}
                <div className="flex items-center space-x-1.5">
                  {filteredProjects.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => handleScrollToCard(i)}
                      className="min-h-[28px] min-w-[22px] flex items-center justify-center focus:outline-hidden"
                      aria-label={`Jump to project ${i + 1}`}
                    >
                      <span
                        className={`block h-2 transition-all ${
                          i === activeIndex
                            ? 'w-6 bg-[#F6A51B]'
                            : 'w-2 bg-[#404040] hover:bg-[#777777]'
                        }`}
                      />
                    </button>
                  ))}
                </div>

                {/* Left/Right Action Arrows */}
                <div className="flex items-center space-x-1.5">
                  <button
                    onClick={handleScrollLeft}
                    disabled={!canScrollLeft}
                    className="px-3 py-1.5 min-h-[36px] bg-[#262626] text-[#EFE5CD] disabled:opacity-30 hover:bg-[#F6A51B] hover:text-[#171717] border border-[#404040] font-mono text-xs font-bold transition-all flex items-center space-x-1"
                  >
                    <ChevronLeft className="w-3.5 h-3.5" />
                    <span>PREV</span>
                  </button>
                  <button
                    onClick={handleScrollRight}
                    disabled={!canScrollRight}
                    className="px-3 py-1.5 min-h-[36px] bg-[#262626] text-[#EFE5CD] disabled:opacity-30 hover:bg-[#F6A51B] hover:text-[#171717] border border-[#404040] font-mono text-xs font-bold transition-all flex items-center space-x-1"
                  >
                    <span>NEXT</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Grid View Alternate Layout */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05, duration: 0.3 }}
                whileHover={{ y: -4 }}
                className="flex flex-col h-full"
              >
                {renderCardContent(project)}
              </motion.div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};

