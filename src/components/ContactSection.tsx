import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section className="py-14 bg-foreground">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <h2 className="font-display text-xl md:text-3xl font-bold text-white mb-1.5">
              Ready to get your car sparkling?
            </h2>
            <p className="text-white/60 text-sm">
              Book your first wash today and experience the Velociwash difference.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link to="/booking">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 font-display font-semibold px-7 h-11 rounded-md text-sm"
              >
                Schedule a Wash <ArrowRight className="w-4 h-4 ml-1.5" />
              </Button>
            </Link>
            <a href="https://wa.me/919676031464" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 font-display font-medium px-7 h-11 rounded-md text-sm"
              >
                <MessageCircle className="w-4 h-4 mr-1.5" /> WhatsApp
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
