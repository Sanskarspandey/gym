import React from 'react';
import { MapPin, Clock, Phone, MessageSquare, Navigation, Car, Train, ShieldCheck } from 'lucide-react';
import { gymInfo } from '../../data/gymInfo';
import { openWhatsApp } from '../../utils/whatsapp';

export default function LocationSection() {
  const handleDirections = () => {
    window.open(gymInfo.location.directionsUrl, '_blank', 'noopener,noreferrer');
  };

  const handleCall = () => {
    window.location.href = `tel:${gymInfo.contact.phone}`;
  };

  const handleWhatsApp = () => {
    openWhatsApp(
      gymInfo.contact.whatsappNumber,
      "Hi IRONFORGE, I'm heading over to your Anna Nagar gym and needed help with directions/parking."
    );
  };

  return (
    <section id="location" className="py-20 sm:py-28 bg-iron-950 relative border-t border-iron-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-lime bg-lime/10 px-3 py-1 rounded border border-lime/20">
            <MapPin className="w-3.5 h-3.5" /> Prime Location
          </div>
          <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight">
            FIND YOUR <span className="text-lime">TRAINING GROUND.</span>
          </h2>
          <p className="text-base sm:text-lg text-iron-300 leading-relaxed">
            Conveniently located on Anna Nagar Main Road with dedicated basement parking, valet assistance, and rapid metro connectivity.
          </p>
        </div>

        {/* Location & Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Details Column (5 cols) */}
          <div className="lg:col-span-5 bg-iron-900 border border-iron-800 rounded-3xl p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-xl">
            
            <div className="space-y-6">
              {/* Address */}
              <div className="space-y-1.5">
                <span className="text-xs font-mono uppercase tracking-wider text-lime block">Facility Headquarters</span>
                <h3 className="font-display font-black text-2xl text-white uppercase">
                  {gymInfo.name}
                </h3>
                <p className="text-sm text-iron-300 leading-relaxed">
                  {gymInfo.location.fullAddress}
                </p>
                <span className="text-xs text-iron-400 font-mono block pt-1">
                  📍 {gymInfo.location.landmark}
                </span>
              </div>

              {/* Hours of Operation */}
              <div className="pt-4 border-t border-iron-800 space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-lime">
                  <Clock className="w-4 h-4" />
                  <span>Opening Hours</span>
                </div>
                
                <div className="space-y-1.5 text-xs font-mono">
                  <div className="flex justify-between text-iron-300">
                    <span>Monday – Friday:</span>
                    <span className="font-bold text-white">{gymInfo.hours.weekdays}</span>
                  </div>
                  <div className="flex justify-between text-iron-300">
                    <span>Saturday:</span>
                    <span className="font-bold text-white">{gymInfo.hours.saturday}</span>
                  </div>
                  <div className="flex justify-between text-iron-300">
                    <span>Sunday:</span>
                    <span className="font-bold text-white">{gymInfo.hours.sunday}</span>
                  </div>
                </div>
              </div>

              {/* Parking & Transit */}
              <div className="pt-4 border-t border-iron-800 space-y-2 text-xs text-iron-300">
                <div className="flex items-start gap-2">
                  <Car className="w-4 h-4 text-lime shrink-0 mt-0.5" />
                  <span>{gymInfo.location.parking}</span>
                </div>
                <div className="flex items-start gap-2">
                  <Train className="w-4 h-4 text-lime shrink-0 mt-0.5" />
                  <span>{gymInfo.location.metro}</span>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="grid grid-cols-3 gap-2 pt-4 border-t border-iron-800">
              <button
                onClick={handleDirections}
                className="py-3 px-2 bg-lime text-iron-950 font-display font-black text-xs uppercase tracking-wider rounded-xl hover:bg-white transition-all flex flex-col items-center justify-center gap-1 text-center shadow-md"
              >
                <Navigation className="w-4 h-4" />
                <span>Directions</span>
              </button>

              <button
                onClick={handleCall}
                className="py-3 px-2 bg-iron-850 hover:bg-iron-800 text-white font-display font-bold text-xs uppercase tracking-wider rounded-xl border border-iron-750 transition-all flex flex-col items-center justify-center gap-1 text-center"
              >
                <Phone className="w-4 h-4 text-lime" />
                <span>Call Desk</span>
              </button>

              <button
                onClick={handleWhatsApp}
                className="py-3 px-2 bg-green-600 hover:bg-green-500 text-white font-display font-bold text-xs uppercase tracking-wider rounded-xl transition-all flex flex-col items-center justify-center gap-1 text-center"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp</span>
              </button>
            </div>

          </div>

          {/* Interactive Map Visual (7 cols) */}
          <div className="lg:col-span-7 bg-iron-900 border border-iron-800 rounded-3xl overflow-hidden relative min-h-[350px] shadow-xl flex flex-col">
            
            {/* Real OpenStreetMap / Google Map iframe centered on Anna Nagar, Chennai */}
            <div className="relative w-full h-full min-h-[360px] flex-1">
              <iframe
                title="IronForge Athletics Anna Nagar Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.007672922091!2d80.2078652!3d13.0846618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5266858e923f79%3A0xb35a0f28e2172776!2sAnna%20Nagar%20Roundtana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full border-0 filter invert contrast-125 opacity-80"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Map Floating Pin Overlay */}
              <div className="absolute top-4 left-4 bg-iron-950/90 backdrop-blur-md p-3.5 rounded-xl border border-iron-750 shadow-xl max-w-xs pointer-events-none">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-lime animate-ping" />
                  <span className="font-display font-bold text-sm text-white uppercase">IRONFORGE ATHLETICS</span>
                </div>
                <p className="text-[11px] text-iron-300 mt-1 font-mono">
                  42 Anna Nagar Main Road · Chennai
                </p>
              </div>

              {/* Open in Full Maps Trigger */}
              <button
                onClick={handleDirections}
                className="absolute bottom-4 right-4 bg-iron-950/90 hover:bg-lime hover:text-iron-950 text-white text-xs font-mono uppercase tracking-wider px-3.5 py-2 rounded-lg border border-iron-750 transition-all shadow-lg flex items-center gap-1.5"
              >
                <Navigation className="w-3.5 h-3.5 text-lime hover:text-iron-950" />
                <span>Open in Google Maps</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
