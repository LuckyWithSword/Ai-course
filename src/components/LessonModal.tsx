import React, { useState } from 'react';
import { Lesson } from '../types';
import { X, Check, Copy, CheckCircle2, ArrowRight, ArrowLeft, Terminal, Flame, BookOpen } from 'lucide-react';

interface LessonModalProps {
  lesson: Lesson | null;
  moduleTitle: string;
  onClose: () => void;
  isCompleted: boolean;
  onToggleComplete: (lessonId: string) => void;
  onNextLesson?: () => void;
  onPrevLesson?: () => void;
}

export const LessonModal: React.FC<LessonModalProps> = ({
  lesson,
  moduleTitle,
  onClose,
  isCompleted,
  onToggleComplete,
  onNextLesson,
  onPrevLesson,
}) => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  if (!lesson) return null;

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#171717]/85 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4 md:p-6 animate-fadeIn">
      {/* Editorial Reading Surface Sheet */}
      <div className="bg-[#EFE5CD] text-[#171717] border-3 sm:border-4 border-[#171717] shadow-[6px_6px_0px_#F6A51B] sm:shadow-[10px_10px_0px_#F6A51B] max-w-4xl w-full max-h-[96vh] sm:max-h-[92vh] flex flex-col overflow-hidden relative">
        
        {/* Top Control Bar */}
        <div className="bg-[#171717] text-[#EFE5CD] px-3 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between border-b-2 border-[#171717] font-mono text-xs">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <span className="bg-[#F13B2F] text-[#EFE5CD] px-1.5 sm:px-2 py-0.5 font-bold text-[11px] sm:text-xs">
              LESSON {lesson.number}
            </span>
            <span className="font-bold text-[#F6A51B] uppercase truncate max-w-[140px] xs:max-w-[200px] sm:max-w-md">
              {moduleTitle}
            </span>
          </div>

          <div className="flex items-center space-x-2 sm:space-x-3">
            <span className="text-[#EFE5CD]/70 font-mono text-xs">
              {lesson.duration}
            </span>
            <button
              onClick={onClose}
              className="p-1 text-[#EFE5CD] hover:bg-[#F13B2F] transition-colors border border-[#EFE5CD]/30"
              aria-label="Close lesson viewer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Reading Content */}
        <div className="p-4 sm:p-8 lg:p-10 overflow-y-auto space-y-6 sm:space-y-8 flex-1">
          
          {/* Lesson Header */}
          <div className="border-b-2 border-[#171717] pb-6">
            <div className="flex items-center space-x-2 text-xs font-mono text-[#0759A8] uppercase font-bold tracking-wider mb-2">
              <span>ESTIMATED RUNTIME: {lesson.duration}</span>
              <span>•</span>
              <span className="uppercase">{lesson.type} WORKFLOW</span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl uppercase tracking-tight leading-[0.95] mb-4 text-[#171717]">
              {lesson.title}
            </h2>
            <p className="font-sans text-base sm:text-lg text-[#171717]/90 font-medium leading-relaxed">
              {lesson.summary}
            </p>
          </div>

          {/* Detailed Content Sections */}
          <div className="space-y-8">
            {lesson.content.map((sec, idx) => (
              <div key={idx} className="space-y-4">
                <div className="flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 bg-[#0759A8]"></span>
                  <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-wide text-[#171717]">
                    {sec.sectionTitle}
                  </h3>
                </div>

                <p className="font-sans text-sm sm:text-base text-[#171717] leading-relaxed">
                  {sec.body}
                </p>

                {/* Prompt Snippet Box */}
                {sec.promptSnippet && (
                  <div className="border-2 border-[#171717] bg-[#F7F1E3] p-4 space-y-2">
                    <div className="flex justify-between items-center font-mono text-xs border-b border-[#171717] pb-2 text-[#0759A8] font-bold">
                      <span>OPERATIONAL PROMPT DIRECTIVE:</span>
                      <button
                        onClick={() => handleCopy(sec.promptSnippet!, idx)}
                        className="flex items-center space-x-1 px-2 py-0.5 bg-[#171717] text-[#EFE5CD] hover:bg-[#F13B2F] transition-colors"
                      >
                        {copiedIndex === idx ? <Check className="w-3 h-3 text-[#078C4C]" /> : <Copy className="w-3 h-3" />}
                        <span>{copiedIndex === idx ? 'COPIED' : 'COPY'}</span>
                      </button>
                    </div>
                    <pre className="font-mono text-xs whitespace-pre-wrap text-[#171717] leading-relaxed pt-1">
                      {sec.promptSnippet}
                    </pre>
                  </div>
                )}

                {/* Code Snippet Box */}
                {sec.codeSnippet && (
                  <div className="border-2 border-[#171717] bg-[#171717] text-[#EFE5CD] p-4 space-y-2">
                    <div className="flex justify-between items-center font-mono text-xs border-b border-[#333333] pb-2 text-[#F6A51B] font-bold">
                      <div className="flex items-center space-x-1.5">
                        <Terminal className="w-3.5 h-3.5" />
                        <span>TYPESCRIPT ARCHITECTURE:</span>
                      </div>
                      <button
                        onClick={() => handleCopy(sec.codeSnippet!, idx + 100)}
                        className="flex items-center space-x-1 px-2 py-0.5 bg-[#262626] text-[#EFE5CD] hover:bg-[#F13B2F] transition-colors"
                      >
                        {copiedIndex === idx + 100 ? <Check className="w-3 h-3 text-[#078C4C]" /> : <Copy className="w-3 h-3" />}
                        <span>{copiedIndex === idx + 100 ? 'COPIED' : 'COPY CODE'}</span>
                      </button>
                    </div>
                    <pre className="font-mono text-xs whitespace-pre-wrap text-[#EFE5CD] leading-relaxed overflow-x-auto pt-1">
                      {sec.codeSnippet}
                    </pre>
                  </div>
                )}

                {/* Key Takeaways */}
                {sec.keyTakeaways && sec.keyTakeaways.length > 0 && (
                  <div className="bg-[#E5DAC0]/60 border-l-4 border-[#F13B2F] p-4 space-y-1.5 font-mono text-xs">
                    <span className="font-bold text-[#171717] uppercase tracking-wider block">
                      ARCHITECTURAL TAKEAWAYS:
                    </span>
                    {sec.keyTakeaways.map((point, pIdx) => (
                      <div key={pIdx} className="flex items-start space-x-2 text-[#171717]">
                        <span className="text-[#F13B2F] font-bold">↳</span>
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Practical Assignment Task Box */}
          <div className="bg-[#171717] text-[#EFE5CD] border-3 border-[#171717] p-6 space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-[#F6A51B] font-bold uppercase tracking-wider">
                PRACTICAL VERIFICATION TASK
              </span>
              <span className="font-mono text-[11px] bg-[#0759A8] text-[#EFE5CD] px-2 py-0.5 font-bold">
                HANDS-ON
              </span>
            </div>
            <p className="font-sans text-sm leading-relaxed text-[#EFE5CD]/90 font-medium">
              {lesson.practicalTask}
            </p>
          </div>

        </div>

        {/* Bottom Action Footer */}
        <div className="bg-[#F7F1E3] border-t-2 border-[#171717] p-3 sm:p-4 sm:px-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 font-mono text-xs">
          <div className="flex items-center space-x-2">
            {onPrevLesson && (
              <button
                onClick={onPrevLesson}
                className="flex-1 sm:flex-initial px-3 py-2.5 border border-[#171717] hover:bg-[#171717] hover:text-[#EFE5CD] transition-colors flex items-center justify-center space-x-1 min-h-[40px]"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>PREV</span>
              </button>
            )}
            {onNextLesson && (
              <button
                onClick={onNextLesson}
                className="flex-1 sm:flex-initial px-3 py-2.5 border border-[#171717] hover:bg-[#171717] hover:text-[#EFE5CD] transition-colors flex items-center justify-center space-x-1 min-h-[40px]"
              >
                <span>NEXT</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          <button
            onClick={() => onToggleComplete(lesson.id)}
            className={`w-full sm:w-auto px-5 py-2.5 sm:py-3 font-mono text-xs uppercase font-bold tracking-wider transition-colors flex items-center justify-center space-x-2 border-2 border-[#171717] shadow-[3px_3px_0px_#171717] min-h-[44px] ${
              isCompleted
                ? 'bg-[#078C4C] text-[#EFE5CD]'
                : 'bg-[#171717] text-[#EFE5CD] hover:bg-[#F13B2F]'
            }`}
          >
            <CheckCircle2 className="w-4 h-4 shrink-0" />
            <span className="text-center">{isCompleted ? 'LESSON COMPLETED (CLICK TO RESET)' : 'MARK LESSON COMPLETED'}</span>
          </button>
        </div>

      </div>
    </div>
  );
};
