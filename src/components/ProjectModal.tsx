import React, { useState } from 'react';
import { Project } from '../types';
import { X, Check, Copy, Terminal, CheckCircle2, ArrowUpRight, Flame, Layers, Laptop } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  isCompleted: boolean;
  onToggleComplete: (projectId: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  isCompleted,
  onToggleComplete,
}) => {
  const [copiedType, setCopiedType] = useState<'prompt' | 'code' | null>(null);

  if (!project) return null;

  const handleCopy = (text: string, type: 'prompt' | 'code') => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#171717]/85 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4 md:p-6 animate-fadeIn">
      <div className="bg-[#EFE5CD] text-[#171717] border-3 sm:border-4 border-[#171717] shadow-[6px_6px_0px_#0759A8] sm:shadow-[12px_12px_0px_#0759A8] max-w-4xl w-full max-h-[96vh] sm:max-h-[92vh] flex flex-col overflow-hidden relative">
        
        {/* Top Blueprint Bar */}
        <div className="bg-[#0759A8] text-[#EFE5CD] px-3 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between border-b-2 border-[#171717] font-mono text-xs">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <span className="bg-[#F6A51B] text-[#171717] px-2 py-0.5 font-bold text-[11px] sm:text-xs">
              EXHIBIT {project.number}
            </span>
            <span className="font-bold tracking-wider uppercase truncate max-w-[140px] xs:max-w-[200px] sm:max-w-none">
              BLUEPRINT SPECIFICATION
            </span>
          </div>

          <div className="flex items-center space-x-2 sm:space-x-3">
            <span className="bg-[#171717] text-[#EFE5CD] px-2 py-0.5 uppercase font-bold text-[11px] sm:text-xs">
              {project.difficulty}
            </span>
            <button
              onClick={onClose}
              className="p-1 text-[#EFE5CD] hover:bg-[#F13B2F] transition-colors border border-[#EFE5CD]/30"
              aria-label="Close project blueprint"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Blueprint Content */}
        <div className="p-4 sm:p-8 lg:p-10 overflow-y-auto space-y-6 sm:space-y-8 flex-1">
          
          {/* Header */}
          <div className="border-b-2 border-[#171717] pb-6">
            <h2 className="font-display text-3xl xs:text-4xl sm:text-6xl uppercase tracking-tight leading-[0.95] mb-2 text-[#171717] break-words">
              {project.title}
            </h2>
            <p className="font-sans text-sm sm:text-lg text-[#0759A8] font-bold mb-4">
              {project.subtitle}
            </p>
            <p className="font-sans text-xs sm:text-base text-[#171717] leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Architecture Steps */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="w-3 h-3 bg-[#F13B2F]"></span>
              <h3 className="font-display text-3xl uppercase tracking-wide text-[#171717]">
                STEP-BY-STEP BUILD ARCHITECTURE:
              </h3>
            </div>

            <div className="grid grid-cols-1 gap-3">
              {project.architectureSteps.map((step, idx) => (
                <div
                  key={idx}
                  className="bg-[#F7F1E3] border-2 border-[#171717] p-4 flex items-start space-x-3 shadow-[2px_2px_0px_#171717]"
                >
                  <span className="font-display text-2xl text-[#F13B2F] leading-none shrink-0">
                    0{idx + 1}
                  </span>
                  <p className="font-mono text-xs sm:text-sm text-[#171717] font-medium leading-relaxed">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Starter Prompt Box */}
          <div className="border-2 border-[#171717] bg-[#F7F1E3] p-5 space-y-2">
            <div className="flex justify-between items-center font-mono text-xs border-b border-[#171717] pb-2 text-[#0759A8] font-bold">
              <span>CORE ARCHITECTURAL PROMPT / SCHEMA:</span>
              <button
                onClick={() => handleCopy(project.starterPrompt, 'prompt')}
                className="flex items-center space-x-1 px-3 py-1 bg-[#171717] text-[#EFE5CD] hover:bg-[#F13B2F] transition-colors"
              >
                {copiedType === 'prompt' ? <Check className="w-3 h-3 text-[#078C4C]" /> : <Copy className="w-3 h-3" />}
                <span>{copiedType === 'prompt' ? 'COPIED TO CLIPBOARD' : 'COPY STARTER PROMPT'}</span>
              </button>
            </div>
            <pre className="font-mono text-xs whitespace-pre-wrap text-[#171717] leading-relaxed pt-2">
              {project.starterPrompt}
            </pre>
          </div>

          {/* Sample Code if present */}
          {project.sampleCode && (
            <div className="border-2 border-[#171717] bg-[#171717] text-[#EFE5CD] p-5 space-y-2">
              <div className="flex justify-between items-center font-mono text-xs border-b border-[#333333] pb-2 text-[#F6A51B] font-bold">
                <div className="flex items-center space-x-1.5">
                  <Terminal className="w-4 h-4" />
                  <span>PRODUCTION CODE IMPLEMENTATION:</span>
                </div>
                <button
                  onClick={() => handleCopy(project.sampleCode!, 'code')}
                  className="flex items-center space-x-1 px-3 py-1 bg-[#262626] text-[#EFE5CD] hover:bg-[#F13B2F] transition-colors"
                >
                  {copiedType === 'code' ? <Check className="w-3 h-3 text-[#078C4C]" /> : <Copy className="w-3 h-3" />}
                  <span>{copiedType === 'code' ? 'COPIED CODE' : 'COPY CODE'}</span>
                </button>
              </div>
              <pre className="font-mono text-xs whitespace-pre-wrap text-[#EFE5CD] leading-relaxed overflow-x-auto pt-2">
                {project.sampleCode}
              </pre>
            </div>
          )}

          {/* Deliverables & Extension Challenge */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
            <div className="bg-[#171717] text-[#EFE5CD] p-4 border-2 border-[#171717]">
              <span className="text-[10px] text-[#078C4C] uppercase font-bold tracking-wider block mb-1">
                PORTFOLIO DELIVERABLE:
              </span>
              <p className="font-sans text-xs text-[#EFE5CD]/90 font-medium">
                {project.deliverable}
              </p>
            </div>

            <div className="bg-[#F7F1E3] text-[#171717] p-4 border-2 border-[#171717]">
              <span className="text-[10px] text-[#F13B2F] uppercase font-bold tracking-wider block mb-1">
                EXTENSION CHALLENGE:
              </span>
              <p className="font-sans text-xs text-[#171717]/90 font-medium">
                {project.extensionChallenge}
              </p>
            </div>
          </div>

        </div>

        {/* Action Bar */}
        <div className="bg-[#F7F1E3] border-t-2 border-[#171717] p-3 sm:p-4 sm:px-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 font-mono text-xs">
          <span className="text-[#171717]/70 text-[11px] sm:text-xs text-center sm:text-left">
            {project.recommendedDevice}
          </span>

          <button
            onClick={() => onToggleComplete(project.id)}
            className={`w-full sm:w-auto px-5 py-2.5 sm:py-3 font-mono text-xs uppercase font-bold tracking-wider transition-colors flex items-center justify-center space-x-2 border-2 border-[#171717] shadow-[3px_3px_0px_#171717] min-h-[44px] ${
              isCompleted
                ? 'bg-[#078C4C] text-[#EFE5CD]'
                : 'bg-[#0759A8] text-[#EFE5CD] hover:bg-[#F13B2F]'
            }`}
          >
            <CheckCircle2 className="w-4 h-4 shrink-0" />
            <span className="text-center">{isCompleted ? 'BUILD COMPLETED (CLICK TO RESET)' : 'MARK BUILD COMPLETED'}</span>
          </button>
        </div>

      </div>
    </div>
  );
};
