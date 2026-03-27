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
    <section className="relative py-16 overflow-hidden dark-section">
      <div className="absolute inset-0 noise opacity-5" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-10"
        >
          <span className="inline-block text-xs font-bold text-primary uppercase tracking-[0.2em] mb-4">
            Why Choose Us
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-extrabold mb-3 leading-tight text-white">
            We bring everything we need
          </h2>
          <p className="text-base text-white/60 leading-relaxed">
            No hassle for you — our team arrives fully equipped with premium products and trained professionals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.45 }}
              className="relative group"
            >
              <div className="relative bg-white/[0.06] border border-white/10 rounded-xl p-6 h-full hover:border-primary/30 hover:bg-white/[0.08] transition-all duration-300 overflow-hidden">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-primary/15 border border-primary/25 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                  <f.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>

                <h3 className="font-display text-lg font-bold mb-2 text-white">
                  {f.title}
                </h3>
                <p className="text-sm text-white/55 leading-relaxed">
                  {f.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BoldStatement;
