import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

export default function LightboxModal({ images, activeIndex, onClose, onNavigate }) {
  const current = images[activeIndex];

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNavigate((activeIndex + 1) % images.length);
      if (e.key === "ArrowLeft") onNavigate((activeIndex - 1 + images.length) % images.length);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex, images.length, onClose, onNavigate]);

  if (!current) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-2xl p-4 select-none animate-fadeIn">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 z-50 p-3 rounded-full bg-iron-900/80 hover:bg-iron-800 text-white transition-colors border border-iron-700"
        aria-label="Close Lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev Button */}
      <button
        onClick={() => onNavigate((activeIndex - 1 + images.length) % images.length)}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-iron-900/80 hover:bg-iron-800 text-white transition-colors border border-iron-700"
        aria-label="Previous Image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Next Button */}
      <button
        onClick={() => onNavigate((activeIndex + 1) % images.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-iron-900/80 hover:bg-iron-800 text-white transition-colors border border-iron-700"
        aria-label="Next Image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Image & Caption Container */}
      <div className="max-w-5xl max-h-[85vh] flex flex-col items-center justify-center">
        <div className="relative max-h-[75vh] overflow-hidden rounded-2xl border border-iron-800 shadow-2xl">
          <img
            src={current.src}
            alt={current.title}
            className="max-h-[75vh] w-auto object-contain rounded-2xl"
          />
        </div>

        {/* Caption Bar */}
        <div className="mt-4 text-center max-w-lg">
          <span className="text-[10px] font-mono uppercase tracking-widest text-lime bg-iron-900 px-2.5 py-0.5 rounded border border-iron-800">
            {current.category} · {activeIndex + 1} of {images.length}
          </span>
          <h4 className="font-display font-black text-xl text-white uppercase tracking-wide mt-1">
            {current.title}
          </h4>
          <p className="text-xs text-iron-400 mt-0.5">
            {current.subtitle}
          </p>
        </div>
      </div>
    </div>
  );
}
