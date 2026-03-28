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

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
                {foamWashPlans.map((plan, i) => (
                  <motion.div
                    key={plan.name}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08 }}
                    className={`bg-card border rounded-2xl p-6 transition-all duration-500 card-shine flex flex-col ${
                      plan.popular ? "border-primary/40 glow-border" : "border-border hover:border-primary/20"
                    }`}
                  >
                    <div className="mb-4">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-display text-lg font-bold">{plan.name}</h3>
                        {plan.popular && (
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-primary/15 text-primary border border-primary/25">
                            Popular
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground">{plan.subtitle}</p>
                    </div>

                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="text-xs text-muted-foreground line-through">{plan.originalPrice}</span>
                      <span className="font-display text-3xl font-extrabold text-primary">{plan.price}</span>
                    </div>
                    {plan.discount && (
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full border border-primary/20">{plan.discount}</span>
                        {plan.perWash && <span className="text-[11px] text-muted-foreground">{plan.perWash}</span>}
                      </div>
                    )}

                    <div className="mt-4 mb-4 flex-1">
                      <button
                        onClick={() => setExpandedPlan(expandedPlan === i ? null : i)}
                        className="text-xs text-primary font-semibold hover:text-primary/80 transition-colors"
                      >
                        {expandedPlan === i ? "Hide" : "Show"} services
                      </button>
                      {expandedPlan === i && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          className="mt-3 space-y-1.5"
                        >
                          {plan.features.map((f) => (
                            <div key={f} className="flex items-start gap-1.5 text-xs">
                              <CheckCircle2 className="w-3 h-3 text-primary shrink-0 mt-0.5" />
                              <span className="text-muted-foreground">{f}</span>
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </div>

                    <Link to="/booking" className="mt-auto">
                      <Button className={`w-full font-display font-bold h-11 rounded-xl text-sm ${plan.popular ? "bg-primary text-primary-foreground hover:bg-primary/90 btn-glow" : "bg-secondary text-foreground hover:bg-secondary/80"}`}>
                        Book Now <ArrowRight className="w-4 h-4 ml-1" />
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

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {regularPlans.map((plan, i) => (
                  <motion.div
                    key={plan.name}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className={`bg-card border rounded-2xl p-7 hover:border-primary/30 transition-all duration-500 card-shine group flex flex-col ${
                      plan.popular ? "border-primary/40 glow-border" : "border-border"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/25 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                        <plan.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                      </div>
                      {plan.popular && (
                        <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-primary/15 text-primary border border-primary/25">
                          Popular
                        </span>
                      )}
                    </div>
                    <h3 className="font-display text-xl font-bold mb-1">{plan.name}</h3>
                    <p className="text-xs text-muted-foreground mb-4">{plan.subtitle}</p>

                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="text-sm text-muted-foreground line-through">{plan.originalPrice}</span>
                      <span className="font-display text-3xl font-extrabold text-primary">{plan.price}</span>
                      <span className="text-sm text-muted-foreground">/mo</span>
                    </div>
                    <p className="text-sm text-foreground mb-5">{plan.tagline}</p>

                    <div className="space-y-2 mb-6 flex-1">
                      {plan.features.map((f) => (
                        <div key={f} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{f}</span>
                        </div>
                      ))}
                    </div>

                    <Link to="/booking" className="mt-auto">
                      <Button className={`w-full font-display font-bold h-12 rounded-xl ${
                        plan.popular ? "bg-primary text-primary-foreground hover:bg-primary/90 btn-glow" : "bg-secondary text-foreground hover:bg-secondary/80"
                      }`}>
                        Subscribe Now <ArrowRight className="w-4 h-4 ml-2" />
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

              <div className="max-w-2xl mx-auto">
                <div className="bg-card border border-border rounded-2xl p-8 md:p-10 card-shine">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/25 flex items-center justify-center">
                      <Wrench className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display text-2xl font-bold">Doorstep Car General Service</h3>
                      <p className="text-sm text-muted-foreground">Comprehensive car servicing at your location</p>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-3 mb-8">
                    {generalServiceFeatures.map((f) => (
                      <div key={f} className="flex items-center gap-2.5 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                        <span className="text-muted-foreground">{f}</span>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-muted-foreground">Contact us for a custom quote based on your car model and service needs.</p>
                    <Link to="/booking">
                      <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-display font-bold h-12 px-8 rounded-xl btn-glow whitespace-nowrap">
                        Get Quote <ArrowRight className="w-4 h-4 ml-2" />
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
