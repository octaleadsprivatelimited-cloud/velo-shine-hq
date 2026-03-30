import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { getTestimonials } from "@/lib/adminService";
import useEmblaCarousel from "embla-carousel-react";
import { Button } from "@/components/ui/button";

const fallbackTestimonials = [
  { name: "Ravi Kumar", text: "Velociwash did an amazing job with foam cleaning for my car. The team was professional, efficient, and exceeded my expectations. I highly recommend them.", rating: 5, initials: "RK" },
  { name: "Srinivas Reddy", text: "The customer support team is fantastic. They resolved my issue promptly and went above and beyond to help. Highly recommended.", rating: 5, initials: "SR" },
  { name: "Venkata Rao", text: "Convenient and on time! They sent a professional to my location in no time and cleaned every corner of my car quickly!", rating: 5, initials: "VR" },
  { name: "Lakshmi Devi", text: "Velociwash sets the standard for excellence. Reliable, efficient, and easy to use. I can't recommend it enough.", rating: 5, initials: "LD" },
];

const TestimonialsSection = () => {
  const [testimonials, setTestimonials] = useState(fallbackTestimonials);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start", slidesToScroll: 1 });
  const [mobileRef, mobileApi] = useEmblaCarousel({ loop: true, align: "center", slidesToScroll: 1 });
  const [mobileIndex, setMobileIndex] = useState(0);
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
    if (!mobileApi) return;
    const onMobileSelect = () => setMobileIndex(mobileApi.selectedScrollSnap());
    onMobileSelect();
    mobileApi.on("select", onMobileSelect);
    return () => { mobileApi.off("select", onMobileSelect); };
  }, [mobileApi]);

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
    <div className="bg-card p-6 flex flex-col h-full">
      <div className="flex gap-0.5 mb-3">
        {Array.from({ length: t.rating }).map((_, i) => (
          <Star key={i} className="w-3.5 h-3.5 fill-primary text-primary" />
        ))}
      </div>
      <p className="text-[13px] text-muted-foreground leading-relaxed flex-1 mb-4">
        "{t.text}"
      </p>
      <div className="flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-[11px] font-semibold text-primary">
          {t.initials}
        </div>
        <span className="text-sm font-medium">{t.name}</span>
      </div>
    </div>
  );

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-end justify-between mb-10"
        >
          <div>
            <p className="text-xs font-semibold text-primary uppercase tracking-[0.15em] mb-3">Testimonials</p>
            <h2 className="font-display text-2xl md:text-[36px] font-bold">
              What our clients say
            </h2>
          </div>
          <div className="hidden lg:flex gap-2">
            <Button variant="outline" size="icon" onClick={() => emblaApi?.scrollPrev()} disabled={!canPrev} className="rounded-md border-border h-9 w-9">
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="icon" onClick={() => emblaApi?.scrollNext()} disabled={!canNext} className="rounded-md border-border h-9 w-9">
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </motion.div>

        {/* Desktop carousel */}
        <div className="hidden lg:block">
          <div className="overflow-hidden rounded-md border border-border" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((t, index) => (
                <div key={t.name + index} className="flex-[0_0_33.333%] min-w-0 border-r border-border last:border-r-0">
                  <Card t={t} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile carousel – one at a time */}
        <div className="lg:hidden">
          <div className="overflow-hidden rounded-md" ref={mobileRef}>
            <div className="flex">
              {testimonials.map((t, index) => (
                <div key={t.name + index} className="flex-[0_0_100%] min-w-0 px-1">
                  <div className="border border-border rounded-md overflow-hidden">
                    <Card t={t} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Dots */}
          <div className="flex justify-center gap-1.5 mt-4">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => mobileApi?.scrollTo(i)}
                className={`w-2 h-2 rounded-full transition-colors ${i === mobileIndex ? "bg-primary" : "bg-border"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
