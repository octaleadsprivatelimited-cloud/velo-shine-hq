import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    title: "Amazing Job!",
    text: "Velociwash did an amazing job with foam cleaning for my car. The team was professional, efficient, and exceeded my expectations. I highly recommend them.",
    date: "27/06/2024",
    rating: 5,
  },
  {
    title: "Amazing Support!",
    text: "The customer support team is fantastic. They resolved my issue promptly and went above and beyond to help. Highly recommended.",
    date: "22/11/2024",
    rating: 5,
  },
  {
    title: "Professional and Punctual!",
    text: "Convenient and on time! They sent a professional to my location in no time and cleaned every corner of my car quickly!",
    date: "27/10/2024",
    rating: 5,
  },
  {
    title: "Simply the Best!",
    text: "Velociwash sets the standard for excellence. Reliable, efficient, and easy to use. I can't recommend it enough.",
    date: "16/08/2024",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-5xl font-bold text-center mb-16"
        >
          What our clients <span className="text-gradient">say</span>
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.title + index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card border border-border rounded-2xl p-6 hover:border-primary/20 transition-colors flex flex-col"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <h3 className="font-display text-lg font-bold mb-3">{t.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4">
                {t.text}
              </p>
              <div className="text-xs text-muted-foreground border-t border-border pt-3">
                {t.date}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
