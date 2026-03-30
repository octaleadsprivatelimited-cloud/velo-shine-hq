import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { question: "What do you bring for the wash?", answer: "We bring all premium cleaning products and professional-grade equipment to your doorstep. Everything is included — no extra charges." },
  { question: "How long does a foam wash take?", answer: "A standard foam wash takes 30-45 minutes depending on the vehicle size. Interior detailing takes 1-2 hours." },
  { question: "What areas do you serve?", answer: "We currently serve all major areas in Hyderabad including Gachibowli, Kondapur, Madhapur, Kukatpally, Miyapur, Jubilee Hills, Banjara Hills, and surrounding areas." },
  { question: "Will the wash scratch my car?", answer: "Absolutely not. We use pH-neutral snow foam and premium microfiber towels that are gentle on your car's paint. Each towel is fresh and never reused between cars." },
  { question: "What payment methods do you accept?", answer: "We accept all UPI apps (GPay, PhonePe, Paytm), cash, and online bank transfers. Payment is collected after the service is completed." },
  { question: "Can I subscribe to a monthly plan?", answer: "Yes! We offer monthly subscription plans that save you up to 40% compared to single washes. Check our Services page for details." },
];

const FAQSection = () => {
  return (
    <section className="py-12 md:py-20 bg-secondary/40 relative overflow-hidden">
      {/* Illustration background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Dot grid */}
        <svg className="absolute inset-0 w-full h-full text-foreground/[0.03]" xmlns="http://www.w3.org/2000/svg">
          <pattern id="faq-dots" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="currentColor"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#faq-dots)"/>
        </svg>

        {/* Yellow accent blob top-right */}
        <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-primary/[0.08] blur-3xl" />

        {/* Red accent blob bottom-left */}
        <div className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full bg-accent/[0.06] blur-3xl" />

        {/* Question mark illustrations */}
        <svg className="absolute top-6 right-8 w-16 h-16 md:w-24 md:h-24 text-primary/[0.10]" viewBox="0 0 100 100" fill="currentColor">
          <path d="M50 10a25 25 0 0 1 0 50v10h-8V55a5 5 0 0 1 5-5 17 17 0 1 0-17-17h-8a25 25 0 0 1 28-23ZM46 78a6 6 0 1 1 0 12 6 6 0 0 1 0-12Z"/>
        </svg>
        <svg className="absolute bottom-10 right-1/4 w-10 h-10 text-accent/[0.08]" viewBox="0 0 100 100" fill="currentColor">
          <path d="M50 10a25 25 0 0 1 0 50v10h-8V55a5 5 0 0 1 5-5 17 17 0 1 0-17-17h-8a25 25 0 0 1 28-23ZM46 78a6 6 0 1 1 0 12 6 6 0 0 1 0-12Z"/>
        </svg>

        {/* Sparkle stars */}
        <svg className="absolute top-1/3 left-4 w-8 h-8 text-primary/[0.12]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0l2.5 9.5L24 12l-9.5 2.5L12 24l-2.5-9.5L0 12l9.5-2.5Z"/>
        </svg>
        <svg className="absolute bottom-1/4 right-6 w-6 h-6 text-accent/[0.10]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0l2.5 9.5L24 12l-9.5 2.5L12 24l-2.5-9.5L0 12l9.5-2.5Z"/>
        </svg>

        {/* Circles */}
        <div className="absolute top-12 left-1/3 w-6 h-6 rounded-full border-2 border-primary/[0.10]" />
        <div className="absolute bottom-16 left-8 w-10 h-10 rounded-full border-2 border-accent/[0.08]" />

        {/* Yellow diagonal stripe */}
        <div className="absolute top-0 right-0 w-32 h-1 bg-primary/[0.15] rotate-45 origin-top-right" />
        <div className="absolute bottom-0 left-0 w-24 h-1 bg-accent/[0.12] -rotate-45 origin-bottom-left" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-5 gap-8 md:gap-10 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 text-center md:text-left"
          >
            <p className="text-xs font-semibold text-primary uppercase tracking-[0.15em] mb-2 md:mb-3">FAQ</p>
            <h2 className="font-display text-xl md:text-[32px] font-bold mb-2 md:mb-3 leading-tight">
              Frequently asked questions
            </h2>
            <p className="text-xs md:text-sm text-muted-foreground leading-relaxed mb-5 md:mb-8">
              Everything you need to know about our services.
            </p>

            <div className="inline-flex md:flex flex-col gap-3">
              <a href="tel:+919676031464" className="flex items-center gap-3 hover:text-primary transition-colors">
                <div className="w-9 h-9 rounded-md bg-primary/10 flex items-center justify-center">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <div className="text-left">
                  <div className="text-[11px] text-muted-foreground">Call us</div>
                  <div className="font-display font-medium text-sm">+91-96760 31464</div>
                </div>
              </a>
              <a href="https://wa.me/919676031464" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-primary transition-colors">
                <div className="w-9 h-9 rounded-md bg-primary/10 flex items-center justify-center">
                  <MessageCircle className="w-4 h-4 text-primary" />
                </div>
                <div className="text-left">
                  <div className="text-[11px] text-muted-foreground">WhatsApp</div>
                  <div className="font-display font-medium text-sm">Chat with us</div>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <Accordion type="single" collapsible>
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="border-b border-border">
                  <AccordionTrigger className="font-display font-medium text-left text-xs md:text-sm hover:no-underline py-3.5 md:py-4 hover:text-primary transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-[12px] md:text-[13px] text-muted-foreground leading-relaxed pb-3 md:pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;