import { motion } from "framer-motion";
import { UserPlus, CalendarCheck, Car, Sparkles } from "lucide-react";

const steps = [
  { num: "1", icon: UserPlus, title: "Sign Up", description: "Create your account in seconds to get started." },
  { num: "2", icon: CalendarCheck, title: "Book a Wash", description: "Pick your service, date & time slot." },
  { num: "3", icon: Car, title: "We Come to You", description: "Our team arrives fully equipped at your doorstep." },
  { num: "4", icon: Sparkles, title: "Enjoy the Shine", description: "Sit back and enjoy your sparkling clean car!" },
];

const HowItWorksSection = () => {
  return (
    <section className="py-12 md:py-20 bg-secondary/40 relative overflow-hidden">
      {/* Illustration background patterns */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Large gear / cog top-right */}
        <svg className="absolute -top-16 -right-16 w-64 h-64 text-primary/[0.08]" viewBox="0 0 200 200" fill="none">
          <path d="M100 30a70 70 0 1 1 0 140 70 70 0 0 1 0-140Zm0 20a50 50 0 1 0 0 100 50 50 0 0 0 0-100Z" fill="currentColor"/>
          <rect x="92" y="0" width="16" height="40" rx="4" fill="currentColor"/>
          <rect x="92" y="160" width="16" height="40" rx="4" fill="currentColor"/>
          <rect x="0" y="92" width="40" height="16" rx="4" fill="currentColor"/>
          <rect x="160" y="92" width="40" height="16" rx="4" fill="currentColor"/>
          <rect x="28" y="28" width="16" height="40" rx="4" fill="currentColor" transform="rotate(45 36 48)"/>
          <rect x="140" y="130" width="16" height="40" rx="4" fill="currentColor" transform="rotate(45 148 150)"/>
          <rect x="130" y="28" width="16" height="40" rx="4" fill="currentColor" transform="rotate(-45 138 48)"/>
          <rect x="28" y="130" width="16" height="40" rx="4" fill="currentColor" transform="rotate(-45 36 150)"/>
        </svg>

        {/* Water droplets scattered */}
        <svg className="absolute top-10 left-8 w-10 h-14 text-primary/[0.12]" viewBox="0 0 40 56" fill="currentColor">
          <path d="M20 0C20 0 0 28 0 38a20 20 0 0 0 40 0C40 28 20 0 20 0Z"/>
        </svg>
        <svg className="absolute bottom-12 left-1/4 w-8 h-11 text-primary/[0.07]" viewBox="0 0 40 56" fill="currentColor">
          <path d="M20 0C20 0 0 28 0 38a20 20 0 0 0 40 0C40 28 20 0 20 0Z"/>
        </svg>
        <svg className="absolute top-1/3 right-12 w-6 h-9 text-primary/[0.10]" viewBox="0 0 40 56" fill="currentColor">
          <path d="M20 0C20 0 0 28 0 38a20 20 0 0 0 40 0C40 28 20 0 20 0Z"/>
        </svg>

        {/* Bubble circles */}
        <div className="absolute top-1/2 left-6 w-20 h-20 rounded-full border-2 border-primary/[0.08]" />
        <div className="absolute bottom-8 right-1/3 w-14 h-14 rounded-full border-2 border-primary/[0.10]" />
        <div className="absolute top-16 left-1/3 w-8 h-8 rounded-full bg-primary/[0.05]" />

        {/* Car silhouette bottom-left */}
        <svg className="absolute -bottom-6 -left-10 w-56 h-28 text-foreground/[0.04]" viewBox="0 0 240 100" fill="currentColor">
          <path d="M20 70h10l20-30h80l30 30h60a20 20 0 0 1 0 10H20a10 10 0 0 1 0-10Z"/>
          <circle cx="70" cy="82" r="14"/>
          <circle cx="180" cy="82" r="14"/>
        </svg>

        {/* Sparkle stars */}
        <svg className="absolute top-8 right-1/3 w-8 h-8 text-primary/[0.12]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0l2.5 9.5L24 12l-9.5 2.5L12 24l-2.5-9.5L0 12l9.5-2.5Z"/>
        </svg>
        <svg className="absolute bottom-20 right-16 w-6 h-6 text-primary/[0.09]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0l2.5 9.5L24 12l-9.5 2.5L12 24l-2.5-9.5L0 12l9.5-2.5Z"/>
        </svg>

        {/* Dotted grid pattern */}
        <svg className="absolute inset-0 w-full h-full text-foreground/[0.03]" xmlns="http://www.w3.org/2000/svg">
          <pattern id="hiw-dots" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.2" fill="currentColor"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#hiw-dots)"/>
        </svg>
      </div>
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-xl mx-auto mb-8 md:mb-12"
        >
          <p className="text-xs font-semibold text-primary uppercase tracking-[0.15em] mb-2">How It Works</p>
          <h2 className="font-display text-xl md:text-[36px] font-bold mb-2 leading-tight">
            Simple 4-step process
          </h2>
          <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
            No complicated steps. Just four simple actions to a clean car.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 max-w-5xl mx-auto">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-card border border-border rounded-lg p-3 md:p-6 text-center hover:shadow-md transition-shadow"
            >
              <div className="w-9 h-9 md:w-12 md:h-12 rounded-full bg-foreground flex items-center justify-center mx-auto mb-2 md:mb-4">
                <step.icon className="w-4 h-4 md:w-5 md:h-5 text-primary" />
              </div>
              <span className="inline-block text-[9px] md:text-[11px] font-semibold text-muted-foreground uppercase tracking-wider mb-1">
                Step {step.num}
              </span>
              <h3 className="font-display text-xs md:text-base font-semibold mb-1">{step.title}</h3>
              <p className="text-[11px] md:text-[13px] text-muted-foreground leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
