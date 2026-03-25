import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import foamWashImg from "@/assets/service-foam-wash.jpg";
import interiorImg from "@/assets/service-interior.jpg";

const services = [
  {
    title: "Doorstep Car Foam Wash",
    description: "Single time plans and monthly plans available",
    image: foamWashImg,
    href: "/foam-wash",
    badge: "New!",
    available: true,
  },
  {
    title: "Doorstep Regular Car Cleaning",
    description: "Fresh microfiber and fresh water for every car!",
    image: interiorImg,
    href: "/regular-cleaning",
    badge: "New!",
    available: true,
  },
  {
    title: "Doorstep Car General Service",
    description: "Guaranteed discounted price. Usage of genuine spares only.",
    image: null,
    href: "#",
    badge: "Coming soon",
    available: false,
  },
  {
    title: "Doorstep Fuel Delivery",
    description: "Full volume. For sure. Safe dispensing of Petrol & Diesel",
    image: null,
    href: "#",
    badge: "Coming soon",
    available: false,
  },
];

const ServicesSection = () => {
  return (
    <section className="py-24 relative bg-secondary/50">
      <div className="absolute inset-0 noise opacity-10" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14"
        >
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary uppercase tracking-widest">Our Services</span>
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-extrabold">
              What we <span className="text-gradient">offer</span>
            </h2>
          </div>
          <Link
            to="/foam-wash"
            className="text-sm font-semibold text-primary hover:text-primary/80 flex items-center gap-1 transition-colors group"
          >
            View all services <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              {service.available ? (
                <Link to={service.href} className="block group">
                  <div className="relative rounded-2xl overflow-hidden border border-border bg-card hover:border-primary/40 transition-all duration-500 h-[300px] md:h-[380px] card-shine">
                    {service.image && (
                      <>
                        <img
                          src={service.image}
                          alt={service.title}
                          loading="lazy"
                          className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/70 to-transparent" />
                      </>
                    )}
                    <div className="relative h-full flex flex-col justify-end p-7 md:p-9">
                      <h3 className="font-display text-xl md:text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-5">
                        {service.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-bold text-primary flex items-center gap-2 group-hover:gap-3 transition-all">
                          Book now <ArrowRight className="w-4 h-4" />
                        </span>
                        {service.badge && (
                          <span className="px-3 py-1.5 rounded-full text-xs font-bold bg-primary/15 text-primary border border-primary/25">
                            {service.badge}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              ) : (
                <div className="relative rounded-2xl overflow-hidden border border-border/50 bg-card/30 h-[300px] md:h-[380px] opacity-50">
                  <div className="absolute inset-0 noise" />
                  <div className="h-full flex flex-col justify-end p-7 md:p-9 relative">
                    <h3 className="font-display text-xl md:text-2xl font-bold mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-5">
                      {service.description}
                    </p>
                    <span className="px-3 py-1.5 rounded-full text-xs font-bold bg-secondary text-muted-foreground border border-border w-fit">
                      {service.badge}
                    </span>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
