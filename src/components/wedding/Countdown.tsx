import { useState, useEffect } from 'react';
import { useInView } from '@/hooks/useInView';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const WEDDING_DATE = new Date('2025-06-15T15:00:00');

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
    <section className="section-padding bg-champagne relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 texture-overlay pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-sage-light/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blush/20 rounded-full blur-3xl" />
      
      <div className="container-narrow relative z-10">
        <div 
          ref={ref}
          className={`text-center transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <p className="elegant-subheading text-base mb-4 tracking-[0.2em] uppercase">Counting down to</p>
          <h2 className="font-display text-4xl md:text-5xl font-medium text-foreground mb-12">
            Our Big Day
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-2xl mx-auto">
            <CountdownUnit value={timeLeft.days} label="Days" delay={0} />
            <CountdownUnit value={timeLeft.hours} label="Hours" delay={100} />
            <CountdownUnit value={timeLeft.minutes} label="Minutes" delay={200} />
            <CountdownUnit value={timeLeft.seconds} label="Seconds" delay={300} />
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
      className={`bg-background/80 backdrop-blur-sm rounded-lg p-6 shadow-soft transition-all duration-500`}
      style={{ 
        transitionDelay: `${delay}ms`,
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'translateY(0)' : 'translateY(20px)',
      }}
    >
      <div className="font-display text-4xl md:text-5xl lg:text-6xl font-medium text-foreground mb-2">
        {String(value).padStart(2, '0')}
      </div>
      <div className="font-body text-sm md:text-base text-muted-foreground uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
};

export default Countdown;
