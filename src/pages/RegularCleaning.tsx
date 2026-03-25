import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Car, CheckCircle2, ArrowRight, Shield, Droplets, Sparkles, Repeat } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const plans = [
  {
    name: "Regular Car Cleaning",
    subtitle: "Alternate day exterior cleaning, interior cleaning every 12 days",
    originalPrice: "₹799",
    price: "₹599",
    tagline: "Just pay ₹599/month — less than the cost of a pizza 🍕",
    features: [
      "Alternate day exterior cleaning (body, windows & rims)",
      "Interior cleaning every 12 days",
      "Fresh water for each car",
      "New microfiber for every car",
      "No buckets — hand-held pressure pumps",
      "Eco-friendly cleaning, minimal water usage",
      "Everyday images shared with timestamp",
      "Service reminders in app",
    ],
  },
  {
    name: "Everyday Car Cleaning",
    subtitle: "Everyday exterior cleaning, interior cleaning every 12 days",
    originalPrice: "₹1,399",
    price: "₹1,198",
    tagline: "Extreme value — your car is clean every single day",
    features: [
      "Everyday exterior cleaning (body, windows & rims)",
      "Interior cleaning every 12 days",
      "Fresh water for each car",
      "New microfiber for every car",
      "No buckets — hand-held pressure pumps",
      "Eco-friendly cleaning, minimal water usage",
      "Everyday images shared with timestamp",
      "Service reminders in app",
    ],
  },
];

const benefits = [
  { icon: Shield, title: "Protects Your Paint", desc: "Regular cleaning prevents dirt buildup that damages your car's finish" },
  { icon: Sparkles, title: "Optimal & Efficient", desc: "Researched techniques with proper equipment to reduce scratches" },
  { icon: Repeat, title: "Reduces Scratches", desc: "Fresh microfiber and purified water every time — no swirl marks" },
];

const howItWorks = [
  { label: "Fresh water for each car", color: "bg-primary/20 text-primary" },
  { label: "New microfiber for every car", color: "bg-primary/15 text-primary" },
  { label: "No buckets — hand-held pressure pumps", color: "bg-primary/10 text-primary" },
];

const RegularCleaningPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-6">
              <Car className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Subscription Plans</span>
            </div>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              Regular Car Cleaning That's{" "}<span className="text-gradient">Actually Regular</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-10">
              Affordable daily or alternate-day cleaning with fresh water and microfiber for every car. No compromises.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <span className="text-sm font-medium text-primary uppercase tracking-widest">Why Regular Cleaning?</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mt-4">Keep Your Car Showroom-Fresh</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card border border-border rounded-2xl p-6 text-center hover:border-primary/20 transition-colors"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-4">
                  <b.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-bold mb-2">{b.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How Tags */}
      <section className="py-12">
        <div className="container mx-auto px-6 text-center">
          <h3 className="font-display text-xl font-bold mb-6">How We Do It</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {howItWorks.map((h) => (
              <span key={h.label} className={`px-5 py-2.5 rounded-full text-sm font-medium ${h.color} border border-primary/20`}>
                {h.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="text-sm font-medium text-primary uppercase tracking-widest">Plans</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold mt-4">Choose Your Plan</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-card border border-border rounded-2xl p-8 hover:border-primary/20 transition-colors"
              >
                <h3 className="font-display text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{plan.subtitle}</p>

                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-sm text-muted-foreground line-through">{plan.originalPrice}</span>
                  <span className="font-display text-4xl font-bold text-primary">{plan.price}</span>
                  <span className="text-sm text-muted-foreground">/month</span>
                </div>

                <p className="text-sm text-secondary-foreground mb-6">{plan.tagline}</p>

                <div className="space-y-2 mb-8">
                  {plan.features.map((f) => (
                    <div key={f} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span className="text-secondary-foreground">{f}</span>
                    </div>
                  ))}
                </div>

                <Link to="/booking">
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-display font-semibold">
                    Subscribe Now
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bundle CTA */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="bg-card border border-border rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-display text-2xl font-bold mb-2">Bundle with Foam Wash</h3>
              <p className="text-muted-foreground">Want a deeper clean? Add a foam wash along with your regular plan.</p>
            </div>
            <Link to="/foam-wash">
              <Button variant="outline" className="border-primary/30 text-primary hover:bg-primary/10 font-display font-semibold whitespace-nowrap">
                <Droplets className="w-4 h-4 mr-2" /> Go to Foam Wash
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

export default RegularCleaningPage;
