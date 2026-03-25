import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    car: "Hyundai Creta",
    rating: 5,
    text: "Amazing service! They came right to my apartment parking and my car looked brand new. The foam wash is incredibly satisfying to watch.",
    date: "27/06/2024",
  },
  {
    name: "Priya Sharma",
    car: "Maruti Swift",
    rating: 5,
    text: "I've been using their monthly subscription and it's the best decision. Fresh microfiber every time and they never miss a detail.",
    date: "22/11/2024",
  },
  {
    name: "Anil Reddy",
    car: "Toyota Fortuner",
    rating: 5,
    text: "Got the ceramic coating done and my Fortuner has never looked this good. Professional team, premium products, and very punctual.",
    date: "27/10/2024",
  },
  {
    name: "Sneha Patel",
    car: "Honda City",
    rating: 5,
    text: "Convenient and on time! They arrived with all equipment and cleaned every corner of my car in no time. Highly recommended!",
    date: "16/08/2024",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-widest">Testimonials</span>
          <h2 className="font-display text-4xl md:text-6xl font-bold mt-4">
            What Our Clients{" "}
            <span className="text-gradient">Say</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card border border-border rounded-2xl p-6 hover:border-primary/20 transition-all duration-300 flex flex-col"
            >
              <div className="flex items-center gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <Quote className="w-6 h-6 text-primary/20 mb-3" />
              <p className="text-secondary-foreground leading-relaxed text-sm flex-1 mb-5">"{t.text}"</p>
              <div className="border-t border-border pt-4 flex items-center justify-between">
                <div>
                  <div className="font-display font-semibold text-sm">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.car}</div>
                </div>
                <div className="text-xs text-muted-foreground">{t.date}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
