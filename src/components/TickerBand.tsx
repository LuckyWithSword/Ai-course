import React from 'react';

interface TickerBandProps {
  phrase?: string;
  variant?: 'black' | 'blue' | 'red';
}

export const TickerBand: React.FC<TickerBandProps> = ({
  variant = 'black',
}) => {
  const bgClass =
    variant === 'black'
      ? 'bg-[#171717] text-[#EFE5CD]'
      : variant === 'blue'
      ? 'bg-[#0759A8] text-[#EFE5CD]'
      : 'bg-[#F13B2F] text-[#EFE5CD]';

  const items = [
    'LEARN AI',
    'DECONSTRUCT',
    'CREATE',
    'AUTOMATE',
    'BUILD',
    'DEPLOY',
    'MONETIZE',
    'NO HYPE',
    'REAL WORKFLOWS',
    'SYSTEM ARCHITECTURE',
    'FOUNDATION → ADVANCED',
    'LIFETIME ACCESS ₹6,899',
  ];

  return (
    <div className={`w-full overflow-hidden py-2.5 border-y-2 border-[#171717] ${bgClass} select-none`}>
      <div className="animate-marquee flex items-center whitespace-nowrap">
        {/* Double repetition for seamless infinite marquee loop */}
        {[...items, ...items, ...items].map((text, idx) => (
          <span key={idx} className="flex items-center text-sm sm:text-base font-display tracking-widest uppercase">
            <span className="mx-4">{text}</span>
            <span className="text-[#F6A51B] text-xs font-mono">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
};
