import { motion } from "framer-motion";
import { UserPlus, CalendarCheck } from "lucide-react";
import foamImg from "@/assets/service-foam-wash.jpg";
import heroImg from "@/assets/hero-car-wash.jpg";

const steps = [
  {
    num: 1,
    icon: UserPlus,
    title: "Signup / Login",
    description: "Create an account or log in to get started with our services.",
    image: heroImg,
  },
  {
    num: 2,
    icon: CalendarCheck,
    title: "Schedule a Wash",
    description: "Hit on schedule wash and relax while we restore your car's shine!",
    image: foamImg,
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold">
            Book our services in{" "}
            <span className="text-gradient">2 Easy</span> Steps
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/20 transition-colors"
            >
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center font-display text-xl font-bold text-primary">
                    {step.num}
                  </div>
                  <h3 className="font-display text-xl font-bold">{step.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {step.description}
                </p>
              </div>
              <div className="h-48 overflow-hidden">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover"
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
