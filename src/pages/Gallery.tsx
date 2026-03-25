import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Camera } from "lucide-react";
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

      <section className="pt-32 pb-10 relative">
        <div className="absolute inset-0 noise opacity-15" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex items-center gap-2 mb-4">
              <Camera className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary uppercase tracking-widest">Portfolio</span>
            </div>
            <h1 className="font-display text-4xl md:text-6xl font-extrabold mb-4">
              Our <span className="text-gradient">Gallery</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              Browse our portfolio of car transformations.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-8 pb-24">
        <div className="container mx-auto px-6">
          <div className="flex gap-2 mb-10 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  active === cat
                    ? "bg-primary text-primary-foreground glow-border"
                    : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/30"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <motion.div layout className="grid grid-cols-2 lg:grid-cols-3 gap-5">
            <AnimatePresence mode="popLayout">
              {filtered.map((item) => (
                <motion.div
                  key={item.alt}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="group cursor-pointer rounded-2xl overflow-hidden border border-border hover:border-primary/30 transition-all duration-500 aspect-[4/3] relative"
                  onClick={() => setSelectedImg(item.src)}
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-sm font-medium text-foreground">{item.alt}</p>
                    <p className="text-xs text-primary">{item.category}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-xl flex items-center justify-center p-6"
            onClick={() => setSelectedImg(null)}
          >
            <button
              onClick={() => setSelectedImg(null)}
              className="absolute top-6 right-6 w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center hover:border-primary/30 transition-colors"
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
