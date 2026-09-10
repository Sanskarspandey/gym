import React, { useState } from 'react';
import { transformations } from '../../data/transformations';
import BeforeAfterSlider from './BeforeAfterSlider';
import { TrendingUp, ArrowRight, Flame, ShieldAlert, Award, Sparkles } from 'lucide-react';

export default function TransformationsSection({ onOpenTrial }) {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const current = transformations[selectedIdx];

  return (
    <section id="transformations" className="py-20 sm:py-28 bg-iron-900/50 border-t border-iron-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with exact requested headline */}
        <div className="max-w-3xl mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-lime bg-lime/10 px-3 py-1 rounded border border-lime/20">
            <TrendingUp className="w-3.5 h-3.5" /> Proven Track Record
          </div>
          <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight">
            THE BEST PROGRESS <br />
            <span className="text-lime">IS THE KIND YOU CAN SEE.</span>
          </h2>
          <p className="text-base sm:text-lg text-iron-300 leading-relaxed">
            No quick-fix detoxes or misleading body wraps. Just progressive training, realistic nutrition coaching, and unstoppable consistency.
          </p>
        </div>

        {/* Demo Disclaimer Notice */}
        <div className="mb-8 p-3.5 rounded-2xl bg-iron-850/80 border border-iron-750 text-xs text-iron-400 flex items-center gap-2.5 max-w-2xl">
          <ShieldAlert className="w-4 h-4 text-lime shrink-0" />
          <span>
            <strong>Agency Sales Demo Notice:</strong> The profiles below represent actual training roadmaps and case study data; photography and consented member names are populated upon client onboarding.
          </span>
        </div>

        {/* Member Selector Tabs */}
        <div className="flex items-center gap-3 overflow-x-auto pb-4 hide-scrollbar mb-8">
          {transformations.map((t, idx) => (
            <button
              key={t.id}
              onClick={() => setSelectedIdx(idx)}
              className={`px-5 py-3 rounded-xl font-display uppercase tracking-wider text-sm transition-all border shrink-0 text-left flex items-center gap-3 ${
                selectedIdx === idx
                  ? 'bg-lime text-iron-950 font-black border-lime shadow-[0_0_20px_rgba(204,255,0,0.25)]'
                  : 'bg-iron-850 text-iron-300 border-iron-750 hover:border-iron-600 hover:text-white'
              }`}
            >
              <div>
                <span className="block text-base">{t.name}</span>
                <span className={`text-[10px] font-mono block ${selectedIdx === idx ? 'text-iron-900 font-bold' : 'text-iron-400'}`}>
                  {t.timeline} · {t.badge}
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* Transformation Showcase (Slider + Data) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-iron-900 border border-iron-800 p-6 sm:p-8 rounded-3xl shadow-xl">
          
          {/* Left: Interactive Draggable Slider (7 cols) */}
          <div className="lg:col-span-7">
            <BeforeAfterSlider
              beforeImage={current.beforeImage}
              afterImage={current.afterImage}
              name={current.name}
              timeline={current.timeline}
            />
          </div>

          {/* Right: Detailed Member Case Study (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-lime">
                <Award className="w-3.5 h-3.5" /> {current.program}
              </div>
              <h3 className="font-display font-black text-3xl sm:text-4xl text-white uppercase tracking-tight mt-1">
                {current.name} — {current.timeline}
              </h3>
              <span className="text-xs font-mono text-iron-400 block mt-0.5">
                Coached by {current.coach}
              </span>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 gap-3">
              {current.stats.map((stat, idx) => (
                <div key={idx} className="bg-iron-850 p-3 rounded-xl border border-iron-750">
                  <span className="text-2xl font-display font-black text-lime block">
                    {stat.value}
                  </span>
                  <span className="text-[11px] font-mono text-iron-400 uppercase block">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Quote / Summary */}
            <blockquote className="text-xs sm:text-sm text-iron-300 italic pl-3 border-l-2 border-lime">
              "{current.quote}"
            </blockquote>

            {/* In-Card CTA */}
            <button
              onClick={() => onOpenTrial()}
              className="w-full py-3.5 bg-lime text-iron-950 font-display font-black text-sm tracking-wider uppercase rounded-xl hover:bg-white transition-all shadow-[0_0_20px_rgba(204,255,0,0.25)] flex items-center justify-center gap-2"
            >
              <Flame className="w-4 h-4 fill-iron-950" />
              <span>Start Your Transformation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Dedicated "READY TO START YOURS?" Conversion Banner Below Showcase */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-iron-900 border border-lime/30 flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left">
          <div>
            <h4 className="font-display font-black text-2xl sm:text-3xl text-white uppercase">
              READY TO START YOURS?
            </h4>
            <p className="text-xs sm:text-sm text-iron-300 mt-1">
              Your first consultation and trial workout at our Anna Nagar facility is 100% complimentary.
            </p>
          </div>

          <button
            onClick={() => onOpenTrial()}
            className="shrink-0 px-8 py-4 bg-lime text-iron-950 font-display font-black text-sm uppercase tracking-wider rounded-xl hover:bg-white transition-all shadow-md flex items-center justify-center gap-2"
          >
            <Flame className="w-4 h-4 fill-iron-950" />
            <span>BOOK FREE TRIAL</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
