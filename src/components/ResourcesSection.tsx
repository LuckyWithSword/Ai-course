import React, { useState } from 'react';
import { ResourceItem } from '../types';
import { Copy, Check, Filter, Terminal, BookOpen, Wrench, FileCode, Layers } from 'lucide-react';

interface ResourcesSectionProps {
  resources: ResourceItem[];
}

export const ResourcesSection: React.FC<ResourcesSectionProps> = ({ resources }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const categories = ['ALL', 'PROMPTS', 'TEMPLATES', 'CHEAT SHEETS', 'TOOLS', 'AUTOMATION', 'CODING', 'AI AGENTS'];

  const filteredResources = resources.filter((res) => {
    if (selectedCategory === 'ALL') return true;
    return res.category === selectedCategory;
  });

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section id="resources" className="w-full bg-[#EFE5CD] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b-4 border-[#171717]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="border-b-3 border-[#171717] pb-8 mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center space-x-2 text-xs font-mono text-[#0759A8] uppercase font-bold tracking-widest mb-2">
              <span>13 • ARCHIVE VAULT</span>
              <span>•</span>
              <span>TESTED ARTIFACTS & BLUEPRINTS</span>
            </div>
            <h2 className="font-display text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tight text-[#171717] leading-[0.9]">
              RESOURCE ARCHIVE.
            </h2>
          </div>

          <p className="font-sans text-xs sm:text-sm text-[#171717] max-w-md font-medium leading-relaxed">
            Copyable master prompts, model selection matrices, TypeScript agent skeletons, and production automation blueprints tested in real environments.
          </p>
        </div>

        {/* Category Pill Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-10 font-mono text-xs">
          <span className="font-bold text-[#171717]/70 mr-1 flex items-center space-x-1">
            <Filter className="w-3.5 h-3.5" />
            <span>ARCHIVE INDEX:</span>
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 border-2 border-[#171717] uppercase font-bold tracking-wider transition-all ${
                selectedCategory === cat
                  ? 'bg-[#171717] text-[#EFE5CD] shadow-[2px_2px_0px_#F6A51B]'
                  : 'bg-[#F7F1E3] text-[#171717] hover:bg-[#E5DAC0]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredResources.map((item, idx) => {
            const isCopied = copiedId === item.id;
            return (
              <div
                key={item.id}
                className="bg-[#F7F1E3] border-3 border-[#171717] p-6 shadow-[5px_5px_0px_#171717] flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start border-b-2 border-[#171717] pb-3 mb-4">
                    <span className="bg-[#171717] text-[#EFE5CD] px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider">
                      {item.category}
                    </span>
                    <span className="font-mono text-xs font-bold text-[#171717]/50">
                      REF #{String(idx + 1).padStart(3, '0')}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-tight text-[#171717] mb-2 leading-tight">
                    {item.title}
                  </h3>

                  <p className="font-sans text-xs text-[#171717]/80 leading-relaxed mb-4 font-medium">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {item.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="bg-[#EFE5CD] border border-[#171717] text-[#171717] px-2 py-0.5 font-mono text-[10px] font-bold"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Code / Prompt Surface */}
                  <div className="bg-[#171717] text-[#EFE5CD] p-4 border border-[#171717] font-mono text-xs overflow-x-auto relative mb-4 max-h-48">
                    <pre className="whitespace-pre-wrap leading-relaxed text-[11px] text-[#EFE5CD]/90">
                      {item.content}
                    </pre>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between font-mono text-xs">
                  <span className="text-[10px] text-[#171717]/60 uppercase">
                    INSTANT REUSE READY
                  </span>
                  <button
                    onClick={() => handleCopy(item.id, item.content)}
                    className="px-4 py-1.5 bg-[#0759A8] text-[#EFE5CD] hover:bg-[#F13B2F] font-mono text-xs font-bold uppercase tracking-wider transition-colors flex items-center space-x-1.5 border border-[#171717]"
                  >
                    {isCopied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#078C4C]" />
                        <span>COPIED TO CLIPBOARD</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>COPY SNIPPET</span>
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
