import { motion } from "framer-motion";
import { UserPlus, CalendarCheck, Sparkles, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    step: "01",
    title: "Get in Touch",
    description: "Contact us via WhatsApp or fill the booking form with your details.",
    color: "from-primary/20 to-primary/5",
  },
  {
    icon: CalendarCheck,
    step: "02",
    title: "Schedule a Wash",
    description: "Pick a date, time, and location. We'll confirm your slot instantly.",
    color: "from-primary/15 to-primary/5",
  },
  {
    icon: Sparkles,
    step: "03",
    title: "Sit Back & Shine",
    description: "We arrive fully equipped. Your car gets a showroom finish at your doorstep.",
    color: "from-primary/10 to-primary/5",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-secondary/10 to-background pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/3 blur-[150px]" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-widest">How It Works</span>
          <h2 className="font-display text-4xl md:text-6xl font-bold mt-4">
            Book in{" "}
            <span className="text-gradient">2 Minutes</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-md mx-auto">
            We get our own electricity and water to ensure the highest quality car wash experience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative group"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-px bg-gradient-to-r from-primary/30 to-transparent" />
              )}

              <div className="bg-card border border-border rounded-2xl p-8 hover:border-primary/30 transition-all duration-300 h-full">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} border border-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <div className="font-display text-xs font-bold text-primary/50 tracking-widest mb-2">STEP {item.step}</div>
                <h3 className="font-display text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
