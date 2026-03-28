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
    <section className="py-20 bg-secondary/40">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <p className="text-xs font-semibold text-primary uppercase tracking-[0.15em] mb-3">FAQ</p>
            <h2 className="font-display text-2xl md:text-[32px] font-bold mb-3 leading-tight">
              Frequently asked questions
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-8">
              Everything you need to know about our services.
            </p>

            <div className="space-y-3">
              <a href="tel:+919676031464" className="flex items-center gap-3 hover:text-primary transition-colors">
                <div className="w-9 h-9 rounded-md bg-primary/10 flex items-center justify-center">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <div className="text-[11px] text-muted-foreground">Call us</div>
                  <div className="font-display font-medium text-sm">+91-96760 31464</div>
                </div>
              </a>
              <a href="https://wa.me/919676031464" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-primary transition-colors">
                <div className="w-9 h-9 rounded-md bg-primary/10 flex items-center justify-center">
                  <MessageCircle className="w-4 h-4 text-primary" />
                </div>
                <div>
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
                  <AccordionTrigger className="font-display font-medium text-left text-sm hover:no-underline py-4 hover:text-primary transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-[13px] text-muted-foreground leading-relaxed pb-4">
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
