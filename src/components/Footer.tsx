import { Link } from "react-router-dom";
import { Droplets, Phone, MessageCircle, ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="container mx-auto px-6">
        {/* Main footer */}
        <div className="grid md:grid-cols-4 gap-10 py-16">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Droplets className="w-6 h-6 text-primary" />
              <span className="font-display text-xl font-bold">
                VELOCI<span className="text-gradient">WASH</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              Where Every Detail Shines. Premium doorstep car care since 2026.
            </p>
            <div className="flex gap-3">
              <a href="tel:+919676031464" className="w-10 h-10 rounded-xl bg-secondary border border-border flex items-center justify-center hover:border-primary/30 transition-colors">
                <Phone className="w-4 h-4 text-muted-foreground" />
              </a>
              <a href="https://wa.me/919676031464" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-secondary border border-border flex items-center justify-center hover:border-primary/30 transition-colors">
                <MessageCircle className="w-4 h-4 text-muted-foreground" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-5 text-sm uppercase tracking-wider">Quick Links</h4>
            <div className="flex flex-col gap-3">
              {[
                { label: "Home", href: "/" },
                { label: "Services", href: "/services" },
                { label: "About Us", href: "/about" },
                { label: "Gallery", href: "/gallery" },
                { label: "Book a Wash", href: "/booking" },
              ].map((link) => (
                <Link key={link.label} to={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 group">
                  <ArrowRight className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-5 text-sm uppercase tracking-wider">Services</h4>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              <span>Doorstep Foam Wash</span>
              <span>Interior Detailing</span>
              <span>Ceramic Coating</span>
              <span>Regular Cleaning</span>
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-5 text-sm uppercase tracking-wider">Contact</h4>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              <a href="tel:+919676031464" className="hover:text-foreground transition-colors">+91 96760 31464</a>
              <a href="https://wa.me/919676031464" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">WhatsApp Chat</a>
              <span>7:00 AM – 8:00 PM</span>
              <span>All Days Open</span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-xs text-muted-foreground">
            © 2026 Velociwash. All rights reserved.
          </div>
          <Link to="/booking" className="text-xs text-primary hover:text-primary/80 font-medium transition-colors flex items-center gap-1">
            Book a Wash <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
