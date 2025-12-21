import { useInView } from '@/hooks/useInView';
import { MapPin, Clock, Shirt } from 'lucide-react';

const events = [
  {
    title: 'The Ceremony',
    time: '3:00 PM',
    venue: 'Garden Chapel',
    address: 'The Grand Estate, 1200 Oak Grove Lane, Napa Valley, CA 94558',
    dressCode: 'Formal Attire',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12462.193325645682!2d-122.42876!3d38.29757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzjCsDE3JzUxLjMiTiAxMjLCsDI1JzQzLjUiVw!5e0!3m2!1sen!2sus!4v1234567890',
  },
  {
    title: 'The Reception',
    time: '5:30 PM',
    venue: 'Grand Ballroom',
    address: 'The Grand Estate, 1200 Oak Grove Lane, Napa Valley, CA 94558',
    dressCode: 'Cocktail / Formal',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12462.193325645682!2d-122.42876!3d38.29757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzjCsDE3JzUxLjMiTiAxMjLCsDI1JzQzLjUiVw!5e0!3m2!1sen!2sus!4v1234567890',
  },
];

const EventDetails = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section id="event" className="section-padding bg-background">
      <div className="container-wide">
        <div 
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <p className="elegant-subheading text-base mb-4 tracking-[0.2em] uppercase">Join us</p>
          <h2 className="font-display text-4xl md:text-5xl font-medium text-foreground mb-6">
            Event Details
          </h2>
          <div className="w-16 h-px bg-gold mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {events.map((event, index) => (
            <EventCard key={event.title} {...event} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface EventCardProps {
  title: string;
  time: string;
  venue: string;
  address: string;
  dressCode: string;
  mapUrl: string;
  index: number;
}

const EventCard = ({ title, time, venue, address, dressCode, mapUrl, index }: EventCardProps) => {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <div 
      ref={ref}
      className={`bg-card rounded-lg overflow-hidden shadow-soft transition-all duration-700 delay-${index * 200} ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      {/* Map */}
      <div className="h-48 bg-muted">
        <iframe
          src={mapUrl}
          className="w-full h-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={`Map to ${venue}`}
        />
      </div>
      
      {/* Content */}
      <div className="p-6 md:p-8">
        <h3 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-6">{title}</h3>
        
        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <Clock className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-body text-sm text-muted-foreground uppercase tracking-wide mb-1">Time</p>
              <p className="font-body text-foreground">{time}</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <MapPin className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-body text-sm text-muted-foreground uppercase tracking-wide mb-1">Venue</p>
              <p className="font-body text-foreground font-medium">{venue}</p>
              <p className="font-body text-muted-foreground text-sm mt-1">{address}</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <Shirt className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-body text-sm text-muted-foreground uppercase tracking-wide mb-1">Dress Code</p>
              <p className="font-body text-foreground">{dressCode}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
