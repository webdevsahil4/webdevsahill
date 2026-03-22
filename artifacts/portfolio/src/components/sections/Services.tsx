import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { LayoutTemplate, MonitorSmartphone, ShoppingCart, TrendingUp } from "lucide-react";

const SERVICES = [
  {
    icon: <LayoutTemplate size={32} />,
    title: "Custom CMS Development",
    desc: "Bespoke themes and functional plugins built from scratch for WordPress and Webflow.",
  },
  {
    icon: <ShoppingCart size={32} />,
    title: "eCommerce Solutions",
    desc: "High-converting online stores built on WooCommerce, Shopify, or custom solutions.",
  },
  {
    icon: <MonitorSmartphone size={32} />,
    title: "Responsive Web Design",
    desc: "Pixel-perfect, mobile-first websites that look incredible on every device.",
  },
  {
    icon: <TrendingUp size={32} />,
    title: "Performance & SEO",
    desc: "Speed optimization, technical SEO, and accessibility improvements for better rankings.",
  },
];

export function Services() {
  return (
    <Section 
      id="services" 
      title="My Services" 
      subtitle="Comprehensive digital solutions tailored to elevate your business online."
      className="bg-white/[0.02] border-y border-white/5"
    >
      <div className="grid md:grid-cols-2 gap-6">
        {SERVICES.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass-card p-8 rounded-2xl group hover:-translate-y-1"
          >
            <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
              {service.icon}
            </div>
            <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
            <p className="text-muted-foreground leading-relaxed">
              {service.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
