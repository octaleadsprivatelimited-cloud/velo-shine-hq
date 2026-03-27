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
    <section className="relative py-24 overflow-hidden bg-foreground">
      <div className="absolute inset-0 noise opacity-10" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">Why Choose Us</span>
          <h2 className="font-display text-3xl md:text-5xl font-extrabold mt-4 text-background">
            We bring <span className="text-gradient">everything</span> we need
          </h2>
          <p className="text-background/60 mt-4 max-w-lg mx-auto">
            No hassle for you — our team arrives fully equipped with electricity, and premium products. Water will be used at the client's residence.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-background/10 border border-background/20 rounded-2xl p-6 text-center backdrop-blur-sm hover:bg-background/15 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/20 border border-primary/30 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary transition-all duration-300">
                <f.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-display text-lg font-bold mb-2 text-background">{f.title}</h3>
              <p className="text-sm text-background/60 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BoldStatement;
