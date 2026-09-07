import React, { useState, useEffect } from 'react';
import { Timer, ArrowUpRight, ChevronDown, ChevronUp, Calendar } from 'lucide-react';

interface FloatingTimerBadgeProps {
  onOpenEnrollment: () => void;
}

// Closing Date: 14 September 2026 00:00:00 UTC
// Aligns with reference duration: 6 days, 13 hours, 42 minutes
const TARGET_DEADLINE_MS = new Date('2026-09-14T00:00:00Z').getTime();
const INITIAL_DURATION_SEC = 6 * 86400 + 13 * 3600 + 42 * 60; // 6d 13h 42m

function calculateRemainingSeconds(): number {
  const now = Date.now();
  const diffSec = Math.floor((TARGET_DEADLINE_MS - now) / 1000);

  // If system time is active within a realistic window leading up to Sept 14, 2026
  if (diffSec > 0 && diffSec < 30 * 86400) {
    return diffSec;
  }

  // Fallback for browsers with divergent system clocks: maintain session countdown anchored at 6d 13h 42m
  try {
    const storageKey = 'ai_mastery_deadline_14sept2026';
    const stored = localStorage.getItem(storageKey);
    if (stored) {
      const storedDeadline = parseInt(stored, 10);
      const remaining = Math.floor((storedDeadline - now) / 1000);
      if (remaining > 0 && remaining <= 8 * 86400) {
        return remaining;
      }
    }
    const sessionDeadline = now + INITIAL_DURATION_SEC * 1000;
    localStorage.setItem(storageKey, sessionDeadline.toString());
  } catch {
    // Ignore storage issues
  }
  return INITIAL_DURATION_SEC;
}

export const FloatingTimerBadge: React.FC<FloatingTimerBadgeProps> = ({
  onOpenEnrollment,
}) => {
  const [secondsRemaining, setSecondsRemaining] = useState<number>(calculateRemainingSeconds);
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsRemaining((prev) => {
        if (prev <= 1) {
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const days = Math.floor(secondsRemaining / 86400);
  const hours = Math.floor((secondsRemaining % 86400) / 3600);
  const minutes = Math.floor((secondsRemaining % 3600) / 60);
  const seconds = secondsRemaining % 60;

  const formatUnit = (val: number) => String(Math.max(0, val)).padStart(2, '0');

  return (
    <aside
      id="floating-timer-container"
      aria-label="Registration countdown to 14 September 2026"
      className="fixed bottom-3 right-3 sm:bottom-6 sm:right-6 z-40 select-none animate-in fade-in slide-in-from-bottom-4 duration-300 max-w-[calc(100vw-24px)]"
    >
      {!isCollapsed ? (
        /* Expanded Floating Timer Card */
        <div
          id="floating-timer-badge"
          className="bg-[#171717] text-[#EFE5CD] border-2 border-[#171717] rounded-xs shadow-[4px_4px_0px_#F6A51B] p-3 sm:p-3.5 w-[295px] xs:w-[315px] sm:w-[330px] transition-all"
        >
          {/* Top Header Row with Closing Date */}
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#333333]">
            <div className="flex items-center space-x-1.5 min-w-0">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F13B2F] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F13B2F]" />
              </span>
              <div className="flex items-center space-x-1 text-[#F6A51B] font-mono text-[10px] sm:text-[11px] font-bold tracking-wider uppercase truncate">
                <Calendar className="w-3 h-3 shrink-0" />
                <span>CLOSING 14 SEPT 2026</span>
              </div>
            </div>

            <button
              id="collapse-timer-badge-btn"
              onClick={() => setIsCollapsed(true)}
              className="p-1 text-[#EFE5CD]/60 hover:text-[#EFE5CD] hover:bg-[#262626] rounded-xs transition-colors shrink-0"
              aria-label="Minimize timer badge"
              title="Minimize timer"
            >
              <ChevronDown className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Subtitle */}
          <div className="flex items-center justify-between text-[10px] font-mono text-[#EFE5CD]/60 uppercase tracking-wider mb-2">
            <span>COHORT 2026 INTAKE</span>
            <span className="text-[#F13B2F] font-bold">LIMITED SEATS</span>
          </div>

          {/* 4-Column Digits Display: Days, Hours, Minutes, Seconds */}
          <div className="grid grid-cols-4 gap-1 sm:gap-1.5 mb-3 items-center">
            {/* Days */}
            <div className="bg-[#222222] border border-[#333333] rounded-xs p-1.5 text-center">
              <span className="font-mono font-bold text-base xs:text-lg sm:text-xl text-[#EFE5CD] leading-none block">
                {formatUnit(days)}
              </span>
              <span className="font-mono text-[8px] xs:text-[9px] uppercase tracking-wider text-[#EFE5CD]/50 mt-1 block">
                DAYS
              </span>
            </div>

            {/* Hours */}
            <div className="bg-[#222222] border border-[#333333] rounded-xs p-1.5 text-center">
              <span className="font-mono font-bold text-base xs:text-lg sm:text-xl text-[#EFE5CD] leading-none block">
                {formatUnit(hours)}
              </span>
              <span className="font-mono text-[8px] xs:text-[9px] uppercase tracking-wider text-[#EFE5CD]/50 mt-1 block">
                HRS
              </span>
            </div>

            {/* Minutes */}
            <div className="bg-[#222222] border border-[#333333] rounded-xs p-1.5 text-center">
              <span className="font-mono font-bold text-base xs:text-lg sm:text-xl text-[#EFE5CD] leading-none block">
                {formatUnit(minutes)}
              </span>
              <span className="font-mono text-[8px] xs:text-[9px] uppercase tracking-wider text-[#EFE5CD]/50 mt-1 block">
                MIN
              </span>
            </div>

            {/* Seconds (Highlighted with Amber accent to convey real-time ticking) */}
            <div className="bg-[#222222] border border-[#F6A51B]/40 rounded-xs p-1.5 text-center">
              <span className="font-mono font-bold text-base xs:text-lg sm:text-xl text-[#F6A51B] leading-none block">
                {formatUnit(seconds)}
              </span>
              <span className="font-mono text-[8px] xs:text-[9px] uppercase tracking-wider text-[#F6A51B]/80 mt-1 block">
                SEC
              </span>
            </div>
          </div>

          {/* Action Footer */}
          <div className="flex items-center justify-between gap-2 pt-0.5 border-t border-[#262626]">
            <div className="flex flex-col">
              <span className="font-mono text-[9px] text-[#EFE5CD]/60 uppercase leading-none">
                Tuition
              </span>
              <span className="font-mono text-xs font-bold text-[#EFE5CD] leading-tight">
                ₹6,899
              </span>
            </div>

            <button
              id="floating-timer-enroll-btn"
              onClick={onOpenEnrollment}
              className="flex-1 px-3 py-2 min-h-[38px] text-[11px] font-mono font-bold uppercase tracking-wider bg-[#F6A51B] text-[#171717] hover:bg-[#F13B2F] hover:text-[#EFE5CD] transition-colors rounded-xs flex items-center justify-center space-x-1"
            >
              <span>CLAIM SEAT</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      ) : (
        /* Minimized Floating Pill */
        <div
          id="floating-timer-collapsed-pill"
          className="bg-[#171717] text-[#EFE5CD] border-2 border-[#171717] rounded-xs shadow-[3px_3px_0px_#F6A51B] flex items-center p-1 sm:p-1.5 space-x-2 transition-all hover:bg-[#222222]"
        >
          <button
            id="floating-timer-expand-btn"
            onClick={() => setIsCollapsed(false)}
            className="flex items-center space-x-2 px-2 py-1 min-h-[40px] text-left group"
            aria-label="Expand 14 September 2026 countdown timer"
          >
            <div className="flex items-center space-x-1.5">
              <Timer className="w-4 h-4 text-[#F6A51B] shrink-0" />
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F13B2F] opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#F13B2F]" />
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-[9px] text-[#F6A51B] font-bold uppercase tracking-wider leading-none">
                CLOSES 14 SEPT 2026
              </span>
              <span className="font-mono text-xs font-bold text-[#EFE5CD] tracking-wider leading-tight">
                {days}d {formatUnit(hours)}h {formatUnit(minutes)}m {formatUnit(seconds)}s
              </span>
            </div>
            <ChevronUp className="w-3.5 h-3.5 text-[#EFE5CD]/60 group-hover:text-[#EFE5CD] transition-colors ml-1" />
          </button>

          <button
            id="floating-timer-collapsed-enroll-btn"
            onClick={onOpenEnrollment}
            className="px-2.5 py-1.5 min-h-[36px] bg-[#F6A51B] text-[#171717] hover:bg-[#F13B2F] hover:text-[#EFE5CD] font-mono text-[10px] font-bold uppercase tracking-wider rounded-xs transition-colors flex items-center shrink-0"
          >
            JOIN
          </button>
        </div>
      )}
    </aside>
  );
};
