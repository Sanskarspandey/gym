import React, { useState, useEffect } from 'react';
import { Menu, X, Dumbbell, ArrowRight, Flame } from 'lucide-react';
import { gymInfo } from '../../data/gymInfo';

export default function Navbar({ onOpenTrial, onNavigate }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "Programs", href: "#programs" },
    { label: "Facilities", href: "#facilities" },
    { label: "Classes", href: "#schedule" },
    { label: "Memberships", href: "#memberships" },
    { label: "Trainers", href: "#trainers" },
    { label: "Transformations", href: "#transformations" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#location" },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-iron-950/90 backdrop-blur-xl border-b border-iron-800/80 py-3 shadow-xl'
          : 'bg-iron-950/60 backdrop-blur-md border-b border-white/5 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#hero"
          onClick={(e) => handleLinkClick(e, '#hero')}
          className="flex items-center gap-2.5 group focus:outline-none"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-iron-800 to-iron-900 border border-lime/40 flex items-center justify-center text-lime group-hover:border-lime transition-all duration-300 shadow-[0_0_15px_rgba(204,255,0,0.15)] group-hover:shadow-[0_0_20px_rgba(204,255,0,0.3)]">
            <Dumbbell className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-black text-xl tracking-wider text-white flex items-center gap-1">
              IRON<span className="text-lime">FORGE</span>
            </span>
            <span className="text-[9px] font-mono tracking-widest text-iron-400 uppercase -mt-1">
              Athletics · Anna Nagar
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-xs font-semibold tracking-wider uppercase text-iron-300 hover:text-lime transition-colors duration-200 py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-lime hover:after:w-full after:transition-all after:duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => onOpenTrial()}
            className="hidden sm:inline-flex items-center gap-2 bg-lime text-iron-950 font-display font-bold text-sm tracking-wider uppercase px-5 py-2.5 rounded-lg hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(204,255,0,0.25)] hover:shadow-[0_0_25px_rgba(255,255,255,0.4)] transform hover:-translate-y-0.5"
          >
            <Flame className="w-4 h-4 fill-iron-950" />
            <span>Book Free Trial</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2.5 rounded-lg bg-iron-900 border border-iron-800 text-iron-200 hover:text-lime focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Animated Dropdown */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-iron-950/98 backdrop-blur-2xl border-b border-iron-800 px-6 py-6 space-y-4 animate-fadeIn">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-sm font-semibold tracking-wider uppercase text-iron-300 hover:text-lime p-2 rounded-lg hover:bg-iron-900 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-iron-800 space-y-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTrial();
              }}
              className="w-full py-3.5 bg-lime text-iron-950 font-display font-black tracking-wider uppercase rounded-xl flex items-center justify-center gap-2 shadow-lg"
            >
              <Flame className="w-5 h-5 fill-iron-950" />
              <span>Book Your Free Trial</span>
            </button>
            
            <div className="text-center">
              <span className="text-xs text-iron-400">
                📍 42 Anna Nagar Main Road · Chennai
              </span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
