import React, { useState } from 'react';
import { pricingPlans } from '../../data/pricing';
import { Check, X, Flame, Sparkles, ArrowRight, ShieldCheck, HelpCircle, MessageSquare } from 'lucide-react';
import { formatCurrency } from '../../utils/formatters';
import { openWhatsApp } from '../../utils/whatsapp';
import { gymInfo } from '../../data/gymInfo';
import PlanComparisonModal from './PlanComparisonModal';
import CheckoutModal from './CheckoutModal';

export default function PricingSection({ onNavigateSchedule }) {
  const [billingCycle, setBillingCycle] = useState("monthly"); // monthly | quarterly | annual
  const [showComparison, setShowComparison] = useState(false);
  const [checkoutPlanId, setCheckoutPlanId] = useState(null);

  const getPrice = (plan) => {
    if (billingCycle === "quarterly") return Math.round(plan.priceQuarterly / 3);
    if (billingCycle === "annual") return Math.round(plan.priceAnnual / 12);
    return plan.priceMonthly;
  };

  const handleSelectFromComparison = (planId) => {
    setShowComparison(false);
    setCheckoutPlanId(planId);
  };

  const handleTalkToCoach = () => {
    openWhatsApp(
      gymInfo.contact.whatsappNumber,
      "Hi IRONFORGE, I'm trying to decide which membership tier (Starter, Performance, or Elite) fits my goals. Could a coach guide me?"
    );
  };

  return (
    <section id="memberships" className="py-20 sm:py-28 bg-iron-950 relative border-t border-iron-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-lime bg-lime/10 px-3 py-1 rounded border border-lime/20">
            Transparent Investment
          </div>
          <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight">
            CHOOSE YOUR <span className="text-lime">COMMITMENT.</span>
          </h2>
          <p className="text-base sm:text-lg text-iron-300 leading-relaxed">
            World-class facility standards, certified coaches, and an ego-free training environment. No hidden maintenance charges.
          </p>

          {/* Billing Frequency Toggle */}
          <div className="inline-flex p-1 rounded-xl bg-iron-900 border border-iron-800 mt-4">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-4 py-2 rounded-lg text-xs font-mono uppercase transition-all ${
                billingCycle === "monthly"
                  ? 'bg-lime text-iron-950 font-bold shadow-md'
                  : 'text-iron-400 hover:text-white'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle("quarterly")}
              className={`px-4 py-2 rounded-lg text-xs font-mono uppercase transition-all flex items-center gap-1.5 ${
                billingCycle === "quarterly"
                  ? 'bg-lime text-iron-950 font-bold shadow-md'
                  : 'text-iron-400 hover:text-white'
              }`}
            >
              <span>Quarterly</span>
              <span className="text-[10px] bg-iron-950 text-lime px-1.5 py-0.2 rounded font-bold">15% OFF</span>
            </button>
            <button
              onClick={() => setBillingCycle("annual")}
              className={`px-4 py-2 rounded-lg text-xs font-mono uppercase transition-all flex items-center gap-1.5 ${
                billingCycle === "annual"
                  ? 'bg-lime text-iron-950 font-bold shadow-md'
                  : 'text-iron-400 hover:text-white'
              }`}
            >
              <span>Annual</span>
              <span className="text-[10px] bg-iron-950 text-lime px-1.5 py-0.2 rounded font-bold">25% OFF</span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {pricingPlans.map((plan) => {
            const isPerformance = plan.id === "performance";
            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                  isPerformance
                    ? 'bg-iron-900 border-2 border-lime shadow-[0_0_35px_rgba(204,255,0,0.15)] lg:-translate-y-2'
                    : 'bg-iron-900/80 border border-iron-800 hover:border-iron-700'
                }`}
              >
                {/* Popular Pill */}
                {isPerformance && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-lime text-iron-950 text-[11px] font-mono font-black uppercase tracking-wider px-4 py-1 rounded-full shadow-lg flex items-center gap-1">
                    <Sparkles className="w-3 h-3" /> {plan.badge}
                  </div>
                )}

                <div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-display font-black text-2xl sm:text-3xl text-white uppercase tracking-wide">
                        {plan.name}
                      </h3>
                      <p className="text-xs text-iron-400 mt-1">
                        {plan.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Price Display */}
                  <div className="my-6 pb-6 border-b border-iron-800">
                    <div className="flex items-baseline gap-1">
                      <span className="text-sm font-mono text-iron-400">₹</span>
                      <span className="font-display font-black text-5xl sm:text-6xl text-white tracking-tight">
                        {getPrice(plan).toLocaleString()}
                      </span>
                      <span className="text-xs font-mono text-iron-400">
                        {plan.period}
                      </span>
                    </div>
                    <span className="text-[11px] font-mono text-iron-500 block mt-1">
                      {billingCycle === "monthly" ? "Billed monthly" : `Effective rate (${billingCycle})`}
                    </span>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 mb-8">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-iron-400 block">
                      Plan Deliverables:
                    </span>
                    {plan.features.map((feat, idx) => (
                      <div
                        key={idx}
                        className={`flex items-start gap-2.5 text-xs ${
                          feat.included ? 'text-iron-200' : 'text-iron-600'
                        }`}
                      >
                        {feat.included ? (
                          <Check className="w-4 h-4 text-lime shrink-0 mt-0.5" />
                        ) : (
                          <X className="w-4 h-4 text-iron-700 shrink-0 mt-0.5" />
                        )}
                        <span className={feat.included ? '' : 'line-through'}>{feat.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA */}
                <div>
                  <button
                    onClick={() => setCheckoutPlanId(plan.id)}
                    className={`w-full py-4 rounded-xl font-display font-black text-sm uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 ${
                      isPerformance
                        ? 'bg-lime text-iron-950 hover:bg-white shadow-[0_0_20px_rgba(204,255,0,0.3)]'
                        : 'bg-iron-850 hover:bg-lime hover:text-iron-950 text-white border border-iron-750'
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <span className="block text-center text-[10px] font-mono text-iron-500 mt-2">
                    Instant digital member pass issued
                  </span>
                </div>

              </div>
            );
          })}
        </div>

        {/* Talk To A Coach & Compare Plan Buttons */}
        <div className="mt-14 p-6 rounded-2xl bg-iron-900 border border-iron-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-lime/10 border border-lime/20 flex items-center justify-center text-lime shrink-0">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-display font-bold text-base sm:text-lg text-white uppercase">
                Not sure which plan is right for you?
              </h4>
              <p className="text-xs text-iron-400">
                A head coach will analyze your schedule and recommend the most cost-effective tier.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => setShowComparison(true)}
              className="px-4 py-2.5 bg-iron-850 hover:bg-iron-800 text-iron-300 rounded-lg text-xs font-mono uppercase tracking-wider transition-colors border border-iron-750 flex items-center gap-1.5"
            >
              <HelpCircle className="w-3.5 h-3.5 text-lime" />
              <span>Compare All Features</span>
            </button>

            <button
              onClick={handleTalkToCoach}
              className="px-5 py-2.5 bg-green-600 hover:bg-green-500 text-white rounded-lg text-xs font-mono uppercase tracking-wider font-bold transition-colors flex items-center gap-1.5 shadow-sm"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>TALK TO A COACH</span>
            </button>
          </div>
        </div>

      </div>

      {/* Comparison Modal */}
      {showComparison && (
        <PlanComparisonModal
          onClose={() => setShowComparison(false)}
          onSelectPlan={handleSelectFromComparison}
        />
      )}

      {/* Checkout Flow Modal */}
      {checkoutPlanId && (
        <CheckoutModal
          initialPlanId={checkoutPlanId}
          onClose={() => setCheckoutPlanId(null)}
          onNavigateSchedule={onNavigateSchedule}
        />
      )}
    </section>
  );
}
