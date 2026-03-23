import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import portfolioHeroImg from "@/assets/portfolio-hero.jpg";

const projects = [
  { name: "Toko Academy Platform", type: "Internal", desc: "Full-stack digital learning platform with course management, student tracking, and certification.", tech: ["React", "Node.js", "PostgreSQL"], category: "Web Application" },
  { name: "TokoPay Chatbot", type: "Internal", desc: "AI-powered chatbot for financial transactions on WhatsApp and Telegram.", tech: ["Python", "WhatsApp API", "NLP"], category: "AI/ML Solution" },
  { name: "Riba Africa Marketplace", type: "Internal", desc: "Multi-vendor e-commerce platform with store builder and payment integration.", tech: ["React", "Node.js", "Stripe"], category: "E-commerce System" },
  { name: "Dinki Africa", type: "Internal", desc: "Fashion-focused marketplace connecting African designers to global markets.", tech: ["React", "Firebase", "Algolia"], category: "E-commerce System" },
  { name: "WhatsApp Scheduler Pro", type: "Internal", desc: "SaaS automation tool for scheduling and managing WhatsApp communications.", tech: ["React", "Node.js", "WhatsApp API"], category: "SaaS Platform" },
  { name: "Toko 360 Reporting", type: "Internal", desc: "Staff internal reporting system with analytics dashboard.", tech: ["React", "PostgreSQL", "Charts"], category: "Enterprise Tool" },
];

const Portfolio = () => {
  return (
    <Layout>
      <section className="relative py-24">
        <div className="absolute inset-0">
          <img src={portfolioHeroImg} alt="Portfolio showcase" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/85" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <span className="section-badge">Portfolio</span>
          <h1 className="section-heading mt-6 max-w-3xl">Projects & Platforms</h1>
          <p className="mt-6 text-muted-foreground max-w-2xl text-lg">
            A showcase of projects and platforms developed within the Toko ecosystem by Tokotechnologies.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <div key={p.name} className="glass-card p-8 hover-lift">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs uppercase tracking-wider text-primary">{p.category}</span>
                <span className="text-xs px-2 py-1 rounded border border-border text-muted-foreground">{p.type}</span>
              </div>
              <h3 className="font-display text-xl font-bold text-foreground">{p.name}</h3>
              <p className="text-muted-foreground text-sm mt-2 leading-relaxed">{p.desc}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {p.tech.map((t) => (
                  <span key={t} className="px-2 py-0.5 text-xs rounded bg-muted text-muted-foreground">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Client Testimonials & Partners */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="section-badge">Client Success</span>
            <h2 className="section-heading mt-6 text-3xl md:text-4xl">What Our Clients Say</h2>
            <p className="mt-6 text-muted-foreground max-w-2xl mx-auto text-lg">
              Testimonials from organizations we've helped transform digitally
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                company: "TechCorp Solutions",
                logo: "TC",
                testimonial: "Toko transformed our digital presence with a custom web application that increased our efficiency by 40%.",
                author: "Sarah Johnson",
                role: "CTO"
              },
              {
                company: "InnovateLab",
                logo: "IL",
                testimonial: "The mobile app developed by Tokotechnologies exceeded our expectations and delivered on time.",
                author: "Michael Chen",
                role: "Product Manager"
              },
              {
                company: "DataFlow Systems",
                logo: "DFS",
                testimonial: "Their AI solutions helped us automate our processes and reduce operational costs significantly.",
                author: "Emily Rodriguez",
                role: "Operations Director"
              },
              {
                company: "CloudTech Solutions",
                logo: "CTS",
                testimonial: "Professional team with deep technical expertise. They delivered a robust cloud infrastructure solution.",
                author: "David Kim",
                role: "Technical Lead"
              },
              {
                company: "Digital Dynamics",
                logo: "DD",
                testimonial: "The e-commerce platform they built for us has driven a 60% increase in online sales.",
                author: "Lisa Thompson",
                role: "Marketing Director"
              },
              {
                company: "FutureTech Inc",
                logo: "FTI",
                testimonial: "Excellent project management and communication throughout the development process.",
                author: "James Wilson",
                role: "CEO"
              }
            ].map((testimonial) => (
              <div key={testimonial.company} className="glass-card p-8 hover-lift">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center text-primary-foreground font-bold text-sm">
                    {testimonial.logo}
                  </div>
                  <div>
                    <h4 className="font-display text-lg font-semibold text-foreground">{testimonial.company}</h4>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 italic">
                  "{testimonial.testimonial}"
                </p>
                <div className="border-t border-border pt-4">
                  <p className="text-sm font-medium text-foreground">{testimonial.author}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Partner Logos */}
          <div className="text-center mb-12">
            <h3 className="font-display text-xl font-semibold text-foreground mb-8">Trusted Partners</h3>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-6 items-center">
              {[
                { name: "AWS Partner", logo: "AWS" },
                { name: "Google Cloud", logo: "GCP" },
                { name: "Microsoft Azure", logo: "AZ" },
                { name: "Stripe", logo: "ST" },
                { name: "PayStack", logo: "PS" },
                { name: "Vercel", logo: "VC" }
              ].map((partner) => (
                <div key={partner.name} className="glass-card p-4 hover-lift group text-center">
                  <div className="w-12 h-12 mx-auto bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold text-xs">
                    {partner.logo}
                  </div>
                  <p className="text-xs text-muted-foreground mt-2 group-hover:text-foreground transition-colors">
                    {partner.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-secondary text-center">
        <div className="container mx-auto px-6">
          <h2 className="section-heading">Have a Project in Mind?</h2>
          <p className="mt-4 text-muted-foreground">Let Tokotechnologies bring your vision to life.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 mt-8 px-10 py-4 bg-primary text-primary-foreground font-medium rounded-sm hover:bg-primary/90 transition-colors">
            Start a Project <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
