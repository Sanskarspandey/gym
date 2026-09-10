import React from 'react';
import { Flame, ArrowRight, Star, MapPin, ShieldCheck, ChevronDown, CheckCircle } from 'lucide-react';
import { gymInfo } from '../../data/gymInfo';

export default function Hero({ onOpenTrial, onNavigateMemberships }) {
  const scrollToNext = () => {
    const el = document.getElementById('conversion-bar');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-iron-950">
      {/* Cinematic Background Image with Dark Vignette & Gradient Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=2000&auto=format&fit=crop"
          alt="IronForge Athletics Training Floor"
          className="w-full h-full object-cover object-center opacity-30 scale-105 transform animate-pulse-slow"
        />
        {/* Multilayer Dark Gradients for dramatic lighting */}
        <div className="absolute inset-0 bg-gradient-to-t from-iron-950 via-iron-950/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-iron-950 via-iron-950/80 to-iron-950/60" />
        <div className="absolute inset-0 bg-dark-mesh opacity-50" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center lg:text-left flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="max-w-3xl space-y-6">
          
          {/* Location & Trust Pill */}
          <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2 bg-iron-900/80 backdrop-blur-md border border-iron-750 px-3.5 py-1.5 rounded-full text-xs font-medium text-iron-200 shadow-md">
            <span className="flex items-center gap-1 text-lime font-semibold">
              <MapPin className="w-3.5 h-3.5" />
              <span>Anna Nagar, Chennai</span>
            </span>
            <span className="text-iron-500">•</span>
            <span className="flex items-center gap-1 text-yellow-400 font-medium">
              <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
              <span>4.9★ Google Rating</span>
            </span>
            <span className="text-iron-500 hidden sm:inline">•</span>
            <span className="text-iron-300 hidden sm:inline">1,200+ Members Trained</span>
          </div>

          {/* Massive Display Brand & Tagline */}
          <div className="space-y-2">
            <div className="font-mono text-xs sm:text-sm uppercase tracking-widest text-iron-400">
              {gymInfo.name}
            </div>
            <h1 className="font-display font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight uppercase text-white leading-[0.95]">
              BUILD YOUR <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-iron-100 to-lime">
                STRONGER SELF.
              </span>
            </h1>
          </div>

          {/* Supporting Pitch Copy */}
          <p className="text-base sm:text-lg md:text-xl text-iron-300 max-w-2xl font-normal leading-relaxed">
            “Strength. Conditioning. Community. A premium training facility built for people who are serious about becoming better.”
          </p>

          {/* High Conversion Dual Call-to-Actions */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-4">
            <button
              onClick={() => onOpenTrial()}
              className="relative group px-8 py-4 bg-lime text-iron-950 font-display font-black text-lg tracking-wider uppercase rounded-xl transition-all duration-300 hover:bg-white shadow-[0_0_30px_rgba(204,255,0,0.35)] hover:shadow-[0_0_40px_rgba(255,255,255,0.5)] transform hover:-translate-y-1 flex items-center justify-center gap-3"
            >
              <Flame className="w-5 h-5 fill-iron-950" />
              <span>BOOK YOUR FREE TRIAL</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onNavigateMemberships}
              className="px-7 py-4 bg-iron-900/90 hover:bg-iron-800 text-iron-100 font-display font-bold text-base tracking-wider uppercase rounded-xl border border-iron-700 hover:border-lime transition-all duration-300 flex items-center justify-center gap-2"
            >
              <span>VIEW MEMBERSHIPS</span>
            </button>
          </div>

          {/* Micro Perks Strip */}
          <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-iron-400 font-mono">
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5 text-lime" /> Eleiko Competition Plates
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5 text-lime" /> NSCA Certified Coaches
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5 text-lime" /> Open Daily 5:30 AM
            </span>
          </div>
        </div>

        {/* Right Side Visual Stat Card / Social Proof Preview */}
        <div className="hidden lg:block w-full max-w-sm">
          <div className="bg-iron-900/80 backdrop-blur-xl border border-iron-750 p-6 rounded-2xl shadow-2xl relative space-y-5">
            <div className="absolute -top-3 right-6 bg-lime text-iron-950 text-[10px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
              Anna Nagar Facility
            </div>

            <div className="space-y-1">
              <div className="text-xs font-mono uppercase text-iron-400">Featured Program</div>
              <div className="text-xl font-display font-bold text-white uppercase">Strength & Conditioning</div>
              <p className="text-xs text-iron-300 leading-normal">
                Structured progressive barbell loading & functional turf drills led by NSCA coaches.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-2 border-t border-iron-800">
              <div className="bg-iron-850 p-3 rounded-xl border border-iron-750">
                <span className="text-2xl font-display font-black text-lime">10,000</span>
                <span className="block text-[11px] font-mono text-iron-400 uppercase">Sq.Ft Training Deck</span>
              </div>
              <div className="bg-iron-850 p-3 rounded-xl border border-iron-750">
                <span className="text-2xl font-display font-black text-white">35+</span>
                <span className="block text-[11px] font-mono text-iron-400 uppercase">Weekly Classes</span>
              </div>
            </div>

            <button
              onClick={() => onOpenTrial()}
              className="w-full py-3 bg-iron-800 hover:bg-lime hover:text-iron-950 text-iron-200 font-display font-bold text-xs uppercase tracking-wider rounded-lg transition-all duration-300 border border-iron-700 flex items-center justify-center gap-2 group"
            >
              <span>Claim Free 1-Day Pass</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-3 left-1/2 -translate-x-1/2 text-iron-500 hover:text-lime transition-colors p-2 focus:outline-none"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-6 h-6 animate-bounce" />
      </button>
    </section>
  );
}
