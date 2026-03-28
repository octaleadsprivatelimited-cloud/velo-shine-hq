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
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-xl mx-auto mb-12"
        >
          <p className="text-xs font-semibold text-primary uppercase tracking-[0.15em] mb-3">Our Services</p>
          <h2 className="font-display text-2xl md:text-[36px] font-bold mb-3 leading-tight">
            What we offer
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Professional car care solutions delivered to your doorstep.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link to={service.href} className="block group h-full">
                <div className="h-full rounded-md overflow-hidden bg-card border border-border hover:shadow-md transition-shadow duration-200">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden bg-muted">
                    {service.image ? (
                      <img
                        src={service.image}
                        alt={service.title}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full bg-secondary flex items-center justify-center">
                        <service.icon className="w-12 h-12 text-muted-foreground/25" />
                      </div>
                    )}
                    {service.badge && (
                      <span className="absolute top-3 left-3 px-2.5 py-1 rounded text-[10px] font-semibold uppercase tracking-wider bg-primary text-primary-foreground">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <div className="flex items-center gap-2.5 mb-2">
                      <service.icon className="w-4 h-4 text-primary shrink-0" />
                      <h3 className="font-display text-[15px] font-semibold leading-snug">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-[13px] text-muted-foreground leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <span className="inline-flex items-center gap-1 text-[13px] font-medium text-primary group-hover:gap-2 transition-all">
                      Learn more <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <Link to="/services">
            <Button variant="outline" size="lg" className="rounded-md font-display font-medium text-sm px-6 h-11">
              View all services <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
