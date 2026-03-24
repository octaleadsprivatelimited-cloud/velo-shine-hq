import { motion } from "framer-motion";
import { Target, Eye, Heart, Award, Users, Leaf } from "lucide-react";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import teamImg from "@/assets/about-team.jpg";

const values = [
  { icon: Award, title: "Excellence", desc: "We don't settle for 'clean enough'. Every car gets showroom treatment." },
  { icon: Users, title: "Customer First", desc: "Your schedule, your location, your preferences — we adapt to you." },
  { icon: Leaf, title: "Eco-Conscious", desc: "Biodegradable products, water recycling, and minimal environmental impact." },
  { icon: Heart, title: "Passion", desc: "We genuinely love cars and it shows in every detail we polish." },
];

const milestones = [
  { year: "2026", event: "Velociwash founded with a mission to redefine doorstep car care" },
  { year: "2026", event: "Launched foam wash & regular cleaning services" },
  { year: "2026", event: "Introduced ceramic coating & interior detailing" },
  { year: "2026", event: "500+ happy customers and growing" },
];

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <PageHeader
        badge="About Us"
        title={<>The Story Behind <span className="text-gradient">Velociwash</span></>}
        description="Born from a passion for cars and a frustration with inconvenient car wash options, Velociwash brings the studio to your doorstep."
      />

      {/* Mission & Vision */}
      <section className="pb-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="rounded-2xl overflow-hidden border border-border">
                <img src={teamImg} alt="Velociwash team" width={800} height={600} className="w-full h-80 object-cover" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="space-y-8">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Target className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-display text-xl font-bold">Our Mission</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    To make premium car care accessible, convenient, and eco-friendly — delivering a spotless experience right at your doorstep, every single time.
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Eye className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-display text-xl font-bold">Our Vision</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    To become the most trusted doorstep car care brand, known for uncompromising quality, innovation, and customer delight.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Values */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-sm font-medium text-primary uppercase tracking-widest">Our Values</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mt-4">What Drives Us</h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6 mb-24">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card border border-border rounded-xl p-6 hover:border-primary/20 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                  <v.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display font-bold mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-sm font-medium text-primary uppercase tracking-widest">Our Journey</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mt-4">Milestones</h2>
          </motion.div>

          <div className="max-w-2xl mx-auto">
            {milestones.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-6 mb-8 last:mb-0"
              >
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-primary shrink-0" />
                  {i < milestones.length - 1 && <div className="w-px flex-1 bg-border mt-2" />}
                </div>
                <div className="pb-8">
                  <span className="text-sm font-medium text-primary">{m.year}</span>
                  <p className="text-secondary-foreground mt-1">{m.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
