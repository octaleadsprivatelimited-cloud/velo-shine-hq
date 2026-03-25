import { motion } from "framer-motion";
import { Phone, MessageCircle, MapPin, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const contactInfo = [
  { icon: Phone, label: "Phone", value: "+91 96760 31464", href: "tel:+919676031464" },
  { icon: MessageCircle, label: "WhatsApp", value: "Chat with us", href: "https://wa.me/919676031464" },
  { icon: Clock, label: "Working Hours", value: "7:00 AM – 8:00 PM, All Days", href: null },
  { icon: MapPin, label: "Service Area", value: "Doorstep Service — We Come to You", href: null },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-28 relative">
      <div className="container mx-auto px-6">
        <div className="bg-card border border-border rounded-3xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            {/* Left — info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 md:p-12 lg:p-16"
            >
              <span className="text-sm font-medium text-primary uppercase tracking-widest">Get in Touch</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold mt-4 mb-4">
                Ready for a{" "}
                <span className="text-gradient">Spotless</span>{" "}
                Ride?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-10">
                Contact us to schedule your next car wash or ask about subscription plans.
              </p>

              <div className="space-y-5">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground uppercase tracking-wider">{item.label}</div>
                      {item.href ? (
                        <a href={item.href} target="_blank" rel="noopener noreferrer" className="font-display font-semibold text-sm hover:text-primary transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <div className="font-display font-semibold text-sm">{item.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right — CTA */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-secondary/30 p-8 md:p-12 lg:p-16 flex flex-col justify-center"
            >
              <h3 className="font-display text-2xl font-bold mb-3">Quick Booking</h3>
              <p className="text-muted-foreground mb-8">Tap below to instantly connect with us on WhatsApp and schedule your wash.</p>

              <a href="https://wa.me/919676031464?text=Hi%20Velociwash!%20I'd%20like%20to%20book%20a%20car%20wash." target="_blank" rel="noopener noreferrer" className="block mb-4">
                <Button size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-display font-semibold text-base h-14 glow-border">
                  <MessageCircle className="w-5 h-5 mr-3" />
                  Book via WhatsApp
                </Button>
              </a>

              <a href="tel:+919676031464" className="block mb-6">
                <Button size="lg" variant="outline" className="w-full border-border text-foreground hover:bg-secondary font-display font-semibold text-base h-14">
                  <Phone className="w-5 h-5 mr-3" />
                  Call +91 96760 31464
                </Button>
              </a>

              <div className="text-center">
                <Link to="/booking" className="inline-flex items-center gap-2 text-sm text-primary font-medium hover:gap-3 transition-all">
                  Or fill our booking form <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
