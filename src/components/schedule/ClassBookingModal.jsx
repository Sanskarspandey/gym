import React, { useState } from 'react';
import { X, CheckCircle, Calendar, Clock, User, ShieldCheck, Flame, MessageSquare } from 'lucide-react';
import { downloadCalendarInvite } from '../../utils/calendar';
import { openWhatsApp } from '../../utils/whatsapp';
import { gymInfo } from '../../data/gymInfo';
import { generateBookingId } from '../../utils/formatters';

export default function ClassBookingModal({ classItem, dayLabel, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    fitnessLevel: 'Beginner'
  });
  const [confirmed, setConfirmed] = useState(false);
  const [bookingId, setBookingId] = useState('');

  if (!classItem) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    const code = generateBookingId("IF-CLASS");
    setBookingId(code);
    setConfirmed(true);
  };

  const handleCalendar = () => {
    downloadCalendarInvite({
      title: `${classItem.name} at IRONFORGE Athletics`,
      description: `Confirmed Class Reservation with ${classItem.coach}. Ref: ${bookingId}`,
      location: gymInfo.location.fullAddress,
      timeStr: classItem.time
    });
  };

  const handleWhatsApp = () => {
    const msg = `Hi IRONFORGE Desk, I just booked ${classItem.name} for ${dayLabel} at ${classItem.time}. My Booking ID is ${bookingId}.`;
    openWhatsApp(gymInfo.contact.whatsappNumber, msg);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="bg-iron-900 border border-lime/40 rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg bg-iron-800 text-iron-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!confirmed ? (
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-lime mb-1">
              <Flame className="w-3.5 h-3.5" /> Reserve Your Spot
            </div>
            <h3 className="text-2xl font-display font-black text-white uppercase tracking-tight">
              Book Class Session
            </h3>

            {/* Class Summary Box */}
            <div className="my-5 p-4 rounded-xl bg-iron-850 border border-iron-750 space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-display font-bold text-lg text-white uppercase">
                  {classItem.name}
                </span>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-lime text-iron-950 font-bold">
                  {classItem.spotsLeft} Spots Left
                </span>
              </div>
              
              <div className="grid grid-cols-3 gap-2 text-xs text-iron-300 pt-2 border-t border-iron-800">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-lime" />
                  <span>{dayLabel}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-lime" />
                  <span>{classItem.time}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-lime" />
                  <span>{classItem.coach}</span>
                </div>
              </div>
            </div>

            {/* Form Fields */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono uppercase text-iron-400 mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Vikram Raman"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-iron-950 border border-iron-750 focus:border-lime rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-iron-400 mb-1">WhatsApp Phone Number</label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-iron-950 border border-iron-750 focus:border-lime rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-iron-400 mb-1">Email Address</label>
                <input
                  type="email"
                  placeholder="you@domain.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-iron-950 border border-iron-750 focus:border-lime rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none transition-colors"
                />
              </div>

              <div className="text-[11px] text-iron-400 flex items-center gap-1.5 pt-1">
                <ShieldCheck className="w-4 h-4 text-lime shrink-0" />
                <span>First-time attendees receive a complimentary 1-on-1 coach briefing 10 mins prior.</span>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-lime text-iron-950 font-display font-black text-sm tracking-wider uppercase rounded-xl hover:bg-white transition-all shadow-[0_0_20px_rgba(204,255,0,0.25)] mt-4"
              >
                Confirm Class Reservation
              </button>
            </form>
          </div>
        ) : (
          /* Confirmation View */
          <div className="text-center py-4 space-y-5 animate-fadeIn">
            <div className="w-16 h-16 rounded-full bg-lime/10 border-2 border-lime flex items-center justify-center mx-auto text-lime">
              <CheckCircle className="w-8 h-8" />
            </div>

            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-lime">Spot Reserved</span>
              <h3 className="text-3xl font-display font-black text-white uppercase mt-1">
                YOU'RE IN THE ROSTER! 🔥
              </h3>
              <p className="text-xs sm:text-sm text-iron-300 mt-2">
                Your spot for <strong>{classItem.name}</strong> on {dayLabel} at {classItem.time} is held.
              </p>
            </div>

            <div className="bg-iron-850 p-4 rounded-xl border border-iron-750 inline-block w-full text-left space-y-1">
              <div className="flex justify-between items-center">
                <span className="text-xs font-mono text-iron-400 uppercase">Booking Reference:</span>
                <span className="text-sm font-mono font-bold text-lime">{bookingId}</span>
              </div>
              <div className="flex justify-between items-center text-xs text-iron-300">
                <span>Facility:</span>
                <span>42 Anna Nagar Main Road</span>
              </div>
              <div className="flex justify-between items-center text-xs text-iron-300">
                <span>Instructor:</span>
                <span>{classItem.coach}</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <button
                onClick={handleCalendar}
                className="py-2.5 px-4 bg-iron-800 hover:bg-iron-700 text-white text-xs font-mono uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center gap-2 border border-iron-700"
              >
                <Calendar className="w-4 h-4 text-lime" />
                <span>Add To Calendar</span>
              </button>
              <button
                onClick={handleWhatsApp}
                className="py-2.5 px-4 bg-green-600 hover:bg-green-500 text-white text-xs font-mono uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </button>
            </div>

            <button
              onClick={onClose}
              className="text-xs text-iron-400 hover:text-white uppercase font-mono tracking-wider pt-2 block mx-auto underline underline-offset-4"
            >
              Close Window
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
