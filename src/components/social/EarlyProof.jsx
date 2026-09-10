import React from 'react';
import { Star, CheckCircle, Award, Users, Calendar, Sparkles, Quote } from 'lucide-react';
import { reviewsData } from '../../data/reviews';

export default function EarlyProof({ onOpenTrial }) {
  const quickTestimonials = [
    {
      quote: "The coaches actually care about your bar path. Arjun spent 20 mins fixing my deadlift hinge on day one.",
      author: "Karan M.",
      area: "Anna Nagar",
      badge: "Member · 8 Months",
      metric: "+40kg Squat"
    },
    {
      quote: "Zero ego, pristine Eleiko plates, and cold plunges. It ruined all other gyms in Chennai for me.",
      author: "Sneha R.",
      area: "Kilpauk",
      badge: "Member · 1 Year",
      metric: "-8kg Recomp"
    },
    {
      quote: "Finally stopped starting over. Group energy at 6 AM pushes you past barriers you didn't know you had.",
      author: "Aditya R.",
      area: "Shenoy Nagar",
      badge: "Member · 6 Months",
      metric: "Consistency 4x/wk"
    }
  ];

  return (
    <section className="py-14 sm:py-18 bg-iron-900/90 border-b border-iron-800/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Proof Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-lime bg-lime/10 px-3 py-1 rounded-full border border-lime/20">
            <Sparkles className="w-3.5 h-3.5" /> Established Community Standard
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white uppercase tracking-tight">
            1,200+ PEOPLE HAVE <span className="text-lime">STARTED HERE.</span>
          </h2>
          <p className="text-xs sm:text-sm text-iron-300 font-light">
            From complete beginners lifting their first kettlebell to competitive athletes breaking personal records.
          </p>
        </div>

        {/* 4 Big Trust Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-12">
          
          <div className="bg-iron-950/80 border border-iron-800 p-5 rounded-2xl text-center shadow-md">
            <div className="flex items-center justify-center gap-1 text-yellow-400 mb-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="font-display font-black text-3xl sm:text-4xl text-white block">
              4.9★
            </span>
            <span className="text-[11px] font-mono text-iron-400 uppercase tracking-wider block mt-0.5">
              Google Rating
            </span>
          </div>

          <div className="bg-iron-950/80 border border-iron-800 p-5 rounded-2xl text-center shadow-md">
            <span className="font-display font-black text-3xl sm:text-4xl text-lime block">
              1,200+
            </span>
            <span className="text-[11px] font-mono text-iron-400 uppercase tracking-wider block mt-0.5">
              Members Trained
            </span>
          </div>

          <div className="bg-iron-950/80 border border-iron-800 p-5 rounded-2xl text-center shadow-md">
            <span className="font-display font-black text-3xl sm:text-4xl text-white block">
              35+
            </span>
            <span className="text-[11px] font-mono text-iron-400 uppercase tracking-wider block mt-0.5">
              Weekly Classes
            </span>
          </div>

          <div className="bg-iron-950/80 border border-iron-800 p-5 rounded-2xl text-center shadow-md">
            <span className="font-display font-black text-3xl sm:text-4xl text-lime block">
              12
            </span>
            <span className="text-[11px] font-mono text-iron-400 uppercase tracking-wider block mt-0.5">
              Expert Coaches
            </span>
          </div>

        </div>

        {/* Testimonial Snippets */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {quickTestimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-iron-850/70 border border-iron-750/80 rounded-2xl p-5 flex flex-col justify-between space-y-3 relative group hover:border-lime/40 transition-colors"
            >
              <Quote className="w-6 h-6 text-lime/20 absolute top-4 right-4 pointer-events-none" />
              <p className="text-xs sm:text-sm text-iron-200 leading-relaxed italic">
                "{t.quote}"
              </p>

              <div className="pt-3 border-t border-iron-800/90 flex items-center justify-between">
                <div>
                  <span className="font-display font-bold text-sm text-white block">
                    {t.author}
                  </span>
                  <span className="text-[10px] font-mono text-iron-400 block">
                    📍 {t.area} · {t.badge}
                  </span>
                </div>
                <span className="text-[10px] font-mono bg-lime/10 text-lime px-2 py-0.5 rounded border border-lime/20 font-bold">
                  {t.metric}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Demo Tag Subtle Notice */}
        <div className="mt-6 text-center text-[10px] font-mono text-iron-500">
          [Demo Social Proof Showcase · Verified local member reviews populated on deployment]
        </div>

      </div>
    </section>
  );
}
