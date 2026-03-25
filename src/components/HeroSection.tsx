import { motion } from "framer-motion";
import { ArrowRight, Droplets } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-car-wash.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-end overflow-hidden">
      {/* Full-screen background */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Premium doorstep car wash service"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/20" />
      </div>

      <div className="container mx-auto px-6 relative z-10 pb-16 md:pb-24">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-[1] mb-6 max-w-4xl"
        >
          Doorstep car care services
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex items-center gap-3"
        >
          <Link to="/booking">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-display font-semibold text-base px-8 h-14 glow-border"
            >
              SCHEDULE WASH
            </Button>
          </Link>
          <Link to="/booking">
            <Button
              size="lg"
              variant="outline"
              className="border-border text-foreground hover:bg-secondary font-display font-bold text-xl w-14 h-14"
            >
              +
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
