import { motion } from "framer-motion";
import { Droplets, SprayCan, Sparkles, Car } from "lucide-react";
import foamWashImg from "@/assets/service-foam-wash.jpg";
import interiorImg from "@/assets/service-interior.jpg";
import ceramicImg from "@/assets/service-ceramic.jpg";

const services = [
  {
    icon: Droplets,
    title: "Foam Wash",
    description: "High-pressure snow foam wash that gently lifts dirt and grime without scratching your car's surface.",
    image: foamWashImg,
    badge: "Most Popular",
  },
  {
    icon: SprayCan,
    title: "Interior Detailing",
    description: "Deep cleaning of your car's interior — seats, dashboard, carpets, and every crevice, using premium products.",
    image: interiorImg,
    badge: null,
  },
  {
    icon: Sparkles,
    title: "Ceramic Coating",
    description: "Long-lasting ceramic protection that gives your car a mirror-like shine and shields against UV and scratches.",
    image: ceramicImg,
    badge: "Premium",
  },
  {
    icon: Car,
    title: "Regular Cleaning",
    description: "Daily or weekly exterior wash with fresh microfiber towels and purified water. Subscription plans available.",
    image: null,
    badge: null,
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-widest">Our Services</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4">
            Premium Car Care,{" "}
            <span className="text-gradient">Delivered</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
            From quick exterior washes to full ceramic coatings — we bring the studio to your doorstep.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-xl overflow-hidden bg-card border border-border hover:border-primary/30 transition-all duration-500"
            >
              {service.image && (
                <div className="h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    width={800}
                    height={600}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                </div>
              )}
              <div className={`p-8 ${service.image ? "relative -mt-12" : ""}`}>
                {service.badge && (
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 mb-4">
                    {service.badge}
                  </span>
                )}
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <service.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-bold">{service.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
