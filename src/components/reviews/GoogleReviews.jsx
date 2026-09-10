import React, { useState } from 'react';
import { reviewsData } from '../../data/reviews';
import { Star, CheckCircle, ShieldAlert, Sparkles, MessageSquare } from 'lucide-react';
import { openWhatsApp } from '../../utils/whatsapp';
import { gymInfo } from '../../data/gymInfo';

export default function GoogleReviews() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredReviews = activeCategory === "All"
    ? reviewsData.reviews
    : reviewsData.reviews.filter(r => r.category === activeCategory);

  return (
    <section id="reviews" className="py-20 sm:py-28 bg-iron-950 relative border-t border-iron-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Rating Banner Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12 sm:mb-16">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-lime bg-lime/10 px-3 py-1 rounded border border-lime/20">
              <Sparkles className="w-3.5 h-3.5" /> Verified Anna Nagar Athletes
            </div>
            <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight">
              COMMUNITY <span className="text-lime">REPUTATION.</span>
            </h2>
            <p className="text-base sm:text-lg text-iron-300 leading-relaxed">
              Consistently rated Anna Nagar's top-ranked strength & conditioning community for coaching rigor, hygiene standards, and culture.
            </p>
          </div>

          {/* Big Rating Pill */}
          <div className="bg-iron-900 border border-iron-800 p-5 sm:p-6 rounded-2xl flex items-center gap-5 shadow-xl shrink-0">
            <div className="text-center">
              <div className="font-display font-black text-4xl sm:text-5xl text-white leading-none">
                {reviewsData.overallRating}
              </div>
              <div className="text-[10px] font-mono text-iron-400 uppercase mt-1">out of 5.0</div>
            </div>

            <div className="h-10 w-px bg-iron-800" />

            <div>
              <div className="flex items-center gap-1 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <div className="text-xs font-semibold text-white mt-1">Google Reviews</div>
              <div className="text-[11px] font-mono text-iron-400">340+ Verified Reviews</div>
            </div>
          </div>
        </div>

        {/* Demo Disclaimer notice */}
        <div className="mb-8 p-3 rounded-xl bg-iron-850/80 border border-iron-750 text-xs text-iron-400 flex items-center gap-2 max-w-2xl">
          <ShieldAlert className="w-4 h-4 text-lime shrink-0" />
          <span>
            {reviewsData.demoNotice}
          </span>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          <span className="text-xs font-mono text-iron-500 uppercase mr-1">Filter Reviews:</span>
          {reviewsData.categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono uppercase transition-colors border ${
                activeCategory === cat
                  ? 'bg-lime text-iron-950 font-bold border-lime shadow-sm'
                  : 'bg-iron-900 text-iron-400 border-iron-800 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-iron-900 border border-iron-800 hover:border-lime/30 rounded-2xl p-6 transition-all flex flex-col justify-between space-y-4 shadow-sm"
            >
              <div className="space-y-3">
                {/* Stars & Category */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-yellow-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-[10px] font-mono uppercase text-iron-400">
                    {rev.timeAgo}
                  </span>
                </div>

                {/* Review Highlight */}
                <h4 className="font-semibold text-sm text-white leading-snug">
                  "{rev.highlight}"
                </h4>

                {/* Full Body */}
                <p className="text-xs text-iron-300 leading-relaxed">
                  {rev.text}
                </p>
              </div>

              {/* Reviewer Meta */}
              <div className="pt-4 border-t border-iron-800/80 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-iron-800 text-lime font-display font-bold text-xs flex items-center justify-center border border-iron-700">
                    {rev.avatar}
                  </div>
                  <div>
                    <span className="font-bold text-xs text-white block">{rev.name}</span>
                    <span className="text-[10px] font-mono text-iron-400 block">{rev.city}</span>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-[10px] font-mono text-lime">
                  <CheckCircle className="w-3 h-3" />
                  <span>Verified</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
