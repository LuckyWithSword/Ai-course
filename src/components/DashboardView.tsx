import React from 'react';
import { StudentState, Module, Lesson, Project } from '../types';
import { RANK_LEVELS, BADGES_DATA } from '../data/gamificationData';
import { ArrowRight, Flame, Trophy, CheckCircle2, Play, BookOpen, Layers, Laptop, ExternalLink } from 'lucide-react';

interface DashboardViewProps {
  studentState: StudentState;
  modules: Module[];
  projects: Project[];
  onOpenLesson: (lesson: Lesson, moduleTitle: string) => void;
  onOpenProject: (project: Project) => void;
  onReturnToSite: () => void;
}

export const DashboardView: React.FC<DashboardViewProps> = ({
  studentState,
  modules,
  projects,
  onOpenLesson,
  onOpenProject,
  onReturnToSite,
}) => {
  const safeXP = typeof studentState?.xp === 'number' ? studentState.xp : 0;
  const safeStreak = typeof studentState?.streakDays === 'number' ? studentState.streakDays : 0;
  const completedLessons = Array.isArray(studentState?.completedLessons) ? studentState.completedLessons : [];
  const completedProjects = Array.isArray(studentState?.completedProjects) ? studentState.completedProjects : [];

  const currentRank = [...RANK_LEVELS]
    .reverse()
    .find((r) => safeXP >= r.minXP) || RANK_LEVELS[0];

  const nextRank = RANK_LEVELS.find((r) => r.level === currentRank.level + 1);
  const totalLessons = modules.reduce((acc, m) => acc + m.lessons.length, 0);
  const completedLessonsCount = completedLessons.length;
  const overallPercent = Math.min(100, Math.round((completedLessonsCount / (totalLessons || 1)) * 100));

  // Find next recommended lesson
  let nextLesson: Lesson = modules[0].lessons[0];
  let currentModuleTitle = modules[0].title;
  for (const m of modules) {
    const uncompleted = m.lessons.find((l) => !completedLessons.includes(l.id));
    if (uncompleted) {
      nextLesson = uncompleted;
      currentModuleTitle = m.title;
      break;
    }
  }

  // Active project
  const activeProject = projects.find((p) => !completedProjects.includes(p.id)) || projects[0];

  return (
    <div className="min-h-screen bg-[#F6A51B] py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Top Control Bar with Return to Public Site */}
        <div className="bg-[#171717] text-[#EFE5CD] border-3 border-[#171717] px-6 py-4 flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
          <div className="flex items-center space-x-3">
            <span className="w-3 h-3 bg-[#078C4C] rounded-full animate-ping"></span>
            <span className="font-bold uppercase tracking-widest text-[#F6A51B]">
              STUDENT EDITORIAL CONTROL ROOM // TERMINAL 01
            </span>
            <span className="hidden md:inline text-white/50">|</span>
            <span className="hidden md:inline text-white/70">AUTHENTICATED LEARNER ENVIRONMENT</span>
          </div>

          <button
            onClick={onReturnToSite}
            className="px-4 py-1.5 bg-[#EFE5CD] text-[#171717] hover:bg-[#F13B2F] hover:text-[#EFE5CD] font-bold uppercase tracking-wider transition-colors border border-[#EFE5CD]"
          >
            ← RETURN TO EDITORIAL FRONT COVER
          </button>
        </div>

        {/* Hero Control Room Metric Strip */}
        <div className="bg-[#EFE5CD] border-3 sm:border-4 border-[#171717] shadow-[8px_8px_0px_#171717] p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Rank Identity Badge */}
            <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r-2 border-[#171717] pb-6 lg:pb-0 lg:pr-8">
              <span className="font-mono text-xs uppercase font-bold text-[#F13B2F] tracking-widest block mb-1">
                ACTIVE OPERATOR IDENTITY
              </span>
              <div className="flex items-center space-x-4 mb-2">
                <div className="w-16 h-16 bg-[#0759A8] text-[#F6A51B] border-2 border-[#171717] font-display text-4xl flex items-center justify-center font-bold">
                  {currentRank.badgeSymbol}
                </div>
                <div>
                  <span className="font-mono text-xs text-[#171717]/70 font-bold block">
                    OPERATOR TIER
                  </span>
                  <h2 className="font-display text-4xl uppercase tracking-tight text-[#171717] leading-none">
                    {currentRank.title}
                  </h2>
                </div>
              </div>
              <p className="font-sans text-xs text-[#171717]/80 font-medium">
                {currentRank.description}
              </p>
            </div>

            {/* XP Bar & Completion */}
            <div className="lg:col-span-5 border-b lg:border-b-0 lg:border-r-2 border-[#171717] pb-6 lg:pb-0 lg:pr-8 space-y-3">
              <div className="flex justify-between items-baseline font-mono text-xs">
                <span className="text-[#171717]/70 font-bold uppercase">ACCUMULATED XP</span>
                <span className="font-display text-4xl sm:text-5xl text-[#171717] leading-none">
                  {safeXP.toLocaleString()} XP
                </span>
              </div>

              {/* High Contrast Bar */}
              <div className="w-full bg-[#171717] h-5 border border-[#171717] p-0.5">
                <div
                  className="bg-[#078C4C] h-full transition-all duration-500"
                  style={{ width: `${overallPercent}%` }}
                ></div>
              </div>

              <div className="flex justify-between items-center font-mono text-xs text-[#171717]/80">
                <span className="font-bold text-[#078C4C]">{overallPercent}% CURRICULUM COMPLETE</span>
                <span>{completedLessonsCount} / {totalLessons} SESSIONS</span>
              </div>
            </div>

            {/* Streak & Next Tier */}
            <div className="lg:col-span-3 space-y-3 font-mono text-xs">
              <div className="bg-[#171717] text-[#EFE5CD] p-3 border-2 border-[#171717] flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-[#EFE5CD]/60 uppercase block">DAILY STREAK</span>
                  <span className="font-display text-3xl text-[#F6A51B] leading-none">
                    {safeStreak} DAYS
                  </span>
                </div>
                <Flame className="w-7 h-7 text-[#F13B2F] fill-[#F13B2F]" />
              </div>

              {nextRank ? (
                <div className="text-[11px] text-[#171717]/80">
                  <span className="font-bold text-[#171717]">NEXT MILESTONE:</span> {Math.max(0, nextRank.minXP - safeXP)} XP to attain <span className="font-bold uppercase text-[#0759A8]">{nextRank.title}</span>.
                </div>
              ) : (
                <div className="text-[11px] font-bold text-[#078C4C]">
                  MAXIMUM ARCHITECT STATUS REACHED
                </div>
              )}
            </div>

          </div>
        </div>

        {/* Action Grid: Continue Learning + Active Project */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Primary Recommended Action Card */}
          <div className="bg-[#171717] text-[#EFE5CD] border-3 sm:border-4 border-[#171717] p-6 sm:p-8 shadow-[6px_6px_0px_#0759A8] flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start border-b border-[#333333] pb-4 mb-4">
                <div className="flex items-center space-x-2 font-mono text-xs">
                  <span className="bg-[#F13B2F] text-[#EFE5CD] px-2 py-0.5 font-bold uppercase">
                    NEXT RECOMMENDED LESSON
                  </span>
                  <span className="text-[#F6A51B] font-bold">
                    +{nextLesson.xpReward} XP
                  </span>
                </div>
                <span className="font-mono text-xs text-[#EFE5CD]/60">
                  {nextLesson.duration}
                </span>
              </div>

              <span className="font-mono text-xs text-[#0759A8] uppercase font-bold tracking-widest block mb-1">
                {currentModuleTitle}
              </span>

              <h3 className="font-display text-4xl sm:text-5xl uppercase tracking-tight leading-tight text-[#EFE5CD] mb-3">
                {nextLesson.title}
              </h3>

              <p className="font-sans text-xs sm:text-sm text-[#EFE5CD]/80 leading-relaxed font-medium mb-6">
                {nextLesson.summary}
              </p>
            </div>

            <button
              onClick={() => onOpenLesson(nextLesson, currentModuleTitle)}
              className="w-full py-4 bg-[#F6A51B] text-[#171717] hover:bg-[#F13B2F] hover:text-[#EFE5CD] font-display text-2xl uppercase tracking-wider transition-colors flex items-center justify-center space-x-2 border-2 border-[#171717]"
            >
              <Play className="w-5 h-5 fill-current" />
              <span>CONTINUE SESSION (LESSON {nextLesson.number})</span>
            </button>
          </div>

          {/* Active Production Build Card */}
          <div className="bg-[#0759A8] text-[#EFE5CD] border-3 sm:border-4 border-[#171717] p-6 sm:p-8 shadow-[6px_6px_0px_#171717] flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start border-b border-[#EFE5CD]/30 pb-4 mb-4 font-mono text-xs">
                <span className="bg-[#171717] text-[#EFE5CD] px-2 py-0.5 font-bold uppercase">
                  PORTFOLIO SPRINT IN PROGRESS
                </span>
                <span className="bg-[#078C4C] text-[#EFE5CD] px-2 py-0.5 font-bold uppercase">
                  {activeProject.difficulty}
                </span>
              </div>

              <span className="font-mono text-xs text-[#F6A51B] uppercase font-bold tracking-widest block mb-1">
                EXHIBIT {activeProject.number}
              </span>

              <h3 className="font-display text-4xl sm:text-5xl uppercase tracking-tight leading-tight text-[#EFE5CD] mb-2">
                {activeProject.title}
              </h3>

              <p className="font-sans text-xs sm:text-sm text-[#EFE5CD]/90 leading-relaxed font-medium mb-6">
                {activeProject.subtitle}
              </p>

              <div className="bg-[#171717]/40 border border-[#EFE5CD]/20 p-3 font-mono text-xs space-y-1 mb-6">
                <span className="text-[10px] text-[#EFE5CD]/70 uppercase block">CORE SKILLS DEPLOYED:</span>
                <div className="flex flex-wrap gap-1">
                  {activeProject.skills.map((s, idx) => (
                    <span key={idx} className="bg-[#171717] text-[#EFE5CD] px-1.5 py-0.5 text-[10px]">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <button
              onClick={() => onOpenProject(activeProject)}
              className="w-full py-4 bg-[#EFE5CD] text-[#171717] hover:bg-[#171717] hover:text-[#EFE5CD] font-display text-2xl uppercase tracking-wider transition-colors flex items-center justify-center space-x-2 border-2 border-[#171717]"
            >
              <Layers className="w-5 h-5" />
              <span>INSPECT PROJECT BLUEPRINT</span>
            </button>
          </div>

        </div>

        {/* Unlocked Badges & Achievements Strip */}
        <div className="bg-[#EFE5CD] border-3 sm:border-4 border-[#171717] p-6 sm:p-8 shadow-[6px_6px_0px_#171717]">
          <div className="flex justify-between items-center border-b-2 border-[#171717] pb-4 mb-6">
            <div className="flex items-center space-x-2 font-display text-3xl uppercase text-[#171717]">
              <Trophy className="w-6 h-6 text-[#F13B2F]" />
              <span>COLLECTIBLE BADGE INVENTORY</span>
            </div>
            <span className="font-mono text-xs text-[#171717]/70 font-bold">
              {BADGES_DATA.filter((b) => safeXP >= b.unlockedAtXP).length} / {BADGES_DATA.length} UNLOCKED
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {BADGES_DATA.map((badge) => {
              const isUnlocked = safeXP >= badge.unlockedAtXP;
              return (
                <div
                  key={badge.id}
                  className={`p-4 border-2 border-[#171717] flex flex-col items-center text-center justify-between ${
                    isUnlocked ? 'bg-[#F7F1E3]' : 'bg-[#E5DAC0]/40 opacity-50 border-dashed'
                  }`}
                >
                  <div className={`w-12 h-12 border-2 border-[#171717] flex items-center justify-center font-display text-2xl mb-2 ${
                    isUnlocked ? 'bg-[#F6A51B] text-[#171717]' : 'bg-[#171717]/20'
                  }`}>
                    {badge.symbol}
                  </div>
                  <span className="font-display text-lg uppercase leading-tight line-clamp-1 text-[#171717]">
                    {badge.name}
                  </span>
                  <span className="font-mono text-[9px] uppercase font-bold text-[#F13B2F] mt-1">
                    {isUnlocked ? 'ACQUIRED' : `AT ${badge.unlockedAtXP} XP`}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
};
