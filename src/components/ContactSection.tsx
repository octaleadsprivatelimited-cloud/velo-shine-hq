import { motion } from "framer-motion";
import { MessageCircle, ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-card to-accent/5" />
          <div className="absolute inset-0 noise opacity-20" />
          <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-primary/10 blur-[80px]" />
          <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-accent/10 blur-[80px]" />

          <div className="relative border border-primary/20 rounded-3xl p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-5 h-5 text-primary" />
                <span className="text-sm font-semibold text-primary uppercase tracking-wider">Get Started</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-extrabold mb-3">
                Ready to get your car <span className="text-gradient">sparkling</span>?
              </h2>
              <p className="text-muted-foreground text-lg">
                Book your first wash today and experience the Velociwash difference.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/booking">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 font-display font-bold px-8 h-14 btn-glow glow-border rounded-xl"
                >
                  Schedule a Wash <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <a href="https://wa.me/919676031464" target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-border/60 text-foreground hover:bg-secondary/50 hover:border-primary/30 font-display font-semibold px-8 h-14 rounded-xl"
                >
                  <MessageCircle className="w-4 h-4 mr-2 text-primary" /> WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
