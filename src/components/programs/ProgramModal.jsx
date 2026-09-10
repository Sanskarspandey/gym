import React from 'react';
import { X, Check, Flame, ArrowRight, Clock, Calendar, Target } from 'lucide-react';

export default function ProgramModal({ program, onClose, onBookProgram }) {
  if (!program) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="bg-iron-900 border border-lime/40 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-iron-950/80 text-iron-300 hover:text-white hover:bg-iron-800 border border-iron-700 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Image */}
        <div className="relative h-60 sm:h-72 overflow-hidden">
          <img
            src={program.image}
            alt={program.title}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-iron-900 via-iron-900/50 to-transparent" />
          
          <div className="absolute bottom-4 left-6 right-6">
            <span className="text-[11px] font-mono uppercase tracking-widest text-lime bg-iron-950/80 px-2.5 py-1 rounded border border-iron-750">
              {program.category} · {program.level}
            </span>
            <h3 className="font-display font-black text-3xl sm:text-4xl text-white uppercase tracking-tight mt-2">
              {program.title}
            </h3>
            <p className="text-sm text-iron-200 mt-1">
              {program.tagline}
            </p>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Quick Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="bg-iron-850 p-3 rounded-xl border border-iron-750 flex items-center gap-3">
              <Clock className="w-4 h-4 text-lime shrink-0" />
              <div>
                <span className="text-[10px] font-mono text-iron-400 block uppercase">Duration</span>
                <span className="text-xs font-bold text-white">{program.duration}</span>
              </div>
            </div>
            <div className="bg-iron-850 p-3 rounded-xl border border-iron-750 flex items-center gap-3">
              <Calendar className="w-4 h-4 text-lime shrink-0" />
              <div>
                <span className="text-[10px] font-mono text-iron-400 block uppercase">Frequency</span>
                <span className="text-xs font-bold text-white">{program.scheduleFrequency}</span>
              </div>
            </div>
            <div className="bg-iron-850 p-3 rounded-xl border border-iron-750 flex items-center gap-3">
              <Target className="w-4 h-4 text-lime shrink-0" />
              <div>
                <span className="text-[10px] font-mono text-iron-400 block uppercase">Level</span>
                <span className="text-xs font-bold text-white">{program.level.split('·')[0]}</span>
              </div>
            </div>
          </div>

          {/* Overview */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-lime mb-2">Program Overview</h4>
            <p className="text-sm text-iron-300 leading-relaxed">
              {program.shortDesc}
            </p>
          </div>

          {/* Key Deliverables & Curriculum */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-lime mb-3">Core Pillars & Progression</h4>
            <div className="space-y-2.5">
              {program.benefits.map((b, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-iron-200">
                  <div className="w-4 h-4 rounded-full bg-lime/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-lime" />
                  </div>
                  <span>{b}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Ideal Candidate */}
          <div className="bg-iron-850/80 p-4 rounded-xl border border-iron-750">
            <span className="text-[11px] font-mono text-iron-400 block uppercase mb-1">Who this is built for:</span>
            <p className="text-xs sm:text-sm text-iron-200">
              {program.idealFor}
            </p>
          </div>

          {/* CTA Footer */}
          <div className="border-t border-iron-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <span className="text-xs text-iron-400 block">First session free with code IF-TRIAL</span>
              <span className="text-sm font-semibold text-white">Experience {program.title} in Anna Nagar</span>
            </div>

            <button
              onClick={() => onBookProgram(program)}
              className="w-full sm:w-auto px-6 py-3.5 bg-lime text-iron-950 font-display font-black text-sm tracking-wider uppercase rounded-xl hover:bg-white transition-all shadow-[0_0_20px_rgba(204,255,0,0.25)] flex items-center justify-center gap-2"
            >
              <Flame className="w-4 h-4 fill-iron-950" />
              <span>Book Free Trial For This</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
