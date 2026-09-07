import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { StudentState } from '../types';

interface NavbarProps {
  onNavClick: (id: string) => void;
  studentState?: StudentState;
  onOpenEnrollment: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onNavClick,
  onOpenEnrollment,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'curriculum', label: 'Curriculum' },
    { id: 'projects', label: 'Projects' },
    { id: 'challenges', label: 'Challenges' },
    { id: 'pricing', label: 'Pricing' },
  ];

  const handleLinkClick = (id: string) => {
    setIsMobileMenuOpen(false);
    onNavClick(id);
  };

  return (
    <header
      id="main-navbar"
      className="sticky top-0 z-40 bg-[#171717]/95 backdrop-blur-sm text-[#EFE5CD] border-b border-[#2A2A2A] transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Brand */}
          <button
            id="navbar-brand-btn"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center space-x-2.5 group focus:outline-none min-h-[44px]"
            aria-label="AI Mastery - Scroll to top"
          >
            <span className="w-7 h-7 bg-[#F6A51B] text-[#171717] font-display text-lg flex items-center justify-center font-bold tracking-tight rounded-xs group-hover:bg-[#F13B2F] group-hover:text-[#EFE5CD] transition-colors shrink-0">
              AM
            </span>
            <span className="font-display text-xl sm:text-2xl tracking-wider text-[#EFE5CD] group-hover:text-[#F6A51B] transition-colors">
              AI MASTERY
            </span>
          </button>

          {/* Desktop Nav Links */}
          <nav
            id="desktop-nav"
            className="hidden md:flex items-center space-x-1 text-sm font-medium"
          >
            {navLinks.map((link) => (
              <button
                key={link.id}
                id={`nav-link-${link.id}`}
                onClick={() => handleLinkClick(link.id)}
                className="px-3.5 py-1.5 min-h-[44px] flex items-center rounded-sm text-[#EFE5CD]/75 hover:text-[#EFE5CD] hover:bg-[#262626] transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Desktop Action */}
          <div className="hidden md:flex items-center">
            <button
              id="navbar-enroll-btn"
              onClick={onOpenEnrollment}
              className="px-4 py-2 min-h-[44px] text-xs font-mono font-bold uppercase tracking-wider bg-[#F6A51B] text-[#171717] hover:bg-[#F13B2F] hover:text-[#EFE5CD] transition-colors rounded-xs"
            >
              Enroll Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="min-w-[44px] min-h-[44px] flex items-center justify-center text-[#EFE5CD] hover:bg-[#262626] rounded-xs transition-colors"
              aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Simplified Mobile Dropdown */}
      {isMobileMenuOpen && (
        <div
          id="mobile-nav-dropdown"
          className="md:hidden bg-[#171717] border-t border-[#2A2A2A] px-4 py-3 space-y-2 text-sm"
        >
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                id={`mobile-nav-link-${link.id}`}
                onClick={() => handleLinkClick(link.id)}
                className="text-left px-3 py-2.5 min-h-[44px] flex items-center rounded-xs text-[#EFE5CD]/80 hover:text-[#EFE5CD] hover:bg-[#262626] transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>
          <div className="pt-2 border-t border-[#2A2A2A]">
            <button
              id="mobile-navbar-enroll-btn"
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenEnrollment();
              }}
              className="w-full py-2.5 min-h-[44px] text-xs font-mono font-bold uppercase tracking-wider bg-[#F6A51B] text-[#171717] hover:bg-[#F13B2F] hover:text-[#EFE5CD] transition-colors text-center flex items-center justify-center rounded-xs"
            >
              Enroll Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
