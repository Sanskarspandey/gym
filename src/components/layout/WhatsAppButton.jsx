import React from 'react';
import { MessageSquare } from 'lucide-react';
import { openWhatsApp } from '../../utils/whatsapp';
import { gymInfo } from '../../data/gymInfo';

export default function WhatsAppButton() {
  const handleClick = () => {
    openWhatsApp(
      gymInfo.contact.whatsappNumber,
      gymInfo.contact.defaultWhatsAppMsg
    );
  };

  return (
    <aside
      aria-label="Floating WhatsApp Desk"
      className="hidden md:flex fixed bottom-6 right-6 z-40 items-center gap-2 group cursor-pointer select-none"
      onClick={handleClick}
    >
      <div className="bg-iron-900/90 backdrop-blur-md border border-iron-750 px-3 py-1.5 rounded-full text-xs font-mono text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0 shadow-xl pointer-events-none">
        Chat with a Coach
      </div>

      <button
        type="button"
        aria-label="Chat with IronForge Front Desk on WhatsApp"
        className="w-13 h-13 p-3.5 rounded-full bg-green-600 hover:bg-green-500 text-white shadow-[0_4px_20px_rgba(34,197,94,0.4)] flex items-center justify-center transition-all duration-300 transform group-hover:scale-110 relative"
      >
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-lime rounded-full animate-ping" />
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-lime rounded-full border-2 border-iron-950" />
        <MessageSquare className="w-6 h-6" />
      </button>
    </aside>
  );
}
