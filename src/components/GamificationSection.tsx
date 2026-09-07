import React, { useState } from 'react';
import { RANK_LEVELS, BADGES_DATA, LEADERBOARD_USERS } from '../data/gamificationData';
import { StudentState, RankLevel } from '../types';
import { Award, Shield, ChevronRight, Check } from 'lucide-react';

interface GamificationSectionProps {
  studentState: StudentState;
}

export const GamificationSection: React.FC<GamificationSectionProps> = ({
  studentState,
}) => {
  const [activeTab, setActiveTab] = useState<'RANKS' | 'BADGES' | 'LEADERBOARD'>('RANKS');

  const safeXP = typeof studentState?.xp === 'number' ? studentState.xp : 0;
  const safeStreak = typeof studentState?.streakDays === 'number' ? studentState.streakDays : 0;

  const currentRank: RankLevel = [...RANK_LEVELS]
    .reverse()
    .find((r) => safeXP >= r.minXP) || RANK_LEVELS[0];

  const nextRank = RANK_LEVELS.find((r) => r.level === currentRank.level + 1);
  const xpNeeded = nextRank ? Math.max(0, nextRank.minXP - safeXP) : 0;
  const progressPercent = nextRank
    ? Math.min(100, Math.max(0, Math.round(((safeXP - currentRank.minXP) / (nextRank.minXP - currentRank.minXP)) * 100)))
    : 100;

  return (
    <section id="gamification" className="w-full bg-[#F6A51B] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b-4 border-[#171717]">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Control Room Widget */}
        <div className="bg-[#171717] text-[#EFE5CD] border-3 sm:border-4 border-[#171717] p-6 sm:p-10 mb-12 shadow-[8px_8px_0px_#0759A8]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* User Active Rank Display */}
            <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-[#333333] pb-6 lg:pb-0 lg:pr-8">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#F6A51B] font-bold block mb-1">
                OPERATIONAL STATUS
              </span>
              <div className="flex items-center space-x-4 mb-3">
                <div className="w-16 h-16 bg-[#0759A8] text-[#F6A51B] border-2 border-[#EFE5CD] flex items-center justify-center font-display text-4xl font-bold">
                  {currentRank.badgeSymbol}
                </div>
                <div>
                  <span className="text-xs font-mono text-[#EFE5CD]/70 uppercase block">
                    LEVEL 0{currentRank.level}
                  </span>
                  <h3 className="font-display text-3xl sm:text-4xl text-[#EFE5CD] uppercase leading-none tracking-tight">
                    {currentRank.title}
                  </h3>
                </div>
              </div>
              <p className="font-mono text-xs text-[#EFE5CD]/80 leading-relaxed">
                {currentRank.description}
              </p>
            </div>

            {/* XP Bar & Progress */}
            <div className="lg:col-span-5 border-b lg:border-b-0 lg:border-r border-[#333333] pb-6 lg:pb-0 lg:pr-8 space-y-3">
              <div className="flex justify-between items-baseline">
                <span className="text-xs font-mono text-[#EFE5CD]/70 uppercase">ACCUMULATED XP</span>
                <div className="font-display text-4xl sm:text-5xl text-[#F6A51B] leading-none">
                  {safeXP.toLocaleString()} XP
                </div>
              </div>

              {/* Physical Bar */}
              <div className="w-full bg-[#262626] h-5 border border-[#404040] p-0.5">
                <div
                  className="bg-[#078C4C] h-full transition-all duration-500"
                  style={{ width: `${progressPercent}%` }}
                ></div>
              </div>

              <div className="flex justify-between items-center text-xs font-mono">
                <span className="text-[#078C4C] font-bold">{progressPercent}% TOWARD NEXT TIER</span>
                {nextRank ? (
                  <span className="text-[#EFE5CD]/70">
                    {xpNeeded} XP NEEDED FOR LVL 0{nextRank.level}
                  </span>
                ) : (
                  <span className="text-[#F6A51B]">MAXIMUM RANK ATTAINED</span>
                )}
              </div>
            </div>

            {/* Current Streak & Perks */}
            <div className="lg:col-span-3 font-mono text-xs space-y-2">
              <div className="bg-[#262626] p-3 border border-[#333333]">
                <span className="text-[10px] text-[#EFE5CD]/60 block uppercase">STREAK VELOCITY</span>
                <div className="font-display text-3xl text-[#F13B2F] leading-tight">
                  {safeStreak} DAYS ACTIVE
                </div>
              </div>
              <div className="text-[11px] text-[#EFE5CD]/80">
                Complete daily challenge tasks to unlock multi-agent sandbox privileges.
              </div>
            </div>

          </div>
        </div>

        {/* Section Tabs: Ranks, Badges, Leaderboard */}
        <div className="bg-[#EFE5CD] border-3 sm:border-4 border-[#171717] p-6 sm:p-8 shadow-[6px_6px_0px_#171717]">
          
          <div className="flex flex-wrap items-center justify-between gap-4 border-b-2 border-[#171717] pb-4 mb-8">
            <div className="flex items-center space-x-2">
              <span className="w-3 h-3 bg-[#F13B2F]"></span>
              <h2 className="font-display text-4xl sm:text-5xl uppercase tracking-tight text-[#171717]">
                THE PROGRESSION TIERS.
              </h2>
            </div>

            <div className="flex space-x-1 font-mono text-xs">
              {(['RANKS', 'BADGES', 'LEADERBOARD'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 border-2 border-[#171717] uppercase font-bold tracking-wider transition-all ${
                    activeTab === tab
                      ? 'bg-[#171717] text-[#EFE5CD]'
                      : 'bg-[#F7F1E3] text-[#171717] hover:bg-[#EFE5CD]'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* TAB 1: RANKS */}
          {activeTab === 'RANKS' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {RANK_LEVELS.map((rank) => {
                const isUnlocked = safeXP >= rank.minXP;
                const isCurrent = currentRank.level === rank.level;
                return (
                  <div
                    key={rank.level}
                    className={`border-2 border-[#171717] p-6 flex flex-col justify-between ${
                      isCurrent
                        ? 'bg-[#0759A8] text-[#EFE5CD] shadow-[4px_4px_0px_#171717]'
                        : isUnlocked
                        ? 'bg-[#EFE5CD] text-[#171717]'
                        : 'bg-[#E5DAC0]/50 text-[#171717]/60 border-dashed'
                    }`}
                  >
                    <div>
                      <div className="flex justify-between items-start mb-4">
                        <span className="font-display text-4xl leading-none text-[#F13B2F]">
                          {rank.badgeSymbol}
                        </span>
                        <div className="font-mono text-xs">
                          <span className="px-2 py-0.5 bg-[#171717] text-[#EFE5CD] font-bold">
                            LEVEL 0{rank.level}
                          </span>
                        </div>
                      </div>

                      <h3 className="font-display text-3xl uppercase tracking-tight mb-1">
                        {rank.title}
                      </h3>
                      <span className="font-mono text-xs font-bold block mb-3 opacity-80">
                        REQ: {rank.minXP.toLocaleString()} XP
                      </span>

                      <p className="font-sans text-xs leading-relaxed opacity-90 mb-6">
                        {rank.description}
                      </p>
                    </div>

                    <div className="border-t border-current/20 pt-4 font-mono text-xs">
                      <span className="text-[10px] uppercase tracking-wider block opacity-70 mb-1">
                        UNLOCKED CAPABILITIES:
                      </span>
                      <ul className="space-y-1">
                        {rank.unlockedPerks.map((perk, idx) => (
                          <li key={idx} className="flex items-center space-x-1.5 text-[11px]">
                            <span className="text-[#078C4C] font-bold">✓</span>
                            <span>{perk}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* TAB 2: BADGES */}
          {activeTab === 'BADGES' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {BADGES_DATA.map((badge) => {
                const isEarned = safeXP >= badge.unlockedAtXP;
                return (
                  <div
                    key={badge.id}
                    className={`border-2 border-[#171717] p-5 flex items-start space-x-4 ${
                      isEarned
                        ? 'bg-[#F7F1E3] text-[#171717] shadow-[3px_3px_0px_#171717]'
                        : 'bg-[#E5DAC0]/40 text-[#171717]/50 border-dashed'
                    }`}
                  >
                    <div
                      className={`w-12 h-12 border-2 border-[#171717] flex items-center justify-center font-display text-2xl shrink-0 ${
                        isEarned ? 'bg-[#F6A51B] text-[#171717]' : 'bg-[#171717]/10'
                      }`}
                    >
                      {badge.symbol}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="font-display text-xl uppercase tracking-wide truncate">
                          {badge.name}
                        </span>
                        {isEarned && (
                          <span className="text-[#078C4C] font-mono text-[10px] font-bold">
                            UNLOCKED
                          </span>
                        )}
                      </div>
                      <span className="text-[10px] font-mono uppercase text-[#F13B2F] font-bold block mb-1">
                        {badge.category} • AT {badge.unlockedAtXP} XP
                      </span>
                      <p className="font-sans text-xs opacity-90 leading-snug">
                        {badge.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* TAB 3: LEADERBOARD */}
          {activeTab === 'LEADERBOARD' && (
            <div className="overflow-x-auto">
              <div className="mb-4 text-xs font-mono text-[#171717]/70">
                PRIVACY-RESPECTING PEER COHORT BENCHMARK // VOL. 2026
              </div>
              <table className="w-full text-left font-mono text-xs border-2 border-[#171717] bg-[#F7F1E3]">
                <thead className="bg-[#171717] text-[#EFE5CD] uppercase text-[11px]">
                  <tr>
                    <th className="p-3">RANK</th>
                    <th className="p-3">COHORT IDENTIFIER</th>
                    <th className="p-3">TIER TITLE</th>
                    <th className="p-3">BUILDS FINISHED</th>
                    <th className="p-3 text-right">XP BENCHMARK</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#171717]">
                  {LEADERBOARD_USERS.map((user) => (
                    <tr
                      key={user.rank}
                      className={user.rank <= 3 ? 'bg-[#EFE5CD] font-bold' : 'hover:bg-[#EFE5CD]/60'}
                    >
                      <td className="p-3">
                        <span className={`px-2 py-0.5 ${
                          user.rank === 1
                            ? 'bg-[#F6A51B] text-[#171717] font-bold'
                            : user.rank === 2
                            ? 'bg-[#0759A8] text-[#EFE5CD] font-bold'
                            : user.rank === 3
                            ? 'bg-[#078C4C] text-[#EFE5CD] font-bold'
                            : 'text-[#171717]'
                        }`}>
                          #{user.rank}
                        </span>
                      </td>
                      <td className="p-3 flex items-center space-x-2">
                        <span className="text-[#F13B2F]">{user.badgeSymbol}</span>
                        <span>{user.name}</span>
                      </td>
                      <td className="p-3 uppercase text-[#0759A8] font-bold">{user.levelTitle}</td>
                      <td className="p-3">{user.completedProjects} / 8 PROJECTS</td>
                      <td className="p-3 text-right font-bold text-[#171717]">
                        {user.xp.toLocaleString()} XP
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
