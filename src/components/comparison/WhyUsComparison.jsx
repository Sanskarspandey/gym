import React from 'react';
import { Check, X, ShieldCheck, ArrowRight, Flame } from 'lucide-react';

export default function WhyUsComparison({ onOpenTrial }) {
  const comparisonRows = [
    {
      feature: "Training Methodology",
      ironforge: "Periodized 12-week cycles with structured progressive overload",
      typical: "Random daily workouts or repetitive treadmill cardio",
      ironforgeCheck: true,
      typicalCheck: false
    },
    {
      feature: "Coaching & Floor Oversight",
      ironforge: "NSCA, ACE & CrossFit certified coaches actively checking form",
      typical: "Unsupervised gym floor or sales-oriented floor interns",
      ironforgeCheck: true,
      typicalCheck: false
    },
    {
      feature: "Progress & Body Composition",
      ironforge: "Medical-grade InBody 570 scans with fortnightly coach audits",
      typical: "Standard bathroom scale with zero muscle-to-fat analysis",
      ironforgeCheck: true,
      typicalCheck: false
    },
    {
      feature: "Small Group Class Size",
      ironforge: "Strictly capped at 14 members to ensure individualized attention",
      typical: "Overcrowded 30-40 person classes where you get lost in the back",
      ironforgeCheck: true,
      typicalCheck: false
    },
    {
      feature: "Equipment & Lifting Deck",
      ironforge: "Eleiko IWF competition platforms, custom 3x3 racks & 30m turf",
      typical: "Cramped machine aisles with long waiting times for squat racks",
      ironforgeCheck: true,
      typicalCheck: false
    },
    {
      feature: "Athletic Recovery Suite",
      ironforge: "Commercial 3°C cold plunge tubs & far-infrared cedar sauna",
      typical: "Basic locker room benches with no recovery modalities",
      ironforgeCheck: true,
      typicalCheck: false
    },
    {
      feature: "Community & Atmosphere",
      ironforge: "Zero-ego, encouraging culture where everyone knows your name",
      typical: "Intimidating mirror-flexing atmosphere with zero accountability",
      ironforgeCheck: true,
      typicalCheck: false
    }
  ];

  return (
    <section className="py-20 sm:py-28 bg-iron-950 relative border-t border-iron-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-lime bg-lime/10 px-3 py-1 rounded border border-lime/20">
            <ShieldCheck className="w-3.5 h-3.5" /> Honest Differentiation
          </div>
          <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight">
            YOUR FITNESS. <span className="text-lime">WITHOUT THE GUESSWORK.</span>
          </h2>
          <p className="text-sm sm:text-base text-iron-300 leading-relaxed max-w-2xl mx-auto">
            Most gym memberships go unused because people are left to wander between machines with no plan. We built IRONFORGE on a different standard.
          </p>
        </div>

        {/* Comparison Table / Matrix */}
        <div className="bg-iron-900 border border-iron-800 rounded-3xl overflow-hidden shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-iron-800 bg-iron-850/80">
                  <th className="py-5 px-6 font-mono text-xs text-iron-400 uppercase w-1/3">
                    Standard Of Training
                  </th>
                  <th className="py-5 px-6 font-display font-black text-lg sm:text-xl text-lime uppercase w-1/3 bg-lime/5 border-x border-lime/20">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-lime" />
                      <span>IRONFORGE ATHLETICS</span>
                    </div>
                  </th>
                  <th className="py-5 px-6 font-display font-bold text-base sm:text-lg text-iron-400 uppercase w-1/3">
                    Typical Commercial Gym
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-iron-800/80 text-xs sm:text-sm">
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-iron-850/40 transition-colors">
                    <td className="py-4 px-6 font-semibold text-white">
                      {row.feature}
                    </td>

                    {/* IronForge column */}
                    <td className="py-4 px-6 bg-lime/[0.02] border-x border-lime/15 text-iron-100">
                      <div className="flex items-start gap-2.5">
                        <div className="w-5 h-5 rounded-full bg-lime/20 flex items-center justify-center shrink-0 mt-0.5 text-lime">
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </div>
                        <span className="leading-snug">{row.ironforge}</span>
                      </div>
                    </td>

                    {/* Typical Gym column */}
                    <td className="py-4 px-6 text-iron-400">
                      <div className="flex items-start gap-2.5">
                        <div className="w-5 h-5 rounded-full bg-iron-800 flex items-center justify-center shrink-0 mt-0.5 text-iron-500">
                          <X className="w-3.5 h-3.5 stroke-[2.5]" />
                        </div>
                        <span className="leading-snug">{row.typical}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Bottom Callout in Comparison Card */}
          <div className="p-6 sm:p-8 bg-iron-850 border-t border-iron-800 flex flex-col sm:flex-row items-center justify-between gap-5">
            <div>
              <span className="text-sm sm:text-base font-display font-bold text-white uppercase block">
                Experience the standard yourself on our Anna Nagar training floor.
              </span>
              <span className="text-xs text-iron-400 block mt-0.5">
                Complimentary 1-day pass includes full floor access and coach orientation.
              </span>
            </div>

            <button
              onClick={onOpenTrial}
              className="w-full sm:w-auto px-7 py-3.5 bg-lime text-iron-950 font-display font-black text-xs uppercase tracking-wider rounded-xl hover:bg-white transition-all shadow-[0_0_20px_rgba(204,255,0,0.25)] shrink-0 flex items-center justify-center gap-2"
            >
              <Flame className="w-4 h-4 fill-iron-950" />
              <span>EXPERIENCE THE DIFFERENCE</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
