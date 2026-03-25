import { motion } from "framer-motion";
import { Phone, Mail, MessageCircle, Shield, FileText, ExternalLink } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const contactMethods = [
  {
    icon: Phone,
    label: "+91 96760 31464",
    subtitle: "Tap to call",
    href: "tel:+919676031464",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp Chat",
    subtitle: "Tap to message",
    href: "https://wa.me/919676031464",
  },
];

const socials = [
  { name: "WhatsApp", href: "https://wa.me/919676031464" },
  { name: "Instagram", href: "#" },
  { name: "Facebook", href: "#" },
  { name: "YouTube", href: "#" },
];

const legalLinks = [
  { icon: Shield, label: "Privacy Policy", subtitle: "View our privacy policy", href: "/privacy" },
  { icon: FileText, label: "Terms & Conditions", subtitle: "View our terms and conditions", href: "/terms" },
];

const SupportPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-12">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-sm font-medium text-primary uppercase tracking-widest">Support</span>
            <h1 className="font-display text-4xl md:text-6xl font-bold mt-4 mb-4">
              We're Here to <span className="text-gradient">Help</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg">Reach us anytime. We're just a call or message away.</p>
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-12">
        <div className="container mx-auto px-6 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card border border-border rounded-2xl p-6 md:p-8 mb-8"
          >
            <h2 className="font-display text-xl font-bold mb-6">Contact</h2>
            <div className="space-y-4">
              {contactMethods.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-secondary/30 border border-border hover:border-primary/20 transition-colors group"
                >
                  <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                    <c.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="font-display font-semibold">{c.label}</div>
                    <div className="text-xs text-muted-foreground">{c.subtitle}</div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Working hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card border border-border rounded-2xl p-6 md:p-8 mb-8"
          >
            <h2 className="font-display text-xl font-bold mb-4">Working Hours</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-secondary/30 rounded-xl p-4 border border-border">
                <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Monday – Sunday</div>
                <div className="font-display font-semibold">7:00 AM – 8:00 PM</div>
              </div>
              <div className="bg-secondary/30 rounded-xl p-4 border border-border">
                <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Service Area</div>
                <div className="font-display font-semibold">Doorstep — We Come to You</div>
              </div>
            </div>
          </motion.div>

          {/* Social media */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card border border-border rounded-2xl p-6 md:p-8 mb-8"
          >
            <h2 className="font-display text-xl font-bold mb-2">Follow Us</h2>
            <p className="text-sm text-muted-foreground mb-6">Stay updated with our latest offers and car care tips.</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-secondary/30 border border-border hover:border-primary/20 hover:bg-primary/5 transition-all text-sm font-medium text-secondary-foreground"
                >
                  {s.name}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Legal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card border border-border rounded-2xl p-6 md:p-8"
          >
            <h2 className="font-display text-xl font-bold mb-6">Legal</h2>
            <div className="space-y-3">
              {legalLinks.map((l) => (
                <div
                  key={l.label}
                  className="flex items-center gap-4 p-4 rounded-xl bg-secondary/30 border border-border"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <l.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-display font-semibold text-sm">{l.label}</div>
                    <div className="text-xs text-muted-foreground">{l.subtitle}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <div className="py-12" />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default SupportPage;
