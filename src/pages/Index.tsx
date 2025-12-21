import Navigation from '@/components/wedding/Navigation';
import HeroSection from '@/components/wedding/HeroSection';
import OurStory from '@/components/wedding/OurStory';
import EventDetails from '@/components/wedding/EventDetails';
import Gallery from '@/components/wedding/Gallery';
import Countdown from '@/components/wedding/Countdown';
import RsvpForm from '@/components/wedding/RsvpForm';
import Footer from '@/components/wedding/Footer';

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <OurStory />
      <Countdown />
      <EventDetails />
      <Gallery />
      <RsvpForm />
      <Footer />
    </main>
  );
};

export default Index;
