import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { ExternalLink } from "lucide-react";

const PROJECTS = [
  {
    title: "TechCorp Landing",
    category: "WordPress • Elementor",
    image: "project-1.png",
    link: "#",
  },
  {
    title: "EcoShop Store",
    category: "WooCommerce • Custom",
    image: "project-2.png",
    link: "#",
  },
  {
    title: "Luxe Real Estate",
    category: "Webflow • Premium",
    image: "project-3.png",
    link: "#",
  },
  {
    title: "FitLife Academy",
    category: "WordPress • LMS",
    image: "project-4.png",
    link: "#",
  },
  {
    title: "Creative Agency",
    category: "Webflow • Portfolio",
    image: "project-5.png",
    link: "#",
  },
  {
    title: "Reserve Dining",
    category: "Wix • Booking",
    image: "project-6.png",
    link: "#",
  },
];

export function Portfolio() {
  return (
    <Section 
      id="portfolio" 
      title="Selected Work" 
      subtitle="A showcase of recent projects focusing on performance, design, and conversion."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {PROJECTS.map((project, i) => (
          <motion.a
            key={project.title}
            href={project.link}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group block relative rounded-2xl overflow-hidden aspect-[4/3] border border-white/10 bg-card"
          >
            {/* Image */}
            <img 
              src={`${import.meta.env.BASE_URL}images/${project.image}`} 
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            {/* Content */}
            <div className="absolute inset-0 p-6 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <span className="text-primary font-medium text-sm mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                {project.category}
              </span>
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150">
                  <ExternalLink size={18} />
                </div>
              </div>
            </div>
          </motion.a>
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
