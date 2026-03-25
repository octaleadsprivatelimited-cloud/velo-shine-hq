import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
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
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-5xl font-bold mb-12"
        >
          Services
        </motion.h2>

        <div className="grid sm:grid-cols-2 gap-5">
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
                  <div className="relative rounded-2xl overflow-hidden border border-border bg-card hover:border-primary/30 transition-all duration-300 h-[280px] md:h-[340px]">
                    {service.image && (
                      <>
                        <img
                          src={service.image}
                          alt={service.title}
                          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
                      </>
                    )}
                    <div className="relative h-full flex flex-col justify-end p-6 md:p-8">
                      <h3 className="font-display text-xl md:text-2xl font-bold mb-2">
                        {service.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        {service.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-primary flex items-center gap-2 group-hover:gap-3 transition-all">
                          Book now <ArrowRight className="w-4 h-4" />
                        </span>
                        {service.badge && (
                          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary/20 text-primary border border-primary/30">
                            {service.badge}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              ) : (
                <div className="relative rounded-2xl overflow-hidden border border-border bg-card/50 h-[280px] md:h-[340px] opacity-60">
                  <div className="h-full flex flex-col justify-end p-6 md:p-8">
                    <h3 className="font-display text-xl md:text-2xl font-bold mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {service.description}
                    </p>
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-secondary text-muted-foreground border border-border w-fit">
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
