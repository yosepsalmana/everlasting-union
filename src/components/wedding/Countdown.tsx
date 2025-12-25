import { useState, useEffect } from 'react';
import { useInView } from '@/hooks/useInView';
import dividerImage from '@/assets/javanese-divider.png';
import ParticleGlow from '@/components/animations/ParticleGlow';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const WEDDING_DATE = new Date('2025-06-15T08:00:00');

const Countdown = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });
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
      <div className="absolute inset-0 batik-pattern pointer-events-none opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background/60 pointer-events-none" />
      <ParticleGlow />
      
      <div className="container-narrow relative z-10">
        <div 
          ref={ref}
          className={`text-center transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
        >
          <p className="elegant-subheading text-sm mb-4 tracking-[0.3em] uppercase">Menghitung Hari</p>
          <h2 className="font-display text-3xl md:text-5xl text-foreground mb-6">
            Menuju Hari Bahagia
          </h2>
          <p className="font-body text-muted-foreground mb-3 text-lg md:text-xl">Sabtu, 15 Juni 2025</p>
          
          <img 
            src={dividerImage} 
            alt="" 
            className={`w-44 md:w-64 mx-auto mb-14 transition-all duration-1000 delay-200 ${isInView ? 'opacity-80 scale-100' : 'opacity-0 scale-90'}`}
          />
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-3xl mx-auto">
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
  const { ref, isInView } = useInView({ threshold: 0.3 });

  return (
    <div 
      ref={ref}
      className={`bg-background/90 backdrop-blur-sm rounded-lg p-5 md:p-8 border border-primary/30 shadow-gold glow-border transition-all duration-700 hover:scale-105 hover:border-primary/50 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ 
        transitionDelay: `${delay}ms`,
      }}
    >
      <div className="font-display text-4xl md:text-6xl lg:text-7xl text-primary mb-3 animate-glow-ambient">
        {String(value).padStart(2, '0')}
      </div>
      <div className="font-heading text-xs md:text-sm text-muted-foreground uppercase tracking-[0.2em]">
        {label}
      </div>
    </div>
  );
};

export default Countdown;