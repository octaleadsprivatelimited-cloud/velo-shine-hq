import { motion } from "framer-motion";
import { UserPlus, CalendarCheck, Sparkles } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    step: "01",
    title: "Get in Touch",
    description: "Contact us via WhatsApp or phone to discuss your car care needs.",
  },
  {
    icon: CalendarCheck,
    step: "02",
    title: "Schedule a Wash",
    description: "Pick a date, time, and location. We'll be there with everything needed.",
  },
  {
    icon: Sparkles,
    step: "03",
    title: "Sit Back & Shine",
    description: "We handle the rest. Your car gets a showroom finish at your doorstep.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-widest">How It Works</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4">
            Three Simple{" "}
            <span className="text-gradient">Steps</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative text-center"
            >
              <div className="font-display text-7xl font-bold text-primary/10 absolute -top-4 left-1/2 -translate-x-1/2">
                {item.step}
              </div>
              <div className="relative pt-10">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed max-w-xs mx-auto">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
