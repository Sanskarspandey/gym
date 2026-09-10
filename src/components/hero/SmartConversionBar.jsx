import React from 'react';
import { Flame, UserCheck, Users, CreditCard, ArrowRight } from 'lucide-react';

export default function SmartConversionBar({
  onOpenTrial,
  onNavigatePT,
  onNavigateClasses,
  onNavigateMemberships
}) {
  const items = [
    {
      id: "trial",
      icon: Flame,
      title: "FREE TRIAL",
      desc: "Try your first session.",
      badge: "Complimentary",
      action: onOpenTrial,
      highlight: true
    },
    {
      id: "pt",
      icon: UserCheck,
      title: "PERSONAL TRAINING",
      desc: "Train 1-on-1 with our coaches.",
      badge: "1-on-1",
      action: onNavigatePT,
      highlight: false
    },
    {
      id: "classes",
      icon: Users,
      title: "GROUP CLASSES",
      desc: "Train with the community.",
      badge: "35+ Weekly",
      action: onNavigateClasses,
      highlight: false
    },
    {
      id: "memberships",
      icon: CreditCard,
      title: "MEMBERSHIPS",
      desc: "Choose your plan.",
      badge: "From ₹1,999/mo",
      action: onNavigateMemberships,
      highlight: false
    }
  ];

  return (
    <section id="conversion-bar" className="relative z-20 bg-iron-900 border-y border-iron-800 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={item.action}
                className={`group text-left p-4 rounded-xl border transition-all duration-300 relative overflow-hidden flex flex-col justify-between ${
                  item.highlight
                    ? 'bg-iron-850 border-lime/40 hover:border-lime hover:shadow-[0_0_20px_rgba(204,255,0,0.15)]'
                    : 'bg-iron-850/60 border-iron-750 hover:bg-iron-850 hover:border-iron-600'
                }`}
              >
                {/* Accent top line on hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-lime transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors ${
                    item.highlight
                      ? 'bg-lime text-iron-950 shadow-sm'
                      : 'bg-iron-800 text-lime group-hover:bg-lime group-hover:text-iron-950'
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-iron-400 bg-iron-800/80 px-2 py-0.5 rounded border border-iron-750">
                    {item.badge}
                  </span>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="font-display font-bold text-base tracking-wide text-white uppercase group-hover:text-lime transition-colors">
                      {item.title}
                    </h3>
                    <ArrowRight className="w-4 h-4 text-iron-500 group-hover:text-lime group-hover:translate-x-1 transition-all" />
                  </div>
                  <p className="text-xs text-iron-400 mt-0.5 leading-snug">
                    {item.desc}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
