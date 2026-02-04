import { TrendingUp, Database, BarChart3, FileCheck } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const highlights = [
  {
    icon: Database,
    title: 'Data Engineering',
    description: 'SQL, ETL workflows, data validation & reconciliation',
  },
  {
    icon: BarChart3,
    title: 'Visualization',
    description: 'Power BI, Tableau, interactive dashboard development',
  },
  {
    icon: TrendingUp,
    title: 'Analytics',
    description: 'EDA, statistical analysis, KPI design & tracking',
  },
  {
    icon: FileCheck,
    title: 'Documentation',
    description: 'Technical specs, workflow docs, stakeholder reports',
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-primary text-sm font-medium uppercase tracking-wider shimmer-text">About Me</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold mt-2 mb-4">
                <span className="glow-text">Profile</span> Summary
              </h2>
              <div className="w-20 h-1 mx-auto rounded-full" style={{ background: 'var(--gradient-primary)' }} />
            </div>
          </ScrollReveal>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Text Content */}
            <ScrollReveal direction="left" delay={200}>
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  <span className="text-foreground font-medium">Analyst Trainee</span> with hands-on experience in 
                  SQL, Python, Excel, Power BI, and Tableau, specializing in data analysis, 
                  data validation, documentation, and dashboard development.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  I have a strong understanding of business requirements, KPI design, and analytics 
                  delivery. Adept at technical documentation, stakeholder communication, and 
                  end-to-end data workflows.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Focused on delivering <span className="text-primary">accurate insights</span>, 
                  <span className="text-primary"> reliable reporting</span>, and 
                  <span className="text-primary"> data-driven business decisions</span>.
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 pt-6">
                  <div className="text-center">
                    <div className="stat-number">5K+</div>
                    <div className="text-sm text-muted-foreground mt-1">Records Analyzed</div>
                  </div>
                  <div className="text-center">
                    <div className="stat-number">28%</div>
                    <div className="text-sm text-muted-foreground mt-1">Insights Found</div>
                  </div>
                  <div className="text-center">
                    <div className="stat-number">Top 5%</div>
                    <div className="text-sm text-muted-foreground mt-1">SQL Challenge</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Right - Highlight Cards */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <ScrollReveal key={item.title} direction="right" delay={100 * (index + 1)}>
                  <div className="glass-card p-6 group hover:-translate-y-1 transition-all duration-300 h-full">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-primary group-hover:scale-110 transition-transform" style={{ background: 'var(--gradient-glass)' }}>
                      <item.icon size={24} />
                    </div>
                    <h3 className="font-display font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
