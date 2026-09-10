import React, { useState } from 'react';
import AgencyPitchBar from './components/demo/AgencyPitchBar';
import Navbar from './components/layout/Navbar';
import Hero from './components/hero/Hero';
import SmartConversionBar from './components/hero/SmartConversionBar';
import StoryPillars from './components/story/StoryPillars';
import FacilitiesGrid from './components/facilities/FacilitiesGrid';
import ProgramsSection from './components/programs/ProgramsSection';
import ClassSchedule from './components/schedule/ClassSchedule';
import TrainersSection from './components/trainers/TrainersSection';
import TransformationsSection from './components/transformations/TransformationsSection';
import PricingSection from './components/pricing/PricingSection';
import FitnessCalculator from './components/calculator/FitnessCalculator';
import SpecialOffer from './components/lead/SpecialOffer';
import GoogleReviews from './components/reviews/GoogleReviews';
import GallerySection from './components/gallery/GallerySection';
import CommunitySection from './components/community/CommunitySection';
import FAQSection from './components/faq/FAQSection';
import LocationSection from './components/location/LocationSection';
import Footer from './components/layout/Footer';
import MobileBottomBar from './components/layout/MobileBottomBar';
import WhatsAppButton from './components/layout/WhatsAppButton';
import FreeTrialModal from './components/lead/FreeTrialModal';
import FreeAssessmentModal from './components/lead/FreeAssessmentModal';

export default function App() {
  const [trialModalOpen, setTrialModalOpen] = useState(false);
  const [trialInterest, setTrialInterest] = useState("");
  const [assessmentModalOpen, setAssessmentModalOpen] = useState(false);
  const [calculatorData, setCalculatorData] = useState(null);

  const handleOpenTrial = (interest = "") => {
    setTrialInterest(interest);
    setTrialModalOpen(true);
  };

  const handleOpenAssessment = (data = null) => {
    setCalculatorData(data);
    setAssessmentModalOpen(true);
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-iron-950 text-iron-100 flex flex-col relative selection:bg-lime selection:text-iron-950">
      
      {/* 0. Live Sales Demo Bar for Pitching to Gym Owners */}
      <AgencyPitchBar />

      {/* 1. Sticky Navigation */}
      <Navbar
        onOpenTrial={() => handleOpenTrial()}
        onNavigate={scrollToSection}
      />

      {/* 2. Cinematic Hero Section */}
      <Hero
        onOpenTrial={() => handleOpenTrial()}
        onNavigateMemberships={() => scrollToSection('memberships')}
      />

      {/* 3. Smart Conversion Bar */}
      <SmartConversionBar
        onOpenTrial={() => handleOpenTrial()}
        onNavigatePT={() => scrollToSection('trainers')}
        onNavigateClasses={() => scrollToSection('schedule')}
        onNavigateMemberships={() => scrollToSection('memberships')}
      />

      {/* 4. Not Just a Gym. A Standard. */}
      <StoryPillars
        onOpenTrial={() => handleOpenTrial()}
      />

      {/* 5. Built for Serious Training (Facilities) */}
      <FacilitiesGrid
        onOpenTrial={() => handleOpenTrial()}
      />

      {/* 6. Train Your Way (Programs) */}
      <ProgramsSection
        onOpenTrial={(progTitle) => handleOpenTrial(progTitle)}
      />

      {/* 7. Interactive Weekly Class Schedule (WOW #7) */}
      <ClassSchedule />

      {/* 8. Meet Your Coaches & Trainer Booking (WOW #4) */}
      <TrainersSection />

      {/* 9. Real People. Real Progress. Transformation Slider (WOW #6) */}
      <TransformationsSection
        onOpenTrial={() => handleOpenTrial()}
      />

      {/* 10. Choose Your Commitment (Pricing, Checkout & Digital Pass - WOW #2 & WOW #8) */}
      <PricingSection
        onNavigateSchedule={() => scrollToSection('schedule')}
      />

      {/* 11. Interactive Fitness Calculator (WOW #3) */}
      <FitnessCalculator
        onOpenAssessmentWithData={handleOpenAssessment}
      />

      {/* 12. Special Urgency Offer: 7-Day Free Pass */}
      <SpecialOffer
        onOpenTrial={() => handleOpenTrial()}
      />

      {/* 13. Google Reviews & Social Proof */}
      <GoogleReviews />

      {/* 14. Cinematic Photo Gallery & Lightbox */}
      <GallerySection
        onOpenTrial={() => handleOpenTrial()}
      />

      {/* 15. Community & Statistics Counters */}
      <CommunitySection
        onOpenTrial={() => handleOpenTrial()}
      />

      {/* 16. Frequently Asked Questions */}
      <FAQSection />

      {/* 17. Find Your Training Ground (Location, Map, Hours) */}
      <LocationSection />

      {/* 18. Comprehensive Footer */}
      <Footer
        onOpenTrial={() => handleOpenTrial()}
      />

      {/* 19. Mobile Sticky Bottom Conversion Bar (WOW #5) */}
      <MobileBottomBar
        onOpenTrial={() => handleOpenTrial()}
      />

      {/* 20. Floating WhatsApp Action (Desktop/Tablet) */}
      <WhatsAppButton />

      {/* MODAL 1: Free Trial Multi-Step Booking (WOW #1) */}
      {trialModalOpen && (
        <FreeTrialModal
          initialInterest={trialInterest}
          onClose={() => setTrialModalOpen(false)}
        />
      )}

      {/* MODAL 2: Free 15-Min Fitness Assessment */}
      {assessmentModalOpen && (
        <FreeAssessmentModal
          initialData={calculatorData}
          onClose={() => setAssessmentModalOpen(false)}
        />
      )}

    </div>
  );
}
