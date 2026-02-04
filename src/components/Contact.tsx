import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';
import { useState } from 'react';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'blessenjoel.gc@gmail.com',
    href: 'mailto:blessenjoel.gc@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91-9392095494',
    href: 'tel:+919392095494',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Narsapuram, Andhra Pradesh, 534275',
    href: null,
  },
];

const socialLinks = [
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/BlessenJoelG',
    username: '@BlessenJoelG',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/blessenjoelgorinkala',
    username: 'blessenjoelgorinkala',
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create mailto link with form data
    const subject = `Portfolio Contact from ${formData.name}`;
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
    window.location.href = `mailto:blessenjoel.gc@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-medium uppercase tracking-wider">Get in Touch</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-2 mb-4">
              Let's <span className="glow-text">Connect</span>
            </h2>
            <div className="w-20 h-1 mx-auto rounded-full" style={{ background: 'var(--gradient-primary)' }} />
            <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, data projects, or just having a conversation about analytics and technology.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <div key={item.label} className="glass-card p-6 hover:-translate-y-1 transition-all duration-300">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg flex items-center justify-center text-primary" style={{ background: 'var(--gradient-glass)' }}>
                        <item.icon size={24} />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{item.label}</p>
                        {item.href ? (
                          <a href={item.href} className="text-foreground font-medium hover:text-primary transition-colors">
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-foreground font-medium">{item.value}</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="glass-card p-6">
                <h3 className="font-display font-semibold text-foreground mb-4">Connect on Social</h3>
                <div className="space-y-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-3 rounded-lg hover:bg-primary/5 transition-colors group"
                    >
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center text-muted-foreground group-hover:text-primary transition-colors" style={{ background: 'var(--gradient-glass)' }}>
                        <social.icon size={20} />
                      </div>
                      <div>
                        <p className="font-medium text-foreground group-hover:text-primary transition-colors">{social.label}</p>
                        <p className="text-sm text-muted-foreground">{social.username}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="glass-card p-8">
              <h3 className="font-display text-xl font-bold text-foreground mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                    placeholder="john@example.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors resize-none"
                    placeholder="Tell me about your project or opportunity..."
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 rounded-lg font-medium text-primary-foreground flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.02]"
                  style={{ background: 'var(--gradient-primary)' }}
                >
                  <Send size={18} />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
