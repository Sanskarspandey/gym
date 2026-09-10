import React, { useState, useEffect } from 'react';
import { X, CheckCircle, MessageSquare, ShieldCheck, Sparkles, Clock, Target } from 'lucide-react';
import { openWhatsApp } from '../../utils/whatsapp';
import { gymInfo } from '../../data/gymInfo';
import { generateBookingId } from '../../utils/formatters';

export default function FreeAssessmentModal({ initialData, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    goal: initialData?.goal ? (initialData.goal === 'fat-loss' ? 'Fat Loss' : 'Muscle Building') : 'General Fitness & Strength',
    preferredTime: 'Morning (6 AM - 10 AM)'
  });
  const [submitted, setSubmitted] = useState(false);
  const [refId, setRefId] = useState('');

  useEffect(() => {
    if (initialData?.goal) {
      let g = 'General Fitness & Strength';
      if (initialData.goal === 'fat-loss') g = 'Targeted Fat Loss';
      if (initialData.goal === 'muscle') g = 'Muscle Hypertrophy';
      if (initialData.goal === 'strength') g = 'Raw Barbell Strength';
      setFormData(prev => ({ ...prev, goal: g }));
    }
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    const code = generateBookingId("IF-ASSESS");
    setRefId(code);
    setSubmitted(true);
  };

  const handleWhatsApp = () => {
    let msg = `Hi IRONFORGE, I'd like to confirm my Free 15-Minute Fitness Assessment. Name: ${formData.name}, Goal: ${formData.goal}. Ref: ${refId}`;
    if (initialData?.bmi) {
      msg += ` (BMI: ${initialData.bmi}, Calorie Target: ${initialData.targetCalories} kcal).`;
    }
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

        {!submitted ? (
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-lime bg-lime/10 px-2.5 py-0.5 rounded border border-lime/20 mb-2">
              <Sparkles className="w-3.5 h-3.5" /> 1-on-1 Movement Screening
            </div>
            
            <h3 className="text-2xl sm:text-3xl font-display font-black text-white uppercase tracking-tight">
              NOT SURE WHERE TO START?
            </h3>
            
            <p className="text-xs sm:text-sm text-iron-300 mt-1 mb-5">
              “Get a free 15-minute fitness assessment with one of our coaches.” We analyze your joint mobility, baseline strength, and recommend a concrete action plan.
            </p>

            {initialData?.bmi && (
              <div className="mb-4 p-3 rounded-xl bg-iron-850 border border-iron-750 text-xs text-iron-300 flex items-center justify-between">
                <span>Calculated BMI: <strong className="text-lime">{initialData.bmi}</strong></span>
                <span>Target Energy: <strong className="text-white">{initialData.targetCalories} kcal</strong></span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="block text-xs font-mono uppercase text-iron-400 mb-1">Your Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Karthik Venkat"
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

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-mono uppercase text-iron-400 mb-1">Primary Goal</label>
                  <select
                    value={formData.goal}
                    onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                    className="w-full bg-iron-950 border border-iron-750 focus:border-lime rounded-lg px-3 py-2 text-xs text-white focus:outline-none"
                  >
                    <option value="Fat Loss">Fat Loss & Conditioning</option>
                    <option value="Muscle Building">Muscle Building</option>
                    <option value="Raw Barbell Strength">Raw Barbell Strength</option>
                    <option value="Functional Fitness">Functional Longevity</option>
                    <option value="Not Sure">Not Sure Yet</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-iron-400 mb-1">Preferred Time</label>
                  <select
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full bg-iron-950 border border-iron-750 focus:border-lime rounded-lg px-3 py-2 text-xs text-white focus:outline-none"
                  >
                    <option value="Morning (6 AM - 10 AM)">Morning (6 AM - 10 AM)</option>
                    <option value="Afternoon (11 AM - 4 PM)">Afternoon (11 AM - 4 PM)</option>
                    <option value="Evening (5 PM - 8:30 PM)">Evening (5 PM - 8:30 PM)</option>
                  </select>
                </div>
              </div>

              <div className="text-[11px] text-iron-400 flex items-center gap-1.5 pt-1">
                <ShieldCheck className="w-4 h-4 text-lime shrink-0" />
                <span>Zero sales pressure. 100% focused on evaluating your movement mechanics.</span>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-lime text-iron-950 font-display font-black text-sm tracking-wider uppercase rounded-xl hover:bg-white transition-all shadow-[0_0_20px_rgba(204,255,0,0.25)] mt-3"
              >
                BOOK MY FREE ASSESSMENT
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-4 space-y-5 animate-fadeIn">
            <div className="w-16 h-16 rounded-full bg-lime/10 border-2 border-lime flex items-center justify-center mx-auto text-lime">
              <CheckCircle className="w-8 h-8" />
            </div>

            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-lime">Assessment Confirmed</span>
              <h3 className="text-3xl font-display font-black text-white uppercase mt-1">
                YOU'RE ON THE LIST! 🔥
              </h3>
              <p className="text-xs sm:text-sm text-iron-300 mt-2">
                Our Head Strength Coach will review your profile and contact you within 15 minutes to confirm your slot.
              </p>
            </div>

            <div className="bg-iron-850 p-4 rounded-xl border border-iron-750 text-left space-y-1">
              <div className="flex justify-between items-center text-xs">
                <span className="font-mono text-iron-400 uppercase">Assessment Ref:</span>
                <span className="font-mono font-bold text-lime">{refId}</span>
              </div>
              <div className="flex justify-between items-center text-xs text-iron-300">
                <span>Goal Focus:</span>
                <span>{formData.goal}</span>
              </div>
              <div className="flex justify-between items-center text-xs text-iron-300">
                <span>Timing:</span>
                <span>{formData.preferredTime}</span>
              </div>
            </div>

            <button
              onClick={handleWhatsApp}
              className="w-full py-3 bg-green-600 hover:bg-green-500 text-white text-xs font-mono uppercase tracking-wider rounded-xl transition-colors flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp us instead →</span>
            </button>

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
