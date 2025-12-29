import Navigation from '@/components/wedding/Navigation';
import HeroSection from '@/components/wedding/HeroSection';
import OpeningQuote from '@/components/wedding/OpeningQuote';
import CoupleSection from '@/components/wedding/CoupleSection';
import Countdown from '@/components/wedding/Countdown';
import EventDetails from '@/components/wedding/EventDetails';
import Gallery from '@/components/wedding/Gallery';
import RsvpForm from '@/components/wedding/RsvpForm';
import ClosingSection from '@/components/wedding/ClosingSection';
import Footer from '@/components/wedding/Footer';
import FloatingLeaves from '@/components/animations/FloatingLeaves';
import FlyingBirds from '@/components/animations/FlyingBirds';
import FloatingPetals from '@/components/animations/FloatingPetals';

const Index = () => {
  return (
    <main className="overflow-x-hidden relative">
      {/* Global ambient animations */}
      <FloatingLeaves />
      <FlyingBirds />
      <FloatingPetals />
      
      <Navigation />
      <HeroSection />
      <OpeningQuote />
      <CoupleSection />
      <Countdown />
      <EventDetails />
      <Gallery />
      <RsvpForm />
      <ClosingSection />
      <Footer />
    </main>
  );
};

export default Index;