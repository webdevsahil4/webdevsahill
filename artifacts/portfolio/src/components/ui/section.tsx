import { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionProps {
  id: string;
  className?: string;
  children: ReactNode;
  title?: string;
  subtitle?: string;
}

export function Section({ id, className, children, title, subtitle }: SectionProps) {
  return (
    <section id={id} className={cn("py-24 md:py-32 relative", className)}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {(title || subtitle) && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-16 md:mb-24 text-center md:text-left"
          >
            {title && <h2 className="text-3xl md:text-5xl font-bold mb-4">{title}</h2>}
            {subtitle && <p className="text-muted-foreground text-lg max-w-2xl">{subtitle}</p>}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}
