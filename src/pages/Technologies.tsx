import Layout from "@/components/Layout";
import { Code, Globe, Smartphone, Monitor, Cloud, Brain, ArrowRight, CheckCircle } from "lucide-react";
import servicesTechImg from "@/assets/services-tech.jpg";

const technologies = [
  {
    icon: Code,
    name: "Software Development",
    desc: "Custom-built applications for startups and enterprise.",
    details: "We specialize in creating robust, scalable software solutions tailored to your business needs. From concept to deployment, our team delivers high-quality applications using modern development practices.",
    features: [
      "Custom web applications",
      "Enterprise software solutions", 
      "API development & integration",
      "Database design & optimization",
      "Code review & quality assurance",
      "Legacy system modernization"
    ],
    technologies: ["React", "Node.js", "Python", "Java", "PostgreSQL", "MongoDB"],
    color: "text-primary"
  },
  {
    icon: Globe,
    name: "Web Development", 
    desc: "Responsive and scalable web platforms.",
    details: "Building modern, responsive websites and web applications that deliver exceptional user experiences across all devices. We focus on performance, accessibility, and scalability.",
    features: [
      "Responsive web design",
      "E-commerce platforms",
      "Content management systems",
      "Progressive web apps (PWA)",
      "SEO optimization",
      "Performance optimization"
    ],
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "WordPress", "Shopify"],
    color: "text-accent"
  },
  {
    icon: Smartphone,
    name: "Mobile App Development",
    desc: "Android and iOS solutions with modern UX.",
    details: "Creating native and cross-platform mobile applications that provide seamless user experiences. Our apps are designed for performance, security, and user engagement.",
    features: [
      "Native iOS & Android apps",
      "Cross-platform development",
      "UI/UX design",
      "App store optimization",
      "Push notifications",
      "Offline functionality"
    ],
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "Expo"],
    color: "text-primary"
  },
  {
    icon: Monitor,
    name: "IT Consulting",
    desc: "Strategic advisory for digital transformation.",
    details: "Providing expert guidance to help organizations navigate their digital transformation journey. We assess current systems, identify opportunities, and create strategic roadmaps for success.",
    features: [
      "Digital transformation strategy",
      "Technology assessment",
      "System architecture design",
      "Process optimization",
      "Vendor selection & management",
      "Change management support"
    ],
    technologies: ["Enterprise Architecture", "Agile Methodologies", "ITIL", "DevOps", "Security Frameworks"],
    color: "text-accent"
  },
  {
    icon: Cloud,
    name: "Cloud & DevOps",
    desc: "Infrastructure, deployment pipelines, and automation.",
    details: "Implementing cloud-native solutions and DevOps practices to improve deployment speed, reliability, and scalability. We help organizations leverage the full potential of cloud computing.",
    features: [
      "Cloud migration & setup",
      "CI/CD pipeline implementation",
      "Infrastructure as Code",
      "Container orchestration",
      "Monitoring & logging",
      "Security & compliance"
    ],
    technologies: ["AWS", "Azure", "Docker", "Kubernetes", "Terraform", "Jenkins"],
    color: "text-primary"
  },
  {
    icon: Brain,
    name: "AI & Data Solutions",
    desc: "Machine learning systems, AI Agents, analytics, and automation tools.",
    details: "Leveraging artificial intelligence and data analytics to solve complex business problems. From predictive analytics to intelligent automation, we help organizations make data-driven decisions.",
    features: [
      "Machine learning models",
      "AI chatbots & agents",
      "Data analytics & visualization",
      "Predictive analytics",
      "Natural language processing",
      "Computer vision solutions"
    ],
    technologies: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "OpenAI API", "Tableau"],
    color: "text-accent"
  },
];

const Technologies = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24">
        <div className="absolute inset-0">
          <img src={servicesTechImg} alt="Technology services" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/85" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <span className="section-badge">Technology Services</span>
          <h1 className="section-heading mt-6 max-w-3xl">Cutting-Edge Technology Solutions</h1>
          <p className="mt-6 text-muted-foreground max-w-2xl text-lg">
            Comprehensive technology services powered by modern tools and frameworks, delivering scalable solutions for businesses of all sizes.
          </p>
        </div>
      </section>

      {/* Technology Services Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {technologies.map((tech) => (
              <div key={tech.name} className="glass-card p-8 hover-lift group">
                <tech.icon className={`${tech.color} mb-4`} size={32} />
                <h3 className="font-display text-xl font-bold text-foreground mb-3">{tech.name}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{tech.desc}</p>
                <ArrowRight className="text-muted-foreground group-hover:text-primary mt-4 transition-colors" size={18} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="pb-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="section-badge">Service Details</span>
            <h2 className="section-heading mt-6 text-3xl md:text-4xl">What We Deliver</h2>
          </div>
          
          <div className="space-y-12">
            {technologies.map((tech, index) => (
              <div key={tech.name} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center gap-3 mb-6">
                    <tech.icon className={`${tech.color}`} size={32} />
                    <h3 className="font-display text-2xl font-bold text-foreground">{tech.name}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-6">{tech.details}</p>
                  
                  <div className="grid sm:grid-cols-2 gap-4 mb-6">
                    {tech.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <CheckCircle className="text-primary flex-shrink-0" size={16} />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className={`glass-card p-6 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <h4 className="font-display text-lg font-semibold text-foreground mb-4">Technologies & Tools</h4>
                  <div className="flex flex-wrap gap-2">
                    {tech.technologies.map((technology) => (
                      <span key={technology} className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20">
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-6 text-center">
          <h2 className="section-heading text-3xl md:text-4xl">Ready to Transform Your Business?</h2>
          <p className="mt-6 text-muted-foreground max-w-xl mx-auto text-lg">
            Let's discuss how our technology services can help you achieve your digital transformation goals.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mt-10">
            <a href="/contact" className="px-8 py-3 bg-primary text-primary-foreground font-medium rounded-sm hover:bg-primary/90 transition-colors">
              Start Your Project
            </a>
            <a href="/services" className="px-8 py-3 border border-foreground/20 text-foreground font-medium rounded-sm hover:border-primary hover:text-primary transition-colors inline-flex items-center gap-2">
              View All Services <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Technologies;