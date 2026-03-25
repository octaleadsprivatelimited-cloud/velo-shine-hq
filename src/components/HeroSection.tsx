import { motion } from "framer-motion";
import { ArrowRight, Droplets, Shield, Clock, Leaf } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-car-wash.jpg";

const features = [
  { icon: Shield, text: "Scratch-Free" },
  { icon: Clock, text: "We Come to You" },
  { icon: Leaf, text: "Eco-Friendly" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-[100vh] flex items-center overflow-hidden">
      {/* Background image with parallax-like overlay */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="Premium doorstep car wash service" width={1920} height={1080} className="w-full h-full object-cover scale-105" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </div>

      {/* Animated glow orb */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px] animate-pulse" />

      <div className="container mx-auto px-6 relative z-10 pt-28 pb-16">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm mb-8"
          >
            <Droplets className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary tracking-wide">Premium Doorstep Car Care</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] mb-8"
          >
            Where Every{" "}
            <br className="hidden sm:block" />
            <span className="text-gradient">Detail</span>{" "}
            Shines
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed max-w-xl"
          >
            Professional car wash & detailing at your doorstep. We bring our own water, power, and premium products — you just relax.
          </motion.p>

          {/* Feature pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-wrap gap-3 mb-10"
          >
            {features.map((f, i) => (
              <div key={f.text} className="flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 backdrop-blur-sm border border-border/50 text-sm text-secondary-foreground">
                <f.icon className="w-4 h-4 text-primary" />
                {f.text}
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link to="/booking">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-display font-semibold text-base px-10 h-14 glow-border">
                Schedule a Wash
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/services">
              <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-secondary font-display font-semibold text-base px-10 h-14">
                View Services
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-20 grid grid-cols-3 gap-6 max-w-2xl"
        >
          {[
            { value: "500+", label: "Cars Washed" },
            { value: "4.9★", label: "Customer Rating" },
            { value: "100%", label: "Eco-Friendly" },
          ].map((stat) => (
            <div key={stat.label} className="relative pl-6 border-l border-primary/30">
              <div className="font-display text-2xl md:text-4xl font-bold text-gradient">{stat.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
