import { motion } from "framer-motion";
import { Phone, MessageCircle, Shield, FileText, ExternalLink, Clock, MapPin, Headphones, Mail, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const contactMethods = [
  { icon: Phone, label: "Call Us", value: "+91 96760 31464", subtitle: "Available 7 AM – 8 PM", href: "tel:+919676031464", color: "bg-blue-500/10 border-blue-500/25 text-blue-500" },
  { icon: MessageCircle, label: "WhatsApp", value: "Chat with us", subtitle: "Quick responses guaranteed", href: "https://wa.me/919676031464", color: "bg-green-500/10 border-green-500/25 text-green-500" },
  { icon: Mail, label: "Email", value: "support@velociwash.com", subtitle: "We reply within 24 hours", href: "mailto:support@velociwash.com", color: "bg-primary/10 border-primary/25 text-primary" },
];

const SupportPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-24 overflow-hidden bg-foreground">
        <div className="absolute inset-0 noise opacity-10" />
        <div className="container mx-auto px-6 relative z-10 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center">
                  <Headphones className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm font-semibold text-primary uppercase tracking-widest">Help Center</span>
              </div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 text-background">
                We're here to <span className="text-gradient">help</span>
              </h1>
              <p className="text-lg text-background/60 max-w-lg leading-relaxed mb-8">
                Got a question or need assistance? Reach out to us anytime — we're just a call or message away.
              </p>
              <Link to="/booking">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-display font-bold px-8 h-14 btn-glow glow-border rounded-xl">
                  Book a Wash <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </motion.div>

            {/* Contact cards */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-4"
            >
              {contactMethods.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-5 p-5 rounded-2xl bg-background/5 border border-background/10 backdrop-blur-sm hover:bg-background/10 hover:border-background/20 transition-all duration-300 group"
                >
                  <div className={`w-14 h-14 rounded-2xl ${c.color} border flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                    <c.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <div className="font-display font-bold text-background text-sm">{c.label}</div>
                    <div className="text-background/90 font-semibold">{c.value}</div>
                    <div className="text-xs text-background/50 mt-0.5">{c.subtitle}</div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-background/30 group-hover:text-primary transition-colors" />
                </a>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Info sections */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Working Hours */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-2xl p-7 hover:border-primary/30 transition-all duration-500 card-shine"
            >
              <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/25 flex items-center justify-center mb-5">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display text-lg font-bold mb-3">Working Hours</h3>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Monday – Sunday</span>
                  <span className="font-semibold">7 AM – 8 PM</span>
                </div>
                <div className="h-px bg-border" />
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Response Time</span>
                  <span className="font-semibold text-primary">&lt; 30 min</span>
                </div>
              </div>
            </motion.div>

            {/* Service Area */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-card border border-border rounded-2xl p-7 hover:border-primary/30 transition-all duration-500 card-shine"
            >
              <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/25 flex items-center justify-center mb-5">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display text-lg font-bold mb-3">Service Areas</h3>
              <div className="flex flex-wrap gap-2">
                {["Gachibowli", "Kondapur", "Madhapur", "Kukatpally", "Miyapur", "HITEC City", "Jubilee Hills", "Banjara Hills"].map(area => (
                  <span key={area} className="px-2.5 py-1 rounded-lg bg-secondary text-xs font-medium text-foreground border border-border">
                    {area}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Follow Us */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-card border border-border rounded-2xl p-7 hover:border-primary/30 transition-all duration-500 card-shine"
            >
              <h3 className="font-display text-lg font-bold mb-5">Follow Us</h3>
              <div className="grid grid-cols-2 gap-3">
                {["WhatsApp", "Instagram", "Facebook", "YouTube"].map((s) => (
                  <a
                    key={s}
                    href={s === "WhatsApp" ? "https://wa.me/919676031464" : "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center py-3 px-3 rounded-xl bg-secondary border border-border hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 text-sm font-semibold text-foreground"
                  >
                    {s}
                  </a>
                ))}
              </div>

              <div className="mt-5 pt-5 border-t border-border space-y-3">
                {[
                  { icon: Shield, label: "Privacy Policy" },
                  { icon: FileText, label: "Terms & Conditions" },
                ].map((l) => (
                  <div
                    key={l.label}
                    className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                  >
                    <l.icon className="w-4 h-4 text-primary" />
                    <span>{l.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default SupportPage;
