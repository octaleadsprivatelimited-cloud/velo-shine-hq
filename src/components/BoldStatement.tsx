import { motion } from "framer-motion";
import { Clock, Sparkles, Shield, ThumbsUp } from "lucide-react";
import { DotGrid, DiagonalLines } from "@/components/BackgroundPatterns";

const features = [
  { icon: Clock, title: "On-Time Service", desc: "We arrive at your doorstep on the scheduled time, every time." },
  { icon: Sparkles, title: "Premium Products", desc: "pH-neutral, scratch-free imported cleaning agents." },
  { icon: Shield, title: "Trained Professionals", desc: "Skilled technicians who treat your car with care." },
  { icon: ThumbsUp, title: "100% Satisfaction", desc: "Not happy? We'll re-do it — no questions asked." },
];

const BoldStatement = () => {
  return (
    <section className="relative py-16 overflow-hidden bg-foreground">
      <DotGrid className="absolute top-6 right-10 text-white/[0.1] pointer-events-none" />
      <DiagonalLines className="absolute -bottom-10 -left-10 text-primary/[0.1] pointer-events-none" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <h2 className="font-display text-2xl md:text-4xl font-bold text-white">
            Why choose Velociwash
          </h2>
        </motion.div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.08] rounded-xl overflow-hidden">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="relative bg-foreground p-7 hover:bg-white/[0.04] transition-colors duration-200 group cursor-default"
            >
              <f.icon className="w-6 h-6 text-primary mb-5" />
              <h3 className="font-display text-base font-semibold text-white mb-2">
                {f.title}
              </h3>
              <p className="text-sm text-white/50 leading-relaxed">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BoldStatement;
