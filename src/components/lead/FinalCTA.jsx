import React from 'react';
import { Flame, MessageSquare, MapPin, ArrowRight, ShieldCheck, Clock } from 'lucide-react';
import { openWhatsApp } from '../../utils/whatsapp';
import { gymInfo } from '../../data/gymInfo';

export default function FinalCTA({ onOpenTrial }) {
  const handleWhatsApp = () => {
    openWhatsApp(
      gymInfo.contact.whatsappNumber,
      "Hi IRONFORGE, I'd like to chat with a coach about starting my training."
    );
  };

  return (
    <section className="py-20 sm:py-28 bg-gradient-to-b from-iron-950 via-iron-900 to-iron-950 relative overflow-hidden border-t border-iron-800/80">
      {/* Background Accent Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-lime/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
        
        {/* Subtle Location Pill */}
        <div className="inline-flex items-center gap-2 bg-iron-900/90 border border-iron-750 px-4 py-1.5 rounded-full text-xs font-mono text-iron-300 shadow-md">
          <MapPin className="w-3.5 h-3.5 text-lime" />
          <span>Anna Nagar, Chennai</span>
          <span className="text-iron-600">•</span>
          <span className="text-lime font-bold">Open Daily from 5:30 AM</span>
        </div>

        {/* Massive Headline */}
        <h2 className="font-display font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white uppercase tracking-tight leading-[0.92]">
          YOUR STRONGER SELF <br />
          <span className="text-lime">STARTS HERE.</span>
        </h2>

        {/* Supporting Pitch */}
        <p className="text-lg sm:text-xl text-iron-200 font-light max-w-2xl mx-auto leading-relaxed">
          “Your first session is on us. Come see what training at IRONFORGE feels like.”
        </p>

        {/* Dual High-Impact Action Buttons */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          <button
            onClick={onOpenTrial}
            className="w-full sm:w-auto px-8 py-4 bg-lime text-iron-950 font-display font-black text-base uppercase tracking-wider rounded-xl hover:bg-white transition-all duration-300 shadow-[0_0_30px_rgba(204,255,0,0.35)] flex items-center justify-center gap-2"
          >
            <Flame className="w-5 h-5 fill-iron-950" />
            <span>BOOK YOUR FREE TRIAL</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={handleWhatsApp}
            className="w-full sm:w-auto px-7 py-4 bg-iron-900 hover:bg-iron-800 text-white font-mono text-xs uppercase tracking-wider rounded-xl border border-iron-700 hover:border-lime transition-all flex items-center justify-center gap-2"
          >
            <MessageSquare className="w-4 h-4 text-lime" />
            <span>CHAT WITH A COACH</span>
          </button>
        </div>

        {/* Location & Micro Perks Strip */}
        <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-iron-400 font-mono">
          <span className="flex items-center gap-1.5 text-iron-300">
            <MapPin className="w-3.5 h-3.5 text-lime" /> 42 Anna Nagar Main Road, Chennai 600040
          </span>
          <span className="flex items-center gap-1.5 text-iron-300">
            <ShieldCheck className="w-3.5 h-3.5 text-lime" /> No Lock-in Contracts
          </span>
          <span className="flex items-center gap-1.5 text-iron-300">
            <Clock className="w-3.5 h-3.5 text-lime" /> Valet & Basement Parking
          </span>
        </div>

      </div>
    </section>
  );
}
