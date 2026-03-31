import { Link } from "react-router-dom";
import { Phone, MessageCircle, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const footerLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Support", href: "/support" },
  { label: "Book Now", href: "/booking" },
  { label: "Sitemap", href: "/sitemap.xml", external: true },
];

const Footer = () => {
  return (
    <footer className="bg-foreground">
      <div className="container mx-auto px-6">
        <div className="py-6 md:py-12 grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10">
          {/* Brand */}
          <div className="text-center md:text-left">
            <Link to="/" className="mb-4 inline-block">
              <img src={logo} alt="Velociwash Logo" className="h-20 -my-3 w-auto brightness-0 invert mx-auto md:mx-0" />
            </Link>
            <p className="text-sm text-white/50 leading-relaxed max-w-xs">
              Premium doorstep car care services. We bring professional-grade products to your doorstep.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-semibold text-xs uppercase tracking-wider text-white/70 mb-4">Quick Links</h4>
            <nav className="grid grid-cols-2 gap-1.5">
              {footerLinks.map((link) =>
                link.external ? (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white/50 hover:text-primary transition-colors py-1"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.label}
                    to={link.href}
                    className="text-sm text-white/50 hover:text-primary transition-colors py-1"
                  >
                    {link.label}
                  </Link>
                )
              )}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-xs uppercase tracking-wider text-white/70 mb-4">Contact</h4>
            <div className="space-y-2.5">
              <a href="tel:+919676031464" className="flex items-center gap-2.5 text-sm text-white/50 hover:text-primary transition-colors">
                <Phone className="w-3.5 h-3.5 text-primary" />
                +91-96760 31464
              </a>
              <a href="https://wa.me/919676031464" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 text-sm text-white/50 hover:text-primary transition-colors">
                <MessageCircle className="w-3.5 h-3.5 text-primary" />
                WhatsApp Chat
              </a>
              <div className="flex items-start gap-2.5 text-sm text-white/50">
                <MapPin className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                H.no-1/5, Shop no.3, MIG, Phase III, Near MIG Bus Stop, KPHB - 500072
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-center">
          <div className="text-xs text-white/40">
            <span>© {new Date().getFullYear()} Velociwash. All rights reserved.</span>
            <br className="md:hidden" />
            <span className="hidden md:inline"> </span>
            <span>Developed by{" "}
              <a href="https://octaleads.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors">
                OctaLeads Pvt. Ltd.
              </a>
            </span>
          </div>
          <div className="flex items-center gap-5 text-xs text-white/40">
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
