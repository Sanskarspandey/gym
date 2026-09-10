import React from 'react';
import { Target, Award, Users, ArrowUpRight } from 'lucide-react';

export default function StoryPillars({ onOpenTrial }) {
  const pillars = [
    {
      number: "01",
      icon: Target,
      title: "TRAIN WITH PURPOSE",
      tagline: "Structured programming designed around real progress.",
      description: "We don't do random sweat sessions. Every lift, interval, and rest period is scientifically mapped to build strength, increase anaerobic threshold, and bulletproof your joints.",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000&auto=format&fit=crop",
      metric: "100% Periodized"
    },
    {
      number: "02",
      icon: Award,
      title: "COACH WITH EXPERIENCE",
      tagline: "Qualified coaches who know how to push you without breaking you.",
      description: "Our coaching staff are NSCA, ACE, and CrossFit certified veterans with thousands of hours on the platform. They spot micro-flaws in your bar path before they become injuries.",
      image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=1000&auto=format&fit=crop",
      metric: "NSCA & ACE Certified"
    },
    {
      number: "03",
      icon: Users,
      title: "BELONG TO SOMETHING",
      tagline: "A community that makes showing up easier.",
      description: "No mirrors for vanity flexing. No egos. Just a tight-knit room of passionate people high-fiving your personal records, holding you accountable, and lifting each other up.",
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1000&auto=format&fit=crop",
      metric: "1,200+ Strong"
    }
  ];

  return (
    <section className="py-20 sm:py-28 bg-iron-950 relative overflow-hidden">
      {/* Background Subtle Accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-lime/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Header */}
        <div className="max-w-3xl mb-16 sm:mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-lime bg-lime/10 px-3 py-1 rounded border border-lime/20">
            The IronForge Philosophy
          </div>
          
          <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight leading-[0.95]">
            NOT JUST A GYM. <br />
            <span className="text-lime">A STANDARD.</span>
          </h2>
          
          <p className="text-lg sm:text-xl text-iron-300 font-light leading-relaxed pt-2">
            “IRONFORGE is built for people who refuse to settle. From first-time lifters to experienced athletes, every session is designed to make you stronger, fitter and more confident.”
          </p>
        </div>

        {/* 3 Pillars Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.number}
                className="group relative bg-iron-900 border border-iron-800 hover:border-lime/50 rounded-2xl overflow-hidden transition-all duration-300 flex flex-col justify-between"
              >
                {/* Image Container with Dark Overlay */}
                <div className="relative h-64 sm:h-72 overflow-hidden">
                  <img
                    src={pillar.image}
                    alt={pillar.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-75 group-hover:brightness-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-iron-900 via-iron-900/40 to-transparent" />
                  
                  {/* Pillar Number Badge */}
                  <div className="absolute top-4 left-4 bg-iron-950/80 backdrop-blur-md px-3 py-1 rounded-md border border-iron-750 text-xs font-mono font-bold text-lime">
                    {pillar.number}
                  </div>

                  {/* Metric Pill */}
                  <div className="absolute top-4 right-4 bg-iron-950/80 backdrop-blur-md px-3 py-1 rounded-md border border-iron-750 text-[11px] font-mono text-iron-300">
                    {pillar.metric}
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="w-10 h-10 rounded-lg bg-lime/10 border border-lime/20 flex items-center justify-center text-lime mb-3">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-display font-black text-2xl text-white uppercase tracking-wide group-hover:text-lime transition-colors">
                      {pillar.title}
                    </h3>
                    <div className="font-semibold text-sm text-iron-200">
                      {pillar.tagline}
                    </div>
                    <p className="text-xs sm:text-sm text-iron-400 leading-relaxed pt-1">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-iron-800/80 flex items-center justify-between">
                    <span className="text-xs font-mono text-iron-500 uppercase">Standard #0{pillar.number.replace('0','')}</span>
                    <button
                      onClick={onOpenTrial}
                      className="text-xs font-semibold text-lime group-hover:text-white flex items-center gap-1 transition-colors uppercase tracking-wider font-display"
                    >
                      Experience It <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
