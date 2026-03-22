import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { Code2, Zap, Settings, ShoppingBag } from "lucide-react";

export function About() {
  const highlights = [
    { icon: <Settings className="text-primary" size={24} />, title: "CMS Expert", desc: "Deep knowledge of WP & Webflow" },
    { icon: <Code2 className="text-accent" size={24} />, title: "Custom Coding", desc: "HTML, CSS, JS, PHP" },
    { icon: <ShoppingBag className="text-green-400" size={24} />, title: "eCommerce", desc: "WooCommerce & Shopify" },
    { icon: <Zap className="text-yellow-400" size={24} />, title: "Optimization", desc: "90+ Core Web Vitals" },
  ];

  return (
    <Section id="about">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="aspect-[4/5] rounded-3xl overflow-hidden relative z-10 border border-white/10">
            <img 
              src={`${import.meta.env.BASE_URL}images/avatar.png`} 
              alt="Alex Morgan" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
          </div>
          {/* Decorative element behind image */}
          <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-[2rem] blur-2xl -z-10"></div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Building Digital <br/><span className="text-primary">Masterpieces.</span></h2>
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            I'm Alex Morgan, a full-stack CMS developer with 5+ years of experience building high-performance websites that convert visitors into customers. 
          </p>
          <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
            I specialize in WordPress, Webflow, Wix, and Squarespace — bridging the gap between stunning design and flawless technical execution.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item, i) => (
              <div key={i} className="glass-card p-5 rounded-xl flex items-start gap-4">
                <div className="bg-white/5 p-3 rounded-lg">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
