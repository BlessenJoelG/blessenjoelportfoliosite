import { Github, Linkedin, Mail, Phone, MapPin, Download, ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="hero-glow w-96 h-96 -top-48 -left-48 floating" />
      <div className="hero-glow w-80 h-80 -bottom-40 -right-40 floating-delayed" />
      
      {/* Floating Data Elements */}
      <div className="absolute top-1/4 left-10 hidden lg:block floating opacity-20">
        <div className="glass-card p-3 text-xs font-mono text-primary">
          SELECT * FROM insights
        </div>
      </div>
      <div className="absolute bottom-1/3 right-16 hidden lg:block floating-delayed opacity-20">
        <div className="glass-card p-3 text-xs font-mono text-accent">
          df.groupby('category')
        </div>
      </div>

      <div className="container mx-auto px-6 pt-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Status Badge */}
          <div className="fade-in-up stagger-1 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-primary font-medium">Open to Opportunities</span>
          </div>

          {/* Name */}
          <h1 className="fade-in-up stagger-2 font-display text-5xl md:text-7xl font-bold mb-4">
            <span className="text-foreground">Hi, I'm </span>
            <span className="glow-text">Blessen Joel</span>
          </h1>

          {/* Title */}
          <div className="fade-in-up stagger-3 mb-6">
            <h2 className="font-display text-2xl md:text-3xl text-muted-foreground">
              <span className="typing-cursor">Data Analyst & BI Developer</span>
            </h2>
          </div>

          {/* Description */}
          <p className="fade-in-up stagger-4 text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            Transforming raw data into actionable insights. Specialized in 
            <span className="text-primary"> SQL</span>, 
            <span className="text-primary"> Python</span>, 
            <span className="text-primary"> Power BI</span> & 
            <span className="text-primary"> Tableau</span>. 
            Building dashboards that drive business decisions.
          </p>

          {/* Location */}
          <div className="fade-in-up stagger-5 flex items-center justify-center gap-2 text-muted-foreground mb-10">
            <MapPin size={16} className="text-primary" />
            <span className="text-sm">Narsapuram, Andhra Pradesh, India</span>
          </div>

          {/* Social Links */}
          <div className="fade-in-up stagger-6 flex items-center justify-center gap-4 mb-12">
            <a
              href="https://github.com/BlessenJoelG"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/blessenjoelgorinkala"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:blessenjoel.gc@gmail.com"
              className="social-icon"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a
              href="tel:+919392095494"
              className="social-icon"
              aria-label="Phone"
            >
              <Phone size={20} />
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="fade-in-up stagger-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#projects"
              className="group px-8 py-3 rounded-lg font-medium text-primary-foreground transition-all duration-300 hover:scale-105"
              style={{ background: 'var(--gradient-primary)' }}
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 rounded-lg font-medium border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 flex items-center gap-2"
            >
              <Download size={18} />
              Get Resume
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
            <ChevronDown size={28} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
