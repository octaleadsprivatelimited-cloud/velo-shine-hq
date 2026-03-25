import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Droplets, CheckCircle2, ArrowRight, Sparkles, ShieldCheck, Zap, Clock, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";
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
      <section className="relative pt-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src={foamWashImg} alt="Doorstep Car Foam Wash" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-foreground/70" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/85 to-foreground/20" />
          <div className="absolute inset-0 noise opacity-10" />
        </div>

        <div className="container mx-auto px-6 relative z-10 py-16 md:py-24">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.2fr_0.8fr] gap-8 items-end">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="rounded-[2rem] border border-background/15 bg-background/10 backdrop-blur-xl p-7 md:p-10 shadow-2xl"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-6">
                <Droplets className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-primary">Most Popular Service</span>
              </div>

              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[0.95] text-background mb-5">
                Doorstep Car <span className="text-primary">Foam Wash</span>
              </h1>

              <p className="text-base md:text-lg text-background/75 max-w-2xl leading-relaxed mb-8">
                Premium scratch-free foam wash at your doorstep with our own water, electricity, and professional-grade products.
              </p>

              <div className="flex flex-wrap items-center gap-4 mb-8">
                <Link to="/booking">
                  <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-display font-bold px-8 h-14 rounded-xl btn-glow glow-border">
                    Schedule Wash <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <div className="flex items-center gap-1.5 text-sm text-background/70">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                  <span className="ml-1 font-semibold text-background">4.9/5</span>
                </div>
              </div>

              <div className="grid sm:grid-cols-3 gap-3">
                <div className="rounded-2xl border border-background/10 bg-background/5 p-4">
                  <div className="text-xs uppercase tracking-[0.2em] text-background/45 mb-1">Starts at</div>
                  <div className="font-display text-3xl font-extrabold text-primary">₹679</div>
                </div>
                <div className="rounded-2xl border border-background/10 bg-background/5 p-4">
                  <div className="text-xs uppercase tracking-[0.2em] text-background/45 mb-1">Duration</div>
                  <div className="font-display text-xl font-bold text-background">30–45 min</div>
                </div>
                <div className="rounded-2xl border border-background/10 bg-background/5 p-4">
                  <div className="text-xs uppercase tracking-[0.2em] text-background/45 mb-1">Includes</div>
                  <div className="font-display text-xl font-bold text-background">Interior + Exterior</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="grid sm:grid-cols-2 lg:grid-cols-1 gap-4"
            >
              {highlights.map((item) => (
                <div key={item.title} className="rounded-2xl border border-background/12 bg-background/8 backdrop-blur-md p-5">
                  <div className="w-11 h-11 rounded-xl bg-primary/15 border border-primary/25 flex items-center justify-center mb-3">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-background mb-1">{item.title}</h3>
                  <p className="text-sm text-background/65">{item.desc}</p>
                </div>
              ))}
            </motion.div>
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

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 max-w-6xl mx-auto">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
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
                    Select Plan <ArrowRight className="w-4 h-4 ml-1" />
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
