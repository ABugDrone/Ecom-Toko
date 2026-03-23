import Layout from "@/components/Layout";
import { GraduationCap, MessageSquare, ShoppingCart, Video, Clock, BarChart3, ArrowRight, ExternalLink } from "lucide-react";
import productsHeroImg from "@/assets/products-hero.jpg";

const products = [
  {
    icon: GraduationCap,
    name: "Toko Academy",
    tag: "Core Product • EdTech",
    desc: "A digital learning platform offering tech education and skill development. Structured courses, bootcamps, and hands-on learning.",
    link: "https://tokoacademy.org",
    features: ["Software Development", "Data Science & AI", "Cloud & DevOps", "Bootcamps"],
  },
  {
    icon: MessageSquare,
    name: "TokoPay",
    tag: "Fintech",
    desc: "A chatbot-powered fintech solution that allows users to perform everyday transactions simply by chatting. Available on WhatsApp & Telegram.",
    features: ["Buy airtime & data", "Pay electricity bills", "Cable subscriptions", "Voice note transactions"],
  },
  {
    icon: ShoppingCart,
    name: "Riba Africa",
    tag: "E-commerce",
    desc: "A modern e-commerce platform that empowers sellers to create their own online stores, manage catalogs, and sell directly to customers.",
    features: ["Multi-store support", "Product catalogs", "Direct sales", "Scalable infrastructure"],
  },
  {
    icon: ShoppingCart,
    name: "Dinki Africa",
    tag: "E-commerce • Fashion",
    desc: "A specialized marketplace for buying and selling African fashion products. Promoting African creativity and commerce through digital access.",
    features: ["African wear & fashion", "Local designers", "Cultural styles", "Digital storefront"],
  },
  {
    icon: Video,
    name: "Bloom Shorts",
    tag: "Media",
    desc: "A short-form content platform focused on engaging, creative, and impactful digital storytelling.",
    features: ["Short-form content", "Creative tools", "Digital storytelling"],
  },
  {
    icon: Clock,
    name: "WhatsApp Scheduler Pro",
    tag: "SaaS",
    desc: "A productivity tool that enables users to schedule WhatsApp messages, automate communication, and improve business efficiency.",
    features: ["Schedule messages", "Automate comms", "Business efficiency"],
  },
  {
    icon: BarChart3,
    name: "Reporting System",
    tag: "Enterprise",
    desc: "A structured reporting and analytics platform for organizations.",
    link: "https://report.tokoacademy.org",
    features: ["Analytics dashboard", "Structured reports", "Organization management"],
  },
];

const Products = () => {
  return (
    <Layout>
      <section className="relative py-24">
        <div className="absolute inset-0">
          <img src={productsHeroImg} alt="Product ecosystem" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/85" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <span className="section-badge">Products</span>
          <h1 className="section-heading mt-6 max-w-3xl">Our Ecosystem of Platforms</h1>
          <p className="mt-6 text-muted-foreground max-w-2xl text-lg">
            Innovative platforms solving real-world problems across education, finance, commerce, and productivity.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="container mx-auto px-6 space-y-8">
          {products.map((p) => (
            <div key={p.name} className="glass-card p-8 md:p-10 grid md:grid-cols-[1fr_auto] gap-8 items-start">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <p.icon className="text-primary" size={28} />
                  <div>
                    <h3 className="font-display text-xl font-bold text-foreground">{p.name}</h3>
                    <span className="text-xs text-primary uppercase tracking-wider">{p.tag}</span>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">{p.desc}</p>
                {p.link && (
                  <a href={p.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-4 text-primary text-sm font-medium hover:gap-3 transition-all">
                    Visit Platform <ExternalLink size={14} />
                  </a>
                )}
              </div>
              <div className="flex flex-wrap gap-2">
                {p.features.map((f) => (
                  <span key={f} className="px-3 py-1 text-xs rounded-full border border-border text-muted-foreground">{f}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Products;
