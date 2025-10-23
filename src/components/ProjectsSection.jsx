import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "E-commerce application",
    description: "A modern and fully functional E-commerce application using Stripe to store products/checkout, made with NextJS, Typescript, Tailwind and Zustand.",
    image: "/projects/project1.png",
    tags: ["NextJS", "Typescript", "TailwindCSS", "Stripe", "Zustand"],
    demoUrl: "https://nextjs-stripe-full-stack-ecommerce.vercel.app/",
    githubUrl: "https://github.com/JaysinhMaher/nextjs-stripe-full-stack-ecommerce-app",
  },
  {
    id: 2,
    title: "RefugeEAP",
    description:
      "Modern, informative full stack application using NextJS, Node, Typescript, Prisma for AWS hosting and TailwindCSS for a responsive design. It incorporates Google Auth for accounts, 2 factor email auth codes, forums, blogs, padlet integration and much more. Please note the AWS server is no longer being hosted so this project is not hosted for demo.",
    image: "/projects/project2.png",
    tags: ["TypeScript", "NextJS", "Prisma", "AWS hosting", "TailwindCSS"],
    demoUrl: "#",
    githubUrl: "https://github.com/JaysinhMaher/refugeap-nextjs-app",
  },
  {
    id: 3,
    title: "Freelance project",
    description:
      "A slick and professional page for a local PC build/clean/repair shop undergone as private freelance work, created with bootstrap and javascript. Note: The social URL's are disabled for customer privacy reasons.",
    image: "/projects/project3.png",
    tags: ["Bootstrap", "Javascript", "CSS"],
    demoUrl: "https://nifty-builds.vercel.app/",
    githubUrl: "https://github.com/JaysinhMaher/nifty-builds",
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
          crafted with attention to detail, performance, and user experience. This vite portfolio can also be found on my github.
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
