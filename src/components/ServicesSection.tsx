import { motion } from "framer-motion";
import { Droplets, SprayCan, Sparkles, Car, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import foamWashImg from "@/assets/service-foam-wash.jpg";
import interiorImg from "@/assets/service-interior.jpg";
import ceramicImg from "@/assets/service-ceramic.jpg";

const services = [
  {
    icon: Droplets,
    title: "Doorstep Foam Wash",
    description: "High-pressure snow foam that gently lifts dirt without scratching. We bring our own water & power.",
    image: foamWashImg,
    badge: "Most Popular",
    price: "From ₹499",
  },
  {
    icon: SprayCan,
    title: "Interior Detailing",
    description: "Deep cleaning of seats, dashboard, carpets using premium imported products.",
    image: interiorImg,
    badge: null,
    price: "From ₹999",
  },
  {
    icon: Sparkles,
    title: "Ceramic Coating",
    description: "9H nano-ceramic protection for a mirror-like shine and UV/scratch shield.",
    image: ceramicImg,
    badge: "Premium",
    price: "From ₹8,999",
  },
  {
    icon: Car,
    title: "Regular Cleaning",
    description: "Daily or weekly exterior wash with fresh microfiber towels. Subscription plans available.",
    image: null,
    badge: "Subscription",
    price: "From ₹999/mo",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-28 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-widest">Our Services</span>
          <h2 className="font-display text-4xl md:text-6xl font-bold mt-4">
            Premium Car Care,{" "}
            <span className="text-gradient">Delivered</span>
          </h2>
          <p className="text-muted-foreground mt-6 max-w-lg mx-auto text-lg">
            From quick exterior washes to full ceramic coatings — we bring the studio to your doorstep.
          </p>
        </motion.div>

        {/* Bento-style grid */}
        <div className="grid md:grid-cols-12 gap-5">
          {/* Large featured card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-7 group relative rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/30 transition-all duration-500 min-h-[400px]"
          >
            <img src={foamWashImg} alt="Foam Wash" loading="lazy" width={800} height={600} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
            <div className="relative h-full flex flex-col justify-end p-8 md:p-10">
              <span className="inline-block w-fit px-3 py-1 rounded-full text-xs font-semibold bg-primary/20 text-primary border border-primary/30 mb-4 backdrop-blur-sm">
                Most Popular
              </span>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-lg bg-primary/20 backdrop-blur-sm flex items-center justify-center">
                  <Droplets className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display text-2xl md:text-3xl font-bold">Doorstep Foam Wash</h3>
              </div>
              <p className="text-secondary-foreground leading-relaxed mb-4 max-w-md">
                High-pressure snow foam that gently lifts dirt without scratching. We bring our own water & power.
              </p>
              <div className="flex items-center justify-between">
                <span className="font-display text-xl font-bold text-primary">From ₹499</span>
                <Link to="/booking" className="flex items-center gap-2 text-sm text-primary font-medium hover:gap-3 transition-all">
                  Book Now <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Right column with 2 stacked cards */}
          <div className="md:col-span-5 flex flex-col gap-5">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group relative rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/30 transition-all duration-500 flex-1 min-h-[190px]"
            >
              <img src={interiorImg} alt="Interior Detailing" loading="lazy" width={800} height={600} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/70 to-card/20" />
              <div className="relative h-full flex flex-col justify-end p-6">
                <div className="flex items-center gap-2 mb-2">
                  <SprayCan className="w-5 h-5 text-primary" />
                  <h3 className="font-display text-lg font-bold">Interior Detailing</h3>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-display font-bold text-primary">From ₹999</span>
                  <Link to="/booking" className="text-xs text-primary font-medium flex items-center gap-1 hover:gap-2 transition-all">
                    Book <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group relative rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/30 transition-all duration-500 flex-1 min-h-[190px]"
            >
              <img src={ceramicImg} alt="Ceramic Coating" loading="lazy" width={800} height={600} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/70 to-card/20" />
              <div className="relative h-full flex flex-col justify-end p-6">
                <span className="inline-block w-fit px-2 py-0.5 rounded-full text-[10px] font-semibold bg-primary/20 text-primary border border-primary/30 mb-2 backdrop-blur-sm">
                  Premium
                </span>
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-5 h-5 text-primary" />
                  <h3 className="font-display text-lg font-bold">Ceramic Coating</h3>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-display font-bold text-primary">From ₹8,999</span>
                  <Link to="/booking" className="text-xs text-primary font-medium flex items-center gap-1 hover:gap-2 transition-all">
                    Book <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Full-width bottom card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-12 group rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/30 transition-all duration-500"
          >
            <div className="flex flex-col md:flex-row items-center p-6 md:p-8 gap-6">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                <Car className="w-7 h-7 text-primary" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <div className="flex flex-col md:flex-row md:items-center gap-2 mb-1">
                  <h3 className="font-display text-xl font-bold">Regular Cleaning</h3>
                  <span className="inline-block w-fit mx-auto md:mx-0 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-primary/10 text-primary border border-primary/20">
                    Subscription
                  </span>
                </div>
                <p className="text-muted-foreground text-sm">Daily or weekly exterior wash with fresh microfiber towels and purified water. Flexible plans available.</p>
              </div>
              <div className="flex items-center gap-6">
                <span className="font-display text-xl font-bold text-primary whitespace-nowrap">From ₹999/mo</span>
                <Link to="/booking">
                  <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-display font-semibold text-sm hover:bg-primary/90 transition-colors whitespace-nowrap">
                    Book Now <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>

        {/* View all link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link to="/services" className="inline-flex items-center gap-2 text-primary font-display font-semibold hover:gap-3 transition-all">
            View All Services & Pricing <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
