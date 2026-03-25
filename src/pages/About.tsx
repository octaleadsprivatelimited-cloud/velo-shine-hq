import { motion } from "framer-motion";
import { Target, Eye, Heart, Award, Users, Leaf, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";
import teamImg from "@/assets/about-team.jpg";

const values = [
  { icon: Award, title: "Excellence", desc: "Every car gets showroom treatment." },
  { icon: Users, title: "Customer First", desc: "Your schedule, your location, your preferences." },
  { icon: Leaf, title: "Eco-Conscious", desc: "Biodegradable products, minimal water waste." },
  { icon: Heart, title: "Passion", desc: "We genuinely love cars and it shows." },
];

const stats = [
  { value: "500+", label: "Happy Customers" },
  { value: "2,000+", label: "Cars Washed" },
  { value: "4.9★", label: "Google Rating" },
  { value: "100%", label: "Satisfaction" },
];

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="About Velociwash — Our Story & Mission | Doorstep Car Care"
        description="Learn about Velociwash's mission to deliver premium doorstep car care. Our passionate team brings excellence, eco-conscious cleaning, and customer-first service."
        keywords="about Velociwash, car wash company, doorstep car care team, eco-friendly car wash, car detailing company"
      />
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-10 relative bg-background">
        <div className="absolute inset-0 noise opacity-10" />
        <div className="absolute top-20 left-0 w-96 h-96 bg-accent/5 rounded-full blur-[120px]" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-sm font-semibold text-primary uppercase tracking-widest">Our Story</span>
            <h1 className="font-display text-4xl md:text-6xl font-extrabold mt-4 mb-4">
              About <span className="text-gradient">Velociwash</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              Born from a passion for cars and a frustration with inconvenient car wash options.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-10 bg-secondary/50">
        <div className="absolute inset-0 noise opacity-10" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card border border-border rounded-2xl p-6 text-center hover:border-primary/30 transition-all duration-500"
              >
                <div className="font-display text-3xl md:text-4xl font-extrabold text-primary mb-1">{s.value}</div>
                <div className="text-sm text-muted-foreground">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-14 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden border border-border group"
            >
              <img src={teamImg} alt="Velociwash team" loading="lazy" className="w-full h-72 md:h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-card border border-border rounded-2xl p-7 hover:border-primary/30 transition-all duration-500 card-shine">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/25 flex items-center justify-center">
                    <Target className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-bold">Our Mission</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  To make premium car care accessible, convenient, and eco-friendly — delivering a spotless experience right at your doorstep.
                </p>
              </div>

              <div className="bg-card border border-border rounded-2xl p-7 hover:border-primary/30 transition-all duration-500 card-shine">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-accent/10 border border-accent/25 flex items-center justify-center">
                    <Eye className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="font-display text-xl font-bold">Our Vision</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  To become the most trusted doorstep car care brand, known for uncompromising quality and customer delight.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-14 bg-secondary/50 relative">
        <div className="absolute inset-0 noise opacity-10" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-primary uppercase tracking-widest">What drives us</span>
            <h2 className="font-display text-2xl md:text-4xl font-extrabold mt-4">
              Our <span className="text-gradient">Values</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card border border-border rounded-2xl p-7 text-center hover:border-primary/30 transition-all duration-500 card-shine group"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/25 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                  <v.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-display font-bold mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-card to-accent/5" />
            <div className="relative border border-primary/20 rounded-3xl p-10 md:p-14 text-center">
              <h2 className="font-display text-2xl md:text-3xl font-extrabold mb-4">
                Experience the <span className="text-gradient">Velociwash</span> difference
              </h2>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">Book your first wash and see why hundreds of customers trust us.</p>
              <Link to="/booking">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-display font-bold px-10 h-14 btn-glow glow-border rounded-xl">
                  Book Now <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default AboutPage;
