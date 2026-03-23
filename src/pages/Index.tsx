import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { ArrowRight, GraduationCap, Monitor, Wallet, ShoppingCart, Video, MessageSquare, BookOpen, Globe, Cpu, BarChart3, Mail, Phone, MapPin, Code, Smartphone, Cloud, Brain, Clock, Award } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import academyImg from "@/assets/academy.jpg";
import servicesTechImg from "@/assets/services-tech.jpg";

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <img src={heroBg} alt="Digital future" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/85" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <span className="section-badge">Ecom Toko Enterprise</span>
          <h1 className="section-heading mt-6 max-w-4xl leading-tight">
            Building Africa's Digital Future Through Technology, Commerce & Education
          </h1>
          <p className="mt-6 text-muted-foreground max-w-2xl text-lg leading-relaxed">
            Toko is a growing digital ecosystem delivering innovative products across education, e-commerce, fintech, and SaaS.
          </p>
          <div className="flex flex-wrap gap-4 mt-10">
            <Link to="/blog" className="px-8 py-3 bg-primary text-primary-foreground font-medium rounded-sm hover:bg-primary/90 transition-colors">
              Explore Ecosystem
            </Link>
            <Link to="/services" className="px-8 py-3 border border-foreground/20 text-foreground font-medium rounded-sm hover:border-primary hover:text-primary transition-colors inline-flex items-center gap-2">
              View Services <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* About Snapshot */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="section-badge">About Toko</span>
              <h2 className="section-heading mt-6 text-3xl md:text-4xl">
                A Multi-Sector Digital Ecosystem
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                Toko is the digital ecosystem of Ecom Toko Enterprise, bringing together powerful platforms that empower individuals, businesses, and communities through technology-driven solutions.
              </p>
              <Link to="/about" className="inline-flex items-center gap-2 mt-8 text-primary hover:gap-3 transition-all font-medium">
                Learn More <ArrowRight size={16} />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: BookOpen, label: "Digital Education" },
                { icon: Globe, label: "E-commerce Platforms" },
                { icon: Cpu, label: "Fintech Solutions" },
                { icon: BarChart3, label: "SaaS & Automation" },
              ].map((item) => (
                <div key={item.label} className="glass-card p-6 hover-lift">
                  <item.icon className="text-primary mb-3" size={28} />
                  <p className="text-sm font-medium text-foreground">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Divisions */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="section-badge">Core Divisions</span>
            <h2 className="section-heading mt-6">Two Pillars of Innovation</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="group relative overflow-hidden rounded-lg">
              <img src={academyImg} alt="Toko Academy" className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <GraduationCap className="text-primary mb-3" size={32} />
                <h3 className="font-display text-2xl font-bold text-foreground">Toko Academy</h3>
                <p className="text-muted-foreground mt-2 text-sm">Our flagship platform providing in-demand tech skills and digital education.</p>
                <a href="https://tokoacademy.org" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-4 text-primary text-sm font-medium hover:gap-3 transition-all">
                  Visit Academy <ArrowRight size={14} />
                </a>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg">
              <img src={servicesTechImg} alt="Tokotechnologies" className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <Monitor className="text-primary mb-3" size={32} />
                <h3 className="font-display text-2xl font-bold text-foreground">Tokotechnologies</h3>
                <p className="text-muted-foreground mt-2 text-sm">Delivering software solutions, IT consulting, and digital transformation services.</p>
                <Link to="/services" className="inline-flex items-center gap-2 mt-4 text-primary text-sm font-medium hover:gap-3 transition-all">
                  Explore Services <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="section-badge">Our Impact</span>
            <h2 className="section-heading mt-6 text-3xl md:text-4xl">Proven Results</h2>
            <p className="mt-6 text-muted-foreground max-w-2xl mx-auto text-lg">
              Empowering individuals and organizations with digital skills to thrive in the digital age
            </p>
          </div>

          {/* Main Statistics */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="glass-card p-8 text-center hover-lift">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">1,500+</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">LEARNERS</div>
              <div className="text-sm text-foreground font-medium">Trained</div>
            </div>
            <div className="glass-card p-8 text-center hover-lift">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">15+</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">COURSES</div>
              <div className="text-sm text-foreground font-medium">Available</div>
            </div>
            <div className="glass-card p-8 text-center hover-lift">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">95%</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">SUCCESS</div>
              <div className="text-sm text-foreground font-medium">Rate</div>
            </div>
            <div className="glass-card p-8 text-center hover-lift">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">20+</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">CLIENTS</div>
              <div className="text-sm text-foreground font-medium">Satisfied</div>
            </div>
          </div>

          {/* Why Choose Toko Academy */}
          <div className="mb-16">
            <h3 className="font-display text-2xl font-bold text-foreground text-center mb-12">Why Choose Toko Academy?</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: BookOpen,
                  title: "Industry-Relevant Curriculum",
                  desc: "Our courses are designed with input from industry experts to ensure you learn the most current and in-demand skills."
                },
                {
                  icon: GraduationCap,
                  title: "Expert Instructors", 
                  desc: "Learn from experienced professionals who bring real-world expertise and practical insights to every lesson."
                },
                {
                  icon: Code,
                  title: "Hands-On Learning",
                  desc: "Build real projects and gain practical experience that prepares you for actual workplace challenges."
                },
                {
                  icon: Clock,
                  title: "Flexible Learning Options",
                  desc: "Study at your own pace with options for online, offline, and hybrid learning formats that fit your schedule."
                },
                {
                  icon: BarChart3,
                  title: "Career Support",
                  desc: "Get guidance on job placement, portfolio building, and networking opportunities to launch your tech career."
                },
                {
                  icon: Award,
                  title: "Certification",
                  desc: "Earn recognized certificates upon completion that demonstrate your skills to potential employers."
                }
              ].map((feature) => (
                <div key={feature.title} className="glass-card p-6 hover-lift">
                  <feature.icon className="text-primary mb-4" size={24} />
                  <h4 className="font-display text-lg font-semibold text-foreground mb-3">{feature.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Stats */}
          <div className="text-center">
            <div className="inline-flex items-center gap-8 glass-card px-8 py-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">15+</div>
                <div className="text-xs text-muted-foreground">Corporate Partners</div>
              </div>
              <div className="w-px h-8 bg-border"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">20+</div>
                <div className="text-xs text-muted-foreground">Toko Technologies Clients</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Services Preview */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="section-badge">Technology Services</span>
            <h2 className="section-heading mt-6 text-3xl md:text-4xl">Cutting-Edge Solutions</h2>
            <p className="mt-6 text-muted-foreground max-w-2xl mx-auto text-lg">
              Comprehensive technology services powered by modern tools and frameworks
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              { 
                icon: Code, 
                name: "Software Development", 
                desc: "Custom-built applications for startups and enterprise.",
                color: "text-primary" 
              },
              { 
                icon: Globe, 
                name: "Web Development", 
                desc: "Responsive and scalable web platforms.",
                color: "text-accent" 
              },
              { 
                icon: Smartphone, 
                name: "Mobile App Development", 
                desc: "Android and iOS solutions with modern UX.",
                color: "text-primary" 
              },
              { 
                icon: Monitor, 
                name: "IT Consulting", 
                desc: "Strategic advisory for digital transformation.",
                color: "text-accent" 
              },
              { 
                icon: Cloud, 
                name: "Cloud & DevOps", 
                desc: "Infrastructure, deployment pipelines, and automation.",
                color: "text-primary" 
              },
              { 
                icon: Brain, 
                name: "AI & Data Solutions", 
                desc: "Machine learning systems, AI Agents, analytics, and automation tools.",
                color: "text-accent" 
              },
            ].map((service) => (
              <div key={service.name} className="glass-card p-6 hover-lift group">
                <service.icon className={`${service.color} mb-4`} size={24} />
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">{service.name}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link 
              to="/technologies" 
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold rounded-sm hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 transform hover:-translate-y-1"
            >
              <span>Explore All Technologies</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <p className="text-xs text-muted-foreground mt-3 opacity-75">
              Don't miss out on cutting-edge solutions
            </p>
          </div>
        </div>
      </section>

      {/* Featured Platforms */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="section-badge">Ecosystem</span>
            <h2 className="section-heading mt-6">Featured Platforms</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: GraduationCap, name: "Toko Academy", desc: "Digital learning & tech education platform", color: "text-primary", link: "https://tokoacademy.org", external: true },
              { icon: Code, name: "Technologies", desc: "Cutting-edge technology services & solutions", color: "text-accent", link: "/technologies", external: false },
              { icon: Wallet, name: "TokoPay", desc: "Chat-based fintech solution on WhatsApp & Telegram", color: "text-primary" },
              { icon: ShoppingCart, name: "Riba Africa", desc: "Multi-store e-commerce platform for sellers", color: "text-accent" },
              { icon: ShoppingCart, name: "Dinki Africa", desc: "African fashion marketplace", color: "text-primary" },
              { icon: Video, name: "Bloom Shorts", desc: "Short-form digital content platform", color: "text-accent" },
              { icon: MessageSquare, name: "WhatsApp Scheduler Pro", desc: "Automate & schedule WhatsApp messages", color: "text-primary" },
            ].map((platform) => (
              <div key={platform.name} className="glass-card p-8 hover-lift group">
                <platform.icon className={`${platform.color} mb-4`} size={32} />
                <h3 className="font-display text-xl font-semibold text-foreground">{platform.name}</h3>
                <p className="text-muted-foreground text-sm mt-2 leading-relaxed">{platform.desc}</p>
                {platform.link ? (
                  platform.external ? (
                    <a href={platform.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-4 text-primary text-sm font-medium hover:gap-3 transition-all">
                      Explore <ArrowRight size={14} />
                    </a>
                  ) : (
                    <Link to={platform.link} className="inline-flex items-center gap-2 mt-4 text-primary text-sm font-medium hover:gap-3 transition-all">
                      Explore <ArrowRight size={14} />
                    </Link>
                  )
                ) : (
                  <ArrowRight className="text-muted-foreground group-hover:text-primary mt-4 transition-colors" size={18} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="section-badge">Get In Touch</span>
            <h2 className="section-heading mt-6">Contact Us</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-8">
            <div className="glass-card p-8 text-center hover-lift">
              <Mail className="text-primary mx-auto mb-4" size={28} />
              <h3 className="font-display text-lg font-semibold text-foreground mb-3">Email</h3>
              <div className="space-y-1 text-sm text-muted-foreground">
                <p>info@toko.com.ng</p>
                <p>support@toko.com.ng</p>
                <p>academy@tokoacademy.org</p>
              </div>
            </div>
            <div className="glass-card p-8 text-center hover-lift">
              <Phone className="text-primary mx-auto mb-4" size={28} />
              <h3 className="font-display text-lg font-semibold text-foreground mb-3">Phone</h3>
              <div className="space-y-1 text-sm text-muted-foreground">
                <p>+234 808 825 6055</p>
                <p>+234 812 856 1493</p>
              </div>
            </div>
            <div className="glass-card p-8 text-center hover-lift">
              <MapPin className="text-primary mx-auto mb-4" size={28} />
              <h3 className="font-display text-lg font-semibold text-foreground mb-3">Location</h3>
              <p className="text-sm text-muted-foreground">2 Bekaji Road, Bekaji, Yola, Jimeta 640261, Adamawa</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-6 text-center">
          <h2 className="section-heading">Join the Toko Ecosystem</h2>
          <p className="mt-6 text-muted-foreground max-w-xl mx-auto text-lg">Build the future with us across education, commerce, fintech, and technology.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 mt-10 px-10 py-4 bg-primary text-primary-foreground font-medium rounded-sm hover:bg-primary/90 transition-colors">
            Connect with us <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
