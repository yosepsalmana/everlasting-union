import { useState, useEffect } from 'react';
import { useInView } from '@/hooks/useInView';
import dividerImage from '@/assets/javanese-divider.png';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const WEDDING_DATE = new Date('2025-06-15T08:00:00');

const Countdown = () => {
  const { ref, isInView } = useInView({ threshold: 0.3 });
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = WEDDING_DATE.getTime() - new Date().getTime();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="section-padding bg-card relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 batik-pattern pointer-events-none opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background/50 pointer-events-none" />
      
      <div className="container-narrow relative z-10">
        <div 
          ref={ref}
          className={`text-center transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <p className="elegant-subheading text-sm mb-4 tracking-[0.3em] uppercase">Menghitung Hari</p>
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
            Menuju Hari Bahagia
          </h2>
          <p className="font-body text-muted-foreground mb-2 text-lg">Sabtu, 15 Juni 2025</p>
          
          <img src={dividerImage} alt="" className="w-40 md:w-56 mx-auto opacity-70 mb-12" />
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-3xl mx-auto">
            <CountdownUnit value={timeLeft.days} label="Hari" delay={0} />
            <CountdownUnit value={timeLeft.hours} label="Jam" delay={100} />
            <CountdownUnit value={timeLeft.minutes} label="Menit" delay={200} />
            <CountdownUnit value={timeLeft.seconds} label="Detik" delay={300} />
          </div>
        </div>
      </div>
    </section>
  );
};

interface CountdownUnitProps {
  value: number;
  label: string;
  delay: number;
}

const CountdownUnit = ({ value, label, delay }: CountdownUnitProps) => {
  const { ref, isInView } = useInView({ threshold: 0.5 });

  return (
    <div 
      ref={ref}
      className="bg-background/80 backdrop-blur-sm rounded-lg p-4 md:p-6 border border-primary/20 shadow-gold glow-border transition-all duration-500"
      style={{ 
        transitionDelay: `${delay}ms`,
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'translateY(0)' : 'translateY(20px)',
      }}
    >
      <div className="font-display text-4xl md:text-5xl lg:text-6xl text-primary mb-2">
        {String(value).padStart(2, '0')}
      </div>
      <div className="font-body text-sm md:text-base text-muted-foreground uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
};

export default Countdown;