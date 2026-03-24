import { motion } from "framer-motion";
import { Phone, MessageCircle, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-medium text-primary uppercase tracking-widest">Get in Touch</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
              Ready for a{" "}
              <span className="text-gradient">Spotless</span>{" "}
              Ride?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-10">
              Contact us to schedule your next car wash or ask about our subscription plans. We're just a call or message away.
            </p>

            <div className="space-y-6">
              {[
                { icon: Phone, label: "Phone", value: "+91 96760 31464", href: "tel:+919676031464" },
                { icon: MessageCircle, label: "WhatsApp", value: "Chat with us", href: "https://wa.me/919676031464" },
                { icon: Clock, label: "Working Hours", value: "7:00 AM – 8:00 PM, All Days", href: null },
                { icon: MapPin, label: "Service Area", value: "Doorstep Service — We Come to You", href: null },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">{item.label}</div>
                    {item.href ? (
                      <a href={item.href} target="_blank" rel="noopener noreferrer" className="font-display font-semibold hover:text-primary transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <div className="font-display font-semibold">{item.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <div className="bg-card border border-border rounded-2xl p-8 md:p-10">
              <h3 className="font-display text-2xl font-bold mb-2">Quick Booking</h3>
              <p className="text-muted-foreground mb-8">Tap below to instantly connect with us on WhatsApp and schedule your wash.</p>
              
              <a href="https://wa.me/919676031464?text=Hi%20Velociwash!%20I'd%20like%20to%20book%20a%20car%20wash." target="_blank" rel="noopener noreferrer" className="block">
                <Button size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-display font-semibold text-lg py-6 glow-border">
                  <MessageCircle className="w-5 h-5 mr-3" />
                  Book via WhatsApp
                </Button>
              </a>

              <div className="mt-8 pt-6 border-t border-border">
                <a href="tel:+919676031464" className="block">
                  <Button size="lg" variant="outline" className="w-full border-border text-foreground hover:bg-secondary font-display font-semibold text-lg py-6">
                    <Phone className="w-5 h-5 mr-3" />
                    Call +91 96760 31464
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
