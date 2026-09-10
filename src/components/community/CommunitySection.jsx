import React, { useState, useEffect, useRef } from 'react';
import { Users, Trophy, Flame, Calendar, Star, Award, ArrowRight } from 'lucide-react';
import { gymInfo } from '../../data/gymInfo';

export default function CommunitySection({ onOpenTrial }) {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState({
    members: 0,
    classes: 0,
    coaches: 0,
    rating: 0
  });
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          // Animate counters
          const duration = 1500;
          const startTime = performance.now();

          const updateCounters = (now) => {
            const progress = Math.min((now - startTime) / duration, 1);
            setCounts({
              members: Math.floor(progress * 1200),
              classes: Math.floor(progress * 35),
              coaches: Math.floor(progress * 12),
              rating: (progress * 4.9).toFixed(1)
            });

            if (progress < 1) {
              requestAnimationFrame(updateCounters);
            } else {
              setCounts({
                members: 1200,
                classes: 35,
                coaches: 12,
                rating: "4.9"
              });
            }
          };

          requestAnimationFrame(updateCounters);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const communityEvents = [
    {
      title: "Saturday Anna Nagar Park Community Runs",
      desc: "Weekly leisurely 3km group runs around Tower Park followed by mobility sessions and coconut water on the lawn.",
      badge: "Every Saturday"
    },
    {
      title: "Quarterly IronForge Lift-Off Meets",
      desc: "Sanctioned mock powerlifting & Olympic lifting meets where members test 1-rep max PRs in a high-voltage team atmosphere.",
      badge: "Quarterly Event"
    },
    {
      title: "Nutrition & Metabolic Masterclasses",
      desc: "Live workshops on macro tracking, South Indian meal prep, and hormonal recovery led by certified sports dieticians.",
      badge: "Monthly Clinic"
    },
    {
      title: "Member Milestone Bell Ringing",
      desc: "From your very first bodyweight pull-up to a 200kg deadlift, every personal record is celebrated with the gym bell.",
      badge: "Daily Tradition"
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 sm:py-28 bg-iron-950 relative border-t border-iron-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Animated Statistics Counter Strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16 sm:mb-20">
          <div className="bg-iron-900 border border-iron-800 p-6 rounded-2xl text-center shadow-lg hover:border-lime/40 transition-colors">
            <span className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-lime block leading-none">
              {counts.members}+
            </span>
            <span className="text-xs sm:text-sm font-mono uppercase text-iron-300 mt-2 block font-medium">
              Members Trained
            </span>
            <span className="text-[10px] font-mono text-iron-500 block">Anna Nagar community</span>
          </div>

          <div className="bg-iron-900 border border-iron-800 p-6 rounded-2xl text-center shadow-lg hover:border-lime/40 transition-colors">
            <span className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-white block leading-none">
              {counts.classes}+
            </span>
            <span className="text-xs sm:text-sm font-mono uppercase text-iron-300 mt-2 block font-medium">
              Weekly Classes
            </span>
            <span className="text-[10px] font-mono text-iron-500 block">Capped small groups</span>
          </div>

          <div className="bg-iron-900 border border-iron-800 p-6 rounded-2xl text-center shadow-lg hover:border-lime/40 transition-colors">
            <span className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-lime block leading-none">
              {counts.coaches}
            </span>
            <span className="text-xs sm:text-sm font-mono uppercase text-iron-300 mt-2 block font-medium">
              Expert Coaches
            </span>
            <span className="text-[10px] font-mono text-iron-500 block">NSCA, ACE & CrossFit</span>
          </div>

          <div className="bg-iron-900 border border-iron-800 p-6 rounded-2xl text-center shadow-lg hover:border-lime/40 transition-colors">
            <span className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-white block leading-none">
              {counts.rating}★
            </span>
            <span className="text-xs sm:text-sm font-mono uppercase text-iron-300 mt-2 block font-medium">
              Google Rating
            </span>
            <span className="text-[10px] font-mono text-iron-500 block">340+ verified reviews</span>
          </div>
        </div>

        {/* Community Story & Events Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Narrative (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-lime bg-lime/10 px-3 py-1 rounded border border-lime/20">
              <Users className="w-3.5 h-3.5" /> IronForge Culture
            </div>

            <h2 className="font-display font-black text-4xl sm:text-5xl text-white uppercase tracking-tight leading-[0.95]">
              TRAIN TOGETHER. <br />
              <span className="text-lime">GET STRONGER TOGETHER.</span>
            </h2>

            <p className="text-base text-iron-300 leading-relaxed">
              Fitness is hard in isolation. At IronForge, you are surrounded by people who cheer your last heavy repetition, celebrate your life wins, and notice when you don’t show up.
            </p>

            <button
              onClick={onOpenTrial}
              className="px-6 py-3.5 bg-lime text-iron-950 font-display font-black text-xs uppercase tracking-wider rounded-xl hover:bg-white transition-all shadow-[0_0_20px_rgba(204,255,0,0.25)] flex items-center gap-2"
            >
              <span>Join The Community · Free Trial</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Right Events Grid (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {communityEvents.map((evt, idx) => (
              <div
                key={idx}
                className="bg-iron-900 border border-iron-800 hover:border-lime/30 p-5 rounded-2xl flex flex-col justify-between space-y-3"
              >
                <div>
                  <span className="text-[10px] font-mono uppercase text-lime bg-lime/10 px-2 py-0.5 rounded border border-lime/20 inline-block mb-2">
                    {evt.badge}
                  </span>
                  <h4 className="font-display font-bold text-lg text-white uppercase tracking-wide">
                    {evt.title}
                  </h4>
                  <p className="text-xs text-iron-400 mt-1 leading-relaxed">
                    {evt.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
