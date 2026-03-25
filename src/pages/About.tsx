import { motion } from "framer-motion";
import { Target, Eye, Heart, Award, Users, Leaf } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import teamImg from "@/assets/about-team.jpg";

const values = [
  { icon: Award, title: "Excellence", desc: "Every car gets showroom treatment." },
  { icon: Users, title: "Customer First", desc: "Your schedule, your location, your preferences." },
  { icon: Leaf, title: "Eco-Conscious", desc: "Biodegradable products, minimal water waste." },
  { icon: Heart, title: "Passion", desc: "We genuinely love cars and it shows." },
];

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <section className="pt-32 pb-8">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-4">
              About <span className="text-gradient">Velociwash</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg">
              Born from a passion for cars and a frustration with inconvenient car wash options.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden border border-border"
            >
              <img src={teamImg} alt="Velociwash team" className="w-full h-72 md:h-full object-cover" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-card border border-border rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Target className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-bold">Our Mission</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  To make premium car care accessible, convenient, and eco-friendly — delivering a spotless experience right at your doorstep.
                </p>
              </div>

              <div className="bg-card border border-border rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Eye className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-bold">Our Vision</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  To become the most trusted doorstep car care brand, known for uncompromising quality and customer delight.
                </p>
              </div>
            </motion.div>
          </div>

          <h2 className="font-display text-2xl md:text-4xl font-bold mb-8 text-center">
            Our <span className="text-gradient">Values</span>
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card border border-border rounded-2xl p-6 text-center hover:border-primary/20 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-4">
                  <v.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display font-bold mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="py-8" />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default AboutPage;
