import React from 'react';
import { Dumbbell, MapPin, Phone, Mail, Instagram, Youtube, Facebook, ArrowUpRight, Flame } from 'lucide-react';
import { gymInfo } from '../../data/gymInfo';

export default function Footer({ onOpenTrial }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-iron-950 border-t border-iron-800 text-iron-400 text-xs font-sans pb-20 md:pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Col (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-iron-900 border border-lime/40 flex items-center justify-center text-lime">
                <Dumbbell className="w-5 h-5 -rotate-45" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-black text-2xl tracking-wider text-white">
                  IRON<span className="text-lime">FORGE</span>
                </span>
                <span className="text-[10px] font-mono tracking-widest text-iron-400 uppercase -mt-1">
                  Athletics · Anna Nagar
                </span>
              </div>
            </div>

            <p className="text-sm text-iron-300 max-w-sm leading-relaxed">
              {gymInfo.subTagline}
            </p>

            <div className="pt-2 text-xs space-y-1 text-iron-300 font-mono">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-lime shrink-0" />
                <span>{gymInfo.location.fullAddress}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-lime shrink-0" />
                <span>{gymInfo.contact.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-lime shrink-0" />
                <span>{gymInfo.contact.email}</span>
              </div>
            </div>
          </div>

          {/* Training Programs Col */}
          <div className="space-y-3">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">
              Training Pathways
            </h4>
            <ul className="space-y-2 text-xs">
              <li><button onClick={() => scrollTo('programs')} className="hover:text-lime transition-colors">Strength & Barbell</button></li>
              <li><button onClick={() => scrollTo('programs')} className="hover:text-lime transition-colors">Fat Loss Protocol</button></li>
              <li><button onClick={() => scrollTo('programs')} className="hover:text-lime transition-colors">Hypertrophy Cycles</button></li>
              <li><button onClick={() => scrollTo('programs')} className="hover:text-lime transition-colors">Functional Athletics</button></li>
              <li><button onClick={() => scrollTo('trainers')} className="hover:text-lime transition-colors">1-on-1 Personal Training</button></li>
              <li><button onClick={() => scrollTo('schedule')} className="hover:text-lime transition-colors">Group Class Timetable</button></li>
            </ul>
          </div>

          {/* Facility & Hours Col */}
          <div className="space-y-3">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">
              Operating Hours
            </h4>
            <div className="space-y-1.5 text-xs font-mono">
              <div>
                <span className="text-iron-300 block">Monday – Friday</span>
                <span className="text-lime">{gymInfo.hours.weekdays}</span>
              </div>
              <div>
                <span className="text-iron-300 block">Saturday</span>
                <span className="text-white">{gymInfo.hours.saturday}</span>
              </div>
              <div>
                <span className="text-iron-300 block">Sunday</span>
                <span className="text-white">{gymInfo.hours.sunday}</span>
              </div>
            </div>
          </div>

          {/* Quick Trial Pass Box */}
          <div className="space-y-3">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">
              First Visit?
            </h4>
            <p className="text-xs text-iron-400">
              Claim your complimentary 1-day pass and experience the equipment, locker suites, and atmosphere.
            </p>
            <button
              onClick={onOpenTrial}
              className="w-full py-2.5 bg-lime hover:bg-white text-iron-950 font-display font-black text-xs uppercase tracking-wider rounded-lg transition-all shadow-md flex items-center justify-center gap-1.5"
            >
              <Flame className="w-3.5 h-3.5 fill-iron-950" />
              <span>Book Free Trial</span>
            </button>
          </div>

        </div>

        {/* Bottom Bar & Demo Notice */}
        <div className="mt-12 pt-8 border-t border-iron-850 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-[11px] text-iron-500">
          <div>
            © {new Date().getFullYear()} IRONFORGE ATHLETICS. All Rights Reserved. Anna Nagar, Chennai.
          </div>
          <div className="text-lime font-mono text-[10px]">
            ⚡ Live Sales Demo for Gym Owners · Built with React, Vite & Tailwind CSS
          </div>
        </div>

      </div>
    </footer>
  );
}
