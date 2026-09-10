import React, { useState } from 'react';
import { X, CheckCircle, Calendar, Clock, User, ShieldCheck, Flame, MessageSquare, ArrowRight } from 'lucide-react';
import { downloadCalendarInvite } from '../../utils/calendar';
import { openWhatsApp } from '../../utils/whatsapp';
import { gymInfo } from '../../data/gymInfo';
import { generateBookingId } from '../../utils/formatters';

export default function TrainerBookingModal({ trainer, allTrainers, onClose }) {
  const [selectedTrainer, setSelectedTrainer] = useState(trainer || allTrainers[0]);
  const [goal, setGoal] = useState("Strength & Muscle");
  const [dateOption, setDateOption] = useState("Tomorrow");
  const [timeSlot, setTimeSlot] = useState(selectedTrainer?.availableSlots?.[0] || "6:00 AM");
  const [formData, setFormData] = useState({ name: '', phone: '', email: '' });
  const [step, setStep] = useState(1);
  const [bookingId, setBookingId] = useState('');

  const goals = [
    "Strength & Muscle",
    "Fat Loss & Conditioning",
    "Mobility & Joint Rehab",
    "Olympic Weightlifting",
    "Athletic Stamina"
  ];

  const dates = [
    { label: "Tomorrow", val: "Tomorrow" },
    { label: "Day After", val: "In 2 Days" },
    { label: "This Weekend", val: "Saturday" },
    { label: "Next Monday", val: "Next Monday" }
  ];

  const handleNext = (e) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      if (!formData.name || !formData.phone) return;
      const code = generateBookingId("IF-COACH");
      setBookingId(code);
      setStep(3); // Confirmation
    }
  };

  const handleCalendar = () => {
    downloadCalendarInvite({
      title: `1-on-1 PT Session with ${selectedTrainer.name}`,
      description: `IRONFORGE Athletics 1-on-1 Coaching Consultation. Goal: ${goal}. Ref: ${bookingId}`,
      location: gymInfo.location.fullAddress,
      dateStr: dateOption,
      timeStr: timeSlot
    });
  };

  const handleWhatsApp = () => {
    const msg = `Hi Coach ${selectedTrainer.name.split(' ')[0]}, I just booked a 1-on-1 session for ${dateOption} at ${timeSlot}. My goal is ${goal}. Ref: ${bookingId}`;
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

        {step < 3 && (
          <div className="flex items-center gap-2 mb-4">
            <span className={`text-[10px] font-mono px-2 py-0.5 rounded ${step === 1 ? 'bg-lime text-iron-950 font-bold' : 'bg-iron-800 text-iron-400'}`}>
              Step 1: Coach & Slot
            </span>
            <span className="text-iron-600">→</span>
            <span className={`text-[10px] font-mono px-2 py-0.5 rounded ${step === 2 ? 'bg-lime text-iron-950 font-bold' : 'bg-iron-800 text-iron-400'}`}>
              Step 2: Details
            </span>
          </div>
        )}

        {step === 1 && (
          <form onSubmit={handleNext} className="space-y-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-lime">1-on-1 Coaching</span>
              <h3 className="text-2xl font-display font-black text-white uppercase mt-0.5">
                Book Trainer Session
              </h3>
            </div>

            {/* Choose Trainer */}
            <div>
              <label className="block text-xs font-mono uppercase text-iron-400 mb-1.5">Select Coach</label>
              <div className="grid grid-cols-3 gap-2">
                {allTrainers.map((t) => (
                  <button
                    type="button"
                    key={t.id}
                    onClick={() => {
                      setSelectedTrainer(t);
                      setTimeSlot(t.availableSlots[0]);
                    }}
                    className={`p-2 rounded-xl border text-center transition-all ${
                      selectedTrainer.id === t.id
                        ? 'bg-lime/10 border-lime text-white shadow-sm'
                        : 'bg-iron-850 border-iron-750 text-iron-400 hover:border-iron-600'
                    }`}
                  >
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-10 h-10 rounded-full mx-auto object-cover mb-1 border border-iron-700"
                    />
                    <span className="text-[11px] font-bold block truncate font-display uppercase">{t.name.split(' ')[0]}</span>
                    <span className="text-[9px] text-lime font-mono block">★ {t.rating}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Choose Goal */}
            <div>
              <label className="block text-xs font-mono uppercase text-iron-400 mb-1.5">Primary Focus / Goal</label>
              <div className="flex flex-wrap gap-1.5">
                {goals.map((g) => (
                  <button
                    type="button"
                    key={g}
                    onClick={() => setGoal(g)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors border ${
                      goal === g
                        ? 'bg-lime text-iron-950 font-bold border-lime'
                        : 'bg-iron-850 text-iron-300 border-iron-750 hover:text-white'
                    }`}
                  >
                    {g}
                  </button>
                ))}
              </div>
            </div>

            {/* Date & Time */}
            <div className="grid grid-cols-2 gap-3 pt-1">
              <div>
                <label className="block text-xs font-mono uppercase text-iron-400 mb-1">Preferred Day</label>
                <select
                  value={dateOption}
                  onChange={(e) => setDateOption(e.target.value)}
                  className="w-full bg-iron-950 border border-iron-750 focus:border-lime rounded-lg px-3 py-2 text-xs text-white focus:outline-none"
                >
                  {dates.map(d => <option key={d.val} value={d.val}>{d.label}</option>)}
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-iron-400 mb-1">Available Slot</label>
                <select
                  value={timeSlot}
                  onChange={(e) => setTimeSlot(e.target.value)}
                  className="w-full bg-iron-950 border border-iron-750 focus:border-lime rounded-lg px-3 py-2 text-xs text-white focus:outline-none"
                >
                  {selectedTrainer.availableSlots.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-lime text-iron-950 font-display font-black text-sm tracking-wider uppercase rounded-xl hover:bg-white transition-all shadow-[0_0_20px_rgba(204,255,0,0.25)] flex items-center justify-center gap-2 mt-4"
            >
              <span>Continue to Details</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}

        {step === 2 && (
          <form onSubmit={handleNext} className="space-y-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-lime">Step 2 of 2</span>
              <h3 className="text-2xl font-display font-black text-white uppercase mt-0.5">
                Your Contact Info
              </h3>
              <p className="text-xs text-iron-400 mt-1">
                Booking 1-on-1 session with <strong>{selectedTrainer.name}</strong> on {dateOption} at {timeSlot}.
              </p>
            </div>

            <div>
              <label className="block text-xs font-mono uppercase text-iron-400 mb-1">Full Name</label>
              <input
                type="text"
                required
                placeholder="e.g. Rahul Sundaram"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-iron-950 border border-iron-750 focus:border-lime rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none"
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
                className="w-full bg-iron-950 border border-iron-750 focus:border-lime rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-mono uppercase text-iron-400 mb-1">Email Address (Optional)</label>
              <input
                type="email"
                placeholder="you@domain.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-iron-950 border border-iron-750 focus:border-lime rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none"
              />
            </div>

            <div className="flex gap-2 pt-2">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="py-3 px-4 bg-iron-800 text-iron-300 rounded-xl text-xs font-mono uppercase"
              >
                Back
              </button>
              <button
                type="submit"
                className="flex-1 py-3.5 bg-lime text-iron-950 font-display font-black text-sm tracking-wider uppercase rounded-xl hover:bg-white transition-all shadow-[0_0_20px_rgba(204,255,0,0.25)]"
              >
                Confirm Session Request
              </button>
            </div>
          </form>
        )}

        {step === 3 && (
          <div className="text-center py-4 space-y-5 animate-fadeIn">
            <div className="w-16 h-16 rounded-full bg-lime/10 border-2 border-lime flex items-center justify-center mx-auto text-lime">
              <CheckCircle className="w-8 h-8" />
            </div>

            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-lime">Booking Registered</span>
              <h3 className="text-3xl font-display font-black text-white uppercase mt-1">
                SESSION REQUEST CONFIRMED! ⚡
              </h3>
              <p className="text-xs sm:text-sm text-iron-300 mt-2">
                Coach <strong>{selectedTrainer.name}</strong> will review your goal ({goal}) and welcome you at our Anna Nagar facility.
              </p>
            </div>

            <div className="bg-iron-850 p-4 rounded-xl border border-iron-750 text-left space-y-2">
              <div className="flex justify-between items-center pb-2 border-b border-iron-800">
                <span className="text-xs font-mono text-iron-400 uppercase">Booking Reference:</span>
                <span className="text-sm font-mono font-bold text-lime">{bookingId}</span>
              </div>
              <div className="flex justify-between items-center text-xs text-iron-300">
                <span>Coach:</span>
                <span className="font-semibold text-white">{selectedTrainer.name}</span>
              </div>
              <div className="flex justify-between items-center text-xs text-iron-300">
                <span>Timing:</span>
                <span>{dateOption} at {timeSlot}</span>
              </div>
              <div className="flex justify-between items-center text-xs text-iron-300">
                <span>Location:</span>
                <span>PT Sanctuary · Anna Nagar</span>
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
                <span>WhatsApp Coach</span>
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
