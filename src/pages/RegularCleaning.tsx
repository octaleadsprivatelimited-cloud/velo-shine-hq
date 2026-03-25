import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle2, Droplets, ArrowRight, Calendar, Shield, Sparkles, Star, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import interiorImg from "@/assets/service-interior.jpg";

const plans = [
  {
    name: "Regular Car Cleaning",
    subtitle: "Alternate day exterior + interior every 12 days",
    originalPrice: "₹799",
    price: "₹599",
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
    icon: Calendar,
  },
  {
    name: "Everyday Car Cleaning",
    subtitle: "Everyday exterior + interior every 12 days",
    originalPrice: "₹1,399",
    price: "₹1,198",
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
    icon: Sparkles,
    popular: true,
  },
  {
    name: "Premium Monthly",
    subtitle: "Everyday wash + weekly foam wash",
    originalPrice: "₹2,999",
    price: "₹2,499",
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
    icon: Zap,
  },
];

const RegularCleaningPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src={interiorImg} alt="Regular Car Cleaning" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(225,25%,3%/0.95)] via-[hsl(225,25%,5%/0.85)] to-[hsl(225,25%,5%/0.5)]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[hsl(225,25%,3%)] via-transparent to-[hsl(225,25%,5%/0.6)]" />
          <div className="absolute inset-0 noise opacity-20" />
        </div>
        <div className="container mx-auto px-6 relative z-10 py-20 md:py-28">
          <div className="max-w-2xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm mb-6">
                <Shield className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-primary">Subscription Plans</span>
              </div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 text-white text-shadow-hero leading-tight">
                Regular Car <span className="text-gradient">Cleaning</span>
              </h1>
              <p className="text-lg text-white/80 max-w-xl mb-8 leading-relaxed text-shadow-sm">
                Affordable daily or alternate-day cleaning with fresh water and microfiber for every car.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link to="/booking">
                  <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-display font-bold text-base px-8 h-14 btn-glow glow-border rounded-xl">
                    Subscribe Now <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <div className="flex items-center gap-1.5 text-sm text-shadow-sm">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-primary text-primary" />)}
                  <span className="ml-1 text-white/80 font-semibold">4.9/5</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-secondary/50 relative">
        <div className="absolute inset-0 noise opacity-10" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="text-sm font-semibold text-primary uppercase tracking-widest">Plans</span>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold mt-4">Choose Your Plan</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
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

          {/* Bundle CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 relative rounded-2xl overflow-hidden max-w-5xl mx-auto"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-card to-accent/5" />
            <div className="relative border border-primary/20 rounded-2xl p-7 md:p-9 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="font-display text-xl font-bold mb-1">Bundle with Foam Wash</h3>
                <p className="text-muted-foreground text-sm">Want a deeper clean? Add a foam wash along with your regular plan.</p>
              </div>
              <Link to="/foam-wash">
                <Button variant="outline" className="border-primary/30 text-primary hover:bg-primary/10 font-display font-bold whitespace-nowrap rounded-xl">
                  <Droplets className="w-4 h-4 mr-2" /> View Foam Wash
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

export default RegularCleaningPage;
