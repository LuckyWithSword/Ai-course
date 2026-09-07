import React from 'react';
import { Challenge } from '../types';
import { ArrowUpRight, Flame, Trophy, Clock, CheckCircle } from 'lucide-react';

interface ChallengesSectionProps {
  challenges: Challenge[];
  onSelectChallenge: (challenge: Challenge) => void;
  completedChallengeIds: string[];
}

export const ChallengesSection: React.FC<ChallengesSectionProps> = ({
  challenges,
  onSelectChallenge,
  completedChallengeIds,
}) => {
  return (
    <section id="challenges" className="w-full bg-[#171717] text-[#EFE5CD] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b-4 border-[#171717]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="border-b-2 border-[#333333] pb-10 mb-12 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            <div className="flex items-center space-x-2 text-xs font-mono text-[#F13B2F] uppercase font-bold tracking-widest mb-2">
              <span>11 • SPRINT ARENA</span>
              <span>•</span>
              <span>TIME-BOUND ARCHITECTURAL TESTS</span>
            </div>
            <h2 className="font-display text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tight text-[#EFE5CD] leading-[0.9]">
              PRACTICAL CHALLENGES.
            </h2>
          </div>

          <div className="max-w-md font-mono text-xs text-[#EFE5CD]/80 space-y-2">
            <p>
              Each challenge is structured like an industrial engineering sprint. You receive a realistic business scenario, strict constraints, and an automated evaluation rubric.
            </p>
            <p className="text-[#078C4C] font-bold">
              Submit your prompt or schema to verify compliance and earn completion credentials.
            </p>
          </div>
        </div>

        {/* Challenges Event Poster Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {challenges.map((challenge) => {
            const isCompleted = completedChallengeIds.includes(challenge.id);
            return (
              <div
                key={challenge.id}
                className="bg-[#EFE5CD] text-[#171717] border-3 border-[#171717] shadow-[5px_5px_0px_#F13B2F] flex flex-col justify-between transition-transform hover:-translate-y-1 relative"
              >
                <div className="p-6">
                  {/* Top Bar */}
                  <div className="flex justify-between items-start border-b-2 border-[#171717] pb-3 mb-4">
                    <span className="font-mono text-xs font-bold text-[#F13B2F]">
                      CHALLENGE {challenge.number}
                    </span>
                    <span className="font-mono text-[10px] bg-[#171717] text-[#EFE5CD] px-2 py-0.5 font-bold uppercase">
                      {challenge.difficulty}
                    </span>
                  </div>

                  {/* Title & Time */}
                  <h3 className="font-display text-3xl sm:text-4xl uppercase leading-none tracking-tight mb-4 min-h-[4rem]">
                    {challenge.title}
                  </h3>

                  <div className="bg-[#171717] text-[#EFE5CD] p-3 mb-4 font-mono text-xs flex justify-between items-center">
                    <div className="flex items-center space-x-1.5 text-[#F6A51B] font-bold">
                      <Trophy className="w-4 h-4 text-[#F6A51B]" />
                      <span className="truncate max-w-[120px]">{challenge.badgeName}</span>
                    </div>
                    <div className="text-[10px] opacity-70 flex items-center space-x-1 shrink-0">
                      <Clock className="w-3 h-3" />
                      <span>{challenge.timeEstimate}</span>
                    </div>
                  </div>

                  <p className="font-sans text-xs text-[#171717]/90 leading-relaxed mb-4">
                    {challenge.objective}
                  </p>

                  <div className="border-t border-[#171717]/20 pt-3">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#171717]/60 block mb-1">
                      BADGE REWARD:
                    </span>
                    <div className="flex items-center space-x-1.5 font-mono text-xs font-bold text-[#0759A8]">
                      <Trophy className="w-3.5 h-3.5" />
                      <span>{challenge.badgeName}</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Action */}
                <div className="border-t-2 border-[#171717] p-3 bg-[#F7F1E3]">
                  <button
                    onClick={() => onSelectChallenge(challenge)}
                    className={`w-full py-2.5 font-mono text-xs uppercase font-bold tracking-wider transition-colors flex items-center justify-center space-x-1.5 ${
                      isCompleted
                        ? 'bg-[#078C4C] text-[#EFE5CD]'
                        : 'bg-[#171717] text-[#EFE5CD] hover:bg-[#F13B2F]'
                    }`}
                  >
                    {isCompleted ? (
                      <>
                        <CheckCircle className="w-3.5 h-3.5" />
                        <span>CHALLENGE COMPLETED</span>
                      </>
                    ) : (
                      <>
                        <span>START CHALLENGE</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
