import React, { useState } from 'react';
import { Sparkles, X, CheckCircle, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { gymInfo } from '../../data/gymInfo';

export default function AgencyPitchBar() {
  const [showPitchModal, setShowPitchModal] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <>
      {/* Top Banner */}
      <div className="bg-iron-900 border-b border-lime/30 text-xs py-2 px-3 sm:px-4 text-iron-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
            <span className="inline-flex items-center gap-1 bg-lime text-iron-950 font-bold px-2 py-0.5 rounded text-[10px] uppercase tracking-wider">
              <Zap className="w-3 h-3" /> Live Demo
            </span>
            <span className="hidden sm:inline font-medium text-iron-100">
              Agency-built sales demo for fitness businesses in Chennai & India.
            </span>
            <span className="sm:hidden font-medium text-iron-100">
              Agency fitness sales demo.
            </span>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => setShowPitchModal(true)}
              className="text-lime hover:text-white font-semibold flex items-center gap-1 transition-colors underline underline-offset-2"
            >
              Owner Specs <ArrowRight className="w-3 h-3" />
            </button>
            <button
              onClick={() => setDismissed(true)}
              className="text-iron-400 hover:text-white p-0.5 rounded transition-colors"
              aria-label="Dismiss banner"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Agency Specs Modal */}
      {showPitchModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="bg-iron-900 border border-lime/40 rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative">
            <button
              onClick={() => setShowPitchModal(false)}
              className="absolute top-4 right-4 text-iron-400 hover:text-white p-2 rounded-lg bg-iron-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-lime/10 border border-lime/30 flex items-center justify-center text-lime">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-lime">Sales Pitch Preview</span>
                <h3 className="text-xl font-bold font-display text-white">Why This Website Sells Memberships</h3>
              </div>
            </div>

            <p className="text-sm text-iron-300 mb-5 leading-relaxed">
              Most local gym websites are static online brochures that get zero leads. 
              This template was engineered as an automated 24/7 digital sales machine for fitness owners:
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-2.5 text-xs text-iron-200 bg-iron-850 p-2.5 rounded-lg border border-iron-750">
                <CheckCircle className="w-4 h-4 text-lime shrink-0 mt-0.5" />
                <span><strong>5 High-Converting Lead Engines:</strong> Multi-step free trial booking, live class reservation, trainer booking, calorie calculator lead capture & WhatsApp triggers.</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-iron-200 bg-iron-850 p-2.5 rounded-lg border border-iron-750">
                <CheckCircle className="w-4 h-4 text-lime shrink-0 mt-0.5" />
                <span><strong>100% Turnkey Customization:</strong> Replace gym name, colors, Anna Nagar address, coaches, pricing tiers, and WhatsApp number in under 48 hours.</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-iron-200 bg-iron-850 p-2.5 rounded-lg border border-iron-750">
                <CheckCircle className="w-4 h-4 text-lime shrink-0 mt-0.5" />
                <span><strong>Mobile First with Conversion Bar:</strong> 80%+ of Indian gym queries come from phones; our sticky bottom bar puts Free Trial & WhatsApp 1 tap away.</span>
              </div>
            </div>

            <div className="border-t border-iron-800 pt-4 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs text-iron-400">Target Value: ₹50,000 – ₹1,00,000+</span>
              <button
                onClick={() => setShowPitchModal(false)}
                className="w-full sm:w-auto px-5 py-2.5 bg-lime text-iron-950 font-bold rounded-lg hover:bg-white transition-all text-xs tracking-wide uppercase font-display"
              >
                Continue Demo Experience
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
