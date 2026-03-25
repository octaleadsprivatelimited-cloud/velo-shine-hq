import { motion } from "framer-motion";
import { UserPlus, CalendarCheck, Car, Sparkles } from "lucide-react";

const steps = [
  {
    num: 1,
    icon: UserPlus,
    title: "Sign Up",
    description: "Create your account in seconds to get started.",
  },
  {
    num: 2,
    icon: CalendarCheck,
    title: "Book a Wash",
    description: "Pick your service, date & time slot that works for you.",
  },
  {
    num: 3,
    icon: Car,
    title: "We Come to You",
    description: "Our team arrives at your doorstep fully equipped.",
  },
  {
    num: 4,
    icon: Sparkles,
    title: "Enjoy the Shine",
    description: "Sit back and enjoy your sparkling clean car!",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-background">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">Simple Process</span>
          <h2 className="font-display text-3xl md:text-5xl font-extrabold mt-4">
            Book in{" "}
            <span className="text-gradient">4 Easy</span> Steps
          </h2>
          <p className="text-muted-foreground mt-4 max-w-md mx-auto">No complicated process. Just four simple steps to a sparkling clean car.</p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border rounded-2xl p-6 text-center hover:border-primary/30 transition-all duration-500 group card-shine"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/25 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                <step.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <div className="text-xs font-bold text-primary mb-2">Step {step.num}</div>
              <h3 className="font-display text-lg font-bold mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
