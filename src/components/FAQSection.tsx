import { motion } from "framer-motion";
import { Phone, HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How can I get the best deal on car services for my vehicle?",
    answer:
      "We offer subscription plans that save you up to 40% compared to single washes. Check our Services page for monthly plans starting at ₹599/month.",
  },
  {
    question: "Will I know the cost upfront before booking a service?",
    answer:
      "Absolutely! All our pricing is transparent and listed on the Services page. There are no hidden charges.",
  },
  {
    question: "How much time will it take to get my car washed?",
    answer:
      "A standard foam wash takes 30-45 minutes. Interior detailing takes 1-2 hours depending on the car size.",
  },
  {
    question: "Does Velociwash come fully equipped with water and electricity?",
    answer:
      "Yes! We bring our own water supply, electricity, and all premium cleaning products. You don't need to provide anything.",
  },
  {
    question: "What are the different types of payment methods that are accepted?",
    answer:
      "We accept all UPI apps (GPay, PhonePe, Paytm), cash, and online bank transfers. Payment is collected after the service.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-24 relative bg-background">
      <div className="absolute inset-0 noise opacity-10" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <HelpCircle className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary uppercase tracking-widest">FAQ</span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-extrabold">
            Frequently asked <span className="text-gradient">Questions</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-primary/30 data-[state=open]:glow-border transition-all duration-300"
              >
                <AccordionTrigger className="font-display font-semibold text-left hover:no-underline py-5 hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12 bg-card border border-border rounded-2xl p-8"
          >
            <p className="text-muted-foreground mb-2 font-medium">
              Can't find what you're looking for?
            </p>
            <p className="text-sm text-muted-foreground mb-4">Contact us here:</p>
            <a
              href="tel:+919676031464"
              className="inline-flex items-center gap-2 text-primary font-display font-bold hover:text-primary/80 transition-colors text-lg"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/25 flex items-center justify-center">
                <Phone className="w-4 h-4" />
              </div>
              +91-96760 31464
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
