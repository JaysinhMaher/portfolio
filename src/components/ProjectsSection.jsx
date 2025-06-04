import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "SaaS Landing Page",
    description: "A beautiful landing page app using React and Tailwind.",
    image: "/projects/project1.png",
    tags: ["React", "TailwindCSS", "Supabase"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Orbit Analytics Dashboard",
    description:
      "Interactive analytics dashboard with data visualization and filtering capabilities.",
    image: "/projects/project2.png",
    tags: ["TypeScript", "D3.js", "Next.js"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "E-commerce Platform",
    description:
      "Full-featured e-commerce platform with user authentication and payment processing.",
    image: "/projects/project3.png",
    tags: ["React", "Node.js", "Stripe"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <motion.div
              key={key}
              className="group rounded-lg overflow-hidden shadow-xs card-hover card-bubble-hover
                bg-[#e0f2fe] dark:bg-[#0f172a] transition-colors border border-[#bae6fd] dark:border-[#1e293b] flex flex-col h-full"
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: key * 0.12, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{
                scale: 1.025,
                boxShadow: "0 8px 32px 0 rgba(56,189,248,0.10)",
                transition: { duration: 0.25 },
              }}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6 flex flex-col flex-1">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-[#bae6fd] dark:bg-[#1e293b] text-[#0f172a] dark:text-slate-200 border-[#bae6fd] dark:border-[#1e293b]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1 text-[#0f172a] dark:text-white">{project.title}</h3>
                <p className="text-[#334155] dark:text-slate-300 text-sm mb-4 flex-1">
                  {project.description}
                </p>
                <div className="flex justify-center items-center gap-6 mt-6">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0f172a] dark:text-slate-200 hover:text-primary transition-colors duration-300"
                  >
                    <ExternalLink size={22} />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0f172a] dark:text-slate-200 hover:text-primary transition-colors duration-300"
                  >
                    <Github size={22} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/jaysinhmaher"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
