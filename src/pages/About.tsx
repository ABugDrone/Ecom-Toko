import Layout from "@/components/Layout";
import aboutTeamImg from "@/assets/about-team.jpg";
import academyPresentation from "@/assets/academy-presentation.png";
import academyGraduation from "@/assets/academy-graduation.png";
import academyClassroom from "@/assets/academy-classroom.png";
import { Target, Eye, Heart, Lightbulb, Award, Users, Zap, Sparkles } from "lucide-react";

const values = [
  { icon: Lightbulb, label: "Innovation" },
  { icon: Award, label: "Excellence" },
  { icon: Heart, label: "Integrity" },
  { icon: Zap, label: "Impact" },
  { icon: Users, label: "Collaboration" },
  { icon: Sparkles, label: "Creative Energy" },
];

const About = () => {
  return (
    <Layout>
      <section className="relative py-24">
        <div className="absolute inset-0">
          <img src={aboutTeamImg} alt="About Toko team" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/85" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <span className="section-badge">About Us</span>
          <h1 className="section-heading mt-6 max-w-3xl">The Story Behind the Ecosystem</h1>
        </div>
      </section>
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Ecom Toko Enterprise operates under the brand <span className="text-foreground font-semibold">Toko</span>, a multi-sector digital ecosystem focused on education, commerce, fintech, and enterprise technology.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Our mission is to build scalable platforms that solve real-world problems across Africa and beyond.
              </p>
              <div className="mt-8 space-y-3 text-sm text-muted-foreground">
                <p><span className="text-foreground font-medium">Parent Company:</span> Ecom Toko Enterprise</p>
                <p><span className="text-foreground font-medium">Brand:</span> Toko</p>
                <p><span className="text-foreground font-medium">Core Divisions:</span> Toko Academy, Tokotechnologies</p>
                <p><span className="text-foreground font-medium">Subsidiaries:</span> TokoPay, Riba Africa, Dinki Africa, Bloom Shorts, WhatsApp Scheduler Pro</p>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden">
              <img src={aboutTeamImg} alt="Toko Team" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div className="glass-card p-10">
            <Eye className="text-primary mb-4" size={32} />
            <h3 className="font-display text-2xl font-bold text-foreground">Our Vision</h3>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              To build a globally recognized digital ecosystem that empowers people and businesses through technology.
            </p>
          </div>
          <div className="glass-card p-10">
            <Target className="text-accent mb-4" size={32} />
            <h3 className="font-display text-2xl font-bold text-foreground">Our Mission</h3>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              To create impactful digital products, deliver scalable IT solutions, and provide accessible education for the next generation.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="section-badge">Core Values</span>
            <h2 className="section-heading mt-6">What Drives Us</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {values.map((v) => (
              <div key={v.label} className="glass-card p-6 text-center hover-lift">
                <v.icon className="text-primary mx-auto mb-3" size={28} />
                <p className="text-sm font-medium text-foreground">{v.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academy Gallery */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="section-badge">Life at Toko</span>
            <h2 className="section-heading mt-6">Our Academy in Action</h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              From classroom training to graduation ceremonies — empowering the next generation of tech talent.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="glass-card overflow-hidden hover-lift">
              <img src={academyPresentation} alt="Academy presentation session" className="w-full h-64 object-cover" />
              <div className="p-4">
                <p className="text-sm font-medium text-foreground">Instructor-Led Sessions</p>
                <p className="text-xs text-muted-foreground mt-1">Hands-on learning with industry professionals</p>
              </div>
            </div>
            <div className="glass-card overflow-hidden hover-lift">
              <img src={academyGraduation} alt="Academy graduation ceremony" className="w-full h-64 object-cover" />
              <div className="p-4">
                <p className="text-sm font-medium text-foreground">Graduation & Certification</p>
                <p className="text-xs text-muted-foreground mt-1">Celebrating student achievements and milestones</p>
              </div>
            </div>
            <div className="glass-card overflow-hidden hover-lift">
              <img src={academyClassroom} alt="Academy classroom training" className="w-full h-64 object-cover" />
              <div className="p-4">
                <p className="text-sm font-medium text-foreground">Classroom Training</p>
                <p className="text-xs text-muted-foreground mt-1">Modern facilities for collaborative learning</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
