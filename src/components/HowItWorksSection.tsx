import { motion } from "framer-motion";
import { UserPlus, CalendarCheck, ArrowDown } from "lucide-react";
import foamImg from "@/assets/service-foam-wash.jpg";
import heroImg from "@/assets/hero-car-wash.jpg";

const steps = [
  {
    num: 1,
    icon: UserPlus,
    title: "Signup / Login",
    description: "Create an account or log in to get started with our services.",
    image: heroImg,
    color: "from-primary/20 to-primary/5",
  },
  {
    num: 2,
    icon: CalendarCheck,
    title: "Schedule a Wash",
    description: "Hit on schedule wash and relax while we restore your car's shine!",
    image: foamImg,
    color: "from-accent/20 to-accent/5",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-background">
      <div className="absolute inset-0 noise opacity-10" />

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
            <span className="text-gradient">2 Easy</span> Steps
          </h2>
          <p className="text-muted-foreground mt-4 max-w-md mx-auto">No complicated process. Just two steps to a sparkling clean car.</p>
        </motion.div>

        <div className="grid grid-cols-2 gap-8 max-w-4xl mx-auto">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-500 group card-shine"
            >
              <div className={`p-7 md:p-9 bg-gradient-to-b ${step.color}`}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/25 flex items-center justify-center font-display text-2xl font-extrabold text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    {step.num}
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold">{step.title}</h3>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
              <div className="h-52 overflow-hidden">
                <img
                  src={step.image}
                  alt={step.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
