import { Link } from "react-router-dom";
import { Phone, MessageCircle, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const footerLinks = [
  { label: "About", href: "/about" },
  { label: "Foam Wash", href: "/foam-wash" },
  { label: "Regular Cleaning", href: "/regular-cleaning" },
  { label: "Gallery", href: "/gallery" },
  { label: "Support", href: "/support" },
  { label: "Book Now", href: "/booking" },
];

const Footer = () => {
  return (
    <footer className="dark-section border-t border-white/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(225,30%,8%)] via-[hsl(225,25%,5%)] to-[hsl(225,20%,3%)]" />
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[180px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[150px] pointer-events-none" />
      <div className="absolute inset-0 noise opacity-10" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center">
                <Droplets className="w-4 h-4 text-primary" />
              </div>
              <span className="font-display text-xl font-bold">
                VELOCI<span className="text-gradient">WASH</span>
              </span>
            </Link>
            <p className="text-sm text-white/60 leading-relaxed max-w-xs">
              Premium doorstep car care services. We bring our own water, electricity, and professional-grade products.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-white mb-5">Quick Links</h4>
            <nav className="grid grid-cols-2 gap-2">
              {footerLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="text-sm text-white/60 hover:text-primary transition-colors py-1"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-white mb-5">Contact</h4>
            <div className="space-y-3">
              <a href="tel:+919676031464" className="flex items-center gap-3 text-sm text-white/60 hover:text-primary transition-colors">
                <Phone className="w-4 h-4 text-primary" />
                +91-96760 31464
              </a>
              <a href="https://wa.me/919676031464" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-white/60 hover:text-primary transition-colors">
                <MessageCircle className="w-4 h-4 text-primary" />
                WhatsApp Chat
              </a>
              <div className="flex items-start gap-3 text-sm text-white/60">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                Doorstep — We come to you
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="divider" />
        <div className="py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-xs text-white/40">
            © {new Date().getFullYear()} Velociwash. All rights reserved. Developed by{" "}
            <a href="https://octaleads.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors font-medium">
              OctaLeads Pvt. Ltd.
            </a>
          </span>
          <div className="flex items-center gap-6 text-xs text-white/40">
            <Link to="/support" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/support" className="hover:text-primary transition-colors">Terms of Service</Link>
            <a href="/sitemap.xml" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
