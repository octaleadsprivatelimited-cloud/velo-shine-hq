import { Link } from "react-router-dom";
import { Droplets } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-10">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Droplets className="w-6 h-6 text-primary" />
              <span className="font-display text-xl font-bold">
                VELOCI<span className="text-gradient">WASH</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Where Every Detail Shines. Premium doorstep car care since 2026.
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {[
                { label: "Home", href: "/" },
                { label: "Services", href: "/services" },
                { label: "About Us", href: "/about" },
                { label: "Gallery", href: "/gallery" },
              ].map((link) => (
                <Link key={link.label} to={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Services</h4>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <span>Foam Wash</span>
              <span>Interior Detailing</span>
              <span>Ceramic Coating</span>
              <span>Regular Cleaning</span>
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Contact</h4>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <a href="tel:+919676031464" className="hover:text-foreground transition-colors">+91 96760 31464</a>
              <a href="https://wa.me/919676031464" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">WhatsApp</a>
              <span>7:00 AM – 8:00 PM</span>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-muted-foreground">
            © 2026 Velociwash. All rights reserved.
          </div>
          <Link to="/booking" className="text-sm text-primary hover:text-primary/80 font-medium transition-colors">
            Book a Wash →
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
