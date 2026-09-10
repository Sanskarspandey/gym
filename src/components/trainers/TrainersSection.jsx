import React, { useState } from 'react';
import { trainers } from '../../data/trainers';
import { Star, Award, CheckCircle, ArrowRight, UserCheck } from 'lucide-react';
import TrainerBookingModal from './TrainerBookingModal';

export default function TrainersSection() {
  const [selectedTrainer, setSelectedTrainer] = useState(null);

  return (
    <section id="trainers" className="py-20 sm:py-28 bg-iron-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-lime bg-lime/10 px-3 py-1 rounded border border-lime/20">
            <Award className="w-3.5 h-3.5" /> Elite Coaching Staff
          </div>
          <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight">
            MEET YOUR <span className="text-lime">COACHES.</span>
          </h2>
          <p className="text-base sm:text-lg text-iron-300 leading-relaxed">
            No junior gym floor interns. Learn from NSCA, ACE, and CrossFit credentialed head coaches with over 20+ combined years of strength transformation experience.
          </p>
        </div>

        {/* Trainers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trainers.map((trainer) => (
            <div
              key={trainer.id}
              className="group bg-iron-900 border border-iron-800 hover:border-lime/50 rounded-2xl overflow-hidden transition-all duration-300 flex flex-col justify-between hover:shadow-[0_0_25px_rgba(204,255,0,0.12)]"
            >
              {/* Profile Image with Overlay */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 brightness-85 group-hover:brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-iron-900 via-iron-900/40 to-transparent" />
                
                {/* Rating Badge */}
                <div className="absolute top-4 right-4 bg-iron-950/85 backdrop-blur-md px-2.5 py-1 rounded-lg border border-iron-750 flex items-center gap-1.5 text-xs font-mono">
                  <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                  <span className="font-bold text-white">{trainer.rating}</span>
                  <span className="text-iron-500">({trainer.reviewsCount})</span>
                </div>

                {/* Experience Badge */}
                <div className="absolute bottom-4 left-4 bg-iron-950/80 backdrop-blur-md px-3 py-1 rounded-md border border-iron-750 text-[11px] font-mono text-lime uppercase">
                  {trainer.experience}
                </div>
              </div>

              {/* Bio & Details */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-lime">
                    {trainer.role}
                  </div>
                  <h3 className="font-display font-black text-2xl sm:text-3xl text-white uppercase tracking-wide mt-1">
                    {trainer.name}
                  </h3>
                  
                  {/* Specialty Quote */}
                  <blockquote className="text-xs italic text-iron-400 mt-2 pl-3 border-l-2 border-lime/40">
                    "{trainer.quote}"
                  </blockquote>

                  <p className="text-xs sm:text-sm text-iron-300 mt-3 leading-relaxed">
                    {trainer.bio}
                  </p>

                  {/* Certifications Checklist */}
                  <div className="pt-4 space-y-1.5">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-iron-400 block">Credentials:</span>
                    {trainer.certifications.map((cert, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-iron-300">
                        <CheckCircle className="w-3.5 h-3.5 text-lime shrink-0 mt-0.5" />
                        <span>{cert}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-4 border-t border-iron-800">
                  <button
                    onClick={() => setSelectedTrainer(trainer)}
                    className="w-full py-3 bg-iron-850 hover:bg-lime text-white hover:text-iron-950 border border-iron-750 hover:border-lime rounded-xl font-display font-black text-xs uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 shadow-sm"
                  >
                    <UserCheck className="w-4 h-4" />
                    <span>BOOK A SESSION WITH {trainer.name.split(' ')[0]}</span>
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Trainer Booking Modal */}
      {selectedTrainer && (
        <TrainerBookingModal
          trainer={selectedTrainer}
          allTrainers={trainers}
          onClose={() => setSelectedTrainer(null)}
        />
      )}
    </section>
  );
}
