import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-car-wash.jpg";

const BoldStatement = () => {
  return (
    <section className="relative py-32 overflow-hidden dark-section">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Car wash equipment"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-5xl lg:text-6xl font-bold max-w-4xl mx-auto leading-tight mb-8"
        >
          We get our own electricity and water to ensure{" "}
          <span className="text-gradient">highest quality</span> car wash
          experience
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Link to="/booking">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-display font-semibold text-base px-8 h-14 glow-border"
            >
              SCHEDULE WASH <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default BoldStatement;
