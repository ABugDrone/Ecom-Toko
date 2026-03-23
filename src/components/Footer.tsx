import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <span className="font-display text-2xl font-bold text-foreground">TOKO</span>
            <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
              Building Africa's digital future through technology, commerce & education.
            </p>
            <div className="flex gap-3 mt-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
                <Facebook size={16} />
              </a>
              <a href="https://instagram.com/tokoacademy" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
                <Instagram size={16} />
              </a>
              <a href="https://x.com/tokoacademy" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
                <Twitter size={16} />
              </a>
              <a href="https://linkedin.com/company/tokoacademy" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
                <Linkedin size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground mb-6">Quick Links</h4>
            <div className="space-y-3">
              {["About", "Services", "Products", "Technologies", "Portfolio", "Contact"].map((item) => (
                <Link key={item} to={`/${item.toLowerCase()}`} className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Ecosystem */}
          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground mb-6">Ecosystem</h4>
            <div className="space-y-3">
              {["Toko Academy", "TokoPay", "Riba Africa", "Dinki Africa", "Bloom Shorts", "WhatsApp Scheduler Pro"].map((item) => (
                <span key={item} className="block text-sm text-muted-foreground">{item}</span>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground mb-6">Contact</h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p>info@tokoacademy.org</p>
              <p>+234 808 825 6055</p>
              <p>+234 812 856 1493</p>
              <p>Yola, Nigeria</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Ecom Toko Enterprise. All rights reserved.</p>
          <p className="text-xs text-muted-foreground">Powered by <span className="text-primary">Toko</span></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
