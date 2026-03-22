import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";

export function Skills() {
  const cmsSkills = [
    { name: "WordPress", percent: 95 },
    { name: "Webflow", percent: 90 },
    { name: "Wix", percent: 85 },
    { name: "Squarespace", percent: 80 },
  ];

  const devSkills = [
    { name: "Elementor / Bricks", percent: 95 },
    { name: "CSS / Tailwind", percent: 90 },
    { name: "JavaScript / React", percent: 85 },
    { name: "PHP / ACF", percent: 80 },
  ];

  return (
    <Section 
      id="skills" 
      title="My Expertise" 
      subtitle="The tools and platforms I use to build world-class digital experiences."
      className="bg-white/[0.02] border-y border-white/5"
    >
      <div className="grid md:grid-cols-2 gap-16">
        {/* CMS Platforms */}
        <div>
          <h3 className="text-2xl font-bold mb-8 font-display flex items-center gap-3">
            <span className="w-8 h-[2px] bg-primary"></span>
            CMS Platforms
          </h3>
          <div className="space-y-6">
            {cmsSkills.map((skill, i) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-muted-foreground">{skill.percent}%</span>
                </div>
                <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.percent}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-primary to-blue-400 rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dev Tools */}
        <div>
          <h3 className="text-2xl font-bold mb-8 font-display flex items-center gap-3">
            <span className="w-8 h-[2px] bg-accent"></span>
            Development Tools
          </h3>
          <div className="space-y-6">
            {devSkills.map((skill, i) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-muted-foreground">{skill.percent}%</span>
                </div>
                <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.percent}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-accent to-purple-400 rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
