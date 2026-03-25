import { Link } from "react-router-dom";
import { Droplets } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card/50 py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-2">
            <Droplets className="w-5 h-5 text-primary" />
            <span className="font-display text-lg font-bold">
              VELOCI<span className="text-gradient">WASH</span>
            </span>
          </Link>

          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            <Link to="/about" className="hover:text-foreground transition-colors">About</Link>
            <Link to="/foam-wash" className="hover:text-foreground transition-colors">Foam Wash</Link>
            <Link to="/regular-cleaning" className="hover:text-foreground transition-colors">Regular Cleaning</Link>
            <Link to="/gallery" className="hover:text-foreground transition-colors">Gallery</Link>
            <Link to="/support" className="hover:text-foreground transition-colors">Support</Link>
          </div>

          <div className="text-xs text-muted-foreground">
            © 2026 Velociwash
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
