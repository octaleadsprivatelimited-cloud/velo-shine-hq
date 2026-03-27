import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { getTestimonials } from "@/lib/adminService";
import useEmblaCarousel from "embla-carousel-react";
import { Button } from "@/components/ui/button";
import { CircleRing, CrossPattern } from "@/components/BackgroundPatterns";

const fallbackTestimonials = [
  { name: "RS", text: "Velociwash did an amazing job with foam cleaning for my car. The team was professional, efficient, and exceeded my expectations. I highly recommend them.", rating: 5, initials: "RS" },
  { name: "AK", text: "The customer support team is fantastic. They resolved my issue promptly and went above and beyond to help. Highly recommended.", rating: 5, initials: "AK" },
  { name: "PM", text: "Convenient and on time! They sent a professional to my location in no time and cleaned every corner of my car quickly!", rating: 5, initials: "PM" },
  { name: "VR", text: "Velociwash sets the standard for excellence. Reliable, efficient, and easy to use. I can't recommend it enough.", rating: 5, initials: "VR" },
];

const TestimonialsSection = () => {
  const [testimonials, setTestimonials] = useState(fallbackTestimonials);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start", slidesToScroll: 1 });
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanPrev(emblaApi.canScrollPrev());
    setCanNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  useEffect(() => {
    getTestimonials()
      .then((data) => {
        if (data.length > 0) {
          setTestimonials(
            data.map((t) => ({
              name: t.name,
              text: t.text,
              rating: t.rating,
              initials: t.name.split(" ").map((w) => w[0]).join("").toUpperCase().slice(0, 2),
            }))
          );
        }
      })
      .catch(() => {});
  }, []);

  const Card = ({ t }: { t: typeof fallbackTestimonials[0] }) => (
    <div className="bg-background p-7 flex flex-col h-full hover:bg-white/[0.02] transition-colors duration-200">
      <div className="flex gap-0.5 mb-4">
        {Array.from({ length: t.rating }).map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-primary text-primary" />
        ))}
      </div>
      <p className="text-sm text-foreground/70 leading-relaxed flex-1 mb-5">
        "{t.text}"
      </p>
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-xs font-semibold text-primary">
          {t.initials}
        </div>
        <span className="text-sm font-semibold text-foreground">{t.name}</span>
      </div>
    </div>
  );

  return (
    <section className="py-16 relative overflow-hidden bg-background">
      <CircleRing className="absolute -top-16 -right-16 text-primary/[0.08] pointer-events-none" />
      <CrossPattern className="absolute bottom-8 left-6 text-foreground/[0.08] pointer-events-none" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Header — left aligned, Microsoft style */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-end justify-between mb-10"
        >
          <h2 className="font-display text-2xl md:text-4xl font-bold">
            What our clients say
          </h2>
          {/* Desktop nav arrows */}
          <div className="hidden lg:flex gap-2">
            <Button variant="outline" size="icon" onClick={() => emblaApi?.scrollPrev()} disabled={!canPrev} className="rounded-full border-border h-9 w-9">
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="icon" onClick={() => emblaApi?.scrollNext()} disabled={!canNext} className="rounded-full border-border h-9 w-9">
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </motion.div>

        {/* Desktop carousel */}
        <div className="hidden lg:block">
          <div className="overflow-hidden rounded-xl border border-border" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((t, index) => (
                <div key={t.name + index} className="flex-[0_0_33.333%] min-w-0 border-r border-border last:border-r-0">
                  <Card t={t} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile/tablet grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border rounded-xl overflow-hidden lg:hidden">
          {testimonials.map((t, index) => (
            <Card key={t.name + index} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
