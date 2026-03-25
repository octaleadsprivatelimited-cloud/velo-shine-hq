import { motion } from "framer-motion";
import { ArrowRight, Play, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-car-wash.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden dark-section">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Premium doorstep car wash service"
          width={1920}
          height={1080}
          className="w-full h-full object-cover scale-105"
          loading="eager"
        />
        <div className="absolute inset-0 bg-[hsl(225,25%,3%/0.8)]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(225,25%,3%/0.7)] to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(225,25%,3%/0.95)] via-transparent to-[hsl(225,25%,3%/0.4)]" />
        <div className="absolute inset-0 noise opacity-15" />
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-24">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
            <span className="text-sm font-medium text-primary">#1 Doorstep Car Care in Hyderabad</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[0.95] mb-6 text-white text-shadow-hero"
          >
            Doorstep car wash,{" "}
            <span className="text-primary">done right.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-white/80 max-w-xl mb-10 leading-relaxed text-shadow-sm"
          >
            We bring our own water, electricity & premium products to your parking spot. 
            No mess, no hassle — just a sparkling clean car every time.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap items-center gap-4"
          >
            <Link to="/booking">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-display font-bold text-base px-8 h-14 btn-glow glow-border rounded-xl"
              >
                BOOK NOW <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/foam-wash">
              <Button
                size="lg"
                className="border border-white/30 bg-white/10 text-white hover:bg-white/20 hover:border-white/50 font-display font-semibold text-base h-14 rounded-xl backdrop-blur-sm"
              >
                <Play className="w-4 h-4 mr-2 text-primary" /> Explore Services
              </Button>
            </Link>
          </motion.div>

          {/* Trust */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-14 flex flex-wrap items-center gap-6 text-sm text-white/60 text-shadow-sm"
          >
            <div className="flex items-center gap-1.5">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-4 h-4 fill-primary text-primary" />
              ))}
              <span className="ml-2 text-white/80 font-semibold">4.9/5</span>
              <span>• 500+ washes</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
