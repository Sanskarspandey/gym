import React, { useState } from 'react';
import { daysOfWeek, weeklySchedule, classCategories } from '../../data/schedule';
import { Clock, User, AlertCircle, CheckCircle, Calendar, Sparkles } from 'lucide-react';
import ClassBookingModal from './ClassBookingModal';

export default function ClassSchedule() {
  const [selectedDay, setSelectedDay] = useState("mon");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [bookingClass, setBookingClass] = useState(null);

  const currentDayClasses = weeklySchedule[selectedDay] || [];

  const filteredClasses = selectedCategory === "All"
    ? currentDayClasses
    : currentDayClasses.filter(c => c.category.toLowerCase().includes(selectedCategory.toLowerCase()) || selectedCategory.toLowerCase().includes(c.category.toLowerCase()));

  const activeDayObj = daysOfWeek.find(d => d.id === selectedDay) || daysOfWeek[0];

  return (
    <section id="schedule" className="py-20 sm:py-28 bg-iron-900/40 border-t border-iron-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-lime bg-lime/10 px-3 py-1 rounded border border-lime/20">
            <Calendar className="w-3.5 h-3.5" /> Interactive Timetable
          </div>
          <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight">
            WEEKLY <span className="text-lime">CLASS SCHEDULE.</span>
          </h2>
          <p className="text-base sm:text-lg text-iron-300 leading-relaxed">
            35+ coach-led small group classes weekly. Capped at 14 members per session to guarantee form precision and intense accountability.
          </p>
        </div>

        {/* Interactive Days Tabs (MON - SUN) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 hide-scrollbar">
          {daysOfWeek.map((day) => (
            <button
              key={day.id}
              onClick={() => setSelectedDay(day.id)}
              className={`flex-1 min-w-[75px] sm:min-w-[90px] py-3.5 px-3 rounded-xl font-display uppercase tracking-wider text-sm transition-all duration-200 border text-center ${
                selectedDay === day.id
                  ? 'bg-lime text-iron-950 font-black border-lime shadow-[0_0_20px_rgba(204,255,0,0.3)] scale-105'
                  : 'bg-iron-850 text-iron-300 border-iron-750 hover:border-iron-600 hover:text-white'
              }`}
            >
              <span className="block text-base font-bold">{day.label}</span>
              <span className={`text-[10px] font-mono block ${selectedDay === day.id ? 'text-iron-900 font-semibold' : 'text-iron-500'}`}>
                {weeklySchedule[day.id]?.length || 0} slots
              </span>
            </button>
          ))}
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 my-6">
          <span className="text-xs font-mono text-iron-500 uppercase mr-1">Filter:</span>
          {classCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1 rounded-md text-xs font-mono transition-colors border ${
                selectedCategory === cat
                  ? 'bg-iron-800 text-lime border-lime font-medium'
                  : 'bg-iron-900 text-iron-400 border-iron-800 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Schedule List */}
        <div className="space-y-3">
          {filteredClasses.length === 0 ? (
            <div className="text-center py-16 bg-iron-900/50 rounded-2xl border border-iron-800 text-iron-400">
              No classes found for this category on {activeDayObj.full}.
            </div>
          ) : (
            filteredClasses.map((cls) => {
              const isLowSpots = cls.spotsLeft <= 3;
              return (
                <div
                  key={cls.id}
                  className="group bg-iron-900/90 border border-iron-800 hover:border-lime/40 rounded-xl p-4 sm:p-5 transition-all duration-200 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-sm hover:shadow-md"
                >
                  {/* Time & Name */}
                  <div className="flex items-start sm:items-center gap-4">
                    <div className="shrink-0 bg-iron-850 px-3.5 py-2.5 rounded-lg border border-iron-750 text-center min-w-[90px]">
                      <span className="font-display font-black text-lg text-white block">
                        {cls.time}
                      </span>
                      <span className="text-[10px] font-mono text-lime uppercase block">
                        {cls.duration}
                      </span>
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-lime bg-lime/10 px-2 py-0.5 rounded border border-lime/20">
                          {cls.category}
                        </span>
                        <span className="text-[10px] font-mono text-iron-400">
                          Intensity: {cls.intensity}
                        </span>
                      </div>
                      <h4 className="font-display font-black text-xl sm:text-2xl text-white uppercase tracking-wide group-hover:text-lime transition-colors mt-0.5">
                        {cls.name}
                      </h4>
                      <p className="text-xs text-iron-400 max-w-xl line-clamp-1 mt-0.5">
                        {cls.desc}
                      </p>
                    </div>
                  </div>

                  {/* Coach & Availability & Action */}
                  <div className="flex items-center justify-between md:justify-end gap-5 pt-3 md:pt-0 border-t md:border-t-0 border-iron-800">
                    <div className="text-left md:text-right">
                      <div className="flex items-center md:justify-end gap-1.5 text-xs text-iron-200 font-medium">
                        <User className="w-3.5 h-3.5 text-lime" />
                        <span>{cls.coach}</span>
                      </div>
                      
                      <div className="flex items-center md:justify-end gap-1 text-[11px] font-mono mt-0.5">
                        {isLowSpots ? (
                          <span className="text-red-400 font-bold flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" /> Only {cls.spotsLeft} spots left!
                          </span>
                        ) : (
                          <span className="text-iron-400">
                            {cls.spotsLeft} spots remaining
                          </span>
                        )}
                      </div>
                    </div>

                    <button
                      onClick={() => setBookingClass(cls)}
                      className="px-5 py-2.5 bg-lime hover:bg-white text-iron-950 font-display font-bold text-xs uppercase tracking-wider rounded-lg transition-all shadow-sm hover:shadow-[0_0_15px_rgba(255,255,255,0.4)]"
                    >
                      Book Class
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Bottom Schedule Notice */}
        <div className="mt-8 text-center text-xs text-iron-400 font-mono">
          ⚡ Free trial attendees may book any 1 class complimentary. Members have unlimited booking privileges.
        </div>

      </div>

      {/* Booking Modal */}
      {bookingClass && (
        <ClassBookingModal
          classItem={bookingClass}
          dayLabel={activeDayObj.full}
          onClose={() => setBookingClass(null)}
        />
      )}
    </section>
  );
}
