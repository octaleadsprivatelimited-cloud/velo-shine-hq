import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MessageCircle } from "lucide-react";

const faqs = [
  {
    question: "How can I get the best deal on car wash services?",
    answer: "We offer subscription plans that save you up to 40% compared to single washes. Check our Services page for monthly plans starting at ₹999/month.",
  },
  {
    question: "Will I know the cost upfront before booking?",
    answer: "Absolutely! All our pricing is transparent and listed on the Services page. There are no hidden charges. You'll see the exact amount before confirming your booking.",
  },
  {
    question: "How much time will it take to wash my car?",
    answer: "A standard foam wash takes 30-45 minutes. Interior detailing takes 1-2 hours, and ceramic coating takes 4-6 hours depending on the car size.",
  },
  {
    question: "Does Velociwash come fully equipped with water and electricity?",
    answer: "Yes! We bring our own water supply, electricity generator, and all premium cleaning products. You don't need to provide anything — just show us your car!",
  },
  {
    question: "What payment methods are accepted?",
    answer: "We accept all UPI apps (GPay, PhonePe, Paytm), cash, and online bank transfers. Payment is collected after the service is completed to your satisfaction.",
  },
  {
    question: "Can I reschedule or cancel a booking?",
    answer: "Yes, you can reschedule or cancel up to 2 hours before your scheduled slot at no extra charge. Just message us on WhatsApp.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 via-background to-background pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-widest">FAQ</span>
          <h2 className="font-display text-4xl md:text-6xl font-bold mt-4">
            Frequently Asked{" "}
            <span className="text-gradient">Questions</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-primary/30 transition-colors"
              >
                <AccordionTrigger className="font-display font-semibold text-left hover:no-underline py-5">
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
            className="text-center mt-10 p-6 bg-card border border-border rounded-xl"
          >
            <p className="text-muted-foreground mb-3">Can't find what you're looking for?</p>
            <a
              href="https://wa.me/919676031464?text=Hi%20Velociwash!%20I%20have%20a%20question."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary font-display font-semibold hover:text-primary/80 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              Chat with us on WhatsApp
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
