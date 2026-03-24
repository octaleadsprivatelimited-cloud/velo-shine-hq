import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PageHeaderProps {
  badge: string;
  title: ReactNode;
  description: string;
}

const PageHeader = ({ badge, title, description }: PageHeaderProps) => {
  return (
    <section className="pt-32 pb-16">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-widest">{badge}</span>
          <h1 className="font-display text-4xl md:text-6xl font-bold mt-4 mb-6">{title}</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">{description}</p>
        </motion.div>
      </div>
    </section>
  );
};

export default PageHeader;
