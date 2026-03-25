import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle2, Droplets } from "lucide-react";
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
  },
];

const RegularCleaningPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <section className="pt-32 pb-8">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-4">
              Regular Car <span className="text-gradient">Cleaning</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl">
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
                className="bg-card border border-border rounded-2xl p-6 md:p-8 hover:border-primary/20 transition-colors"
              >
                <h3 className="font-display text-xl font-bold mb-1">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{plan.subtitle}</p>

                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-sm text-muted-foreground line-through">{plan.originalPrice}</span>
                  <span className="font-display text-3xl font-bold text-primary">{plan.price}</span>
                  <span className="text-sm text-muted-foreground">/month</span>
                </div>
                <p className="text-sm text-secondary-foreground mb-6">{plan.tagline}</p>

                <div className="space-y-2 mb-6">
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

          <div className="mt-12 bg-card border border-border rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 max-w-4xl mx-auto">
            <div>
              <h3 className="font-display text-xl font-bold mb-1">Bundle with Foam Wash</h3>
              <p className="text-muted-foreground text-sm">Want a deeper clean? Add a foam wash along with your regular plan.</p>
            </div>
            <Link to="/foam-wash">
              <Button variant="outline" className="border-primary/30 text-primary hover:bg-primary/10 font-display font-semibold whitespace-nowrap">
                <Droplets className="w-4 h-4 mr-2" /> View Foam Wash
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
