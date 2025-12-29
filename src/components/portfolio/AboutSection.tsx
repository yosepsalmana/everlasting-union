import { useInView } from '@/hooks/useInView';
import { BarChart3, Lightbulb, Target } from 'lucide-react';

const highlights = [
  {
    icon: BarChart3,
    title: 'Analytical Mindset',
    description: 'Strong problem-solving skills with a methodical approach to data analysis.',
  },
  {
    icon: Target,
    title: 'Real-World Experience',
    description: 'Hands-on experience with diverse datasets across multiple industries.',
  },
  {
    icon: Lightbulb,
    title: 'Business-Oriented',
    description: 'Translating complex data findings into clear, actionable business recommendations.',
  },
];

const AboutSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div
        ref={ref}
        className={`container-narrow transition-all duration-700 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="text-center mb-12">
          <h2 className="heading-lg text-foreground mb-4">About Me</h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-muted-foreground leading-relaxed text-lg">
            I am a data analyst with a passion for uncovering patterns and insights hidden 
            within complex datasets. With expertise in statistical analysis, data visualization, 
            and business intelligence tools, I transform raw data into strategic insights that 
            drive informed decision-making and measurable business outcomes.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <div
              key={item.title}
              className={`text-center p-6 rounded-xl bg-card border border-border transition-all duration-500 delay-${index * 100}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <item.icon className="text-primary" size={28} />
              </div>
              <h3 className="heading-md text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
