# ⚡ IRONFORGE ATHLETICS — Premium Fitness Sales Demo

> **“BUILD YOUR STRONGER SELF.”**  
> Anna Nagar, Chennai · High-Converting Production Website & Digital Lead-Generation System.

Designed and built as a **live sales presentation demo** to pitch to local gyms, CrossFit boxes, personal training sanctuaries, and fitness studio owners across Chennai and India.

---

## 🎯 Strategic Purpose

When pitching this website to a gym owner, it functions not merely as an aesthetic showcase, but as an **automated 24/7 digital salesperson** that converts curious visitors into paying members.

### 🌟 The 8 Key "WOW" Sales Moments

1. **Multi-Step Free Trial Booking Engine**:
   - 5-step frictionless qualification flow (Interest → Day → Time Slot → Contact → Confirmation).
   - Generates realistic Booking Reference IDs (`IF-TRIAL-4821`).
   - One-click **Add to Calendar (.ics)** and direct **Chat on WhatsApp** buttons.
2. **Interactive Weekly Class Timetable**:
   - Dynamic 7-day schedule (MON–SUN) with category filters (Strength, HIIT, Functional, Mobility, Fat Loss).
   - Real-time coach avatars, intensity meters, and live spots remaining ("Only 2 spots left!").
   - Instant "Book Class" reservation popup.
3. **Interactive BMI & Calorie/Macro Estimator**:
   - Demonstrates inbound lead capture by calculating BMI, Basal Metabolic Rate (BMR), Total Daily Energy Expenditure (TDEE), and daily macros.
   - Dynamic CTA: *"Want our coaches to turn this into a custom 12-week roadmap? → Book Free Assessment"*.
4. **Trainer Profiles & 1-on-1 PT Scheduler**:
   - Detailed credentials for NSCA, ACE, and CrossFit coaches (Arjun Menon, Priya Sharma, Rahul Verma).
   - "Book a Session" opens an appointment scheduler generating a confirmed session voucher.
5. **Draggable Before/After Transformation Slider**:
   - Interactive touch/mouse comparison slider showcasing verified body recomposition metrics.
6. **Membership Pricing & 4-Step Checkout Simulation**:
   - Monthly, Quarterly (-15%), and Annual (-25%) billing toggles.
   - Comprehensive 18-row amenity comparison drawer.
   - 4-step checkout flow (UPI, GPay, Card, Cash at Gym) with celebratory confetti.
7. **Digital Membership Pass Generator**:
   - Generates a luxury digital membership card with Member ID (`IF-2026-XXXX`), validity, barcode, and one-click **Print/Download Pass** button.
8. **Mobile-First Sticky Conversion Bar**:
   - Fixed thumb-friendly conversion dock (`🔥 Free Trial | 💬 WhatsApp | 📍 Directions`) with 48px+ touch targets and safe-area padding.

---

## 🛠️ Tech Stack & Architecture

- **Framework**: React 18
- **Build Tool**: Vite 5
- **Styling**: Tailwind CSS 3.4 (Custom athletic charcoal & electric performance lime palette)
- **Icons**: Lucide React
- **Animations**: Framer Motion & CSS Keyframes
- **Effects**: Canvas Confetti
- **SEO & Schema**: Schema.org `SportsActivityLocation` / `ExerciseGym` JSON-LD structured data, OpenGraph, Twitter Cards

---

## 📂 Plug-and-Play Client Customization

All copy, branding, pricing, schedules, and WhatsApp contacts are completely decoupled from UI components into `src/data/`:

| Data File | What It Controls |
|-----------|------------------|
| `src/data/gymInfo.js` | Gym name, tagline, Anna Nagar address, phone, WhatsApp number, operating hours, stats |
| `src/data/pricing.js` | Membership tiers (Starter, Performance, Elite), rates, perks, comparison matrix |
| `src/data/schedule.js` | 7-day weekly class timetable, class times, coaches, spot limits |
| `src/data/trainers.js` | Coach bios, certifications, ratings, specialties, available booking slots |
| `src/data/programs.js` | 6 training pathways, curriculum, weekly frequency, target audience |
| `src/data/facilities.js` | Equipment specs, Olympic platforms, recovery lounge, lockers |
| `src/data/transformations.js` | Member case studies, before/after metrics |
| `src/data/reviews.js` | Google reviews feed, rating stars, reviewer locations |
| `src/data/gallery.js` | Curated high-res athletic facility imagery & categories |
| `src/data/faqs.js` | Frequently asked questions & policies |

To deploy for a paying gym client, simply edit the values in `src/data/`—the entire site updates instantly.

---

## 🚀 Running Locally

```bash
# Clone the repository
git clone https://github.com/Sanskarspandey/gym.git
cd gym

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

---

## 📍 Local Business Details

- **Business Name**: IRONFORGE ATHLETICS
- **Address**: 42 Anna Nagar Main Road, Anna Nagar, Chennai, Tamil Nadu 600040
- **Phone**: +91 98765 43210
- **Rating**: 4.9★ (340+ Verified Reviews)
