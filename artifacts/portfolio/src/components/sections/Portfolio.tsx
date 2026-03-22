import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";

const PROJECTS = [
  { title: "TechCorp Landing",   category: "WordPress · Elementor",       image: "project-1.png", badge: "" },
  { title: "EcoShop Store",      category: "WooCommerce · Custom",        image: "project-2.png", badge: "NEW" },
  { title: "Luxe Real Estate",   category: "Webflow · Premium",           image: "project-3.png", badge: "" },
  { title: "FitLife Academy",    category: "WordPress · LMS",             image: "project-4.png", badge: "" },
  { title: "Creative Agency",    category: "Webflow · Portfolio",         image: "project-5.png", badge: "NEW" },
  { title: "Reserve Dining",     category: "Wix · Booking",              image: "project-6.png", badge: "" },
  { title: "SaaS Dashboard",     category: "WordPress · Custom",         image: "project-1.png", badge: "" },
  { title: "Jewelry Boutique",   category: "Squarespace · eCommerce",    image: "project-2.png", badge: "NEW" },
  { title: "Law Firm Site",      category: "WordPress · Elementor",      image: "project-3.png", badge: "" },
];

/*
  Bento grid layout (3-col base):
  Row 1: [wide=2cols landscape] [portrait]
  Row 2: [portrait] [portrait] [portrait]
  Row 3: [portrait] [wide=2cols landscape]
*/
const LAYOUT: { colSpan: number; rowSpan: number }[] = [
  { colSpan: 2, rowSpan: 1 }, // 0 – wide landscape
  { colSpan: 1, rowSpan: 2 }, // 1 – tall portrait
  { colSpan: 1, rowSpan: 1 }, // 2 – square
  { colSpan: 1, rowSpan: 1 }, // 3 – square
  { colSpan: 1, rowSpan: 1 }, // 4 – square
  { colSpan: 2, rowSpan: 1 }, // 5 – wide landscape
  { colSpan: 1, rowSpan: 1 }, // 6 – square
  { colSpan: 1, rowSpan: 1 }, // 7 – square
  { colSpan: 1, rowSpan: 1 }, // 8 – square
];

function Card({
  project,
  layout,
  i,
}: {
  project: typeof PROJECTS[0];
  layout: { colSpan: number; rowSpan: number };
  i: number;
}) {
  const isWide = layout.colSpan === 2;
  const isTall = layout.rowSpan === 2;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: i * 0.06 }}
      className="group relative overflow-hidden rounded-2xl bg-[#111] border border-white/[0.07]"
      style={{
        gridColumn: `span ${layout.colSpan}`,
        gridRow: `span ${layout.rowSpan}`,
        minHeight: isTall ? "460px" : isWide ? "260px" : "230px",
      }}
    >
      {/* Image */}
      <img
        src={`${import.meta.env.BASE_URL}images/${project.image}`}
        alt={project.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
      />

      {/* Subtle dark overlay — always present, deepens on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/5 group-hover:from-black/80 transition-all duration-500" />

      {/* Badge top-left */}
      {project.badge && (
        <div className="absolute top-4 left-4 px-2 py-0.5 rounded-md bg-primary/90 text-[10px] font-bold text-white tracking-widest uppercase z-10">
          {project.badge}
        </div>
      )}

      {/* Info — slides up on hover */}
      <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-1 group-hover:translate-y-0 transition-transform duration-400">
        <span className="block text-[11px] font-medium text-primary/80 uppercase tracking-widest mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {project.category}
        </span>
        <h3 className="text-base md:text-lg font-bold text-white leading-tight">
          {project.title}
        </h3>
      </div>
    </motion.div>
  );
}

export function Portfolio() {
  return (
    <Section
      id="portfolio"
      title="Selected Work"
      subtitle="A showcase of recent projects focusing on performance, design, and conversion."
    >
      {/* Desktop bento grid */}
      <div
        className="hidden md:grid gap-4"
        style={{
          gridTemplateColumns: "repeat(3, 1fr)",
          gridAutoRows: "230px",
        }}
      >
        {PROJECTS.map((project, i) => (
          <Card key={i} project={project} layout={LAYOUT[i]} i={i} />
        ))}
      </div>

      {/* Mobile: 2-col equal grid */}
      <div className="grid md:hidden grid-cols-2 gap-3">
        {PROJECTS.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="group relative overflow-hidden rounded-xl bg-[#111] border border-white/[0.07]"
            style={{ aspectRatio: i === 0 ? "16/9" : "3/4" }}
          >
            <img
              src={`${import.meta.env.BASE_URL}images/${project.image}`}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            {project.badge && (
              <div className="absolute top-2 left-2 px-1.5 py-0.5 rounded bg-primary/90 text-[9px] font-bold text-white uppercase tracking-wider">
                {project.badge}
              </div>
            )}
            <div className="absolute bottom-0 left-0 right-0 p-3">
              <h3 className="text-sm font-bold text-white">{project.title}</h3>
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
