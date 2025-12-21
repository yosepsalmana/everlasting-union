import { useInView } from '@/hooks/useInView';
import { Heart } from 'lucide-react';

const storyTimeline = [
  {
    year: '2018',
    title: 'First Meeting',
    description: 'We met at a friend\'s gallery opening in San Francisco. Michael spilled wine on Sarah\'s dress, and she still hasn\'t let him forget it.',
  },
  {
    year: '2019',
    title: 'First Date',
    description: 'A cozy dinner at a small Italian restaurant turned into hours of conversation and the beginning of our love story.',
  },
  {
    year: '2022',
    title: 'Moving In Together',
    description: 'We found our perfect little apartment in the city, complete with a balcony for morning coffee and evening sunsets.',
  },
  {
    year: '2024',
    title: 'The Proposal',
    description: 'Under the cherry blossoms in Japan, Michael got down on one knee. Through happy tears, Sarah said yes.',
  },
];

const OurStory = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section id="our-story" className="section-padding bg-gradient-section">
      <div className="container-narrow">
        <div 
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <p className="elegant-subheading text-base mb-4 tracking-[0.2em] uppercase">How we met</p>
          <h2 className="font-display text-4xl md:text-5xl font-medium text-foreground mb-6">
            Our Story
          </h2>
          <div className="w-16 h-px bg-gold mx-auto" />
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />
          
          {storyTimeline.map((item, index) => (
            <TimelineItem 
              key={item.year} 
              {...item} 
              index={index}
              isEven={index % 2 === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  index: number;
  isEven: boolean;
}

const TimelineItem = ({ year, title, description, index, isEven }: TimelineItemProps) => {
  const { ref, isInView } = useInView({ threshold: 0.3 });
  
  return (
    <div 
      ref={ref}
      className={`relative flex items-center mb-12 md:mb-16 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
    >
      {/* Content */}
      <div 
        className={`ml-20 md:ml-0 md:w-1/2 ${isEven ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'}`}
      >
        <div 
          className={`transition-all duration-700 delay-${index * 100} ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <span className="font-display text-gold text-xl md:text-2xl">{year}</span>
          <h3 className="font-display text-xl md:text-2xl font-medium text-foreground mt-2 mb-3">{title}</h3>
          <p className="font-body text-muted-foreground leading-relaxed">{description}</p>
        </div>
      </div>
      
      {/* Timeline node */}
      <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-background border-2 border-gold rounded-full z-10">
        <div className="absolute inset-0 flex items-center justify-center">
          <Heart className="w-2 h-2 text-gold fill-gold" />
        </div>
      </div>
      
      {/* Empty space for the other side on desktop */}
      <div className="hidden md:block md:w-1/2" />
    </div>
  );
};

export default OurStory;
