import { useInView } from '@/hooks/useInView';
import { MapPin, Clock, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import dividerImage from '@/assets/javanese-divider.png';
import ornamentFrame from '@/assets/javanese-ornament-corner.png';

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
      <div className="absolute inset-0 batik-pattern pointer-events-none opacity-30" />
      
      {/* Corner ornaments */}
      <img src={ornamentFrame} alt="" className="absolute top-4 left-4 w-20 md:w-32 opacity-40" />
      <img src={ornamentFrame} alt="" className="absolute top-4 right-4 w-20 md:w-32 opacity-40 -scale-x-100" />
      
      <div className="container-wide relative z-10">
        <div 
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <p className="elegant-subheading text-sm mb-4 tracking-[0.3em] uppercase">Waktu & Tempat</p>
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
            Acara Pernikahan
          </h2>
          <img src={dividerImage} alt="" className="w-40 md:w-56 mx-auto opacity-70" />
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
      className={`bg-card/80 backdrop-blur-sm rounded-lg overflow-hidden border border-primary/20 shadow-gold transition-all duration-700`}
      style={{ 
        transitionDelay: `${index * 200}ms`,
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'translateY(0)' : 'translateY(30px)',
      }}
    >
      {/* Header */}
      <div className="bg-gradient-gold p-6 text-center">
        <h3 className="font-display text-2xl md:text-3xl text-primary-foreground">{title}</h3>
      </div>
      
      {/* Content */}
      <div className="p-6 md:p-8 space-y-5">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
            <Calendar className="w-5 h-5 text-primary" />
          </div>
          <div>
            <p className="font-body text-xs text-muted-foreground uppercase tracking-wide mb-1">Tanggal</p>
            <p className="font-heading text-foreground">{date}</p>
          </div>
        </div>
        
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
            <Clock className="w-5 h-5 text-primary" />
          </div>
          <div>
            <p className="font-body text-xs text-muted-foreground uppercase tracking-wide mb-1">Waktu</p>
            <p className="font-heading text-foreground">{time}</p>
          </div>
        </div>
        
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
            <MapPin className="w-5 h-5 text-primary" />
          </div>
          <div>
            <p className="font-body text-xs text-muted-foreground uppercase tracking-wide mb-1">Tempat</p>
            <p className="font-heading text-foreground">{venue}</p>
            <p className="font-body text-muted-foreground text-sm mt-1">{address}</p>
          </div>
        </div>

        <Button 
          asChild
          className="w-full mt-4 bg-primary hover:bg-primary/90 text-primary-foreground font-heading tracking-wide"
        >
          <a href={mapUrl} target="_blank" rel="noopener noreferrer">
            <MapPin className="w-4 h-4 mr-2" />
            Lihat di Peta
          </a>
        </Button>
      </div>
    </div>
  );
};

export default EventDetails;