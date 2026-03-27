import { motion } from "framer-motion";
import { UserPlus, CalendarCheck, Car, Sparkles } from "lucide-react";

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
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-10"
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

        <div className="relative max-w-4xl mx-auto">
          {/* Connecting line — desktop only */}
          <div className="hidden lg:block absolute top-[52px] left-[12%] right-[12%] h-px bg-border z-0" />

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.45 }}
                className="relative text-center"
              >
                {/* Step number circle */}
                <div className="relative z-10 w-[72px] h-[72px] rounded-full bg-card border-2 border-border flex items-center justify-center mx-auto mb-5 shadow-sm group-hover:border-primary/40 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <step.icon className="w-5 h-5 text-primary" />
                  </div>
                </div>

                {/* Step label */}
                <span className="inline-block text-[11px] font-bold text-primary/70 uppercase tracking-widest mb-2">
                  Step {step.num}
                </span>

                <h3 className="font-display text-base font-bold mb-1.5">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed px-2">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
