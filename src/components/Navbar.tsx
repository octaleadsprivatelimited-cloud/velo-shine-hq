import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Support", href: "/support" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const showWhiteText = !scrolled;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm py-2 border-b border-border"
          : "bg-transparent py-3"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Velociwash Logo" className={`h-16 -my-2 w-auto transition-all duration-300 ${scrolled ? 'brightness-0' : 'brightness-0 invert'}`} />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-0.5">
          <Link
            to="/"
            className={`px-3.5 py-2 rounded-md text-sm font-medium transition-colors ${
              location.pathname === "/"
                ? "text-primary"
                : showWhiteText
                  ? "text-white/80 hover:text-white"
                  : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Home
          </Link>

          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`px-3.5 py-2 rounded-md text-sm font-medium transition-colors ${
                location.pathname === link.href
                  ? "text-primary"
                : showWhiteText
                    ? "text-white/80 hover:text-white"
                    : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}

          <Link
            to="/booking"
            className="ml-4 inline-flex items-center px-5 py-2 rounded-md bg-accent text-accent-foreground font-display font-semibold text-sm hover:bg-accent/90 transition-colors"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          <Link
            to="/booking"
            className="inline-flex items-center px-3 py-1.5 rounded-md bg-accent text-accent-foreground font-display font-semibold text-xs hover:bg-accent/90 transition-colors"
          >
            Book Now
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`w-9 h-9 rounded-md flex items-center justify-center transition-colors ${
              scrolled ? 'bg-secondary text-foreground' : 'bg-white/15 text-white'
            }`}
          >
            {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
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
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-white/10 shadow-lg" style={{ backgroundColor: 'hsl(0 0% 5%)' }}
          >
            <div className="flex flex-col p-4 space-y-0.5">
              <Link
                to="/"
                className={`px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === "/" ? "text-primary bg-white/10" : "text-white/80 hover:bg-white/10 hover:text-white"
                }`}
              >
                Home
              </Link>

              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                    location.pathname === link.href ? "text-primary bg-white/10" : "text-white/80 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              <div className="pt-2">
                <Link
                  to="/booking"
                  className="block px-4 py-3 rounded-md text-sm font-semibold bg-accent text-accent-foreground text-center hover:bg-accent/90 transition-colors"
                >
                  Schedule a Wash
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
