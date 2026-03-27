import { motion } from "framer-motion";
import { Phone, HelpCircle, MessageCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Do you bring your own water and electricity?",
    answer: "We bring our own portable power units and all premium cleaning products. Water will be used at the client's residence — no extra charges for that.",
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
    <section className="py-24 relative bg-background">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          {/* Left heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="flex items-center gap-2 mb-3">
              <HelpCircle className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary uppercase tracking-widest">FAQ</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold mb-4">
              Got <span className="text-gradient">questions?</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              Everything you need to know about our doorstep car wash services.
            </p>

            <div className="bg-card border border-border rounded-2xl p-6">
              <p className="text-sm text-muted-foreground mb-4">Still have questions? Reach out to us:</p>
              <div className="space-y-3">
                <a
                  href="tel:+919676031464"
                  className="flex items-center gap-3 text-foreground hover:text-primary transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/25 flex items-center justify-center group-hover:bg-primary transition-all">
                    <Phone className="w-4 h-4 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">Call us</div>
                    <div className="font-display font-bold text-sm">+91-96760 31464</div>
                  </div>
                </a>
                <a
                  href="https://wa.me/919676031464"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-foreground hover:text-primary transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/25 flex items-center justify-center group-hover:bg-primary transition-all">
                    <MessageCircle className="w-4 h-4 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">WhatsApp</div>
                    <div className="font-display font-bold text-sm">Chat with us</div>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right accordion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-primary/30 transition-all duration-300"
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
