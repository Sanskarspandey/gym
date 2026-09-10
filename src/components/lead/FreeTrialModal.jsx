import React, { useState } from 'react';
import { X, CheckCircle, Calendar, Clock, Flame, MessageSquare, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { downloadCalendarInvite } from '../../utils/calendar';
import { openWhatsApp } from '../../utils/whatsapp';
import { gymInfo } from '../../data/gymInfo';
import { generateBookingId } from '../../utils/formatters';

export default function FreeTrialModal({ initialInterest = "", onClose }) {
  const [step, setStep] = useState(1);
  const [interest, setInterest] = useState(initialInterest || "Strength");
  const [selectedDay, setSelectedDay] = useState("Tomorrow");
  const [selectedTime, setSelectedTime] = useState("Morning (6:00 AM – 8:00 AM)");
  const [formData, setFormData] = useState({ name: '', phone: '', email: '' });
  const [bookingId, setBookingId] = useState('');

  const interests = [
    { id: "Strength", label: "Strength", desc: "Barbell loading, squat & deadlift form" },
    { id: "Fat Loss", label: "Fat Loss", desc: "High-density metabolic conditioning" },
    { id: "Muscle Building", label: "Muscle Building", desc: "Hypertrophy cycles & aesthetics" },
    { id: "Functional Fitness", label: "Functional Fitness", desc: "Turf sleds, agility & stamina" },
    { id: "Personal Training", label: "Personal Training", desc: "Dedicated 1-on-1 coach attention" },
    { id: "Not Sure", label: "Not Sure", desc: "Need a coach to evaluate my level" }
  ];

  const days = [
    { label: "Today", sub: "Evening slot" },
    { label: "Tomorrow", sub: "Most popular" },
    { label: "In 2 Days", sub: "Standard slot" },
    { label: "This Weekend", sub: "Saturday session" },
    { label: "Next Week", sub: "Flexible schedule" }
  ];

  const times = [
    { label: "Early Morning (6:00 AM – 8:00 AM)", period: "Peak Energy" },
    { label: "Mid-Morning (8:30 AM – 11:00 AM)", period: "Calm & Focused" },
    { label: "Afternoon (12:00 PM – 4:00 PM)", period: "Maximum Rack Access" },
    { label: "Evening (5:30 PM – 7:30 PM)", period: "High Voltage Team Vibe" },
    { label: "Night (8:00 PM – 9:30 PM)", period: "Post-Work Unwind" }
  ];

  const handleNext = (e) => {
    if (e) e.preventDefault();
    if (step < 4) {
      setStep(step + 1);
    } else if (step === 4) {
      if (!formData.name || !formData.phone) return;
      const code = generateBookingId("IF-TRIAL");
      setBookingId(code);
      setStep(5);

      // Celebrate with confetti
      confetti({
        particleCount: 75,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#CCFF00', '#ffffff', '#22c55e']
      });
    }
  };

  const handleCalendar = () => {
    downloadCalendarInvite({
      title: `Free Trial Session at IRONFORGE Athletics`,
      description: `Complimentary 1-Day Trial Pass. Program Interest: ${interest}. Booking ID: ${bookingId}`,
      location: gymInfo.location.fullAddress,
      dateStr: selectedDay,
      timeStr: selectedTime
    });
  };

  const handleWhatsApp = () => {
    const msg = `Hi IRONFORGE, I just booked my free trial session for ${selectedDay} (${selectedTime}). My Booking ID is ${bookingId}.`;
    openWhatsApp(gymInfo.contact.whatsappNumber, msg);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="bg-iron-900 border border-lime/40 rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative max-h-[95vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg bg-iron-800 text-iron-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Progress Dots Header (Steps 1-4) */}
        {step < 5 && (
          <div className="mb-6">
            <div className="flex items-center justify-between text-[10px] font-mono uppercase text-iron-400 mb-2">
              <span className={step >= 1 ? 'text-lime font-bold' : ''}>1. Interest</span>
              <span className={step >= 2 ? 'text-lime font-bold' : ''}>2. Day</span>
              <span className={step >= 3 ? 'text-lime font-bold' : ''}>3. Time</span>
              <span className={step >= 4 ? 'text-lime font-bold' : ''}>4. You</span>
            </div>
            <div className="w-full bg-iron-800 h-1.5 rounded-full overflow-hidden">
              <div
                className="bg-lime h-full transition-all duration-300"
                style={{ width: `${(step / 4) * 100}%` }}
              />
            </div>
          </div>
        )}

        {/* STEP 1: Interest */}
        {step === 1 && (
          <div className="space-y-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-lime">Step 1 of 4</span>
              <h3 className="text-2xl font-display font-black text-white uppercase mt-0.5">
                What are you interested in?
              </h3>
              <p className="text-xs text-iron-400 mt-1">
                Select your focus so we can assign the most relevant coach for your trial.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {interests.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setInterest(item.id)}
                  className={`p-3.5 rounded-xl border text-left transition-all flex flex-col justify-between ${
                    interest === item.id
                      ? 'bg-lime/10 border-lime text-white shadow-sm'
                      : 'bg-iron-850 border-iron-750 text-iron-300 hover:border-iron-600'
                  }`}
                >
                  <div className="flex items-center justify-between w-full">
                    <span className="font-display font-bold text-sm uppercase">{item.label}</span>
                    {interest === item.id && <div className="w-2 h-2 rounded-full bg-lime" />}
                  </div>
                  <span className="text-[11px] text-iron-400 mt-1">{item.desc}</span>
                </button>
              ))}
            </div>

            <button
              onClick={() => handleNext()}
              className="w-full py-3.5 bg-lime text-iron-950 font-display font-black text-sm tracking-wider uppercase rounded-xl hover:bg-white transition-all shadow-[0_0_20px_rgba(204,255,0,0.25)] flex items-center justify-center gap-2 mt-4"
            >
              <span>Next: Choose Day</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* STEP 2: Preferred Day */}
        {step === 2 && (
          <div className="space-y-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-lime">Step 2 of 4</span>
              <h3 className="text-2xl font-display font-black text-white uppercase mt-0.5">
                Choose Preferred Day
              </h3>
              <p className="text-xs text-iron-400 mt-1">
                When would you like to experience the IronForge training floor?
              </p>
            </div>

            <div className="space-y-2">
              {days.map((d) => (
                <button
                  key={d.label}
                  onClick={() => setSelectedDay(d.label)}
                  className={`w-full p-3.5 rounded-xl border text-left transition-all flex items-center justify-between ${
                    selectedDay === d.label
                      ? 'bg-lime/10 border-lime text-white'
                      : 'bg-iron-850 border-iron-750 text-iron-300 hover:border-iron-600'
                  }`}
                >
                  <div>
                    <span className="font-display font-bold text-base uppercase block">{d.label}</span>
                    <span className="text-xs text-iron-400">{d.sub}</span>
                  </div>
                  {selectedDay === d.label && <CheckCircle className="w-5 h-5 text-lime" />}
                </button>
              ))}
            </div>

            <div className="flex gap-2 pt-2">
              <button
                onClick={() => setStep(1)}
                className="py-3 px-4 bg-iron-800 text-iron-300 rounded-xl text-xs font-mono uppercase"
              >
                Back
              </button>
              <button
                onClick={() => handleNext()}
                className="flex-1 py-3.5 bg-lime text-iron-950 font-display font-black text-sm tracking-wider uppercase rounded-xl hover:bg-white transition-all shadow-[0_0_20px_rgba(204,255,0,0.25)] flex items-center justify-center gap-2"
              >
                <span>Next: Choose Time</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: Time Slot */}
        {step === 3 && (
          <div className="space-y-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-lime">Step 3 of 4</span>
              <h3 className="text-2xl font-display font-black text-white uppercase mt-0.5">
                Choose Time Slot
              </h3>
              <p className="text-xs text-iron-400 mt-1">
                Anna Nagar facility is open from 5:30 AM to 10:30 PM.
              </p>
            </div>

            <div className="space-y-2">
              {times.map((t) => (
                <button
                  key={t.label}
                  onClick={() => setSelectedTime(t.label)}
                  className={`w-full p-3.5 rounded-xl border text-left transition-all flex items-center justify-between ${
                    selectedTime === t.label
                      ? 'bg-lime/10 border-lime text-white'
                      : 'bg-iron-850 border-iron-750 text-iron-300 hover:border-iron-600'
                  }`}
                >
                  <div>
                    <span className="font-semibold text-sm block">{t.label}</span>
                    <span className="text-[11px] font-mono text-lime uppercase">{t.period}</span>
                  </div>
                  {selectedTime === t.label && <CheckCircle className="w-5 h-5 text-lime" />}
                </button>
              ))}
            </div>

            <div className="flex gap-2 pt-2">
              <button
                onClick={() => setStep(2)}
                className="py-3 px-4 bg-iron-800 text-iron-300 rounded-xl text-xs font-mono uppercase"
              >
                Back
              </button>
              <button
                onClick={() => handleNext()}
                className="flex-1 py-3.5 bg-lime text-iron-950 font-display font-black text-sm tracking-wider uppercase rounded-xl hover:bg-white transition-all shadow-[0_0_20px_rgba(204,255,0,0.25)] flex items-center justify-center gap-2"
              >
                <span>Next: Enter Info</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 4: Contact Details */}
        {step === 4 && (
          <form onSubmit={handleNext} className="space-y-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-lime">Step 4 of 4</span>
              <h3 className="text-2xl font-display font-black text-white uppercase mt-0.5">
                Where should we send your pass?
              </h3>
              <p className="text-xs text-iron-400 mt-1">
                Trial for <strong>{interest}</strong> on <strong>{selectedDay}</strong> ({selectedTime.split('(')[0]}).
              </p>
            </div>

            <div>
              <label className="block text-xs font-mono uppercase text-iron-400 mb-1">Your Name</label>
              <input
                type="text"
                required
                placeholder="e.g. Siddharth Menon"
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
                onClick={() => setStep(3)}
                className="py-3 px-4 bg-iron-800 text-iron-300 rounded-xl text-xs font-mono uppercase"
              >
                Back
              </button>
              <button
                type="submit"
                className="flex-1 py-3.5 bg-lime text-iron-950 font-display font-black text-sm tracking-wider uppercase rounded-xl hover:bg-white transition-all shadow-[0_0_20px_rgba(204,255,0,0.25)] flex items-center justify-center gap-2"
              >
                <Flame className="w-4 h-4 fill-iron-950" />
                <span>CONFIRM FREE TRIAL PASS</span>
              </button>
            </div>
          </form>
        )}

        {/* STEP 5: CONFIRMATION (WOW #1) */}
        {step === 5 && (
          <div className="text-center py-4 space-y-5 animate-fadeIn">
            <div className="w-16 h-16 rounded-full bg-lime/10 border-2 border-lime flex items-center justify-center mx-auto text-lime">
              <CheckCircle className="w-8 h-8" />
            </div>

            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-lime">Booking Confirmed</span>
              <h3 className="text-4xl font-display font-black text-white uppercase mt-1">
                YOU'RE IN. 🔥
              </h3>
              <p className="text-sm text-iron-300 mt-2">
                “Your free trial request has been received.” We've reserved your spot on the lifting floor.
              </p>
            </div>

            {/* Booking Reference Box */}
            <div className="bg-iron-850 p-5 rounded-2xl border border-iron-750 text-left space-y-2 shadow-inner">
              <div className="flex justify-between items-center pb-2 border-b border-iron-800">
                <span className="text-xs font-mono text-iron-400 uppercase">Booking ID:</span>
                <span className="text-base font-mono font-black text-lime">{bookingId}</span>
              </div>
              <div className="flex justify-between items-center text-xs text-iron-300">
                <span>Athlete:</span>
                <span className="font-semibold text-white">{formData.name}</span>
              </div>
              <div className="flex justify-between items-center text-xs text-iron-300">
                <span>Focus:</span>
                <span className="text-lime">{interest}</span>
              </div>
              <div className="flex justify-between items-center text-xs text-iron-300">
                <span>Schedule:</span>
                <span>{selectedDay} · {selectedTime.split('(')[0]}</span>
              </div>
              <div className="flex justify-between items-center text-xs text-iron-300">
                <span>Facility:</span>
                <span>42 Anna Nagar Main Rd, Chennai</span>
              </div>
            </div>

            {/* Two Key Action Buttons (As explicitly requested) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <button
                onClick={handleCalendar}
                className="py-3 px-4 bg-iron-800 hover:bg-iron-700 text-white text-xs font-mono uppercase tracking-wider rounded-xl transition-colors flex items-center justify-center gap-2 border border-iron-700 shadow-sm"
              >
                <Calendar className="w-4 h-4 text-lime" />
                <span>Add to Calendar</span>
              </button>
              <button
                onClick={handleWhatsApp}
                className="py-3 px-4 bg-green-600 hover:bg-green-500 text-white text-xs font-mono uppercase tracking-wider rounded-xl transition-colors flex items-center justify-center gap-2 shadow-sm"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </button>
            </div>

            <button
              onClick={onClose}
              className="text-xs text-iron-400 hover:text-white uppercase font-mono tracking-wider pt-2 block mx-auto underline underline-offset-4"
            >
              Back to Website
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
