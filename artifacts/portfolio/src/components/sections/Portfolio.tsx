import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";

const PROJECTS = [
  { title: "TechCorp Landing",  category: "WordPress · Elementor",    image: "project-1.png", badge: "" },
  { title: "EcoShop Store",     category: "WooCommerce · Custom",     image: "project-2.png", badge: "NEW" },
  { title: "Luxe Real Estate",  category: "Webflow · Premium",        image: "project-3.png", badge: "" },
  { title: "FitLife Academy",   category: "WordPress · LMS",          image: "project-4.png", badge: "" },
  { title: "Creative Agency",   category: "Webflow · Portfolio",      image: "project-5.png", badge: "NEW" },
  { title: "Reserve Dining",    category: "Wix · Booking",            image: "project-6.png", badge: "" },
  { title: "SaaS Dashboard",    category: "WordPress · Custom",       image: "project-1.png", badge: "" },
  { title: "Jewelry Boutique",  category: "Squarespace · eCommerce",  image: "project-2.png", badge: "NEW" },
  { title: "Law Firm Site",     category: "WordPress · Elementor",    image: "project-3.png", badge: "" },
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
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.07 }}
            className="group relative overflow-hidden rounded-2xl bg-[#111] border border-white/[0.07]"
            style={{ aspectRatio: "3/4" }}
          >
            {/* Image */}
            <img
              src={`${import.meta.env.BASE_URL}images/${project.image}`}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/5 group-hover:from-black/90 transition-all duration-500" />

            {/* Badge */}
            {project.badge && (
              <div className="absolute top-4 left-4 px-2 py-0.5 rounded-md bg-primary/90 text-[10px] font-bold text-white tracking-widest uppercase z-10">
                {project.badge}
              </div>
            )}

            {/* Info */}
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <span className="block text-[11px] font-medium text-primary/80 uppercase tracking-widest mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {project.category}
              </span>
              <h3 className="text-base md:text-lg font-bold text-white leading-tight">
                {project.title}
              </h3>
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
