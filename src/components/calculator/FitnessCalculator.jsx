import React, { useState, useMemo } from 'react';
import { Calculator, Flame, ArrowRight, Zap, Target, Activity, CheckCircle } from 'lucide-react';

export default function FitnessCalculator({ onOpenAssessmentWithData }) {
  const [age, setAge] = useState(28);
  const [gender, setGender] = useState("male"); // male | female
  const [height, setHeight] = useState(175); // cm
  const [weight, setWeight] = useState(74); // kg
  const [activity, setActivity] = useState("moderate"); // sedentary | light | moderate | high | athlete
  const [goal, setGoal] = useState("fat-loss"); // fat-loss | maintain | muscle | strength

  const activityMultipliers = {
    sedentary: 1.2,
    light: 1.375,
    moderate: 1.55,
    high: 1.725,
    athlete: 1.9
  };

  const results = useMemo(() => {
    // Height in meters
    const hMeters = height / 100;
    const bmiVal = (weight / (hMeters * hMeters)).toFixed(1);
    
    let bmiCategory = "Healthy Weight";
    let bmiColor = "text-lime";
    if (bmiVal < 18.5) {
      bmiCategory = "Underweight";
      bmiColor = "text-yellow-400";
    } else if (bmiVal >= 25 && bmiVal < 30) {
      bmiCategory = "Overweight (Over-fat)";
      bmiColor = "text-orange-400";
    } else if (bmiVal >= 30) {
      bmiCategory = "High Body Fat / Obese";
      bmiColor = "text-red-400";
    }

    // BMR (Mifflin-St Jeor)
    let bmr = Math.round((10 * weight) + (6.25 * height) - (5 * age));
    if (gender === "male") {
      bmr += 5;
    } else {
      bmr -= 161;
    }

    // TDEE
    const tdee = Math.round(bmr * (activityMultipliers[activity] || 1.55));

    // Goal Caloric Target
    let targetCalories = tdee;
    let goalLabel = "Maintenance";
    let goalRec = "";
    if (goal === "fat-loss") {
      targetCalories = tdee - 450;
      goalLabel = "Fat Loss";
      goalRec = "Targeted deficit designed to strip ~0.5kg fat/week without muscle breakdown.";
    } else if (goal === "muscle") {
      targetCalories = tdee + 350;
      goalLabel = "Muscle Building";
      goalRec = "Hypertrophic surplus optimized for lean contractile tissue synthesis.";
    } else if (goal === "strength") {
      targetCalories = tdee + 200;
      goalLabel = "Barbell Strength";
      goalRec = "Performance fuel supporting heavy central nervous system barbell recovery.";
    } else {
      goalRec = "Maintenance calories to optimize metabolic homeostasis & athletic stamina.";
    }

    // Macros
    const proteinGrams = Math.round(weight * 2.0); // 2g per kg
    const fatCalories = targetCalories * 0.25;
    const fatGrams = Math.round(fatCalories / 9);
    const carbCalories = targetCalories - (proteinGrams * 4) - fatCalories;
    const carbGrams = Math.max(50, Math.round(carbCalories / 4));

    return {
      bmi: bmiVal,
      bmiCategory,
      bmiColor,
      bmr,
      tdee,
      goalLabel,
      targetCalories,
      goalRec,
      protein: proteinGrams,
      carbs: carbGrams,
      fats: fatGrams
    };
  }, [age, gender, height, weight, activity, goal]);

  const handleAssessmentTrigger = () => {
    onOpenAssessmentWithData({
      age,
      gender,
      height,
      weight,
      bmi: results.bmi,
      bmr: results.bmr,
      tdee: results.tdee,
      targetCalories: results.targetCalories,
      goal: results.goalLabel
    });
  };

  return (
    <section id="calculator" className="py-20 sm:py-28 bg-iron-950 relative border-t border-iron-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-lime bg-lime/10 px-3 py-1 rounded border border-lime/20">
            <Calculator className="w-3.5 h-3.5" /> High-Converting Lead Engine
          </div>
          <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight">
            BMI & CALORIE <span className="text-lime">ESTIMATOR.</span>
          </h2>
          <p className="text-base sm:text-lg text-iron-300 leading-relaxed">
            Calculate your basal metabolic rate, daily caloric expenditure, and optimal macronutrient split for Anna Nagar training.
          </p>
        </div>

        {/* Calculator Widget */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-iron-900 border border-iron-800 rounded-3xl p-6 sm:p-10 shadow-2xl">
          
          {/* Inputs Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Gender & Age */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono uppercase text-iron-400 mb-1.5">Gender</label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setGender("male")}
                    className={`py-2 px-3 rounded-lg text-xs font-mono uppercase transition-colors border ${
                      gender === "male" ? 'bg-lime text-iron-950 font-bold border-lime' : 'bg-iron-850 text-iron-300 border-iron-750'
                    }`}
                  >
                    Male
                  </button>
                  <button
                    type="button"
                    onClick={() => setGender("female")}
                    className={`py-2 px-3 rounded-lg text-xs font-mono uppercase transition-colors border ${
                      gender === "female" ? 'bg-lime text-iron-950 font-bold border-lime' : 'bg-iron-850 text-iron-300 border-iron-750'
                    }`}
                  >
                    Female
                  </button>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-mono uppercase text-iron-400 mb-1.5">
                  <span>Age</span>
                  <span className="text-white font-bold">{age} yrs</span>
                </div>
                <input
                  type="range"
                  min="16"
                  max="75"
                  value={age}
                  onChange={(e) => setAge(Number(e.target.value))}
                  className="w-full accent-lime bg-iron-800 rounded-lg cursor-pointer h-2"
                />
              </div>
            </div>

            {/* Height & Weight */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="flex justify-between text-xs font-mono uppercase text-iron-400 mb-1.5">
                  <span>Height</span>
                  <span className="text-white font-bold">{height} cm</span>
                </div>
                <input
                  type="range"
                  min="130"
                  max="215"
                  value={height}
                  onChange={(e) => setHeight(Number(e.target.value))}
                  className="w-full accent-lime bg-iron-800 rounded-lg cursor-pointer h-2"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs font-mono uppercase text-iron-400 mb-1.5">
                  <span>Weight</span>
                  <span className="text-white font-bold">{weight} kg</span>
                </div>
                <input
                  type="range"
                  min="40"
                  max="150"
                  value={weight}
                  onChange={(e) => setWeight(Number(e.target.value))}
                  className="w-full accent-lime bg-iron-800 rounded-lg cursor-pointer h-2"
                />
              </div>
            </div>

            {/* Activity Level */}
            <div>
              <label className="block text-xs font-mono uppercase text-iron-400 mb-1.5">Weekly Activity Level</label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {[
                  { id: "sedentary", label: "Desk Job (Little/No Exercise)" },
                  { id: "light", label: "Light (1-2 days/week)" },
                  { id: "moderate", label: "Moderate (3-5 days/week)" },
                  { id: "high", label: "Heavy (6-7 days/week)" },
                  { id: "athlete", label: "Competitive Athlete" }
                ].map((act) => (
                  <button
                    key={act.id}
                    type="button"
                    onClick={() => setActivity(act.id)}
                    className={`p-2.5 rounded-xl border text-left text-xs transition-all ${
                      activity === act.id
                        ? 'bg-lime/10 border-lime text-white'
                        : 'bg-iron-850 border-iron-750 text-iron-400 hover:border-iron-600'
                    }`}
                  >
                    <span className="block font-medium leading-tight">{act.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Primary Goal */}
            <div>
              <label className="block text-xs font-mono uppercase text-iron-400 mb-1.5">Primary Fitness Objective</label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { id: "fat-loss", label: "Fat Loss" },
                  { id: "muscle", label: "Lean Muscle" },
                  { id: "strength", label: "Barbell Strength" },
                  { id: "maintain", label: "Maintenance" }
                ].map((g) => (
                  <button
                    key={g.id}
                    type="button"
                    onClick={() => setGoal(g.id)}
                    className={`py-2 px-3 rounded-lg text-xs font-mono uppercase transition-colors border text-center ${
                      goal === g.id
                        ? 'bg-lime text-iron-950 font-bold border-lime'
                        : 'bg-iron-850 text-iron-300 border-iron-750 hover:text-white'
                    }`}
                  >
                    {g.label}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Results & High-Converting Qualified Lead Box (5 cols) */}
          <div className="lg:col-span-5 bg-iron-850 border border-iron-750 rounded-2xl p-6 sm:p-7 flex flex-col justify-between space-y-6">
            
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-iron-750">
                <span className="text-xs font-mono uppercase tracking-wider text-iron-400">Calculated Metrics</span>
                <span className="text-[10px] font-mono text-lime bg-lime/10 px-2 py-0.5 rounded border border-lime/20">Live Estimate</span>
              </div>

              {/* BMI Card */}
              <div className="bg-iron-900 p-4 rounded-xl border border-iron-800 flex items-center justify-between">
                <div>
                  <span className="text-xs font-mono text-iron-400 block uppercase">Body Mass Index (BMI)</span>
                  <span className={`text-sm font-semibold mt-0.5 block ${results.bmiColor}`}>
                    {results.bmiCategory}
                  </span>
                </div>
                <span className="text-3xl font-display font-black text-white">
                  {results.bmi}
                </span>
              </div>

              {/* Target Calories & BMR/TDEE stats */}
              <div className="bg-iron-900 p-4 rounded-xl border border-iron-800 space-y-2">
                <div className="flex justify-between items-baseline">
                  <span className="text-xs font-mono text-iron-400 uppercase">Target Daily Energy</span>
                  <div className="flex gap-2 text-[10px] font-mono text-iron-400">
                    <span>BMR: {results.bmr}</span>
                    <span>•</span>
                    <span>TDEE: {results.tdee}</span>
                  </div>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-display font-black text-lime">
                    {results.targetCalories.toLocaleString()}
                  </span>
                  <span className="text-xs font-mono text-iron-400">kcal / day</span>
                </div>
                <p className="text-[11px] text-iron-300 leading-normal">
                  {results.goalRec}
                </p>
              </div>

              {/* Macro Targets */}
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="bg-iron-900 p-2.5 rounded-lg border border-iron-800">
                  <span className="text-lg font-display font-bold text-white block">{results.protein}g</span>
                  <span className="text-[10px] font-mono text-iron-400 block uppercase">Protein</span>
                </div>
                <div className="bg-iron-900 p-2.5 rounded-lg border border-iron-800">
                  <span className="text-lg font-display font-bold text-white block">{results.carbs}g</span>
                  <span className="text-[10px] font-mono text-iron-400 block uppercase">Carbs</span>
                </div>
                <div className="bg-iron-900 p-2.5 rounded-lg border border-iron-800">
                  <span className="text-lg font-display font-bold text-white block">{results.fats}g</span>
                  <span className="text-[10px] font-mono text-iron-400 block uppercase">Fats</span>
                </div>
              </div>
            </div>

            {/* Qualified Lead Pitch Header & CTA */}
            <div className="pt-4 border-t border-iron-750 space-y-3">
              <div>
                <h4 className="font-display font-black text-lg text-white uppercase">
                  YOUR NUMBERS ARE JUST THE START.
                </h4>
                <p className="text-xs text-iron-300 mt-0.5">
                  “Let our coaches turn this into a personalized 12-week training roadmap.”
                </p>
              </div>

              <button
                onClick={handleAssessmentTrigger}
                className="w-full py-3.5 bg-lime hover:bg-white text-iron-950 font-display font-black text-sm uppercase tracking-wider rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(204,255,0,0.3)] flex items-center justify-center gap-2"
              >
                <Zap className="w-4 h-4 fill-iron-950" />
                <span>GET MY FREE FITNESS ASSESSMENT</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
