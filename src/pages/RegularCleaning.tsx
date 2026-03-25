import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle2, Droplets, ArrowRight, Calendar, Shield, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

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
  },
];

const RegularCleaningPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <section className="pt-32 pb-10 relative">
        <div className="absolute inset-0 noise opacity-15" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm mb-6">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">Subscription Plans</span>
            </div>
            <h1 className="font-display text-4xl md:text-6xl font-extrabold mb-4">
              Regular Car <span className="text-gradient">Cleaning</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              Affordable daily or alternate-day cleaning with fresh water and microfiber for every car.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 pb-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card border border-border rounded-2xl p-7 md:p-9 hover:border-primary/30 transition-all duration-500 card-shine group"
              >
                <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/25 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                  <plan.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-display text-xl font-bold mb-1">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mb-5">{plan.subtitle}</p>

                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-sm text-muted-foreground line-through">{plan.originalPrice}</span>
                  <span className="font-display text-4xl font-extrabold text-primary">{plan.price}</span>
                  <span className="text-sm text-muted-foreground">/month</span>
                </div>
                <p className="text-sm text-secondary-foreground mb-6">{plan.tagline}</p>

                <div className="space-y-2.5 mb-7">
                  {plan.features.map((f) => (
                    <div key={f} className="flex items-start gap-2.5 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span className="text-secondary-foreground">{f}</span>
                    </div>
                  ))}
                </div>

                <Link to="/booking">
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-display font-bold h-12 rounded-xl btn-glow">
                    Subscribe Now <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 relative rounded-2xl overflow-hidden max-w-4xl mx-auto"
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
