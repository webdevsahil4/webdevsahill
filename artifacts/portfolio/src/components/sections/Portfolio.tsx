import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";

const PROJECTS = [
  { title: "TechCorp Landing", category: "WordPress • Elementor", image: "project-1.png" },
  { title: "EcoShop Store", category: "WooCommerce • Custom", image: "project-2.png" },
  { title: "Luxe Real Estate", category: "Webflow • Premium", image: "project-3.png" },
  { title: "FitLife Academy", category: "WordPress • LMS", image: "project-4.png" },
  { title: "Creative Agency", category: "Webflow • Portfolio", image: "project-5.png" },
  { title: "Reserve Dining", category: "Wix • Booking", image: "project-6.png" },
  { title: "SaaS Dashboard", category: "WordPress • Custom", image: "project-1.png" },
  { title: "Jewelry Boutique", category: "Squarespace • eCommerce", image: "project-2.png" },
  { title: "Law Firm Site", category: "WordPress • Elementor", image: "project-3.png" },
];

export function Portfolio() {
  return (
    <Section
      id="portfolio"
      title="Selected Work"
      subtitle="A showcase of recent projects focusing on performance, design, and conversion."
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {PROJECTS.map((project, i) => (
          <motion.div
            key={`${project.title}-${i}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.07 }}
            className="group relative rounded-2xl overflow-hidden border border-white/10 bg-card"
            style={{ aspectRatio: "3/4" }}
          >
            {/* Image */}
            <img
              src={`${import.meta.env.BASE_URL}images/${project.image}`}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Gradient overlay always visible at bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            {/* Info at bottom */}
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <span className="text-primary font-medium text-xs uppercase tracking-widest mb-1 block opacity-80">
                {project.category}
              </span>
              <h3 className="text-lg font-bold text-white leading-tight">{project.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <a
          href="#contact"
          className="inline-flex items-center justify-center px-8 py-4 rounded-xl glass hover:bg-white/10 font-semibold transition-all hover:-translate-y-1"
        >
          Start a Project Together
        </a>
      </div>
    </Section>
  );
}
