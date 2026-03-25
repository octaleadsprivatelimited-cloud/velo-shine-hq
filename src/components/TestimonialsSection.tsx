import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    title: "Amazing Job!",
    text: "Velociwash did an amazing job with foam cleaning for my car. The team was professional, efficient, and exceeded my expectations. I highly recommend them.",
    date: "27/06/2024",
    rating: 5,
    initials: "RS",
  },
  {
    title: "Amazing Support!",
    text: "The customer support team is fantastic. They resolved my issue promptly and went above and beyond to help. Highly recommended.",
    date: "22/11/2024",
    rating: 5,
    initials: "AK",
  },
  {
    title: "Professional and Punctual!",
    text: "Convenient and on time! They sent a professional to my location in no time and cleaned every corner of my car quickly!",
    date: "27/10/2024",
    rating: 5,
    initials: "PM",
  },
  {
    title: "Simply the Best!",
    text: "Velociwash sets the standard for excellence. Reliable, efficient, and easy to use. I can't recommend it enough.",
    date: "16/08/2024",
    rating: 5,
    initials: "VR",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 divider" />
      <div className="absolute bottom-0 left-0 right-0 divider" />
      
      {/* Accent glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/3 blur-[150px]" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">Testimonials</span>
          <h2 className="font-display text-3xl md:text-5xl font-extrabold mt-4">
            What our clients <span className="text-gradient">say</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.title + index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card border border-border rounded-2xl p-6 hover:border-primary/30 transition-all duration-500 flex flex-col card-shine group"
            >
              <Quote className="w-8 h-8 text-primary/20 mb-4 group-hover:text-primary/40 transition-colors" />
              
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <h3 className="font-display text-lg font-bold mb-3">{t.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-5">
                {t.text}
              </p>
              <div className="flex items-center gap-3 border-t border-border pt-4">
                <div className="w-9 h-9 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-xs font-bold text-primary">
                  {t.initials}
                </div>
                <span className="text-xs text-muted-foreground">{t.date}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
