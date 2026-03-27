import { motion } from "framer-motion";
import { ArrowRight, Droplets, Car, Wrench } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
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
    href: "/services",
    badge: "New",
    icon: Car,
  },
  {
    title: "Doorstep Car General Service",
    description: "Guaranteed discounted price. Usage of genuine spares only. Full mechanical care at your door.",
    image: null,
    href: "/services",
    badge: "New",
    icon: Wrench,
  },
];

const ServicesSection = () => {
  return (
    <section className="py-16 relative bg-background">
      <div className="container mx-auto px-6 relative z-10">
        {/* Header — centered, clean */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block text-xs font-bold text-primary uppercase tracking-[0.2em] mb-4">
            Our Services
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-extrabold mb-4 leading-tight">
            What we offer
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Professional car care solutions delivered to your doorstep. Choose the service that fits your needs.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
            >
              <Link to={service.href} className="block group h-full">
                <div className="relative h-full rounded-xl overflow-hidden bg-card border border-border shadow-sm hover:shadow-lg transition-shadow duration-300">
                  {/* Image */}
                  <div className="relative h-52 overflow-hidden bg-muted">
                    {service.image ? (
                      <img
                        src={service.image}
                        alt={service.title}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full bg-muted flex items-center justify-center">
                        <service.icon className="w-14 h-14 text-muted-foreground/30" />
                      </div>
                    )}
                    {service.badge && (
                      <span className="absolute top-4 left-4 px-3 py-1 rounded text-[11px] font-bold uppercase tracking-wider bg-primary text-primary-foreground">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <service.icon className="w-[18px] h-[18px] text-primary" />
                      </div>
                      <h3 className="font-display text-lg font-bold leading-snug">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                      {service.description}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5 transition-all duration-300">
                      Learn more <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-14"
        >
          <Link to="/services">
            <Button variant="outline" size="lg" className="rounded-lg font-display font-semibold px-8 h-12">
              View all services <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
