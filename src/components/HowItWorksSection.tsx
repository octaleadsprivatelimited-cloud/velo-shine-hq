import { motion } from "framer-motion";
import { UserPlus, CalendarCheck, Car, Sparkles, ChevronRight } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: UserPlus,
    title: "Sign Up",
    description: "Create your account in seconds to get started.",
  },
  {
    num: "02",
    icon: CalendarCheck,
    title: "Book a Wash",
    description: "Pick your service, date & time slot that works for you.",
  },
  {
    num: "03",
    icon: Car,
    title: "We Come to You",
    description: "Our team arrives at your doorstep fully equipped.",
  },
  {
    num: "04",
    icon: Sparkles,
    title: "Enjoy the Shine",
    description: "Sit back and enjoy your sparkling clean car!",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-16 relative overflow-hidden bg-secondary/30">
      <div className="absolute inset-0 noise opacity-5" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="inline-block text-xs font-bold text-primary uppercase tracking-[0.2em] mb-4">
            How It Works
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-extrabold mb-3 leading-tight">
            Simple Process
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            No complicated steps. Just four simple actions to a sparkling clean car.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.45 }}
                className="relative group"
              >
                {/* Arrow connector — desktop only */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:flex absolute -right-3 top-12 z-20 text-border">
                    <ChevronRight className="w-5 h-5" />
                  </div>
                )}

                <div className="relative bg-card border border-border rounded-xl p-6 h-full hover:border-primary/30 hover:shadow-md transition-all duration-300 overflow-hidden">
                  {/* Large faded number background */}
                  <span className="absolute -top-2 -right-1 font-display text-[80px] font-black text-foreground/[0.03] leading-none select-none pointer-events-none">
                    {step.num}
                  </span>

                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                    <step.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>

                  {/* Step label */}
                  <span className="inline-block text-[11px] font-bold text-primary uppercase tracking-widest mb-2">
                    Step {step.num}
                  </span>

                  <h3 className="font-display text-lg font-bold mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
