import React, { useState, useEffect } from 'react';
import { X, CheckCircle, ShieldCheck, CreditCard, QrCode, ArrowRight, Download, MessageSquare, Calendar, Sparkles, Printer } from 'lucide-react';
import confetti from 'canvas-confetti';
import { pricingPlans } from '../../data/pricing';
import { formatCurrency, generateMemberId } from '../../utils/formatters';
import { openWhatsApp } from '../../utils/whatsapp';
import { gymInfo } from '../../data/gymInfo';

export default function CheckoutModal({ initialPlanId = "performance", onClose, onNavigateSchedule }) {
  const [selectedPlanId, setSelectedPlanId] = useState(initialPlanId);
  const [step, setStep] = useState(1);
  const [billingCycle, setBillingCycle] = useState("monthly"); // monthly | quarterly | annual
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    emergencyContact: ''
  });
  const [paymentMethod, setPaymentMethod] = useState("upi"); // upi | gpay | card | cash
  const [memberId, setMemberId] = useState('');
  const [membershipPassDate, setMembershipPassDate] = useState('');

  const currentPlan = pricingPlans.find(p => p.id === selectedPlanId) || pricingPlans[1];

  const getPrice = () => {
    if (billingCycle === "quarterly") return currentPlan.priceQuarterly;
    if (billingCycle === "annual") return currentPlan.priceAnnual;
    return currentPlan.priceMonthly;
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      if (!formData.name || !formData.phone) return;
      setStep(3);
    } else if (step === 3) {
      // Complete checkout demo
      const id = generateMemberId();
      setMemberId(id);
      const now = new Date();
      setMembershipPassDate(now.toLocaleDateString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' }));
      setStep(4);
      
      // Fire celebration confetti!
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#CCFF00', '#ffffff', '#22c55e']
      });
    }
  };

  const handlePrintPass = () => {
    window.print();
  };

  const handleWhatsAppDesk = () => {
    const msg = `Hi IRONFORGE Desk, I just registered for the ${currentPlan.name} membership. My Member ID is ${memberId}. Looking forward to my first workout!`;
    openWhatsApp(gymInfo.contact.whatsappNumber, msg);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="bg-iron-900 border border-lime/40 rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[95vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg bg-iron-800 text-iron-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Step Indicator Header (Steps 1-3) */}
        {step < 4 && (
          <div className="mb-6">
            <div className="flex items-center justify-between text-[11px] font-mono uppercase text-iron-400 mb-2">
              <span className={step === 1 ? 'text-lime font-bold' : ''}>1. Plan Selection</span>
              <span className={step === 2 ? 'text-lime font-bold' : ''}>2. Member Details</span>
              <span className={step === 3 ? 'text-lime font-bold' : ''}>3. Demo Payment</span>
            </div>
            <div className="w-full bg-iron-800 h-1.5 rounded-full overflow-hidden">
              <div
                className="bg-lime h-full transition-all duration-300"
                style={{ width: `${(step / 3) * 100}%` }}
              />
            </div>
          </div>
        )}

        {/* STEP 1: Plan Confirmation */}
        {step === 1 && (
          <div className="space-y-5">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-lime">Step 1 of 3</span>
              <h3 className="text-2xl font-display font-black text-white uppercase mt-0.5">
                Confirm Your Membership Plan
              </h3>
            </div>

            {/* Plan Picker Cards */}
            <div className="grid grid-cols-3 gap-2">
              {pricingPlans.map((p) => (
                <button
                  key={p.id}
                  onClick={() => setSelectedPlanId(p.id)}
                  className={`p-3 rounded-xl border text-center transition-all ${
                    selectedPlanId === p.id
                      ? 'bg-lime/10 border-lime text-white shadow-sm'
                      : 'bg-iron-850 border-iron-750 text-iron-400 hover:border-iron-600'
                  }`}
                >
                  <span className="font-display font-black text-sm uppercase block truncate">{p.name}</span>
                  <span className="text-xs font-mono font-bold text-lime mt-1 block">
                    {formatCurrency(p.priceMonthly)}
                  </span>
                  <span className="text-[9px] font-mono text-iron-400 block">/ month</span>
                </button>
              ))}
            </div>

            {/* Cycle Selection */}
            <div>
              <label className="block text-xs font-mono uppercase text-iron-400 mb-1.5">Billing Cycle</label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  onClick={() => setBillingCycle("monthly")}
                  className={`py-2 px-3 rounded-lg text-xs font-mono transition-colors border ${
                    billingCycle === "monthly" ? 'bg-lime text-iron-950 font-bold border-lime' : 'bg-iron-850 text-iron-300 border-iron-750'
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setBillingCycle("quarterly")}
                  className={`py-2 px-3 rounded-lg text-xs font-mono transition-colors border ${
                    billingCycle === "quarterly" ? 'bg-lime text-iron-950 font-bold border-lime' : 'bg-iron-850 text-iron-300 border-iron-750'
                  }`}
                >
                  Quarterly (-15%)
                </button>
                <button
                  onClick={() => setBillingCycle("annual")}
                  className={`py-2 px-3 rounded-lg text-xs font-mono transition-colors border ${
                    billingCycle === "annual" ? 'bg-lime text-iron-950 font-bold border-lime' : 'bg-iron-850 text-iron-300 border-iron-750'
                  }`}
                >
                  Annual (-25%)
                </button>
              </div>
            </div>

            {/* Price Breakdown */}
            <div className="bg-iron-850 p-4 rounded-xl border border-iron-750 space-y-2 text-xs">
              <div className="flex justify-between text-iron-300">
                <span>{currentPlan.name} Membership ({billingCycle}):</span>
                <span className="font-semibold text-white">{formatCurrency(getPrice())}</span>
              </div>
              <div className="flex justify-between text-iron-300">
                <span>Registration & Facility Access Card:</span>
                <span className="text-lime font-mono">WAIVED (₹0)</span>
              </div>
              <div className="flex justify-between text-white font-bold text-sm pt-2 border-t border-iron-800">
                <span>Total Demo Amount:</span>
                <span className="text-lime font-mono text-base">{formatCurrency(getPrice())}</span>
              </div>
            </div>

            <button
              onClick={handleNext}
              className="w-full py-3.5 bg-lime text-iron-950 font-display font-black text-sm tracking-wider uppercase rounded-xl hover:bg-white transition-all shadow-[0_0_20px_rgba(204,255,0,0.25)] flex items-center justify-center gap-2"
            >
              <span>Continue to Member Details</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* STEP 2: Personal Information */}
        {step === 2 && (
          <form onSubmit={handleNext} className="space-y-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-lime">Step 2 of 3</span>
              <h3 className="text-2xl font-display font-black text-white uppercase mt-0.5">
                Member Information
              </h3>
            </div>

            <div>
              <label className="block text-xs font-mono uppercase text-iron-400 mb-1">Full Legal Name</label>
              <input
                type="text"
                required
                placeholder="e.g. Ananya Ramakrishnan"
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
              <label className="block text-xs font-mono uppercase text-iron-400 mb-1">Email Address</label>
              <input
                type="email"
                placeholder="you@domain.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-iron-950 border border-iron-750 focus:border-lime rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-mono uppercase text-iron-400 mb-1">Emergency Contact (Optional)</label>
              <input
                type="text"
                placeholder="Name & Contact number"
                value={formData.emergencyContact}
                onChange={(e) => setFormData({ ...formData, emergencyContact: e.target.value })}
                className="w-full bg-iron-950 border border-iron-750 focus:border-lime rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none"
              />
            </div>

            <div className="flex gap-3 pt-2">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="py-3 px-4 bg-iron-800 text-iron-300 rounded-xl text-xs font-mono uppercase"
              >
                Back
              </button>
              <button
                type="submit"
                className="flex-1 py-3.5 bg-lime text-iron-950 font-display font-black text-sm tracking-wider uppercase rounded-xl hover:bg-white transition-all shadow-[0_0_20px_rgba(204,255,0,0.25)] flex items-center justify-center gap-2"
              >
                <span>Proceed to Payment</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}

        {/* STEP 3: Payment Method */}
        {step === 3 && (
          <div className="space-y-5">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-lime">Step 3 of 3</span>
              <h3 className="text-2xl font-display font-black text-white uppercase mt-0.5">
                Select Payment Method
              </h3>
              <p className="text-xs text-iron-400 mt-1">
                Demo simulation: No actual financial charge will occur.
              </p>
            </div>

            <div className="space-y-2.5">
              {[
                { id: "upi", title: "UPI (Google Pay, PhonePe, Paytm)", subtitle: "Instant zero-fee QR payment" },
                { id: "gpay", title: "Google Pay / Apple Pay Direct", subtitle: "One-tap seamless authorization" },
                { id: "card", title: "Credit / Debit Card", subtitle: "Visa, Mastercard, RuPay & Amex" },
                { id: "cash", title: "Pay at Gym Desk", subtitle: "Pay via Card or Cash on your first visit" }
              ].map((m) => (
                <button
                  key={m.id}
                  type="button"
                  onClick={() => setPaymentMethod(m.id)}
                  className={`w-full p-3.5 rounded-xl border text-left transition-all flex items-center justify-between ${
                    paymentMethod === m.id
                      ? 'bg-lime/10 border-lime text-white'
                      : 'bg-iron-850 border-iron-750 text-iron-300 hover:border-iron-600'
                  }`}
                >
                  <div>
                    <span className="font-semibold text-sm block">{m.title}</span>
                    <span className="text-xs text-iron-400 block">{m.subtitle}</span>
                  </div>
                  <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                    paymentMethod === m.id ? 'border-lime bg-lime' : 'border-iron-600'
                  }`}>
                    {paymentMethod === m.id && <div className="w-1.5 h-1.5 rounded-full bg-iron-950" />}
                  </div>
                </button>
              ))}
            </div>

            <div className="bg-iron-850 p-3.5 rounded-xl border border-iron-750 text-xs text-iron-300 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-lime shrink-0" />
              <span>30-Day Happiness Guarantee. Zero lock-in contracts.</span>
            </div>

            <div className="flex gap-3 pt-2">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="py-3 px-4 bg-iron-800 text-iron-300 rounded-xl text-xs font-mono uppercase"
              >
                Back
              </button>
              <button
                onClick={handleNext}
                className="flex-1 py-3.5 bg-lime text-iron-950 font-display font-black text-sm tracking-wider uppercase rounded-xl hover:bg-white transition-all shadow-[0_0_20px_rgba(204,255,0,0.25)] flex items-center justify-center gap-2"
              >
                <span>Authorize & Activate Membership</span>
                <Sparkles className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 4: DIGITAL MEMBERSHIP PASS CONFIRMATION (WOW #8) */}
        {step === 4 && (
          <div className="space-y-6 py-2 animate-fadeIn">
            <div className="text-center space-y-1">
              <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-lime bg-lime/10 px-3 py-1 rounded border border-lime/20">
                <Sparkles className="w-3.5 h-3.5" /> Welcome To The Family
              </div>
              <h3 className="text-3xl font-display font-black text-white uppercase">
                WELCOME TO IRONFORGE.
              </h3>
              <p className="text-xs text-iron-300">
                Your membership is officially active. Show this digital pass on your phone at reception.
              </p>
            </div>

            {/* DIGITAL PASS CARD */}
            <div className="bg-gradient-to-br from-iron-850 via-iron-900 to-iron-950 border-2 border-lime/50 rounded-2xl p-6 shadow-2xl relative overflow-hidden space-y-4">
              <div className="absolute top-0 right-0 w-32 h-32 bg-lime/10 rounded-full blur-2xl pointer-events-none" />

              {/* Pass Header */}
              <div className="flex items-center justify-between pb-3 border-b border-iron-800">
                <div>
                  <span className="font-display font-black text-xl text-white tracking-wider block">
                    IRON<span className="text-lime">FORGE</span>
                  </span>
                  <span className="text-[9px] font-mono tracking-widest text-iron-400 uppercase">
                    Anna Nagar · Official Member Pass
                  </span>
                </div>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-lime text-iron-950 uppercase">
                  ACTIVE
                </span>
              </div>

              {/* Pass Body */}
              <div className="grid grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="text-[10px] font-mono uppercase text-iron-400 block">Member Name</span>
                  <span className="font-bold text-white text-sm block truncate">{formData.name || "Member Athlete"}</span>
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-iron-400 block">Plan Tier</span>
                  <span className="font-bold text-lime text-sm block uppercase">{currentPlan.name}</span>
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-iron-400 block">Membership ID</span>
                  <span className="font-mono font-bold text-white block">{memberId}</span>
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-iron-400 block">Activated On</span>
                  <span className="font-mono text-iron-300 block">{membershipPassDate}</span>
                </div>
              </div>

              {/* Barcode / QR Simulation */}
              <div className="pt-3 border-t border-iron-800 flex items-center justify-between">
                <div className="font-mono text-[9px] text-iron-500 tracking-widest">
                  ||||| | |||| ||| |||||| ||||| | ||||
                </div>
                <div className="text-[10px] font-mono text-iron-400">
                  📍 42 Anna Nagar Main Rd
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <button
                onClick={handlePrintPass}
                className="py-2.5 px-4 bg-iron-800 hover:bg-iron-700 text-white text-xs font-mono uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center gap-2 border border-iron-700"
              >
                <Printer className="w-4 h-4 text-lime" />
                <span>Download / Print Pass</span>
              </button>
              <button
                onClick={handleWhatsAppDesk}
                className="py-2.5 px-4 bg-green-600 hover:bg-green-500 text-white text-xs font-mono uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Gym</span>
              </button>
            </div>

            <button
              onClick={() => {
                onClose();
                onNavigateSchedule();
              }}
              className="w-full py-3 bg-lime hover:bg-white text-iron-950 font-display font-black text-xs uppercase tracking-wider rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>View Training Schedule & Book First Class</span>
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
