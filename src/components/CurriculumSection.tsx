import React, { useState } from 'react';
import { Module, Lesson } from '../types';
import { ArrowUpRight, Clock, BookOpen, Layers, CheckCircle2 } from 'lucide-react';

interface CurriculumSectionProps {
  modules: Module[];
  onSelectLesson: (lesson: Lesson, moduleTitle: string) => void;
  completedLessonIds: string[];
}

export const CurriculumSection: React.FC<CurriculumSectionProps> = ({
  modules,
  onSelectLesson,
  completedLessonIds,
}) => {
  const [selectedFilter, setSelectedFilter] = useState<'ALL' | 'BEGINNER' | 'INTERMEDIATE' | 'ADVANCED' | 'MASTERY'>('ALL');
  const [expandedModuleId, setExpandedModuleId] = useState<string | null>(null);

  const filteredModules = modules.filter((mod) => {
    if (selectedFilter === 'ALL') return true;
    return mod.difficulty.toUpperCase() === selectedFilter;
  });

  const getModuleStyle = (scheme: Module['colorScheme']) => {
    switch (scheme) {
      case 'cream-red':
        return {
          cardBg: 'bg-[#EFE5CD] text-[#171717]',
          numColor: 'text-[#F13B2F]',
          tagBg: 'bg-[#171717] text-[#EFE5CD]',
          border: 'border-[#171717]',
          shadow: 'shadow-[5px_5px_0px_#171717]',
          accent: '#F13B2F'
        };
      case 'blue':
        return {
          cardBg: 'bg-[#0759A8] text-[#EFE5CD]',
          numColor: 'text-[#F6A51B]',
          tagBg: 'bg-[#171717] text-[#EFE5CD]',
          border: 'border-[#171717]',
          shadow: 'shadow-[5px_5px_0px_#171717]',
          accent: '#F6A51B'
        };
      case 'green':
        return {
          cardBg: 'bg-[#078C4C] text-[#EFE5CD]',
          numColor: 'text-[#EFE5CD]',
          tagBg: 'bg-[#171717] text-[#EFE5CD]',
          border: 'border-[#171717]',
          shadow: 'shadow-[5px_5px_0px_#171717]',
          accent: '#EFE5CD'
        };
      case 'red':
        return {
          cardBg: 'bg-[#F13B2F] text-[#EFE5CD]',
          numColor: 'text-[#171717]',
          tagBg: 'bg-[#171717] text-[#EFE5CD]',
          border: 'border-[#171717]',
          shadow: 'shadow-[5px_5px_0px_#171717]',
          accent: '#171717'
        };
      case 'black':
        return {
          cardBg: 'bg-[#171717] text-[#EFE5CD]',
          numColor: 'text-[#078C4C]',
          tagBg: 'bg-[#262626] text-[#EFE5CD]',
          border: 'border-[#EFE5CD]/30',
          shadow: 'shadow-[5px_5px_0px_#0759A8]',
          accent: '#078C4C'
        };
      case 'cream':
      default:
        return {
          cardBg: 'bg-[#F7F1E3] text-[#171717]',
          numColor: 'text-[#0759A8]',
          tagBg: 'bg-[#171717] text-[#EFE5CD]',
          border: 'border-[#171717]',
          shadow: 'shadow-[5px_5px_0px_#171717]',
          accent: '#0759A8'
        };
    }
  };

  return (
    <section id="curriculum" className="w-full bg-[#F6A51B] py-12 sm:py-20 lg:py-24 px-3 sm:px-6 lg:px-8 border-b-4 border-[#171717]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="bg-[#EFE5CD] border-3 sm:border-4 border-[#171717] p-4 sm:p-8 lg:p-10 mb-8 sm:mb-12 shadow-[6px_6px_0px_#171717]">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b-2 border-[#171717]">
            <div>
              <div className="flex items-center space-x-2 text-[11px] sm:text-xs font-mono text-[#F13B2F] uppercase font-bold tracking-widest mb-2">
                <span>08 • CURRICULUM BLUEPRINT</span>
                <span>•</span>
                <span>12 SYSTEM MODULES</span>
              </div>
              <h2 className="font-display text-4xl xs:text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tight text-[#171717] leading-[0.9] break-words">
                CURRICULUM ARCHITECTURE.
              </h2>
            </div>
            
            <p className="font-sans text-xs sm:text-sm md:text-base text-[#171717] max-w-md font-medium leading-relaxed">
              Every module is designed as an autonomous operational competence. From zero-shot token analysis to building deployable multi-agent systems.
            </p>
          </div>

          {/* Filter Row */}
          <div className="pt-4 sm:pt-6 flex flex-wrap items-center justify-between gap-3 sm:gap-4 font-mono text-xs">
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
              <span className="text-[#171717]/70 font-bold mr-1">DIFFICULTY FILTER:</span>
              {(['ALL', 'BEGINNER', 'INTERMEDIATE', 'ADVANCED', 'MASTERY'] as const).map((filter) => (
                <button
                  key={filter}
                  onClick={() => setSelectedFilter(filter)}
                  className={`px-2.5 sm:px-3 py-1 sm:py-1.5 border-2 border-[#171717] uppercase tracking-wider font-bold transition-all min-h-[36px] flex items-center ${
                    selectedFilter === filter
                      ? 'bg-[#171717] text-[#EFE5CD] shadow-[2px_2px_0px_#F13B2F]'
                      : 'bg-[#EFE5CD] text-[#171717] hover:bg-[#F7F1E3]'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>

            <div className="text-[#171717]/80">
              SHOWING <span className="font-bold text-[#171717]">{filteredModules.length}</span> OF 12 MODULES
            </div>
          </div>
        </div>

        {/* Modular Poster Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredModules.map((module) => {
            const style = getModuleStyle(module.colorScheme);
            const isExpanded = expandedModuleId === module.id;
            const completedCount = module.lessons.filter((l) =>
              completedLessonIds.includes(l.id)
            ).length;

            return (
              <div
                key={module.id}
                className={`${style.cardBg} border-3 ${style.border} ${style.shadow} flex flex-col justify-between transition-all hover:-translate-y-1 relative`}
              >
                {/* Module Top Header */}
                <div className="p-6 border-b-2 border-current/20">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center space-x-2 font-mono text-xs">
                      <span className="px-2 py-0.5 bg-[#171717] text-[#EFE5CD] font-bold">
                        MODULE
                      </span>
                      <span className="font-bold opacity-80 uppercase">
                        {module.difficulty}
                      </span>
                    </div>

                    <div className="flex items-center space-x-1.5 font-mono text-xs opacity-90">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{module.estimatedHours}H EST</span>
                    </div>
                  </div>

                  {/* Giant Number & Title */}
                  <div className="flex items-baseline space-x-4 mb-2">
                    <span className={`font-display text-6xl sm:text-7xl leading-none ${style.numColor}`}>
                      {module.number}
                    </span>
                    <h3 className="font-display text-3xl sm:text-4xl uppercase leading-none tracking-tight">
                      {module.title}
                    </h3>
                  </div>

                  <p className="font-sans text-xs opacity-90 leading-relaxed font-medium mb-4">
                    {module.tagline}
                  </p>

                  {/* Progress Marker if any completed */}
                  {completedCount > 0 && (
                    <div className="mb-4 bg-[#171717] text-[#078C4C] font-mono text-xs px-2.5 py-1 flex items-center space-x-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>{completedCount}/{module.lessons.length} LESSONS COMPLETED</span>
                    </div>
                  )}

                  {/* Core Topics Checklist */}
                  <div className="space-y-1 pt-2">
                    <span className="font-mono text-[10px] tracking-wider uppercase opacity-70 block mb-1">
                      CORE SPECIFICATIONS:
                    </span>
                    {module.topics.slice(0, 4).map((topic, idx) => (
                      <div key={idx} className="flex items-start space-x-1.5 text-xs font-mono">
                        <span className="opacity-60">•</span>
                        <span className="line-clamp-1 opacity-90">{topic}</span>
                      </div>
                    ))}
                    {module.topics.length > 4 && (
                      <span className="text-[10px] font-mono opacity-60 block pt-0.5">
                        +{module.topics.length - 4} MORE TOPICS
                      </span>
                    )}
                  </div>
                </div>

                {/* Module Bottom Actions & Expandable Syllabus */}
                <div className="p-4 bg-black/10 flex flex-col space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <button
                      onClick={() => setExpandedModuleId(isExpanded ? null : module.id)}
                      className="flex-1 py-2 px-3 border border-current text-xs font-mono uppercase font-bold tracking-wider hover:bg-current hover:text-white transition-colors text-center"
                    >
                      {isExpanded ? 'CLOSE SYLLABUS' : `VIEW ${module.lessons.length} LESSONS`}
                    </button>

                    {module.lessons.length > 0 && (
                      <button
                        onClick={() => onSelectLesson(module.lessons[0], module.title)}
                        className="py-2 px-3 bg-[#171717] text-[#EFE5CD] hover:bg-[#F13B2F] font-mono text-xs font-bold uppercase tracking-wider transition-colors flex items-center space-x-1"
                        title="Launch first lesson in viewer"
                      >
                        <span>OPEN</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>

                  {/* Accordion Lessons Drawer */}
                  {isExpanded && (
                    <div className="mt-3 pt-3 border-t border-current/20 space-y-2">
                      <span className="text-[10px] font-mono uppercase tracking-wider opacity-80 block">
                        MODULE LESSONS (CLICK TO LAUNCH):
                      </span>
                      {module.lessons.map((lesson) => {
                        const isCompleted = completedLessonIds.includes(lesson.id);
                        return (
                          <div
                            key={lesson.id}
                            onClick={() => onSelectLesson(lesson, module.title)}
                            className="p-2.5 bg-[#EFE5CD] text-[#171717] border border-[#171717] hover:bg-[#F6A51B] transition-colors cursor-pointer flex items-center justify-between min-h-[44px]"
                          >
                            <div className="flex items-center space-x-2">
                              <span className="font-mono text-xs font-bold text-[#F13B2F]">
                                {lesson.number}
                              </span>
                              <span className="font-sans text-xs font-bold line-clamp-1">
                                {lesson.title}
                              </span>
                            </div>
                            <div className="flex items-center space-x-2 shrink-0 font-mono text-[10px]">
                              <span>{lesson.duration}</span>
                              {isCompleted && (
                                <span className="text-[#078C4C] font-bold">✓</span>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
