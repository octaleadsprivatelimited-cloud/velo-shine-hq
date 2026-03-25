import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Droplets, CheckCircle2, ArrowRight, Sparkles, ShieldCheck, Zap, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import foamWashImg from "@/assets/service-foam-wash.jpg";

const plans = [
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

const highlights = [
  { icon: ShieldCheck, title: "Scratch-Free", desc: "pH-neutral foam, no harsh chemicals" },
  { icon: Zap, title: "Self-Sufficient", desc: "We bring our own water & electricity" },
  { icon: Clock, title: "30-45 Minutes", desc: "Quick service, no waiting around" },
  { icon: Sparkles, title: "Premium Products", desc: "Imported, professional-grade formulas" },
];

const FoamWashPage = () => {
  const [expandedPlan, setExpandedPlan] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={foamWashImg} alt="Doorstep Car Foam Wash" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(225,25%,3%/0.95)] via-[hsl(225,25%,5%/0.85)] to-[hsl(225,25%,5%/0.4)]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[hsl(225,25%,3%)] via-transparent to-[hsl(225,25%,5%/0.5)]" />
          <div className="absolute inset-0 noise opacity-20" />
        </div>
        <div className="container mx-auto px-6 relative z-10 py-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm mb-6">
              <Droplets className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">Most Popular Service</span>
            </div>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4 text-white text-shadow-hero">
              Doorstep Car{" "}<span className="text-gradient">Foam Wash</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-xl mb-8 leading-relaxed text-shadow-sm">
              Where convenience meets quality and affordability. Premium foam wash delivered to your doorstep.
            </p>
            <Link to="/booking">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-display font-bold text-base px-10 h-14 btn-glow glow-border rounded-xl">
                Schedule Wash <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 bg-secondary/50 relative">
        <div className="absolute inset-0 noise opacity-10" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card border border-border rounded-2xl p-6 text-center hover:border-primary/30 transition-all duration-500 card-shine group"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/25 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                  <item.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-display font-bold text-sm mb-1">{item.title}</h3>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 bg-background relative">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-sm font-semibold text-primary uppercase tracking-widest">Pricing</span>
            <h2 className="font-display text-3xl md:text-5xl font-extrabold mt-4">Choose Your Plan</h2>
            <p className="text-muted-foreground mt-4 max-w-md mx-auto">All plans include full interior + exterior service. Monthly plans save you more.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`bg-card border rounded-2xl p-7 md:p-9 transition-all duration-500 card-shine ${
                  plan.popular ? "border-primary/40 glow-border" : "border-border hover:border-primary/20"
                }`}
              >
                <div className="flex items-start justify-between mb-5">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-display text-xl font-bold">{plan.name}</h3>
                      {plan.popular && (
                        <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-primary/15 text-primary border border-primary/25">
                          Popular
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">{plan.subtitle}</p>
                  </div>
                </div>

                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-sm text-muted-foreground line-through">{plan.originalPrice}</span>
                  <span className="font-display text-4xl font-extrabold text-primary">{plan.price}</span>
                </div>
                {plan.discount && (
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-xs font-bold text-primary bg-primary/10 px-2.5 py-1 rounded-full border border-primary/20">{plan.discount}</span>
                    {plan.perWash && <span className="text-xs text-muted-foreground">{plan.perWash}</span>}
                  </div>
                )}

                <div className="mt-6 mb-6">
                  <button
                    onClick={() => setExpandedPlan(expandedPlan === i ? null : i)}
                    className="text-xs text-primary font-semibold hover:text-primary/80 transition-colors"
                  >
                    {expandedPlan === i ? "Hide" : "Show"} included services
                  </button>
                  {expandedPlan === i && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="mt-4 grid grid-cols-1 gap-2"
                    >
                      {plan.features.map((f) => (
                        <div key={f} className="flex items-center gap-2 text-sm">
                          <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                          <span className="text-muted-foreground">{f}</span>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </div>

                <Link to="/booking">
                  <Button className={`w-full font-display font-bold h-12 rounded-xl ${plan.popular ? "bg-primary text-primary-foreground hover:bg-primary/90 btn-glow" : "bg-secondary text-foreground hover:bg-secondary/80"}`}>
                    Select Plan <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary/50 relative">
        <div className="absolute inset-0 noise opacity-10" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-card to-accent/5" />
            <div className="absolute inset-0 noise opacity-20" />
            <div className="relative border border-primary/20 rounded-3xl p-10 md:p-16 text-center glow-border">
              <div className="divider-accent mx-auto mb-6" />
              <h2 className="font-display text-3xl md:text-4xl font-extrabold mb-4">
                Ready to Get Your Car <span className="text-gradient">Sparkling</span>?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-md mx-auto">Book your foam wash now and experience the Velociwash difference.</p>
              <Link to="/booking">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-display font-bold text-base px-10 h-14 btn-glow rounded-xl">
                  Book Now <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default FoamWashPage;
