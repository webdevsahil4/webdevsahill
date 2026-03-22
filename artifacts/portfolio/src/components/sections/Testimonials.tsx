import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { Star } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Sarah Jenkins",
    role: "CEO at EcoShop",
    image: "client-1.png",
    text: "The best CMS developer I've worked with. Alex delivered our complex WooCommerce store 3 weeks early and it looks breathtaking.",
  },
  {
    name: "Mike Thompson",
    role: "Marketing Director",
    image: "client-2.png",
    text: "Alex transformed our outdated site into a modern, fast-loading WordPress powerhouse. Our conversion rate increased by 40%.",
  },
  {
    name: "Emma Lawson",
    role: "Founder, Luxe Agency",
    image: "client-1.png", /* reusing for the 3rd placeholder */
    text: "Professional, incredibly responsive, and an absolute expert in Webflow. Highly recommend for any serious digital project.",
  },
];

export function Testimonials() {
  return (
    <Section 
      id="testimonials" 
      title="Client Feedback" 
      subtitle="Don't just take my word for it. Here's what my clients have to say."
    >
      <div className="grid md:grid-cols-3 gap-6">
        {TESTIMONIALS.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass-card p-8 rounded-2xl flex flex-col"
          >
            <div className="flex gap-1 text-yellow-500 mb-6">
              {[...Array(5)].map((_, idx) => (
                <Star key={idx} size={16} fill="currentColor" />
              ))}
            </div>
            <p className="text-lg text-foreground/90 italic mb-8 flex-grow">
              "{t.text}"
            </p>
            <div className="flex items-center gap-4 mt-auto">
              <img 
                src={`${import.meta.env.BASE_URL}images/${t.image}`} 
                alt={t.name} 
                className="w-12 h-12 rounded-full object-cover border border-white/20"
              />
              <div>
                <h4 className="font-bold text-foreground">{t.name}</h4>
                <p className="text-sm text-muted-foreground">{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
