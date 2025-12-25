import { useInView } from '@/hooks/useInView';
import dividerImage from '@/assets/javanese-divider.png';
import ornamentFrame from '@/assets/javanese-ornament-corner.png';

const ClosingSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.3 });

  return (
    <section className="section-padding bg-card relative overflow-hidden">
      <div className="absolute inset-0 batik-pattern pointer-events-none opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background/50 pointer-events-none" />
      
      {/* Corner ornaments */}
      <img src={ornamentFrame} alt="" className="absolute top-4 left-4 w-24 md:w-36 opacity-50" />
      <img src={ornamentFrame} alt="" className="absolute top-4 right-4 w-24 md:w-36 opacity-50 -scale-x-100" />
      <img src={ornamentFrame} alt="" className="absolute bottom-4 left-4 w-24 md:w-36 opacity-50 -scale-y-100" />
      <img src={ornamentFrame} alt="" className="absolute bottom-4 right-4 w-24 md:w-36 opacity-50 rotate-180" />
      
      <div 
        ref={ref}
        className="container-narrow relative z-10"
      >
        <div 
          className={`text-center transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <img src={dividerImage} alt="" className="w-40 md:w-56 mx-auto opacity-70 mb-10" />
          
          <p className="font-body text-lg md:text-xl text-foreground leading-relaxed max-w-2xl mx-auto mb-8">
            Merupakan suatu kehormatan dan kebahagiaan bagi kami, apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu kepada kedua mempelai.
          </p>

          <p className="font-body text-muted-foreground mb-10">
            Atas kehadiran dan doa restunya kami ucapkan terima kasih.
          </p>

          {/* Names */}
          <div className="mb-10">
            <p className="font-body text-muted-foreground text-sm tracking-widest uppercase mb-4">
              Wassalamu'alaikum Warahmatullahi Wabarakatuh
            </p>
            <h3 className="font-accent text-4xl md:text-5xl text-primary">
              Dewi & Bimo
            </h3>
          </div>

          <img src={dividerImage} alt="" className="w-40 md:w-56 mx-auto opacity-70 rotate-180" />
        </div>
      </div>
    </section>
  );
};

export default ClosingSection;