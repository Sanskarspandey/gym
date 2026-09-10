import React from 'react';
import { X, Check, Minus } from 'lucide-react';
import { planComparisonMatrix } from '../../data/pricing';

export default function PlanComparisonModal({ onClose, onSelectPlan }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="bg-iron-900 border border-lime/40 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative p-6 sm:p-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg bg-iron-800 text-iron-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6">
          <span className="text-xs font-mono uppercase tracking-widest text-lime">Side-by-Side Comparison</span>
          <h3 className="text-2xl sm:text-3xl font-display font-black text-white uppercase mt-1">
            Compare IronForge Memberships
          </h3>
          <p className="text-xs sm:text-sm text-iron-300 mt-1">
            Review detailed inclusions across Starter, Performance, and Elite tiers.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-iron-750">
                <th className="py-3 px-3 font-mono text-iron-400 uppercase w-1/4">Feature / Benefit</th>
                <th className="py-3 px-3 font-display font-bold text-base text-iron-200 uppercase text-center w-1/4">Starter</th>
                <th className="py-3 px-3 font-display font-bold text-base text-lime uppercase text-center w-1/4 bg-lime/5 rounded-t-lg">Performance</th>
                <th className="py-3 px-3 font-display font-bold text-base text-white uppercase text-center w-1/4">Elite</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-iron-800 font-sans">
              {planComparisonMatrix.map((row, idx) => (
                <tr key={idx} className="hover:bg-iron-850/50 transition-colors">
                  <td className="py-3 px-3 font-medium text-iron-300">{row.feature}</td>
                  <td className="py-3 px-3 text-iron-400 text-center">{row.starter}</td>
                  <td className="py-3 px-3 text-white font-semibold text-center bg-lime/5">{row.performance}</td>
                  <td className="py-3 px-3 text-iron-200 text-center">{row.elite}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Quick Selection Buttons */}
        <div className="mt-8 pt-4 border-t border-iron-800 grid grid-cols-1 sm:grid-cols-3 gap-3">
          <button
            onClick={() => onSelectPlan('starter')}
            className="py-2.5 px-4 bg-iron-850 hover:bg-iron-800 text-iron-200 border border-iron-750 rounded-lg text-xs font-display font-bold uppercase tracking-wider"
          >
            Select Starter · ₹1,999
          </button>
          <button
            onClick={() => onSelectPlan('performance')}
            className="py-2.5 px-4 bg-lime text-iron-950 font-display font-black rounded-lg text-xs uppercase tracking-wider hover:bg-white shadow-md"
          >
            Select Performance · ₹3,499
          </button>
          <button
            onClick={() => onSelectPlan('elite')}
            className="py-2.5 px-4 bg-iron-850 hover:bg-iron-800 text-white border border-iron-700 rounded-lg text-xs font-display font-bold uppercase tracking-wider"
          >
            Select Elite · ₹6,999
          </button>
        </div>

      </div>
    </div>
  );
}
