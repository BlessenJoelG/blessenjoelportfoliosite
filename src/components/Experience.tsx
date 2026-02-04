import { Building2, Calendar, MapPin } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const experiences = [
  {
    title: 'Data Analyst Intern',
    company: 'Deloitte Analytics',
    location: 'Remote',
    period: 'Mar 2025 – Apr 2025',
    description: 'Worked on remote analytics projects involving data analysis, KPI development, and dashboard validation.',
    responsibilities: [
      'Translated business requirements into KPIs through stakeholder collaboration',
      'Created & maintained functional/technical documentation (KPI logic, data workflows)',
      'Performed data validation, reconciliation, and quality assurance',
      'Validated datasets, visuals, and KPI calculations before dashboard release',
    ],
    technologies: ['SQL', 'Python', 'Power BI', 'Excel'],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-primary text-sm font-medium uppercase tracking-wider shimmer-text">Career</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold mt-2 mb-4">
                Professional <span className="glow-text">Experience</span>
              </h2>
              <div className="w-20 h-1 mx-auto rounded-full" style={{ background: 'var(--gradient-primary)' }} />
            </div>
          </ScrollReveal>

          {/* Timeline */}
          <div className="relative pl-8">
            <div className="timeline-line" />

            {experiences.map((exp, index) => (
              <ScrollReveal key={index} delay={200}>
                <div className="relative mb-12 last:mb-0">
                  {/* Timeline Dot */}
                  <div className="absolute -left-8 top-0 w-4 h-4 rounded-full border-4 border-background" style={{ background: 'var(--gradient-primary)' }} />

                  <div className="glass-card p-8 hover:-translate-y-1 transition-all duration-300">
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <h3 className="font-display text-xl font-bold text-foreground">{exp.title}</h3>
                        <div className="flex items-center gap-2 mt-1">
                          <Building2 size={16} className="text-primary" />
                          <span className="text-primary font-medium">{exp.company}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-2 text-muted-foreground text-sm">
                          <Calendar size={14} />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground text-sm mt-1">
                          <MapPin size={14} />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground mb-4">{exp.description}</p>

                    {/* Responsibilities */}
                    <ul className="space-y-2 mb-6">
                      {exp.responsibilities.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-full text-xs font-medium text-primary border border-primary/30 bg-primary/5"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
