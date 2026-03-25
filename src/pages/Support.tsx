import { motion } from "framer-motion";
import { Phone, MessageCircle, Shield, FileText, ExternalLink } from "lucide-react";
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

      <section className="pt-32 pb-8">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-4">
              <span className="text-gradient">Support</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg">
              Reach us anytime. We're just a call or message away.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-8 pb-24">
        <div className="container mx-auto px-6 max-w-2xl space-y-6">
          {/* Contact */}
          <div className="bg-card border border-border rounded-2xl p-6">
            <h2 className="font-display text-lg font-bold mb-4">Contact</h2>
            <div className="space-y-3">
              {contactMethods.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-secondary/30 border border-border hover:border-primary/20 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <c.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="font-display font-semibold text-sm">{c.label}</div>
                    <div className="text-xs text-muted-foreground">{c.subtitle}</div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Hours */}
          <div className="bg-card border border-border rounded-2xl p-6">
            <h2 className="font-display text-lg font-bold mb-4">Working Hours</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-secondary/30 rounded-xl p-4 border border-border">
                <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Mon – Sun</div>
                <div className="font-display font-semibold text-sm">7:00 AM – 8:00 PM</div>
              </div>
              <div className="bg-secondary/30 rounded-xl p-4 border border-border">
                <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Service Area</div>
                <div className="font-display font-semibold text-sm">Doorstep — We Come to You</div>
              </div>
            </div>
          </div>

          {/* Social */}
          <div className="bg-card border border-border rounded-2xl p-6">
            <h2 className="font-display text-lg font-bold mb-4">Follow Us</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {["WhatsApp", "Instagram", "Facebook", "YouTube"].map((s) => (
                <a
                  key={s}
                  href={s === "WhatsApp" ? "https://wa.me/919676031464" : "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center py-3 px-4 rounded-xl bg-secondary/30 border border-border hover:border-primary/20 transition-all text-sm font-medium text-secondary-foreground"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div className="bg-card border border-border rounded-2xl p-6">
            <h2 className="font-display text-lg font-bold mb-4">Legal</h2>
            <div className="space-y-3">
              {[
                { icon: Shield, label: "Privacy Policy" },
                { icon: FileText, label: "Terms & Conditions" },
              ].map((l) => (
                <div
                  key={l.label}
                  className="flex items-center gap-4 p-4 rounded-xl bg-secondary/30 border border-border"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <l.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="font-display font-semibold text-sm">{l.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default SupportPage;
