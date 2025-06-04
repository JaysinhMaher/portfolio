import { useState } from "react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";

const skills = [
  // Frontend
  { name: "HTML/CSS", level: 95, category: "frontend" },
  { name: "JavaScript", level: 90, category: "frontend" },
  { name: "React", level: 90, category: "frontend" },
  { name: "TypeScript", level: 85, category: "frontend" },
  { name: "Tailwind CSS", level: 90, category: "frontend" },
  { name: "Next.js", level: 80, category: "frontend" },

  // Backend
  { name: "Node.js", level: 80, category: "backend" },
  { name: "Express", level: 75, category: "backend" },
  { name: "MongoDB", level: 70, category: "backend" },
  { name: "PostgreSQL", level: 65, category: "backend" },
  { name: "GraphQL", level: 60, category: "backend" },

  // Tools
  { name: "Git/GitHub", level: 90, category: "tools" },
  { name: "Docker", level: 70, category: "tools" },
  { name: "Figma", level: 85, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full capitalize transition-all duration-300",
                "bg-transparent text-primary border border-primary/40 shadow-sm",
                "hover:bg-primary hover:text-primary-foreground hover:scale-105 hover:shadow-lg",
                activeCategory === category && "bg-primary text-primary-foreground scale-105 shadow-lg"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.name}
                className="bg-blue-500/10 border border-blue-200 dark:border-blue-800 shadow-xl p-6 rounded-2xl card-hover transition-colors relative overflow-hidden"
                layout
                initial={{ opacity: 0, scale: 0.85, y: 40, filter: "blur(8px)" }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: [40, -10, 0, 10, 0], // bubbly float
                  filter: "blur(0px)",
                  transition: {
                    opacity: { duration: 0.25 },
                    scale: { type: "spring", stiffness: 260, damping: 20 },
                    y: {
                      duration: 1.2,
                      times: [0, 0.2, 0.5, 0.8, 1],
                      ease: "easeInOut",
                    },
                    filter: { duration: 0.3 },
                    layout: { duration: 0.5, type: "spring" },
                  },
                }}
                exit={{ opacity: 0, scale: 0.85, y: 40, filter: "blur(8px)" }}
                whileHover={{
                  scale: 1.07,
                  boxShadow: "0 8px 32px 0 rgba(56,189,248,0.25), 0 0 0 4px #38bdf8aa",
                  y: -8,
                  transition: { type: "spring", stiffness: 300, damping: 15 },
                }}
                whileTap={{
                  scale: 0.97,
                  boxShadow: "0 4px 16px 0 rgba(56,189,248,0.18)",
                }}
                style={{ willChange: "transform, opacity, filter, box-shadow" }}
              >
                {/* Optional: Add a floating bubble background */}
                <span
                  className="absolute -top-6 -right-6 w-20 h-20 bg-blue-300/30 rounded-full blur-2xl animate-bubble"
                  aria-hidden="true"
                />
                <div className="text-left mb-4">
                  <h3 className="font-semibold text-lg">{skill.name}</h3>
                </div>
                <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                    style={{ width: skill.level + "%" }}
                  />
                </div>
                <div className="text-right mt-1">
                  <span className="text-sm text-muted-foreground">
                    {skill.level}%
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
