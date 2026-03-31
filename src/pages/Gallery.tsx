import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Camera } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";
import { getGalleryItems } from "@/lib/adminService";

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

const fallbackGallery = [
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

const fallbackImageMap: Record<string, string> = {
  "Luxury SUV foam wash": heroImg,
  "Before and after transformation": beforeAfterImg,
  "Snow foam application": foamImg,
  "Interior after detailing": interiorCleanImg,
  "Dashboard cleaning": interiorImg,
  "Water beading on ceramic coating": polishedImg,
  "Ceramic coating application": ceramicImg,
  "Alloy wheel cleaning": wheelImg,
  "Machine polishing": polishingImg,
};

const GalleryPage = () => {
  const [active, setActive] = useState("All");
  const [selectedImg, setSelectedImg] = useState<string | null>(null);
  const [galleryItems, setGalleryItems] = useState(fallbackGallery);

  useEffect(() => {
    getGalleryItems()
      .then((data) => {
        if (data.length > 0) {
          setGalleryItems(
            data.map((item) => ({
              src: item.imageUrl || fallbackImageMap[item.alt] || "",
              alt: item.alt,
              category: item.category,
            }))
          );
        }
      })
      .catch(() => {});
  }, []);

  const filtered = active === "All" ? galleryItems : galleryItems.filter((g) => g.category === active);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="Gallery — Velociwash Car Wash Transformations & Results"
        description="See stunning before & after car wash transformations by Velociwash. Exterior foam wash, interior detailing, and ceramic coating results gallery."
        keywords="car wash gallery, car detailing results, before after car wash, foam wash results, ceramic coating gallery, Velociwash portfolio"
      />
      <Navbar />

      <section className="relative pt-24 overflow-hidden bg-foreground">
        <div className="absolute inset-0 bg-gradient-to-br from-foreground via-foreground to-[hsl(225,25%,12%)]" />
        <div className="absolute top-16 left-1/3 w-[500px] h-[500px] bg-primary/8 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-10 w-[350px] h-[350px] bg-accent/5 rounded-full blur-[120px]" />
        <div className="absolute inset-0 noise opacity-10" />
        <div className="container mx-auto px-6 relative z-10 py-16 md:py-24">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm mb-6">
              <Camera className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">Portfolio</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold mb-5 text-background leading-tight">
              Our <span className="text-primary">Gallery</span>
            </h1>
            <p className="text-lg text-background/65 max-w-lg leading-relaxed">
              Browse our portfolio of car transformations.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-8 pb-24 bg-secondary/50 relative">
        <div className="absolute inset-0 noise opacity-10" />
        <div className="container mx-auto px-6 relative z-10">
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
                  <div className="absolute inset-0 bg-gradient-to-t from-[hsl(225,25%,5%/0.8)] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-sm font-medium text-white text-shadow-sm">{item.alt}</p>
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
