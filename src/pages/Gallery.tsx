import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";

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
      <PageHeader
        badge="Gallery"
        title={<>Our Work <span className="text-gradient">Speaks</span></>}
        description="Browse through our portfolio of car transformations — from foam washes to ceramic coatings."
      />

      <section className="pb-24">
        <div className="container mx-auto px-6">
          {/* Filter tabs */}
          <div className="flex gap-3 mb-10 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  active === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div layout className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <AnimatePresence mode="popLayout">
              {filtered.map((item, i) => (
                <motion.div
                  key={item.alt}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group cursor-pointer rounded-xl overflow-hidden border border-border hover:border-primary/30 transition-colors"
                  onClick={() => setSelectedImg(item.src)}
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={item.src}
                      alt={item.alt}
                      loading="lazy"
                      width={800}
                      height={600}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-3 bg-card">
                    <span className="text-xs text-muted-foreground">{item.category}</span>
                    <p className="text-sm font-medium mt-1">{item.alt}</p>
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
            className="fixed inset-0 z-[100] bg-background/90 backdrop-blur-sm flex items-center justify-center p-6"
            onClick={() => setSelectedImg(null)}
          >
            <motion.img
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              src={selectedImg}
              alt="Gallery preview"
              className="max-w-full max-h-[80vh] rounded-2xl border border-border object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default GalleryPage;
