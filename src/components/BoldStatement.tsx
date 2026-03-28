import { motion } from "framer-motion";
import { Clock, Sparkles, Shield, ThumbsUp } from "lucide-react";

const features = [
  { icon: Clock, title: "On-Time Service", desc: "We arrive at your doorstep on the scheduled time, every time." },
  { icon: Sparkles, title: "Premium Products", desc: "pH-neutral, scratch-free imported cleaning agents." },
  { icon: Shield, title: "Trained Professionals", desc: "Skilled technicians who treat your car with care." },
  { icon: ThumbsUp, title: "100% Satisfaction", desc: "Not happy? We'll re-do it — no questions asked." },
];

const BoldStatement = () => {
  return (
    <section className="py-20 bg-foreground">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-xl mx-auto mb-12"
        >
          <p className="text-xs font-semibold text-primary uppercase tracking-[0.15em] mb-3">Why Us</p>
          <h2 className="font-display text-2xl md:text-[36px] font-bold text-white leading-tight">
            Why choose Velociwash
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="text-center p-6 rounded-md border border-white/10 bg-white/[0.04] hover:bg-white/[0.06] transition-colors"
            >
              <div className="w-11 h-11 rounded-full bg-primary/15 flex items-center justify-center mx-auto mb-4">
                <f.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display text-sm font-semibold text-white mb-1.5">{f.title}</h3>
              <p className="text-[13px] text-white/50 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BoldStatement;
