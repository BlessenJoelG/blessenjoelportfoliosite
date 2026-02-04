import { GraduationCap, Award, Trophy, Calendar } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const education = [
  {
    degree: 'B.Tech — Artificial Intelligence & Data Science',
    institution: 'DVR & Dr HS MIC College of Technology',
    location: 'Kanichibakhera, NTR District, AP',
    period: '2022 – 2026',
    score: 'CGPA: 8.8 / 10',
    icon: GraduationCap,
  },
  {
    degree: 'Board of Intermediate Education',
    institution: 'Higher Secondary Education',
    location: 'Andhra Pradesh',
    period: '2020 – 2022',
    score: 'Percentage: 86%',
    icon: Award,
  },
  {
    degree: 'Board of Secondary Education',
    institution: 'Secondary School',
    location: 'Andhra Pradesh',
    period: '2019 – 2020',
    score: 'CGPA: 8.6 / 10',
    icon: Award,
  },
];

const certifications = [
  {
    title: 'Data Visualization Analytics with ChatGPT & Colab',
    description: 'Python-based reporting automation',
    icon: Trophy,
  },
  {
    title: 'Top 5% in SQL Hackerrank Challenge',
    description: '2024 Achievement',
    icon: Trophy,
  },
  {
    title: 'Best Final Year Project (2026)',
    description: 'Academic Analytics Dashboard using SQL, Python, Power BI',
    icon: Trophy,
  },
];

const Education = () => {
  return (
    <section id="education" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-primary text-sm font-medium uppercase tracking-wider shimmer-text">Background</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold mt-2 mb-4">
                Education & <span className="glow-text">Certifications</span>
              </h2>
              <div className="w-20 h-1 mx-auto rounded-full" style={{ background: 'var(--gradient-primary)' }} />
            </div>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Education */}
            <div>
              <ScrollReveal direction="left" delay={100}>
                <h3 className="font-display text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
                  <GraduationCap className="text-primary" />
                  Education
                </h3>
              </ScrollReveal>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <ScrollReveal key={index} direction="left" delay={150 * (index + 1)}>
                    <div className="glass-card p-6 hover:-translate-y-1 transition-all duration-300">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg flex items-center justify-center text-primary flex-shrink-0" style={{ background: 'var(--gradient-glass)' }}>
                          <edu.icon size={24} />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-display font-semibold text-foreground">{edu.degree}</h4>
                          <p className="text-primary text-sm mt-1">{edu.institution}</p>
                          <p className="text-muted-foreground text-sm">{edu.location}</p>
                          <div className="flex items-center justify-between mt-3">
                            <span className="text-sm text-muted-foreground flex items-center gap-1">
                              <Calendar size={12} />
                              {edu.period}
                            </span>
                            <span className="text-sm font-medium text-primary">{edu.score}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <ScrollReveal direction="right" delay={100}>
                <h3 className="font-display text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
                  <Trophy className="text-accent" />
                  Awards & Certifications
                </h3>
              </ScrollReveal>
              <div className="space-y-6">
                {certifications.map((cert, index) => (
                  <ScrollReveal key={index} direction="right" delay={150 * (index + 1)}>
                    <div className="glass-card p-6 hover:-translate-y-1 transition-all duration-300 group">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg flex items-center justify-center text-accent flex-shrink-0 group-hover:scale-110 transition-transform" style={{ background: 'var(--gradient-glass)' }}>
                          <cert.icon size={24} />
                        </div>
                        <div>
                          <h4 className="font-display font-semibold text-foreground">{cert.title}</h4>
                          <p className="text-muted-foreground text-sm mt-1">{cert.description}</p>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>

              {/* Languages */}
              <ScrollReveal direction="right" delay={500}>
                <div className="mt-8 glass-card p-6">
                  <h4 className="font-display font-semibold text-foreground mb-4">Languages</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">English</span>
                      <span className="text-sm text-primary">Proficient</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Hindi</span>
                      <span className="text-sm text-primary">Intermediate</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Telugu</span>
                      <span className="text-sm text-primary">Native</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
