import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Droplets, ChevronRight, ChevronDown } from "lucide-react";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Support", href: "/support" },
];

const serviceLinks = [
  { label: "Doorstep Car Foam Wash", href: "/foam-wash" },
  { label: "Doorstep Car Regular Cleaning", href: "/regular-cleaning" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl shadow-lg shadow-black/5 py-2 border-b border-border"
          : "bg-transparent py-4 [&_a]:text-white [&_button]:text-white [&_.nav-brand]:text-white"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
            <Droplets className="w-4 h-4 text-primary" />
          </div>
          <span className="font-display text-xl font-bold tracking-tight text-foreground">
            VELOCI<span className="text-gradient">WASH</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          <Link
            to="/"
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              location.pathname === "/" ? "text-primary bg-primary/10" : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
            }`}
          >
            Home
          </Link>

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                ["/foam-wash", "/regular-cleaning"].includes(location.pathname)
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
              }`}
            >
              Services
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 mt-1 w-72 bg-white rounded-xl border border-border shadow-xl p-2"
                >
                  {serviceLinks.map((link) => (
                    <Link
                      key={link.href}
                      to={link.href}
                      className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                        location.pathname === link.href
                          ? "text-primary bg-primary/10"
                          : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                location.pathname === link.href ? "text-primary bg-primary/10" : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
              }`}
            >
              {link.label}
            </Link>
          ))}

          <Link
            to="/booking"
            className="ml-3 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-display font-semibold text-sm hover:bg-primary/90 transition-all btn-glow"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-4 lg:hidden">
          <Link
            to="/booking"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-display font-semibold text-sm hover:bg-primary/90 transition-all btn-glow"
          >
            Book Now
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-10 h-10 rounded-lg bg-secondary/50 border border-border text-foreground flex items-center justify-center hover:bg-secondary hover:border-primary/30 transition-all"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-border shadow-xl mt-2"
          >
            <div className="flex flex-col p-5 max-w-lg mx-auto space-y-1">
              <Link
                to="/"
                className={`flex items-center justify-between px-4 py-3.5 rounded-xl text-sm font-medium transition-all group ${
                  location.pathname === "/"
                    ? "text-primary bg-primary/10 border border-primary/20"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                }`}
              >
                Home
                <ChevronRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </Link>

              {serviceLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`flex items-center justify-between px-4 py-3.5 rounded-xl text-sm font-medium transition-all group ${
                    location.pathname === link.href
                      ? "text-primary bg-primary/10 border border-primary/20"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                  }`}
                >
                  {link.label}
                  <ChevronRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </Link>
              ))}

              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`flex items-center justify-between px-4 py-3.5 rounded-xl text-sm font-medium transition-all group ${
                    location.pathname === link.href
                      ? "text-primary bg-primary/10 border border-primary/20"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                  }`}
                >
                  {link.label}
                  <ChevronRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </Link>
              ))}

              <div className="pt-3">
                <Link
                  to="/booking"
                  className="block px-4 py-3.5 rounded-xl text-sm font-bold bg-primary text-primary-foreground text-center hover:bg-primary/90 transition-colors btn-glow"
                >
                  Schedule a Wash
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
