export const pricingPlans = [
  {
    id: "starter",
    name: "STARTER",
    tagline: "Foundational access for independent lifters.",
    badge: null,
    isPopular: false,
    priceMonthly: 1999,
    priceQuarterly: 5099, // ~15% off (1699/mo)
    priceAnnual: 17999,   // ~25% off (1499/mo)
    currency: "₹",
    period: "/ month",
    ctaText: "GET STARTED",
    highlightColor: "zinc",
    features: [
      { text: "Full gym floor access (All hours)", included: true },
      { text: "Bi-annual basic fitness assessment", included: true },
      { text: "Day locker & luxury shower access", included: true },
      { text: "IronForge Community App access", included: true },
      { text: "Unlimited group fitness classes", included: false },
      { text: "Monthly InBody 570 body scans", included: false },
      { text: "1-on-1 Personal Training sessions", included: false },
      { text: "Custom nutrition & macro plan", included: false },
      { text: "Cold plunge & infrared sauna lounge", included: false }
    ],
    idealFor: "Self-motivated gym-goers looking for world-class equipment and immaculate facility standards."
  },
  {
    id: "performance",
    name: "PERFORMANCE",
    tagline: "Our most chosen plan for real athletic transformation.",
    badge: "MOST POPULAR",
    isPopular: true,
    priceMonthly: 3499,
    priceQuarterly: 8999, // ~15% off (2999/mo)
    priceAnnual: 31499,   // ~25% off (2625/mo)
    currency: "₹",
    period: "/ month",
    ctaText: "CLAIM PERFORMANCE",
    highlightColor: "lime",
    features: [
      { text: "Unlimited 24/7-style gym floor access", included: true },
      { text: "Unlimited weekly group classes (HIIT, Strength, Turf)", included: true },
      { text: "Monthly InBody 570 body composition scans", included: true },
      { text: "Monthly 1-on-1 coach technique consultation", included: true },
      { text: "Custom nutrition guide & macro calculator", included: true },
      { text: "Complimentary fresh towel service", included: true },
      { text: "1 Guest pass per month for a friend", included: true },
      { text: "8 1-on-1 Personal Training sessions", included: false },
      { text: "Infrared sauna & ice bath lounge pass (2/mo)", included: true }
    ],
    idealFor: "People who want structured accountability, group energy, and measurable body transformation."
  },
  {
    id: "elite",
    name: "ELITE",
    tagline: "Total bespoke concierge coaching with 1-on-1 PT.",
    badge: "VIP COACHING",
    isPopular: false,
    priceMonthly: 6999,
    priceQuarterly: 17899, // ~15% off (5966/mo)
    priceAnnual: 62999,    // ~25% off (5250/mo)
    currency: "₹",
    period: "/ month",
    ctaText: "GO ELITE",
    highlightColor: "white",
    features: [
      { text: "Everything included in Performance tier", included: true },
      { text: "8 Dedicated 1-on-1 PT sessions per month", included: true },
      { text: "100% Bespoke periodized training program", included: true },
      { text: "Personalized nutrition plan & weekly meal audits", included: true },
      { text: "Priority squat rack & platform reservation", included: true },
      { text: "Unlimited cold plunge & infrared sauna access", included: true },
      { text: "Private executive locker with laundry service", included: true },
      { text: "Direct 24/7 coach messaging on WhatsApp", included: true },
      { text: "4 Guest passes per month", included: true }
    ],
    idealFor: "Busy executives, serious competitors, or anyone who wants accelerated, white-glove results."
  }
];

export const planComparisonMatrix = [
  { feature: "Gym Floor Access", starter: "Unlimited Open Hours", performance: "Unlimited Open Hours", elite: "VIP Priority Access" },
  { feature: "Group Fitness Classes (35+/wk)", starter: "Paid Drop-in (₹400)", performance: "Unlimited Included", elite: "Unlimited + Reserved Spot" },
  { feature: "1-on-1 Personal Training", starter: "None", performance: "1 Consult / month", elite: "8 Sessions / month included" },
  { feature: "InBody 570 Composition Scans", starter: "Bi-annual", performance: "Monthly", elite: "Bi-weekly with coach audit" },
  { feature: "Nutrition & Macro Guidance", starter: "Basic PDF guide", performance: "Personalized Macro Targets", elite: "Full Custom Meal Blueprint" },
  { feature: "Cold Plunge & Sauna Recovery", starter: "Pay per session", performance: "2 Passes / month", elite: "Unlimited Access" },
  { feature: "Towel & Shower Toiletries", starter: "Bring your own", performance: "Included Daily", elite: "Fresh Luxury Linens & Laundry" },
  { feature: "Free Guest Passes", starter: "None", performance: "1 / month", elite: "4 / month" },
  { feature: "Community WhatsApp Group", starter: "Included", performance: "Included", elite: "Direct 1-on-1 Coach WhatsApp" },
  { feature: "Free Trial / Orientation", starter: "Included", performance: "Included", elite: "Included" },
  { feature: "Membership Freeze Policy", starter: "15 Days / year", performance: "30 Days / year", elite: "60 Days / year flexible" }
];
