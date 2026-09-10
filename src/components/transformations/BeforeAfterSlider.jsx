import React, { useState, useRef, useCallback } from 'react';
import { ChevronsLeftRight } from 'lucide-react';

export default function BeforeAfterSlider({ beforeImage, afterImage, name, timeline }) {
  const [sliderPosition, setSliderPosition] = useState(50); // percentage 0 to 100
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const width = rect.width;
    const positionPercent = Math.max(0, Math.min(100, (x / width) * 100));
    setSliderPosition(positionPercent);
  }, []);

  const handleTouchMove = (e) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-80 sm:h-96 rounded-2xl overflow-hidden select-none cursor-ew-resize border border-iron-750 shadow-2xl bg-iron-950"
      onMouseDown={() => setIsDragging(true)}
      onMouseUp={() => setIsDragging(false)}
      onMouseLeave={() => setIsDragging(false)}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
    >
      {/* After Image (Full background layer) */}
      <img
        src={afterImage}
        alt={`${name} After Transformation`}
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      />
      <div className="absolute top-4 right-4 bg-lime text-iron-950 px-2.5 py-1 rounded-md text-[11px] font-mono font-black uppercase tracking-wider shadow-md pointer-events-none">
        After · {timeline}
      </div>

      {/* Before Image (Clipped layer using clipPath) */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
      >
        <img
          src={beforeImage}
          alt={`${name} Before Transformation`}
          className="absolute inset-0 w-full h-full object-cover filter grayscale contrast-110"
        />
        <div className="absolute top-4 left-4 bg-iron-900/90 text-iron-200 px-2.5 py-1 rounded-md text-[11px] font-mono uppercase tracking-wider border border-iron-700 pointer-events-none">
          Before
        </div>
      </div>

      {/* Draggable Divider Line */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-lime pointer-events-none"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-lime text-iron-950 flex items-center justify-center shadow-[0_0_15px_rgba(204,255,0,0.5)] cursor-grab active:cursor-grabbing border-2 border-iron-950">
          <ChevronsLeftRight className="w-4 h-4" />
        </div>
      </div>

      {/* Hint overlay at bottom */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-iron-950/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-mono text-iron-300 border border-iron-750 pointer-events-none">
        Drag slider to compare
      </div>
    </div>
  );
}
