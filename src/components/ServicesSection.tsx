import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Droplets, Car, Wrench } from "lucide-react";
import { Link } from "react-router-dom";
import foamWashImg from "@/assets/service-foam-wash.jpg";
import interiorImg from "@/assets/service-interior.jpg";

const services = [
  {
    title: "Doorstep Car Foam Wash",
    description: "Single time plans and monthly plans available. Premium pH-neutral snow foam for a scratch-free shine.",
    image: foamWashImg,
    href: "/services",
    badge: "Popular",
    icon: Droplets,
  },
  {
    title: "Doorstep Regular Car Cleaning",
    description: "Fresh microfiber and fresh water for every car! Keep your car spotless with routine cleaning.",
    image: interiorImg,
    href: "/regular-cleaning",
    badge: "New!",
    icon: Car,
  },
  {
    title: "Doorstep Car General Service",
    description: "Guaranteed discounted price. Usage of genuine spares only. Full mechanical care at your door.",
    image: null,
    href: "/services",
    badge: "New!",
    icon: Wrench,
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
            to="/services"
            className="text-sm font-semibold text-primary hover:text-primary/80 flex items-center gap-1 transition-colors group"
          >
            View all services <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link to={service.href} className="block group">
                <div className="relative rounded-2xl overflow-hidden border border-border bg-card hover:border-primary/40 transition-all duration-500 card-shine">
                  {/* Image thumbnail */}
                  <div className="relative h-48 overflow-hidden">
                    {service.image ? (
                      <>
                        <img
                          src={service.image}
                          alt={service.title}
                          loading="lazy"
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                      </>
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-primary/10 via-secondary to-accent/10 flex items-center justify-center">
                        <service.icon className="w-16 h-16 text-primary/30" />
                      </div>
                    )}
                    {service.badge && (
                      <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[10px] font-bold bg-primary/90 text-primary-foreground backdrop-blur-sm">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-5 lg:p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/25 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors duration-300">
                        <service.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                      </div>
                      <h3 className="font-display text-base lg:text-lg font-bold group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <span className="text-sm font-bold text-primary flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                      Learn more <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
