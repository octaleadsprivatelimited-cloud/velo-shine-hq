import { motion } from "framer-motion";
import { Droplets, SprayCan, Sparkles, Car, ShieldCheck, Clock, Zap, CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import foamWashImg from "@/assets/service-foam-wash.jpg";
import interiorImg from "@/assets/service-interior.jpg";
import ceramicImg from "@/assets/service-ceramic.jpg";

const services = [
  {
    icon: Droplets,
    title: "Doorstep Foam Wash",
    description: "High-pressure snow foam wash that gently lifts dirt and grime without scratching. We bring our own water and electricity.",
    image: foamWashImg,
    badge: "Most Popular",
    features: ["pH-neutral foam", "Scratch-free wash", "Own water & power", "30-45 min service"],
    pricing: [
      { plan: "Single Wash", price: "₹499" },
      { plan: "Monthly (4 washes)", price: "₹1,499" },
      { plan: "Monthly (8 washes)", price: "₹2,499" },
    ],
  },
  {
    icon: SprayCan,
    title: "Interior Detailing",
    description: "Deep cleaning of seats, dashboard, carpets, and every crevice. Using premium imported products for a showroom finish.",
    image: interiorImg,
    badge: null,
    features: ["Leather conditioning", "Stain removal", "Odor elimination", "Dashboard polish"],
    pricing: [
      { plan: "Basic Interior", price: "₹999" },
      { plan: "Deep Clean", price: "₹1,999" },
      { plan: "Full Detail", price: "₹3,499" },
    ],
  },
  {
    icon: Sparkles,
    title: "Ceramic Coating",
    description: "9H nano-ceramic protection that gives your car a mirror-like shine and shields against UV, scratches, and chemical damage.",
    image: ceramicImg,
    badge: "Premium",
    features: ["9H hardness", "2-year protection", "UV resistance", "Hydrophobic surface"],
    pricing: [
      { plan: "Hatchback", price: "₹8,999" },
      { plan: "Sedan", price: "₹11,999" },
      { plan: "SUV", price: "₹14,999" },
    ],
  },
  {
    icon: Car,
    title: "Regular Cleaning",
    description: "Daily or weekly exterior wash with fresh microfiber towels and purified water. Perfect for maintaining that fresh look.",
    image: null,
    badge: "Subscription",
    features: ["Fresh microfiber every time", "Purified water", "Daily/weekly plans", "Flexible scheduling"],
    pricing: [
      { plan: "Daily (26 washes)", price: "₹2,999/mo" },
      { plan: "Alternate Days", price: "₹1,999/mo" },
      { plan: "Weekly (4 washes)", price: "₹999/mo" },
    ],
  },
];

const whyUs = [
  { icon: ShieldCheck, title: "Eco-Friendly", desc: "Biodegradable products, minimal water waste" },
  { icon: Clock, title: "Punctual", desc: "We arrive on time, every time" },
  { icon: Zap, title: "Self-Sufficient", desc: "Own water, power, and equipment" },
  { icon: Sparkles, title: "Premium Products", desc: "Imported, pH-neutral formulas" },
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <PageHeader
        badge="Our Services"
        title={<>Premium Car Care, <span className="text-gradient">Delivered</span></>}
        description="From quick exterior washes to full ceramic coatings — we bring the detailing studio to your doorstep."
      />

      {/* Why Choose Us */}
      <section className="pb-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {whyUs.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="bg-card border border-border rounded-2xl p-6 text-center hover:border-primary/20 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-3">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-sm mb-1">{item.title}</h3>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="pb-24">
        <div className="container mx-auto px-6 space-y-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/20 transition-colors"
            >
              <div className={`grid ${service.image ? "md:grid-cols-5" : "md:grid-cols-1"}`}>
                {service.image && (
                  <div className="md:col-span-2 h-64 md:h-auto overflow-hidden">
                    <img src={service.image} alt={service.title} loading="lazy" width={800} height={600} className="w-full h-full object-cover" />
                  </div>
                )}
                <div className={`${service.image ? "md:col-span-3" : ""} p-8 md:p-10`}>
                  <div className="flex items-center gap-3 mb-4">
                    {service.badge && (
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
                        {service.badge}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <service.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h2 className="font-display text-2xl font-bold">{service.title}</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>

                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {service.features.map((f) => (
                      <div key={f} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                        <span className="text-secondary-foreground">{f}</span>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-border pt-6 flex flex-wrap items-end justify-between gap-4">
                    <div className="flex flex-wrap gap-3">
                      {service.pricing.map((p) => (
                        <div key={p.plan} className="bg-secondary/50 rounded-xl px-4 py-3">
                          <div className="text-xs text-muted-foreground">{p.plan}</div>
                          <div className="font-display font-bold text-primary">{p.price}</div>
                        </div>
                      ))}
                    </div>
                    <Link to="/booking">
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

      {/* CTA */}
      <section className="pb-24">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-br from-primary/10 via-card to-card border border-primary/20 rounded-3xl p-10 md:p-16 text-center glow-border">
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
              Ready to Get <span className="text-gradient">Started</span>?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              Book your first wash today and experience the Velociwash difference.
            </p>
            <Link to="/booking">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-display font-semibold text-base px-10 h-14">
                Book a Wash <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ServicesPage;
