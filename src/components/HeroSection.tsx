import { motion } from "framer-motion";
import { ArrowRight, Play, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-car-wash.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[50vh] md:min-h-[85vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Premium doorstep car wash service"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-foreground/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/40 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-24">
        <div className="max-w-2xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-white/15 backdrop-blur-sm mb-6 border border-white/10"
          >
            <span className="text-xs font-semibold text-white/90 tracking-wide">#1 Doorstep Car Care in Hyderabad</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-extrabold leading-[1.1] mb-5 text-white"
          >
            Doorstep car wash,{" "}
            <span className="text-primary" style={{ color: 'hsl(48 100% 50%)' }}>done right.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="text-base md:text-lg text-white/75 max-w-lg mb-8 leading-relaxed"
          >
            We bring premium products to your doorstep. No mess, no hassle — just a sparkling clean car every time.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap items-center gap-3"
          >
            <Link to="/booking">
              <Button
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 font-display font-semibold text-sm px-7 h-12 rounded-md"
              >
                Book Now <ArrowRight className="w-4 h-4 ml-1.5" />
              </Button>
            </Link>
            <Link to="/services">
              <Button
                size="lg"
                className="border border-white/25 bg-white/10 text-white hover:bg-white/15 font-display font-medium text-sm h-12 rounded-md backdrop-blur-sm"
              >
                <Play className="w-3.5 h-3.5 mr-1.5" /> Explore Services
              </Button>
            </Link>
          </motion.div>

          {/* Trust */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-10 flex flex-wrap items-center gap-4 text-sm text-white/55"
          >
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-primary text-primary" />
              ))}
              <span className="ml-1.5 text-white/75 font-medium">4.9/5</span>
            </div>
            <span className="text-white/30">|</span>
            <span>500+ washes completed</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
