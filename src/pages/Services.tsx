import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { GraduationCap, Monitor, Code, Globe, Smartphone, Brain, Cloud, Users, ArrowRight } from "lucide-react";
import servicesHeroImg from "@/assets/services-hero.jpg";

const techServices = [
  { icon: Code, title: "Software Development", desc: "Custom-built applications for startups and enterprises." },
  { icon: Globe, title: "Web Development", desc: "Responsive and scalable web platforms." },
  { icon: Smartphone, title: "Mobile App Development", desc: "Android and iOS solutions with modern UX." },
  { icon: Monitor, title: "IT Consulting", desc: "Strategic advisory for digital transformation." },
  { icon: Cloud, title: "Cloud & DevOps", desc: "Infrastructure, deployment pipelines, and automation." },
  { icon: Brain, title: "AI & Data Solutions", desc: "Machine learning systems, AI Agents, analytics, and automation tools." },
];

const Services = () => {
  return (
    <Layout>
      <section className="relative py-24">
        <div className="absolute inset-0">
          <img src={servicesHeroImg} alt="Technology services" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/85" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <span className="section-badge">Services</span>
          <h1 className="section-heading mt-6 max-w-3xl">Technology & Education Services</h1>
          <p className="mt-6 text-muted-foreground max-w-2xl text-lg leading-relaxed">
            Our services span across technology, education, and enterprise solutions, delivered through our core divisions: Toko Academy and Tokotechnologies.
          </p>
        </div>
      </section>

      {/* Education Services */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-4 mb-12">
            <GraduationCap className="text-primary" size={36} />
            <div>
              <span className="text-xs uppercase tracking-widest text-primary">Core Offering</span>
              <h2 className="font-display text-3xl font-bold text-foreground">Education & Training</h2>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-card p-10">
              <h3 className="font-display text-xl font-bold text-foreground mb-4">Tech Education (Toko Academy)</h3>
              <p className="text-muted-foreground text-sm mb-6">Our flagship service focused on equipping individuals with in-demand digital and technical skills.</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {["Software Development Training", "Data Science & AI Training", "Web & Mobile Development", "Cloud & DevOps Training", "Beginner to Advanced Programs"].map((item) => (
                  <li key={item} className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary" />{item}</li>
                ))}
              </ul>
            </div>
            <div className="glass-card p-10">
              <h3 className="font-display text-xl font-bold text-foreground mb-4">Corporate Training</h3>
              <p className="text-muted-foreground text-sm mb-6">Tailored training programs for organizations looking to upskill their workforce.</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {["Staff digital transformation training", "Technical skill development", "Custom curriculum for companies, NGOs & Government", "Workshops & bootcamps"].map((item) => (
                  <li key={item} className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent" />{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Services */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-4 mb-12">
            <Monitor className="text-primary" size={36} />
            <h2 className="font-display text-3xl font-bold text-foreground">Technology Services</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {techServices.map((s) => (
              <div key={s.title} className="glass-card p-8 hover-lift">
                <s.icon className="text-primary mb-4" size={28} />
                <h3 className="font-display text-lg font-semibold text-foreground">{s.title}</h3>
                <p className="text-muted-foreground text-sm mt-2">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrated Advantage */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <span className="section-badge">Integrated Advantage</span>
          <h2 className="section-heading mt-6">Education Meets Execution</h2>
          <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
            We train talents through Toko Academy, deploy solutions through Tokotechnologies, and build products within our ecosystem — creating a continuous cycle of innovation, talent development, and real-world impact.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 mt-10 px-10 py-4 bg-primary text-primary-foreground font-medium rounded-sm hover:bg-primary/90 transition-colors">
            Connect with us <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
