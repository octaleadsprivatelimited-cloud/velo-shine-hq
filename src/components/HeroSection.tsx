import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-car-wash.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden dark-section">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Premium doorstep car wash service"
          width={1920}
          height={1080}
          className="w-full h-full object-cover scale-105"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(225,25%,5%)] via-[hsl(225,25%,5%/0.7)] to-[hsl(225,25%,5%/0.4)]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(225,25%,5%/0.85)] via-[hsl(225,25%,5%/0.3)] to-transparent" />
        {/* Noise texture overlay */}
        <div className="absolute inset-0 noise opacity-30" />
      </div>

      {/* Floating accent orbs */}
      <div className="absolute top-1/4 right-1/4 w-72 h-72 rounded-full bg-primary/5 blur-[100px] animate-float" />
      <div className="absolute bottom-1/3 left-1/3 w-96 h-96 rounded-full bg-accent/5 blur-[120px]" />

      <div className="container mx-auto px-6 relative z-10 pb-20 md:pb-28">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
          <span className="text-sm font-medium text-primary">Premium Doorstep Service</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-[0.95] mb-6 max-w-5xl text-white"
        >
          Your car deserves{" "}
          <span className="text-gradient">premium</span> care
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg md:text-xl text-white/70 max-w-xl mb-10 leading-relaxed"
        >
          Professional foam wash & cleaning delivered to your doorstep.
          We bring our own water, electricity & premium products.
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
              SCHEDULE WASH <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
          <Link to="/foam-wash">
            <Button
              size="lg"
              className="border border-white/30 bg-transparent text-white hover:bg-white/10 hover:border-white/50 font-display font-semibold text-base h-14 rounded-xl backdrop-blur-sm"
            >
              <Play className="w-4 h-4 mr-2 text-primary" /> Explore Services
            </Button>
          </Link>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-14 flex flex-wrap items-center gap-6 text-sm text-white/60"
        >
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full bg-secondary border-2 border-background flex items-center justify-center text-xs font-bold text-primary">
                  {String.fromCharCode(64 + i)}
                </div>
              ))}
            </div>
            <span>500+ happy customers</span>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <span className="text-primary font-bold">4.9★</span>
            <span>rated on Google</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
