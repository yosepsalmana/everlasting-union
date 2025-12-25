import { useInView } from '@/hooks/useInView';
import { MapPin, Clock, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import dividerImage from '@/assets/javanese-divider.png';
import ornamentFrame from '@/assets/javanese-ornament-corner.png';
import LightRays from '@/components/animations/LightRays';

const events = [
  {
    title: 'Akad Nikah',
    date: 'Sabtu, 15 Juni 2025',
    time: '08:00 - 10:00 WIB',
    venue: 'Gedung Sasana Kriya',
    address: 'Jl. Laksda Adisucipto No.1, Yogyakarta',
    mapUrl: 'https://maps.google.com/?q=Gedung+Sasana+Kriya+Yogyakarta',
  },
  {
    title: 'Resepsi',
    date: 'Sabtu, 15 Juni 2025',
    time: '11:00 - 14:00 WIB',
    venue: 'Gedung Sasana Kriya',
    address: 'Jl. Laksda Adisucipto No.1, Yogyakarta',
    mapUrl: 'https://maps.google.com/?q=Gedung+Sasana+Kriya+Yogyakarta',
  },
];

const EventDetails = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section id="event" className="section-padding bg-background relative overflow-hidden">
      <div className="absolute inset-0 batik-pattern pointer-events-none opacity-40" />
      <LightRays />
      
      {/* Animated corner ornaments */}
      <img 
        src={ornamentFrame} 
        alt="" 
        className="absolute top-8 left-4 w-20 md:w-32 opacity-50 animate-ornament-sway" 
      />
      <img 
        src={ornamentFrame} 
        alt="" 
        className="absolute top-8 right-4 w-20 md:w-32 opacity-50 -scale-x-100 animate-ornament-sway"
        style={{ animationDelay: '1s' }}
      />
      
      <div className="container-wide relative z-10">
        <div 
          ref={ref}
          className={`text-center mb-16 transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
        >
          <p className="elegant-subheading text-sm mb-4 tracking-[0.3em] uppercase">Waktu & Tempat</p>
          <h2 className="font-display text-3xl md:text-5xl text-foreground mb-8">
            Acara Pernikahan
          </h2>
          <img 
            src={dividerImage} 
            alt="" 
            className={`w-44 md:w-64 mx-auto transition-all duration-1000 delay-200 ${isInView ? 'opacity-80 scale-100' : 'opacity-0 scale-90'}`}
          />
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
  date: string;
  time: string;
  venue: string;
  address: string;
  mapUrl: string;
  index: number;
}

const EventCard = ({ title, date, time, venue, address, mapUrl, index }: EventCardProps) => {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <div 
      ref={ref}
      className={`bg-card/90 backdrop-blur-sm rounded-lg overflow-hidden border border-primary/30 shadow-gold transition-all duration-1000 hover:border-primary/50 hover:shadow-glow ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
      style={{ 
        transitionDelay: `${index * 200}ms`,
      }}
    >
      {/* Header with gradient */}
      <div className="bg-gradient-gold p-6 md:p-8 text-center relative overflow-hidden">
        <div className="absolute inset-0 batik-pattern opacity-20" />
        <h3 className="font-display text-2xl md:text-3xl text-primary-foreground relative z-10">{title}</h3>
      </div>
      
      {/* Content */}
      <div className="p-6 md:p-8 space-y-6">
        <div className="flex items-start gap-5 group">
          <div className="w-12 h-12 rounded-full bg-primary/15 flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-primary/25 group-hover:scale-110">
            <Calendar className="w-5 h-5 text-primary" />
          </div>
          <div>
            <p className="font-body text-xs text-muted-foreground uppercase tracking-widest mb-1">Tanggal</p>
            <p className="font-heading text-foreground text-lg">{date}</p>
          </div>
        </div>
        
        <div className="flex items-start gap-5 group">
          <div className="w-12 h-12 rounded-full bg-primary/15 flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-primary/25 group-hover:scale-110">
            <Clock className="w-5 h-5 text-primary" />
          </div>
          <div>
            <p className="font-body text-xs text-muted-foreground uppercase tracking-widest mb-1">Waktu</p>
            <p className="font-heading text-foreground text-lg">{time}</p>
          </div>
        </div>
        
        <div className="flex items-start gap-5 group">
          <div className="w-12 h-12 rounded-full bg-primary/15 flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-primary/25 group-hover:scale-110">
            <MapPin className="w-5 h-5 text-primary" />
          </div>
          <div>
            <p className="font-body text-xs text-muted-foreground uppercase tracking-widest mb-1">Tempat</p>
            <p className="font-heading text-foreground text-lg">{venue}</p>
            <p className="font-body text-muted-foreground text-sm mt-1">{address}</p>
          </div>
        </div>

        <Button 
          asChild
          className="w-full mt-6 bg-primary hover:bg-primary/90 text-primary-foreground font-heading tracking-widest py-6 transition-all duration-300 hover:shadow-gold hover:scale-[1.02]"
        >
          <a href={mapUrl} target="_blank" rel="noopener noreferrer">
            <MapPin className="w-4 h-4 mr-3" />
            Lihat Lokasi
          </a>
        </Button>
      </div>
    </div>
  );
};

export default EventDetails;