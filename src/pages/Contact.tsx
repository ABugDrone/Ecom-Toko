import { useState } from "react";
import Layout from "@/components/Layout";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import contactHeroImg from "@/assets/contact-hero.jpg";

const contactInfo = [
  { icon: Mail, label: "Email", items: ["info@toko.com.ng", "support@toko.com.ng", "academy@tokoacademy.org"] },
  { icon: Phone, label: "Phone", items: ["+234 808 825 6055", "+234 812 856 1493"] },
  { icon: MapPin, label: "Location", items: ["2 Bekaji Road, Bekaji, Yola, Jimeta 640261, Adamawa"] },
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message! We'll get back to you soon.");
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <Layout>
      <section className="relative py-24">
        <div className="absolute inset-0">
          <img src={contactHeroImg} alt="Contact us" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/85" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <span className="section-badge">Contact Us</span>
          <h1 className="section-heading mt-6 max-w-3xl">Let's Build Something Impactful Together</h1>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-10">
              {contactInfo.map((c) => (
                <div key={c.label}>
                  <div className="flex items-center gap-3 mb-3">
                    <c.icon className="text-primary" size={20} />
                    <h3 className="font-display text-lg font-semibold text-foreground">{c.label}</h3>
                  </div>
                  <div className="space-y-1 pl-8">
                    {c.items.map((item) => (
                      <p key={item} className="text-muted-foreground text-sm">{item}</p>
                    ))}
                  </div>
                </div>
              ))}

              <div className="glass-card p-8">
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">Department Emails</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p><span className="text-foreground">General:</span> info@toko.com.ng</p>
                  <p><span className="text-foreground">Support:</span> support@toko.com.ng</p>
                  <p><span className="text-foreground">Tech:</span> tech@toko.com.ng</p>
                  <p><span className="text-foreground">Academy:</span> academy@toko.com.ng</p>
                  <p><span className="text-foreground">Partnerships:</span> partnerships@toko.com.ng</p>
                </div>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="glass-card p-8 md:p-10 space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Name</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 bg-muted border border-border rounded-sm text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 bg-muted border border-border rounded-sm text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Phone</label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full px-4 py-3 bg-muted border border-border rounded-sm text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder="+234..."
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 bg-muted border border-border rounded-sm text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>
              <button
                type="submit"
                className="w-full px-8 py-3 bg-primary text-primary-foreground font-medium rounded-sm hover:bg-primary/90 transition-colors inline-flex items-center justify-center gap-2"
              >
                Send Message <ArrowRight size={16} />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <span className="section-badge">Find Us</span>
            <h2 className="section-heading mt-6">Visit Our Office</h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              Located in Yola, Nigeria — come see us or use the map to navigate directly to our office.
            </p>
          </div>
          <div className="glass-card overflow-hidden rounded-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3937.8139999161854!2d12.442039575114805!3d9.260909490810034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10fc6b0acef83f51%3A0xd2e69037df75b3d9!2sToko%20Academy!5e0!3m2!1sen!2sng!4v1774253918417!5m2!1sen!2sng"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Toko Academy - Yola, Nigeria"
              className="w-full"
            />
          </div>
          <div className="mt-6 text-center">
            <a
              href="https://maps.app.goo.gl/oicB2J5tt21Dz6za7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-sm hover:bg-primary/90 transition-colors"
            >
              <MapPin size={16} />
              Open in Google Maps
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
