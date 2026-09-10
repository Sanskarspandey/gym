import React, { useState } from 'react';
import { galleryCategories, galleryImages } from '../../data/gallery';
import { Maximize2, Camera, ArrowRight } from 'lucide-react';
import LightboxModal from './LightboxModal';

export default function GallerySection({ onOpenTrial }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filtered = activeCategory === "All"
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-iron-900/50 border-t border-iron-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-lime bg-lime/10 px-3 py-1 rounded border border-lime/20">
              <Camera className="w-3.5 h-3.5" /> Cinematic Facility Tour
            </div>
            <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight">
              EXPLORE <span className="text-lime">THE TRAINING GROUNDS.</span>
            </h2>
            <p className="text-base sm:text-lg text-iron-300 leading-relaxed">
              Step inside Anna Nagar's standard for strength. Dedicated competition platforms, functional turf lanes, cold plunges, and high-energy community training.
            </p>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-2">
            {galleryCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono uppercase transition-colors border ${
                  activeCategory === cat
                    ? 'bg-lime text-iron-950 font-bold border-lime shadow-sm'
                    : 'bg-iron-850 text-iron-400 border-iron-750 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((img, idx) => (
            <div
              key={img.id}
              onClick={() => setLightboxIndex(idx)}
              className="group relative h-72 rounded-2xl overflow-hidden cursor-pointer bg-iron-900 border border-iron-800 hover:border-lime/50 transition-all duration-300 shadow-sm hover:shadow-xl"
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-80 group-hover:brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-iron-950/90 via-iron-950/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              
              {/* Category Pill */}
              <div className="absolute top-4 left-4 bg-iron-950/80 backdrop-blur-md px-2.5 py-1 rounded text-[10px] font-mono text-lime uppercase tracking-wider border border-iron-750">
                {img.category}
              </div>

              {/* Expand Icon */}
              <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-iron-950/80 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4 text-lime" />
              </div>

              {/* Title / Caption */}
              <div className="absolute bottom-4 left-4 right-4">
                <h4 className="font-display font-bold text-lg text-white uppercase group-hover:text-lime transition-colors">
                  {img.title}
                </h4>
                <p className="text-xs text-iron-400 line-clamp-1">
                  {img.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <LightboxModal
          images={filtered}
          activeIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={(idx) => setLightboxIndex(idx)}
        />
      )}
    </section>
  );
}
