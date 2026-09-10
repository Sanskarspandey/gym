import React from 'react';
import { Flame, MessageSquare, Navigation } from 'lucide-react';
import { openWhatsApp } from '../../utils/whatsapp';
import { gymInfo } from '../../data/gymInfo';

export default function MobileBottomBar({ onOpenTrial }) {
  const handleWhatsApp = () => {
    openWhatsApp(gymInfo.contact.whatsappNumber, gymInfo.contact.defaultWhatsAppMsg);
  };

  const handleDirections = () => {
    window.open(gymInfo.location.directionsUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <aside
      aria-label="Mobile Quick Actions"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-iron-950/95 backdrop-blur-xl border-t border-iron-800/90 px-3 py-2 pb-safe shadow-[0_-5px_25px_rgba(0,0,0,0.8)]"
    >
      <div className="flex items-center justify-between gap-2 max-w-md mx-auto">
        
        {/* 1. Primary Action: FREE TRIAL (High Contrast Glowing Lime) */}
        <button
          onClick={onOpenTrial}
          className="flex-1 min-h-[48px] bg-lime text-iron-950 font-display font-black text-xs uppercase tracking-wider rounded-xl shadow-[0_0_15px_rgba(204,255,0,0.3)] flex items-center justify-center gap-1.5 px-3 active:scale-95 transition-transform"
        >
          <Flame className="w-4 h-4 fill-iron-950 shrink-0" />
          <span className="truncate">Free Trial</span>
        </button>

        {/* 2. Secondary: WhatsApp */}
        <button
          onClick={handleWhatsApp}
          className="min-h-[48px] px-3.5 bg-green-600 hover:bg-green-500 text-white font-display font-bold text-xs uppercase tracking-wider rounded-xl flex items-center justify-center gap-1.5 active:scale-95 transition-transform shrink-0 shadow-sm"
        >
          <MessageSquare className="w-4 h-4 shrink-0" />
          <span>WhatsApp</span>
        </button>

        {/* 3. Tertiary: Directions */}
        <button
          onClick={handleDirections}
          className="min-h-[48px] px-3 bg-iron-850 hover:bg-iron-800 text-iron-200 border border-iron-750 font-display font-bold text-xs uppercase tracking-wider rounded-xl flex items-center justify-center gap-1.5 active:scale-95 transition-transform shrink-0"
        >
          <Navigation className="w-4 h-4 text-lime shrink-0" />
          <span>Directions</span>
        </button>

      </div>
    </aside>
  );
}
