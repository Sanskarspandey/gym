import React, { useState } from 'react';
import { faqs } from '../../data/faqs';
import { Plus, Minus, HelpCircle, MessageSquare } from 'lucide-react';
import { openWhatsApp } from '../../utils/whatsapp';
import { gymInfo } from '../../data/gymInfo';

export default function FAQSection() {
  const [openId, setOpenId] = useState("faq-1");

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  const handleWhatsAppQuestion = () => {
    openWhatsApp(
      gymInfo.contact.whatsappNumber,
      "Hi IRONFORGE team, I have a quick question that wasn't on the FAQ page."
    );
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-iron-900/40 relative border-t border-iron-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-lime bg-lime/10 px-3 py-1 rounded border border-lime/20">
            <HelpCircle className="w-3.5 h-3.5" /> Clear Answers
          </div>
          <h2 className="font-display font-black text-4xl sm:text-5xl text-white uppercase tracking-tight">
            FREQUENTLY ASKED <span className="text-lime">QUESTIONS.</span>
          </h2>
          <p className="text-sm sm:text-base text-iron-300 leading-relaxed">
            Everything you need to know about joining IronForge Athletics in Anna Nagar, Chennai.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`bg-iron-900 border rounded-2xl transition-all duration-200 overflow-hidden ${
                  isOpen ? 'border-lime/40 shadow-lg' : 'border-iron-800 hover:border-iron-700'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full py-4 sm:py-5 px-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-display font-bold text-base sm:text-lg text-white uppercase tracking-wide">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                    isOpen ? 'bg-lime text-iron-950' : 'bg-iron-850 text-iron-400'
                  }`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-iron-300 leading-relaxed border-t border-iron-850/80 animate-fadeIn">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="mt-12 p-6 rounded-2xl bg-iron-850 border border-iron-750 text-center space-y-3">
          <h4 className="font-display font-bold text-lg text-white uppercase">
            Have a question not listed here?
          </h4>
          <p className="text-xs text-iron-400 max-w-md mx-auto">
            Chat directly with our reception desk on WhatsApp for immediate answers regarding corporate memberships, student pricing, or personal training slots.
          </p>
          <button
            onClick={handleWhatsAppQuestion}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-green-600 hover:bg-green-500 text-white rounded-lg text-xs font-mono uppercase tracking-wider transition-colors"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </button>
        </div>

      </div>
    </section>
  );
}
