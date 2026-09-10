import React, { useState } from 'react';
import { facilities } from '../../data/facilities';
import { Sparkles, Check, ArrowRight } from 'lucide-react';

export default function FacilitiesGrid({ onOpenTrial }) {
  const [activeTab, setActiveTab] = useState("All");

  const categories = ["All", "Strength", "Conditioning", "Recovery", "Amenities"];

  const filteredFacilities = activeTab === "All"
    ? facilities
    : facilities.filter(f => f.category.toLowerCase() === activeTab.toLowerCase() || (activeTab === "Amenities" && (f.category === "Amenities" || f.category === "Private")));

  return (
    <section id="facilities" className="py-20 sm:py-28 bg-iron-900/60 border-t border-iron-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-lime bg-lime/10 px-3 py-1 rounded border border-lime/20">
              <Sparkles className="w-3.5 h-3.5" /> 10,000 Sq.Ft Training Deck
            </div>
            <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight">
              BUILT FOR <span className="text-lime">SERIOUS TRAINING.</span>
            </h2>
            <p className="text-sm sm:text-base text-iron-300 leading-relaxed">
              Every square foot is engineered for peak athletic output. Tournament-grade Eleiko bars, custom 3x3 power racks, turf tracks, and medical-grade recovery suites.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-4 py-2 rounded-lg text-xs font-mono uppercase tracking-wider transition-all duration-200 border ${
                  activeTab === cat
                    ? 'bg-lime text-iron-950 font-bold border-lime shadow-[0_0_15px_rgba(204,255,0,0.25)]'
                    : 'bg-iron-850 text-iron-400 border-iron-750 hover:text-white hover:border-iron-600'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Editorial Facility Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFacilities.map((facility, index) => (
            <div
              key={facility.id}
              className={`group bg-iron-900 border border-iron-800 hover:border-lime/40 rounded-2xl overflow-hidden transition-all duration-300 flex flex-col justify-between ${
                index === 0 && activeTab === "All" ? "md:col-span-2 lg:col-span-2" : ""
              }`}
            >
              {/* Image with Dark Vignette */}
              <div className={`relative overflow-hidden ${
                index === 0 && activeTab === "All" ? "h-72 sm:h-80" : "h-60"
              }`}>
                <img
                  src={facility.image}
                  alt={facility.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-80 group-hover:brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-iron-900 via-iron-900/30 to-transparent" />
                
                {/* Category Pill */}
                <div className="absolute top-4 left-4 bg-iron-950/80 backdrop-blur-md px-3 py-1 rounded text-[10px] font-mono uppercase tracking-wider text-lime border border-iron-750">
                  {facility.category}
                </div>
              </div>

              {/* Text Info */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="text-xs font-mono text-iron-400 uppercase">
                    {facility.subtitle}
                  </div>
                  <h3 className="font-display font-black text-2xl text-white uppercase tracking-wide mt-1 group-hover:text-lime transition-colors">
                    {facility.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-iron-300 mt-2 leading-relaxed">
                    {facility.description}
                  </p>
                </div>

                {/* Micro Features list */}
                <div className="pt-3 border-t border-iron-800 space-y-1.5">
                  {facility.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-iron-400">
                      <Check className="w-3.5 h-3.5 text-lime shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Facility CTA Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-iron-900 via-iron-850 to-iron-900 border border-lime/30 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="font-display font-black text-2xl text-white uppercase">
              Want to see the facility in person?
            </h4>
            <p className="text-sm text-iron-300">
              Drop by our Anna Nagar location for an guided equipment walkthrough with our Head Coach.
            </p>
          </div>
          <button
            onClick={onOpenTrial}
            className="shrink-0 px-6 py-3 bg-lime text-iron-950 font-display font-bold text-sm tracking-wider uppercase rounded-xl hover:bg-white transition-all shadow-md flex items-center gap-2"
          >
            <span>Book Tour & Free Trial</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
