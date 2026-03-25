import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

import heroImg from "@/assets/hero-car-wash.jpg";
import foamImg from "@/assets/service-foam-wash.jpg";
import interiorImg from "@/assets/service-interior.jpg";
import ceramicImg from "@/assets/service-ceramic.jpg";
import beforeAfterImg from "@/assets/gallery-before-after.jpg";
import polishedImg from "@/assets/gallery-polished.jpg";
import interiorCleanImg from "@/assets/gallery-interior-clean.jpg";
import wheelImg from "@/assets/gallery-wheel.jpg";
import polishingImg from "@/assets/gallery-polishing.jpg";

const categories = ["All", "Exterior", "Interior", "Detailing"];

const galleryItems = [
  { src: heroImg, alt: "Luxury SUV foam wash", category: "Exterior" },
  { src: beforeAfterImg, alt: "Before and after transformation", category: "Exterior" },
  { src: foamImg, alt: "Snow foam application", category: "Exterior" },
  { src: interiorCleanImg, alt: "Interior after detailing", category: "Interior" },
  { src: interiorImg, alt: "Dashboard cleaning", category: "Interior" },
  { src: polishedImg, alt: "Water beading on ceramic coating", category: "Detailing" },
  { src: ceramicImg, alt: "Ceramic coating application", category: "Detailing" },
  { src: wheelImg, alt: "Alloy wheel cleaning", category: "Exterior" },
  { src: polishingImg, alt: "Machine polishing", category: "Detailing" },
];

const GalleryPage = () => {
  const [active, setActive] = useState("All");
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  const filtered = active === "All" ? galleryItems : galleryItems.filter((g) => g.category === active);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <section className="pt-32 pb-8">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-4">
              Our <span className="text-gradient">Gallery</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg">
              Browse our portfolio of car transformations.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-8 pb-24">
        <div className="container mx-auto px-6">
          <div className="flex gap-2 mb-8 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  active === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/20"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <motion.div layout className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            <AnimatePresence mode="popLayout">
              {filtered.map((item) => (
                <motion.div
                  key={item.alt}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="group cursor-pointer rounded-2xl overflow-hidden border border-border hover:border-primary/30 transition-colors aspect-[4/3]"
                  onClick={() => setSelectedImg(item.src)}
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-md flex items-center justify-center p-6"
            onClick={() => setSelectedImg(null)}
          >
            <button
              onClick={() => setSelectedImg(null)}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center"
            >
              <X className="w-5 h-5" />
            </button>
            <motion.img
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              src={selectedImg}
              alt="Preview"
              className="max-w-full max-h-[85vh] rounded-2xl border border-border object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default GalleryPage;
