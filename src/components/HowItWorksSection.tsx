import { motion } from "framer-motion";
import { UserPlus, CalendarCheck, Car, Sparkles } from "lucide-react";

const steps = [
  { num: "1", icon: UserPlus, title: "Sign Up", description: "Create your account in seconds to get started." },
  { num: "2", icon: CalendarCheck, title: "Book a Wash", description: "Pick your service, date & time slot." },
  { num: "3", icon: Car, title: "We Come to You", description: "Our team arrives fully equipped at your doorstep." },
  { num: "4", icon: Sparkles, title: "Enjoy the Shine", description: "Sit back and enjoy your sparkling clean car!" },
];

const HowItWorksSection = () => {
  return (
    <section className="py-20 bg-secondary/40">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-xl mx-auto mb-12"
        >
          <p className="text-xs font-semibold text-primary uppercase tracking-[0.15em] mb-3">How It Works</p>
          <h2 className="font-display text-2xl md:text-[36px] font-bold mb-3 leading-tight">
            Simple 4-step process
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            No complicated steps. Just four simple actions to a clean car.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border rounded-md p-6 text-center hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-full bg-foreground flex items-center justify-center mx-auto mb-4">
                <step.icon className="w-5 h-5 text-primary" />
              </div>
              <span className="inline-block text-[11px] font-semibold text-muted-foreground uppercase tracking-wider mb-1.5">
                Step {step.num}
              </span>
              <h3 className="font-display text-base font-semibold mb-1.5">{step.title}</h3>
              <p className="text-[13px] text-muted-foreground leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
