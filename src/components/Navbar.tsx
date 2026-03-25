import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Droplets, User } from "lucide-react";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Doorstep Car Foam Wash", href: "/foam-wash" },
  { label: "Doorstep Car Regular Cleaning", href: "/regular-cleaning" },
  { label: "Gallery", href: "/gallery" },
  { label: "Support", href: "/support" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-lg shadow-background/50" : "bg-background/30 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <Link to="/" className="flex items-center gap-2">
          <Droplets className="w-5 h-5 text-primary" />
          <span className="font-display text-xl font-bold tracking-tight">
            VELOCI<span className="text-gradient">WASH</span>
          </span>
        </Link>

        {/* Desktop: only logo + hamburger style (like MaxClean) */}
        <div className="flex items-center gap-3">
          <Link
            to="/booking"
            className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <User className="w-4 h-4" />
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-foreground p-2 hover:bg-secondary rounded-lg transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Slide-out menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="glass border-t border-border"
          >
            <div className="flex flex-col p-4 max-w-md mx-auto">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    location.pathname === link.href
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/booking"
                className="mt-2 px-4 py-3 rounded-lg text-sm font-semibold bg-primary text-primary-foreground text-center hover:bg-primary/90 transition-colors"
              >
                Schedule a Wash
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
