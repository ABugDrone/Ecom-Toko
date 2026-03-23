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
