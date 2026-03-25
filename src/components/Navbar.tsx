import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Droplets, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "All Services", href: "/services" },
      { label: "Doorstep Foam Wash", href: "/foam-wash" },
      { label: "Regular Cleaning", href: "/regular-cleaning" },
    ],
  },
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Support", href: "/support" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdown, setDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when route changes
  useEffect(() => {
    setDropdown(null);
    setIsOpen(false);
  }, [location.pathname]);

  const isActive = (href: string, children?: { href: string }[]) => {
    if (location.pathname === href) return true;
    if (children) return children.some((c) => location.pathname === c.href);
    return false;
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-lg shadow-background/50" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <Link to="/" className="flex items-center gap-2">
          <Droplets className="w-6 h-6 text-primary" />
          <span className="font-display text-2xl font-bold tracking-tight">
            VELOCI<span className="text-gradient">WASH</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <div key={link.label} className="relative">
              {link.children ? (
                <button
                  onClick={() => setDropdown(dropdown === link.label ? null : link.label)}
                  onMouseEnter={() => setDropdown(link.label)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-1 ${
                    isActive(link.href, link.children)
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                  }`}
                >
                  {link.label}
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform ${dropdown === link.label ? "rotate-180" : ""}`} />
                </button>
              ) : (
                <Link
                  to={link.href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 block ${
                    isActive(link.href)
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                  }`}
                >
                  {link.label}
                </Link>
              )}

              {/* Desktop dropdown */}
              {link.children && dropdown === link.label && (
                <div
                  className="absolute top-full left-0 mt-1 w-52 glass border border-border rounded-xl py-2 shadow-xl"
                  onMouseLeave={() => setDropdown(null)}
                >
                  {link.children.map((child) => (
                    <Link
                      key={child.label}
                      to={child.href}
                      className={`block px-4 py-2.5 text-sm transition-colors ${
                        location.pathname === child.href
                          ? "text-primary bg-primary/10"
                          : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                      }`}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link to="/booking" className="ml-2">
            <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 font-display font-semibold px-6">
              Book Now
            </Button>
          </Link>
          <a href="tel:+919676031464" className="ml-2">
            <Button size="sm" variant="outline" className="border-border text-foreground hover:bg-secondary font-display">
              <Phone className="w-4 h-4" />
            </Button>
          </a>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-foreground p-2">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-border"
          >
            <div className="flex flex-col gap-1 p-4">
              {navLinks.map((link) => (
                <div key={link.label}>
                  {link.children ? (
                    <>
                      <button
                        onClick={() => setDropdown(dropdown === link.label ? null : link.label)}
                        className={`w-full px-4 py-3 rounded-lg text-sm font-medium transition-colors flex items-center justify-between ${
                          isActive(link.href, link.children) ? "text-primary bg-primary/10" : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                        }`}
                      >
                        {link.label}
                        <ChevronDown className={`w-4 h-4 transition-transform ${dropdown === link.label ? "rotate-180" : ""}`} />
                      </button>
                      {dropdown === link.label && (
                        <div className="ml-4 mt-1 space-y-1">
                          {link.children.map((child) => (
                            <Link
                              key={child.label}
                              to={child.href}
                              onClick={() => setIsOpen(false)}
                              className={`block px-4 py-2.5 rounded-lg text-sm ${
                                location.pathname === child.href ? "text-primary bg-primary/10" : "text-muted-foreground hover:text-foreground"
                              }`}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      to={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                        isActive(link.href) ? "text-primary bg-primary/10" : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                      }`}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
              <Link to="/booking" onClick={() => setIsOpen(false)} className="mt-2">
                <Button className="w-full bg-primary text-primary-foreground font-display font-semibold">
                  Book Now
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
