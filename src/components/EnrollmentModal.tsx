import React, { useState } from 'react';
import { X, ShieldCheck, Lock, ArrowRight, ArrowUpRight } from 'lucide-react';

interface EnrollmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirmEnrollment: (studentName: string) => void;
}

const UPI_PAYMENT_URL = "https://upi.pe/somasingh154@ybl/6899.00?pn=AI+Course+1o1&tn=Let%27s+rock+%F0%9F%94%A5";

export const EnrollmentModal: React.FC<EnrollmentModalProps> = ({
  isOpen,
  onClose,
  onConfirmEnrollment,
}) => {
  if (!isOpen) return null;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [processing, setProcessing] = useState(false);
  const [completed, setCompleted] = useState(false);

  const openPaymentUrl = () => {
    onConfirmEnrollment(name.trim() || 'Operator');
    setProcessing(true);

    // Method 1: Programmatic anchor dispatch with target="_blank" (bypasses most iframe restrictions)
    try {
      const link = document.createElement('a');
      link.href = UPI_PAYMENT_URL;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (err) {
      console.warn('Anchor dispatch failed:', err);
    }

    // Method 2: Standard window.open to launch in new browser tab
    try {
      window.open(UPI_PAYMENT_URL, '_blank', 'noopener,noreferrer');
    } catch (err) {
      console.warn('window.open failed:', err);
    }

    // Method 3: If running in standalone top-level window
    try {
      if (window.top === window) {
        window.location.href = UPI_PAYMENT_URL;
      }
    } catch {
      // Ignore cross-origin error
    }

    // Activate fallback UI so the user always has a direct guaranteed link
    setTimeout(() => {
      setCompleted(true);
      setProcessing(false);
    }, 400);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    openPaymentUrl();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#171717]/85 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4 md:p-6 animate-fadeIn">
      <div className="bg-[#EFE5CD] text-[#171717] border-3 sm:border-4 border-[#171717] shadow-[6px_6px_0px_#171717] sm:shadow-[12px_12px_0px_#171717] max-w-xl w-full flex flex-col overflow-hidden relative">
        
        {/* Header */}
        <div className="bg-[#171717] text-[#EFE5CD] px-3 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between border-b-2 border-[#171717] font-mono text-xs">
          <span className="bg-[#F6A51B] text-[#171717] px-2 py-0.5 font-bold uppercase text-[11px] sm:text-xs">
            COMMERCIAL ENROLLMENT
          </span>
          <button
            onClick={onClose}
            className="p-1 text-[#EFE5CD] hover:bg-[#F13B2F] transition-colors border border-[#EFE5CD]/30"
            aria-label="Close checkout"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-4 sm:p-8">
          {completed ? (
            <div className="text-center py-6 sm:py-8 space-y-4 font-mono">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#078C4C] text-[#EFE5CD] mx-auto flex items-center justify-center text-2xl sm:text-3xl font-bold border-2 border-[#171717]">
                ✓
              </div>
              <h2 className="font-display text-3xl sm:text-4xl uppercase text-[#171717]">
                OPENING PAYMENT PORTAL
              </h2>
              <p className="text-xs text-[#171717]/80 max-w-sm mx-auto leading-relaxed">
                If the UPI payment window did not open in a new tab automatically, click below to proceed directly:
              </p>
              <div className="pt-2">
                <a
                  id="direct-upi-payment-link"
                  href={UPI_PAYMENT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-6 py-3.5 bg-[#F6A51B] text-[#171717] hover:bg-[#F13B2F] hover:text-[#EFE5CD] font-mono text-xs font-bold uppercase tracking-wider border-2 border-[#171717] shadow-[3px_3px_0px_#171717] transition-colors min-h-[44px]"
                >
                  <span>OPEN UPI PAYMENT (₹6,899)</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
              <p className="text-[11px] text-[#171717]/60 pt-2">
                UPI ID: somasingh154@ybl • Course: AI Course 1o1
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
              <div>
                <div className="flex justify-between items-baseline mb-2">
                  <span className="font-mono text-xs text-[#F13B2F] font-bold uppercase tracking-wider">
                    COURSE INVOICE // LIFETIME ACCESS
                  </span>
                  <span className="font-display text-3xl sm:text-4xl text-[#171717] leading-none">
                    ₹6,899
                  </span>
                </div>
                <h2 className="font-display text-3xl xs:text-4xl sm:text-5xl uppercase tracking-tight text-[#171717] leading-none mb-2">
                  ACTIVATE YOUR SEAT.
                </h2>
                <p className="font-sans text-xs text-[#171717]/80 font-medium">
                  Instant unrestricted access to all 12 modules, 8 real-world project builds, 100+ prompt scaffolds, and continuous curriculum updates.
                </p>
                <div className="mt-2 text-[11px] font-mono text-[#F13B2F] font-bold uppercase tracking-wider flex items-center space-x-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F13B2F] animate-pulse"></span>
                  <span>Registration Closes: 14 September 2026</span>
                </div>
              </div>

              <div className="space-y-3 font-mono text-xs">
                <div>
                  <label className="block text-[#171717] uppercase font-bold mb-1">
                    STUDENT FULL NAME:
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Vikram Sharma"
                    className="w-full bg-[#F7F1E3] border-2 border-[#171717] p-3 text-xs focus:outline-hidden focus:border-[#0759A8] min-h-[44px]"
                  />
                </div>

                <div>
                  <label className="block text-[#171717] uppercase font-bold mb-1">
                    DELIVERY EMAIL ADDRESS:
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. vikram@studio.design"
                    className="w-full bg-[#F7F1E3] border-2 border-[#171717] p-3 text-xs focus:outline-hidden focus:border-[#0759A8] min-h-[44px]"
                  />
                </div>
              </div>

              <div className="bg-[#F7F1E3] border-2 border-[#171717] p-3 font-mono text-xs space-y-1.5 text-[#171717]/80">
                <div className="flex items-center space-x-1.5 text-[#078C4C] font-bold">
                  <ShieldCheck className="w-4 h-4 shrink-0" />
                  <span>TRANSPARENT MONEY-BACK ASSURANCE</span>
                </div>
                <p className="text-[11px] leading-tight">
                  7-Day full refund window. Zero fake countdown timers. Direct student support via email.
                </p>
              </div>

              <button
                id="checkout-confirm-btn"
                type="button"
                onClick={openPaymentUrl}
                disabled={processing}
                className="w-full py-3.5 sm:py-4 bg-[#171717] text-[#EFE5CD] hover:bg-[#F13B2F] hover:text-[#EFE5CD] font-display text-2xl sm:text-3xl uppercase tracking-wider transition-colors border-2 border-[#171717] shadow-[4px_4px_0px_#0759A8] flex items-center justify-center space-x-2 min-h-[48px] cursor-pointer active:translate-x-0.5 active:translate-y-0.5"
              >
                <Lock className="w-4 h-4" />
                <span>{processing ? 'OPENING PAYMENT...' : 'CONFIRM ACCESS — ₹6,899'}</span>
                <ArrowUpRight className="w-5 h-5 ml-1" />
              </button>

              <div className="text-center pt-1">
                <a
                  id="direct-upi-helper-link"
                  href={UPI_PAYMENT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => onConfirmEnrollment(name.trim() || 'Operator')}
                  className="inline-flex items-center space-x-1 text-[11px] font-mono font-bold text-[#0759A8] hover:text-[#F13B2F] underline uppercase tracking-wider"
                >
                  <span>Direct UPI link (Click here to open)</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
