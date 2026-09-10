import React, { useState } from 'react';
import { programs } from '../../data/programs';
import { ArrowRight, Flame } from 'lucide-react';
import ProgramModal from './ProgramModal';

export default function ProgramsSection({ onOpenTrial }) {
  const [selectedProgram, setSelectedProgram] = useState(null);

  const handleBookProgram = (prog) => {
    setSelectedProgram(null);
    onOpenTrial(prog.title);
  };

  return (
    <section id="programs" className="py-20 sm:py-28 bg-iron-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-lime bg-lime/10 px-3 py-1 rounded border border-lime/20">
            Scientifically Periodized
          </div>
          <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight">
            TRAIN <span className="text-lime">YOUR WAY.</span>
          </h2>
          <p className="text-base sm:text-lg text-iron-300 leading-relaxed">
            Six comprehensive training pathways engineered around progressive overload, injury prevention, and measurable athletic results.
          </p>
        </div>

        {/* 6 Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {programs.map((program) => (
            <div
              key={program.id}
              className="group bg-iron-900 border border-iron-800 hover:border-lime/50 rounded-2xl overflow-hidden transition-all duration-300 flex flex-col justify-between hover:shadow-[0_0_25px_rgba(204,255,0,0.1)]"
            >
              {/* Image Banner */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-75 group-hover:brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-iron-900 via-iron-900/40 to-transparent" />
                
                {/* Category Pill */}
                <div className="absolute top-4 left-4 bg-iron-950/80 backdrop-blur-md px-3 py-1 rounded text-[10px] font-mono uppercase tracking-wider text-lime border border-iron-750">
                  {program.category}
                </div>

                {/* Duration */}
                <div className="absolute top-4 right-4 bg-iron-950/80 backdrop-blur-md px-2.5 py-1 rounded text-[10px] font-mono text-iron-300 border border-iron-750">
                  {program.duration}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="font-display font-black text-2xl text-white uppercase tracking-wide group-hover:text-lime transition-colors">
                    {program.title}
                  </h3>
                  <div className="font-semibold text-xs sm:text-sm text-iron-200 mt-1">
                    {program.tagline}
                  </div>
                  <p className="text-xs text-iron-400 mt-2 leading-relaxed">
                    {program.shortDesc}
                  </p>
                </div>

                {/* Bottom Trigger */}
                <div className="pt-4 border-t border-iron-800 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedProgram(program)}
                    className="text-xs font-display font-bold uppercase tracking-wider text-lime hover:text-white flex items-center gap-1.5 transition-colors group/btn"
                  >
                    <span>LEARN MORE</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>

                  <button
                    onClick={() => onOpenTrial(program.title)}
                    className="p-2 rounded-lg bg-iron-800 hover:bg-lime hover:text-iron-950 text-iron-300 transition-all text-xs"
                    title="Book Trial for this program"
                  >
                    <Flame className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Program Deep-Dive Modal */}
      <ProgramModal
        program={selectedProgram}
        onClose={() => setSelectedProgram(null)}
        onBookProgram={handleBookProgram}
      />
    </section>
  );
}
