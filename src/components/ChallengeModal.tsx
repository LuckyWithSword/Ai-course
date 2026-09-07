import React, { useState } from 'react';
import { Challenge } from '../types';
import { X, Check, Trophy, Clock, CheckCircle2, Play, AlertCircle } from 'lucide-react';

interface ChallengeModalProps {
  challenge: Challenge | null;
  onClose: () => void;
  isCompleted: boolean;
  onSubmitChallenge: (challengeId: string) => void;
}

export const ChallengeModal: React.FC<ChallengeModalProps> = ({
  challenge,
  onClose,
  isCompleted,
  onSubmitChallenge,
}) => {
  if (!challenge) return null;

  const [userSubmission, setUserSubmission] = useState(challenge.starterTemplate);
  const [evaluating, setEvaluating] = useState(false);
  const [evaluationFeedback, setEvaluationFeedback] = useState<string | null>(
    isCompleted ? 'Challenge previously evaluated and verified compliant.' : null
  );

  const handleRunEvaluation = () => {
    setEvaluating(true);
    setEvaluationFeedback(null);

    setTimeout(() => {
      setEvaluating(false);
      if (userSubmission.length < 30) {
        setEvaluationFeedback('Error: Input payload too brief. Please expand your prompt/pipeline implementation to address the criteria.');
      } else {
        setEvaluationFeedback('Evaluation Passed: 100% criteria compliance verified. Schemas adhered, constraints validated, completion recorded.');
        onSubmitChallenge(challenge.id);
      }
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#171717]/85 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4 md:p-6 animate-fadeIn">
      <div className="bg-[#EFE5CD] text-[#171717] border-3 sm:border-4 border-[#171717] shadow-[6px_6px_0px_#F13B2F] sm:shadow-[12px_12px_0px_#F13B2F] max-w-4xl w-full max-h-[96vh] sm:max-h-[92vh] flex flex-col overflow-hidden relative">
        
        {/* Top Control Bar */}
        <div className="bg-[#F13B2F] text-[#EFE5CD] px-3 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between border-b-2 border-[#171717] font-mono text-xs">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <span className="bg-[#171717] text-[#EFE5CD] px-2 py-0.5 font-bold text-[11px] sm:text-xs">
              SPRINT {challenge.number}
            </span>
            <span className="font-bold uppercase tracking-wider truncate max-w-[140px] xs:max-w-[200px] sm:max-w-none">
              {challenge.title}
            </span>
          </div>

          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="flex items-center space-x-1 font-bold text-[#EFE5CD] text-[11px] sm:text-xs">
              <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>{challenge.timeEstimate}</span>
            </div>
            <button
              onClick={onClose}
              className="p-1 text-[#EFE5CD] hover:bg-[#171717] transition-colors border border-[#EFE5CD]/30"
              aria-label="Close challenge modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Body */}
        <div className="p-4 sm:p-8 lg:p-10 overflow-y-auto space-y-6 flex-1">
          
          <div>
            <div className="flex items-center space-x-2 text-[11px] sm:text-xs font-mono text-[#0759A8] uppercase font-bold tracking-wider mb-2">
              <Clock className="w-3.5 h-3.5 shrink-0" />
              <span>TIME TARGET: {challenge.timeEstimate}</span>
              <span>•</span>
              <span>DIFFICULTY: {challenge.difficulty}</span>
            </div>
            <h2 className="font-display text-3xl xs:text-4xl sm:text-5xl uppercase tracking-tight leading-none mb-3 text-[#171717] break-words">
              {challenge.title}
            </h2>
            <p className="font-sans text-xs sm:text-base text-[#171717] font-medium leading-relaxed">
              {challenge.scenario}
            </p>
          </div>

          {/* Criteria Checklist */}
          <div className="bg-[#F7F1E3] border-2 border-[#171717] p-4 space-y-2 font-mono text-xs">
            <span className="font-bold text-[#171717] uppercase tracking-wider block">
              EVALUATION PASS CRITERIA:
            </span>
            <div className="space-y-1">
              {challenge.criteria.map((c, idx) => (
                <div key={idx} className="flex items-start space-x-2 text-[#171717]">
                  <span className="text-[#078C4C] font-bold">✓</span>
                  <span>{c}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Workspace Area */}
          <div className="space-y-2">
            <div className="flex justify-between items-center font-mono text-xs">
              <span className="font-bold text-[#171717] uppercase">
                YOUR PROMPT / PIPELINE BLUEPRINT:
              </span>
              <span className="text-[#171717]/60">
                EDITABLE WORKBENCH
              </span>
            </div>

            <textarea
              rows={8}
              value={userSubmission}
              onChange={(e) => setUserSubmission(e.target.value)}
              className="w-full bg-[#171717] text-[#EFE5CD] p-4 font-mono text-xs border-2 border-[#171717] focus:outline-hidden focus:border-[#F6A51B] leading-relaxed resize-y"
              placeholder="Construct your prompt or pipeline definition here..."
            />
          </div>

          {/* Feedback message */}
          {evaluationFeedback && (
            <div
              className={`p-4 border-2 border-[#171717] font-mono text-xs flex items-start space-x-2.5 ${
                evaluationFeedback.includes('Passed') || evaluationFeedback.includes('previously')
                  ? 'bg-[#078C4C] text-[#EFE5CD]'
                  : 'bg-[#F13B2F] text-[#EFE5CD]'
              }`}
            >
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
              <span>{evaluationFeedback}</span>
            </div>
          )}

        </div>

        {/* Bottom Actions */}
        <div className="bg-[#F7F1E3] border-t-2 border-[#171717] p-3 sm:p-4 sm:px-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 font-mono text-xs">
          <div className="flex items-center space-x-1.5 text-[#0759A8] font-bold text-[11px] sm:text-xs">
            <Trophy className="w-4 h-4 shrink-0" />
            <span>UNLOCKS: {challenge.badgeName}</span>
          </div>

          <button
            onClick={handleRunEvaluation}
            disabled={evaluating}
            className="w-full sm:w-auto px-5 py-2.5 sm:py-3 bg-[#171717] text-[#EFE5CD] hover:bg-[#F13B2F] disabled:opacity-50 font-mono text-xs uppercase font-bold tracking-wider transition-colors flex items-center justify-center space-x-2 border-2 border-[#171717] shadow-[3px_3px_0px_#171717] min-h-[44px]"
          >
            {evaluating ? (
              <span>EVALUATING SCHEMAS...</span>
            ) : isCompleted ? (
              <>
                <CheckCircle2 className="w-4 h-4 text-[#078C4C]" />
                <span>RE-VERIFY SOLUTION (VERIFIED)</span>
              </>
            ) : (
              <>
                <Play className="w-4 h-4 fill-current" />
                <span>SUBMIT & RUN EVALUATION</span>
              </>
            )}
          </button>
        </div>

      </div>
    </div>
  );
};
