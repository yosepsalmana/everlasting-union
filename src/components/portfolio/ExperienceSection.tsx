import { useInView } from '@/hooks/useInView';
import { Award, Briefcase, GraduationCap } from 'lucide-react';

const certifications = [
  {
    title: 'Google Data Analytics Professional Certificate',
    issuer: 'Google',
    date: '2024',
  },
  {
    title: 'SQL for Data Science',
    issuer: 'Coursera',
    date: '2023',
  },
  {
    title: 'Tableau Desktop Specialist',
    issuer: 'Tableau',
    date: '2023',
  },
];

const experience = [
  {
    title: 'Data Analyst Intern',
    company: 'Tech Startup Inc.',
    period: 'Jan 2024 - Present',
    description: 'Analyzing user behavior data and creating dashboards to track key performance metrics.',
  },
  {
    title: 'Freelance Data Analyst',
    company: 'Various Clients',
    period: '2023 - Present',
    description: 'Providing data analysis services for small businesses, including sales reporting and customer analytics.',
  },
  {
    title: 'Research Assistant',
    company: 'University Data Lab',
    period: '2022 - 2023',
    description: 'Assisted in academic research projects involving statistical analysis and data visualization.',
  },
];

const ExperienceSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section id="experience" className="section-padding bg-background">
      <div
        ref={ref}
        className={`container-narrow transition-all duration-700 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="text-center mb-12">
          <h2 className="heading-lg text-foreground mb-4">Experience & Certifications</h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Briefcase className="text-primary" size={24} />
              <h3 className="heading-md text-foreground">Experience</h3>
            </div>
            
            <div className="space-y-6">
              {experience.map((item, index) => (
                <div
                  key={index}
                  className="relative pl-6 border-l-2 border-border hover:border-primary transition-colors duration-300"
                >
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-background border-2 border-primary" />
                  <h4 className="font-semibold text-foreground">{item.title}</h4>
                  <p className="text-primary text-sm font-medium">{item.company}</p>
                  <p className="text-muted-foreground text-xs mb-2">{item.period}</p>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Award className="text-primary" size={24} />
              <h3 className="heading-md text-foreground">Certifications</h3>
            </div>
            
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors duration-300"
                >
                  <div className="flex items-start gap-3">
                    <GraduationCap className="text-primary mt-1" size={20} />
                    <div>
                      <h4 className="font-semibold text-foreground text-sm">{cert.title}</h4>
                      <p className="text-muted-foreground text-xs">
                        {cert.issuer} • {cert.date}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
