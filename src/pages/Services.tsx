import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Sparkles, CheckCircle2, ArrowRight, Droplets, Calendar, Shield,
  Zap, Clock, ShieldCheck, Star, Car, Wrench
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";

const foamWashPlans = [
  {
    name: "Single Foam Wash",
    subtitle: "Premium foam wash + interior cleaning",
    originalPrice: "₹879",
    price: "₹679",
    perWash: null,
    discount: null,
    features: [
      "Exterior pressure water wash",
      "Exterior pressure foam wash",
      "Hand scrub",
      "Pressure water rinsing",
      "Towel dry cleaning",
      "Interior vacuum",
      "Interior dusting & wiping",
      "Interior mat / carpet cleaning",
      "Dashboard polish",
      "Glass clean and shine",
      "Tire polish",
      "Air top-up",
    ],
    popular: true,
  },
  {
    name: "Car + Bike Combo",
    subtitle: "Foam wash combo for car + bike",
    originalPrice: "₹999",
    price: "₹899",
    perWash: null,
    discount: null,
    features: [
      "Exterior pressure water wash (car + bike)",
      "Exterior pressure foam wash (car + bike)",
      "Hand scrub (car + bike)",
      "Pressure water rinsing (car + bike)",
      "Towel dry cleaning (car + bike)",
      "Interior vacuum",
      "Interior dusting & wiping",
      "Interior mat / carpet cleaning",
      "Dashboard polish",
      "Glass clean and shine",
      "Tire polish",
      "Air top-up (car + bike)",
    ],
    popular: false,
  },
  {
    name: "Monthly ×2 Plan",
    subtitle: "2 doorstep foam washes per month",
    originalPrice: "₹1,399",
    price: "₹1,199",
    perWash: "₹599 per wash",
    discount: "13% off",
    features: [
      "Exterior pressure water wash",
      "Exterior pressure foam wash",
      "Hand scrub",
      "Pressure water rinsing",
      "Towel dry cleaning",
      "Interior vacuum",
      "Interior dusting & wiping",
      "Interior mat / carpet cleaning",
      "Dashboard polish",
      "Glass clean and shine",
      "Tire polish",
      "Air top-up",
    ],
    popular: false,
  },
  {
    name: "Monthly ×4 Plan",
    subtitle: "4 doorstep foam washes per month",
    originalPrice: "₹2,399",
    price: "₹2,199",
    perWash: "₹549 per wash",
    discount: "21% off",
    features: [
      "Exterior pressure water wash",
      "Exterior pressure foam wash",
      "Hand scrub",
      "Pressure water rinsing",
      "Towel dry cleaning",
      "Interior vacuum",
      "Interior dusting & wiping",
      "Interior mat / carpet cleaning",
      "Dashboard polish",
      "Glass clean and shine",
      "Tire polish",
      "Air top-up",
    ],
    popular: false,
  },
];

const regularPlans = [
  {
    name: "Regular Car Cleaning",
    subtitle: "Alternate day exterior + interior every 12 days",
    originalPrice: "₹799",
    price: "₹599",
    perWash: null,
    discount: null,
    tagline: "Less than the cost of a pizza 🍕",
    features: [
      "Alternate day exterior cleaning",
      "Interior cleaning every 12 days",
      "Fresh water for each car",
      "New microfiber for every car",
      "Hand-held pressure pumps",
      "Eco-friendly, minimal water",
      "Daily images with timestamp",
    ],
    popular: false,
    icon: Calendar,
  },
  {
    name: "Everyday Car Cleaning",
    subtitle: "Everyday exterior + interior every 12 days",
    originalPrice: "₹1,399",
    price: "₹1,198",
    perWash: null,
    discount: null,
    tagline: "Your car is clean every single day",
    features: [
      "Everyday exterior cleaning",
      "Interior cleaning every 12 days",
      "Fresh water for each car",
      "New microfiber for every car",
      "Hand-held pressure pumps",
      "Eco-friendly, minimal water",
      "Daily images with timestamp",
    ],
    popular: true,
    icon: Sparkles,
  },
  {
    name: "Premium Monthly",
    subtitle: "Everyday wash + weekly foam wash",
    originalPrice: "₹2,999",
    price: "₹2,499",
    perWash: null,
    discount: null,
    tagline: "The ultimate clean car experience ✨",
    features: [
      "Everyday exterior cleaning",
      "Interior cleaning every 7 days",
      "Weekly foam wash included",
      "Fresh water & microfiber",
      "Hand-held pressure pumps",
      "Priority scheduling",
      "Daily images with timestamp",
    ],
    popular: false,
    icon: Zap,
  },
];

const generalServiceFeatures = [
  "Guaranteed discounted price",
  "Usage of genuine spares only",
  "Trained & certified technicians",
  "Doorstep convenience",
  "Transparent pricing",
  "Post-service quality check",
];

type Tab = "foam-wash" | "regular" | "general";

const ServicesPage = () => {
  const [activeTab, setActiveTab] = useState<Tab>("foam-wash");

  const tabs: { id: Tab; label: string; icon: React.ElementType }[] = [
    { id: "foam-wash", label: "Foam Wash", icon: Droplets },
    { id: "regular", label: "Regular Cleaning", icon: Car },
    { id: "general", label: "General Service", icon: Wrench },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="Car Wash & Detailing Services — Velociwash Doorstep Car Care"
        description="Explore Velociwash's full range of doorstep car care services with pricing. Foam wash, regular cleaning, and general service plans."
        keywords="car wash services, car detailing services, foam wash service, regular car cleaning, doorstep car care, Velociwash services, car wash prices"
      />
      <Navbar />

      {/* Hero */}
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
              Our <span className="text-primary">Services</span> & Pricing
            </h1>
            <p className="text-lg text-background/65 max-w-lg leading-relaxed">
              From quick washes to full detailing — we bring the studio to your doorstep. All prices included below.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tabs */}
      <section className="py-16 bg-secondary/50 relative">
        <div className="absolute inset-0 noise opacity-10" />
        <div className="container mx-auto px-6 relative z-10">
          {/* Tab nav */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => { setActiveTab(tab.id); }}
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-display font-bold text-sm transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                    : "bg-card border border-border text-muted-foreground hover:border-primary/30 hover:text-foreground"
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Foam Wash Plans */}
          {activeTab === "foam-wash" && (
            <motion.div
              key="foam-wash"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-center mb-10">
                <h2 className="font-display text-2xl md:text-4xl font-extrabold">
                  Foam Wash <span className="text-gradient">Plans</span>
                </h2>
                <p className="text-muted-foreground mt-3 max-w-md mx-auto">All plans include full interior + exterior service.</p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border max-w-6xl mx-auto rounded-xl overflow-hidden border border-border">
                {foamWashPlans.map((plan, i) => (
                  <motion.div
                    key={plan.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.06 }}
                    className={`bg-card p-6 flex flex-col relative ${
                      plan.popular ? "bg-primary/[0.03]" : ""
                    }`}
                  >
                    {plan.popular && (
                      <div className="absolute top-0 left-0 right-0 h-[3px] bg-primary" />
                    )}

                    <div className="mb-5">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-display text-base font-bold">{plan.name}</h3>
                        {plan.popular && (
                          <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-primary/10 text-primary">
                            Popular
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground">{plan.subtitle}</p>
                    </div>

                    <div className="mb-1">
                      <span className="text-xs text-muted-foreground line-through mr-2">{plan.originalPrice}</span>
                      <span className="font-display text-2xl font-extrabold text-foreground">{plan.price}</span>
                    </div>
                    {plan.discount && (
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded">{plan.discount}</span>
                        {plan.perWash && <span className="text-[11px] text-muted-foreground">{plan.perWash}</span>}
                      </div>
                    )}

                    <div className="border-t border-border my-4" />

                    <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-3">What's included</p>
                    <div className="space-y-2 flex-1">
                      {plan.features.map((f) => (
                        <div key={f} className="flex items-start gap-2 text-[13px]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{f}</span>
                        </div>
                      ))}
                    </div>

                    <Link to="/booking" className="mt-6">
                      <Button className={`w-full font-display font-semibold h-10 rounded-lg text-sm ${
                        plan.popular
                          ? "bg-primary text-primary-foreground hover:bg-primary/90"
                          : "bg-secondary text-foreground hover:bg-secondary/80"
                      }`}>
                        Book Now <ArrowRight className="w-3.5 h-3.5 ml-1" />
                      </Button>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Regular Cleaning Plans */}
          {activeTab === "regular" && (
            <motion.div
              key="regular"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-center mb-10">
                <h2 className="font-display text-2xl md:text-4xl font-extrabold">
                  Regular Cleaning <span className="text-gradient">Plans</span>
                </h2>
                <p className="text-muted-foreground mt-3 max-w-md mx-auto">Affordable daily or alternate-day cleaning subscriptions.</p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border max-w-5xl mx-auto rounded-xl overflow-hidden border border-border">
                {regularPlans.map((plan, i) => (
                  <motion.div
                    key={plan.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.06 }}
                    className={`bg-card p-6 flex flex-col relative ${
                      plan.popular ? "bg-primary/[0.03]" : ""
                    }`}
                  >
                    {plan.popular && (
                      <div className="absolute top-0 left-0 right-0 h-[3px] bg-primary" />
                    )}

                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <plan.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-display text-base font-bold">{plan.name}</h3>
                          {plan.popular && (
                            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-primary/10 text-primary">
                              Popular
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-muted-foreground">{plan.subtitle}</p>
                      </div>
                    </div>

                    <div className="mb-1">
                      <span className="text-xs text-muted-foreground line-through mr-2">{plan.originalPrice}</span>
                      <span className="font-display text-2xl font-extrabold text-foreground">{plan.price}</span>
                      <span className="text-sm text-muted-foreground">/mo</span>
                    </div>
                    <p className="text-sm text-foreground mb-4">{plan.tagline}</p>

                    <div className="border-t border-border my-3" />

                    <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-3">What's included</p>
                    <div className="space-y-2 flex-1">
                      {plan.features.map((f) => (
                        <div key={f} className="flex items-start gap-2 text-[13px]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{f}</span>
                        </div>
                      ))}
                    </div>

                    <Link to="/booking" className="mt-6">
                      <Button className={`w-full font-display font-semibold h-10 rounded-lg text-sm ${
                        plan.popular
                          ? "bg-primary text-primary-foreground hover:bg-primary/90"
                          : "bg-secondary text-foreground hover:bg-secondary/80"
                      }`}>
                        Subscribe Now <ArrowRight className="w-3.5 h-3.5 ml-1" />
                      </Button>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* General Service */}
          {activeTab === "general" && (
            <motion.div
              key="general"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-center mb-10">
                <h2 className="font-display text-2xl md:text-4xl font-extrabold">
                  General Car <span className="text-gradient">Service</span>
                </h2>
                <p className="text-muted-foreground mt-3 max-w-md mx-auto">Full mechanical care at your doorstep with genuine spares.</p>
              </div>

              <div className="max-w-3xl mx-auto">
                <div className="bg-card border border-border rounded-xl overflow-hidden">
                  <div className="p-6 flex items-center gap-4 border-b border-border">
                    <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Wrench className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-bold">Doorstep Car General Service</h3>
                      <p className="text-xs text-muted-foreground">Comprehensive car servicing at your location</p>
                    </div>
                  </div>

                  <div className="p-6">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-4">What's included</p>
                    <div className="grid sm:grid-cols-2 gap-3 mb-6">
                      {generalServiceFeatures.map((f) => (
                        <div key={f} className="flex items-start gap-2 text-[13px]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-border p-6 flex flex-col sm:flex-row items-center justify-between gap-4 bg-secondary/30">
                    <p className="text-sm text-muted-foreground">Contact us for a custom quote based on your car model and service needs.</p>
                    <Link to="/booking">
                      <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-display font-semibold h-10 px-8 rounded-lg whitespace-nowrap">
                        Get Quote <ArrowRight className="w-3.5 h-3.5 ml-1" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      <div className="py-4" />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ServicesPage;
