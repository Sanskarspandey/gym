import React from 'react';
import { Flame, MessageSquare, Clock, ArrowRight, ShieldCheck } from 'lucide-react';
import { openWhatsApp } from '../../utils/whatsapp';
import { gymInfo } from '../../data/gymInfo';

export default function SpecialOffer({ onOpenTrial }) {
  const handleWhatsApp = () => {
    openWhatsApp(
      gymInfo.contact.whatsappNumber,
      "Hi IRONFORGE, I saw the 7-day complimentary pass offer and would like to claim it."
    );
  };

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-iron-950 via-iron-900 to-iron-950 relative overflow-hidden border-t border-iron-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-gradient-to-r from-iron-900 via-iron-850 to-iron-900 border-2 border-lime/40 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8">
          
          {/* Subtle Radial Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-lime/10 rounded-full blur-3xl pointer-events-none" />

          {/* Left Text */}
          <div className="max-w-2xl space-y-4 text-center lg:text-left">
            <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-lime bg-lime/10 px-3 py-1 rounded-full border border-lime/20">
              <Flame className="w-3.5 h-3.5 fill-lime" /> Complimentary Offer
            </div>

            <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight leading-[0.95]">
              YOUR FIRST SESSION <br />
              <span className="text-lime">IS ON US.</span>
            </h2>

            <p className="text-lg sm:text-xl text-iron-200 font-normal">
              “Stop thinking about it. Come train with us.”
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-mono text-iron-400 pt-2">
              <span className="bg-iron-950/80 px-3 py-1.5 rounded-lg border border-iron-750 flex items-center gap-1.5 text-yellow-400">
                <Clock className="w-3.5 h-3.5" /> Limited trial slots available this week.
              </span>
              <span className="flex items-center gap-1 text-iron-300">
                <ShieldCheck className="w-3.5 h-3.5 text-lime" /> Zero card required
              </span>
            </div>
          </div>

          {/* Right Dual CTAs */}
          <div className="flex flex-col sm:flex-row lg:flex-col gap-3.5 w-full lg:w-auto shrink-0">
            <button
              onClick={onOpenTrial}
              className="px-8 py-4 bg-lime text-iron-950 font-display font-black text-base tracking-wider uppercase rounded-xl hover:bg-white transition-all duration-300 shadow-[0_0_25px_rgba(204,255,0,0.35)] flex items-center justify-center gap-2"
            >
              <Flame className="w-5 h-5 fill-iron-950" />
              <span>CLAIM MY FREE PASS</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={handleWhatsApp}
              className="px-7 py-3.5 bg-iron-950 hover:bg-iron-800 text-white font-mono text-xs uppercase tracking-wider rounded-xl border border-iron-700 hover:border-lime transition-all flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-lime" />
              <span>WHATSAPP US</span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
