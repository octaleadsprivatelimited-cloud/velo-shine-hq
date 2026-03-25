import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Droplets, SprayCan, Sparkles, Car, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";
import foamWashImg from "@/assets/service-foam-wash.jpg";
import interiorImg from "@/assets/service-interior.jpg";
import ceramicImg from "@/assets/service-ceramic.jpg";

const services = [
  {
    icon: Droplets,
    title: "Doorstep Foam Wash",
    description: "High-pressure snow foam wash that gently lifts dirt without scratching. We bring our own water and electricity.",
    image: foamWashImg,
    href: "/foam-wash",
    features: ["pH-neutral foam", "Scratch-free", "Own water & power", "30-45 min"],
    pricing: [
      { plan: "Single Wash", price: "₹499" },
      { plan: "Monthly (4x)", price: "₹1,499" },
    ],
  },
  {
    icon: SprayCan,
    title: "Interior Detailing",
    description: "Deep cleaning of seats, dashboard, carpets using premium imported products.",
    image: interiorImg,
    href: "/booking",
    features: ["Leather conditioning", "Stain removal", "Odor elimination", "Dashboard polish"],
    pricing: [
      { plan: "Basic", price: "₹999" },
      { plan: "Deep Clean", price: "₹1,999" },
    ],
  },
  {
    icon: Sparkles,
    title: "Ceramic Coating",
    description: "9H nano-ceramic protection for mirror-like shine and UV/scratch shield.",
    image: ceramicImg,
    href: "/booking",
    features: ["9H hardness", "2-year protection", "UV resistance", "Hydrophobic"],
    pricing: [
      { plan: "Hatchback", price: "₹8,999" },
      { plan: "Sedan", price: "₹11,999" },
    ],
  },
  {
    icon: Car,
    title: "Regular Cleaning",
    description: "Daily or alternate-day exterior wash with fresh microfiber and purified water.",
    image: null,
    href: "/regular-cleaning",
    features: ["Fresh microfiber", "Purified water", "Flexible plans", "Timestamp photos"],
    pricing: [
      { plan: "Alternate Day", price: "₹599/mo" },
      { plan: "Everyday", price: "₹1,198/mo" },
    ],
  },
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="Car Wash & Detailing Services — Velociwash Doorstep Car Care"
        description="Explore Velociwash's full range of doorstep car care services. Foam wash, interior detailing, ceramic coating, and regular cleaning plans."
        keywords="car wash services, car detailing services, foam wash service, ceramic coating, interior detailing, doorstep car care, Velociwash services"
      />
      <Navbar />

      <section className="relative pt-24 overflow-hidden bg-foreground">
        <div className="absolute inset-0 bg-gradient-to-br from-foreground via-foreground to-[hsl(225,25%,12%)]" />
        <div className="absolute top-10 right-1/4 w-[500px] h-[500px] bg-primary/8 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[100px]" />
        <div className="absolute inset-0 noise opacity-10" />
        <div className="container mx-auto px-6 relative z-10 py-16 md:py-24">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">What We Offer</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold mb-5 text-background leading-tight">
              Our <span className="text-primary">Services</span>
            </h1>
            <p className="text-lg text-background/65 max-w-lg leading-relaxed">
              From quick washes to full ceramic coatings — we bring the studio to your doorstep.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-secondary/50 relative">
        <div className="absolute inset-0 noise opacity-10" />
        <div className="container mx-auto px-6 space-y-6 relative z-10">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/20 transition-colors"
            >
              <div className={`grid ${service.image ? "md:grid-cols-5" : ""}`}>
                {service.image && (
                  <div className="md:col-span-2 h-56 md:h-auto overflow-hidden">
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                  </div>
                )}
                <div className={`${service.image ? "md:col-span-3" : ""} p-6 md:p-8`}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <service.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h2 className="font-display text-xl md:text-2xl font-bold">{service.title}</h2>
                  </div>
                  <p className="text-muted-foreground mb-5">{service.description}</p>

                  <div className="grid grid-cols-2 gap-2 mb-5">
                    {service.features.map((f) => (
                      <div key={f} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                        <span className="text-foreground">{f}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-4 border-t border-border pt-5">
                    <div className="flex gap-3">
                      {service.pricing.map((p) => (
                        <div key={p.plan} className="bg-secondary/50 rounded-lg px-4 py-2">
                          <div className="text-xs text-muted-foreground">{p.plan}</div>
                          <div className="font-display font-bold text-primary">{p.price}</div>
                        </div>
                      ))}
                    </div>
                    <Link to={service.href}>
                      <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 font-display font-semibold">
                        Book Now <ArrowRight className="w-4 h-4 ml-1" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <div className="py-8" />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ServicesPage;
