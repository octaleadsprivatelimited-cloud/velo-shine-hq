import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";
import { HexGrid, DotGrid } from "@/components/BackgroundPatterns";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What do you bring for the wash?",
    answer: "We bring all premium cleaning products and professional-grade equipment to your doorstep. Everything is included — no extra charges.",
  },
  {
    question: "How long does a foam wash take?",
    answer: "A standard foam wash takes 30-45 minutes depending on the vehicle size. Interior detailing takes 1-2 hours.",
  },
  {
    question: "What areas do you serve?",
    answer: "We currently serve all major areas in Hyderabad including Gachibowli, Kondapur, Madhapur, Kukatpally, Miyapur, Jubilee Hills, Banjara Hills, and surrounding areas.",
  },
  {
    question: "Will the wash scratch my car?",
    answer: "Absolutely not. We use pH-neutral snow foam and premium microfiber towels that are gentle on your car's paint. Each towel is fresh and never reused between cars.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all UPI apps (GPay, PhonePe, Paytm), cash, and online bank transfers. Payment is collected after the service is completed.",
  },
  {
    question: "Can I subscribe to a monthly plan?",
    answer: "Yes! We offer monthly subscription plans that save you up to 40% compared to single washes. Check our Services page for details.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-16 relative bg-secondary/30 overflow-hidden">
      <HexGrid className="absolute -top-8 right-4 text-foreground/[0.08] pointer-events-none" />
      <DotGrid className="absolute bottom-4 left-4 text-primary/[0.08] pointer-events-none" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-5 gap-10 max-w-6xl mx-auto">
          {/* Left heading */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <h2 className="font-display text-2xl md:text-4xl font-bold mb-3">
              Frequently asked questions
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-8">
              Everything you need to know about our doorstep car wash services.
            </p>

            <div className="space-y-4">
              <a
                href="tel:+919676031464"
                className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-5 h-5 text-primary" />
                <div>
                  <div className="text-xs text-muted-foreground">Call us</div>
                  <div className="font-display font-semibold text-sm">+91-96760 31464</div>
                </div>
              </a>
              <a
                href="https://wa.me/919676031464"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
              >
                <MessageCircle className="w-5 h-5 text-primary" />
                <div>
                  <div className="text-xs text-muted-foreground">WhatsApp</div>
                  <div className="font-display font-semibold text-sm">Chat with us</div>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Right accordion */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <Accordion type="single" collapsible>
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="border-b border-border py-1"
                >
                  <AccordionTrigger className="font-display font-semibold text-left text-sm hover:no-underline py-4 hover:text-primary transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-4">
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
