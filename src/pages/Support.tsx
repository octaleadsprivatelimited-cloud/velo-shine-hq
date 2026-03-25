import { motion } from "framer-motion";
import { Phone, MessageCircle, Shield, FileText, ExternalLink, Clock, MapPin, Headphones } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const contactMethods = [
  { icon: Phone, label: "+91 96760 31464", subtitle: "Tap to call", href: "tel:+919676031464" },
  { icon: MessageCircle, label: "WhatsApp Chat", subtitle: "Tap to message", href: "https://wa.me/919676031464" },
];

const SupportPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <section className="pt-32 pb-10 relative">
        <div className="absolute inset-0 noise opacity-15" />
        <div className="absolute top-20 left-1/2 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex items-center gap-2 mb-4">
              <Headphones className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary uppercase tracking-widest">Help Center</span>
            </div>
            <h1 className="font-display text-4xl md:text-6xl font-extrabold mb-4">
              <span className="text-gradient">Support</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              Reach us anytime. We're just a call or message away.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-8 pb-24">
        <div className="container mx-auto px-6 max-w-2xl space-y-6">
          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-card border border-border rounded-2xl p-7"
          >
            <h2 className="font-display text-lg font-bold mb-5">Contact</h2>
            <div className="space-y-3">
              {contactMethods.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-secondary/30 border border-border hover:border-primary/30 transition-all duration-500 group card-shine"
                >
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/25 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                    <c.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <div className="flex-1">
                    <div className="font-display font-semibold text-sm">{c.label}</div>
                    <div className="text-xs text-muted-foreground">{c.subtitle}</div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-card border border-border rounded-2xl p-7"
          >
            <h2 className="font-display text-lg font-bold mb-5">Working Hours</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-secondary/30 rounded-xl p-5 border border-border hover:border-primary/20 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-4 h-4 text-primary" />
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">Mon – Sun</span>
                </div>
                <div className="font-display font-bold text-sm">7:00 AM – 8:00 PM</div>
              </div>
              <div className="bg-secondary/30 rounded-xl p-5 border border-border hover:border-primary/20 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">Service Area</span>
                </div>
                <div className="font-display font-bold text-sm">Doorstep — We Come to You</div>
              </div>
            </div>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-card border border-border rounded-2xl p-7"
          >
            <h2 className="font-display text-lg font-bold mb-5">Follow Us</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {["WhatsApp", "Instagram", "Facebook", "YouTube"].map((s) => (
                <a
                  key={s}
                  href={s === "WhatsApp" ? "https://wa.me/919676031464" : "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center py-3.5 px-4 rounded-xl bg-secondary/30 border border-border hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 text-sm font-semibold text-secondary-foreground"
                >
                  {s}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Legal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-card border border-border rounded-2xl p-7"
          >
            <h2 className="font-display text-lg font-bold mb-5">Legal</h2>
            <div className="space-y-3">
              {[
                { icon: Shield, label: "Privacy Policy" },
                { icon: FileText, label: "Terms & Conditions" },
              ].map((l) => (
                <div
                  key={l.label}
                  className="flex items-center gap-4 p-4 rounded-xl bg-secondary/30 border border-border hover:border-primary/20 transition-colors"
                >
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/25 flex items-center justify-center shrink-0">
                    <l.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="font-display font-semibold text-sm">{l.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default SupportPage;
