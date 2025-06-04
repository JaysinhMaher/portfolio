import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-40 transition-all duration-300 ease-out",
        isScrolled
          ? "py-3 bg-blue-500/20 border-b-2 border-blue-400 dark:border-blue-300 backdrop-blur shadow-2xl shadow-blue-200/40 dark:shadow-blue-900/40"
          : "py-5 bg-blue-500/20 border-b-2 border-blue-400 dark:border-blue-300 backdrop-blur shadow-2xl shadow-blue-200/40 dark:shadow-blue-900/40"
      )}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <a
          className="text-xl font-bold text-primary flex items-center group cursor-pointer"
          href="#hero"
        >
          <span
            className="relative z-10 flex items-center space-x-1 transition-transform duration-300 group-hover:scale-110 group-hover:text-blue-500 group-hover:drop-shadow-lg"
          >
            <span className="text-foreground">Jaysinh's</span>
            <span>Portfolio</span>
          </span>
        </a>

        {/* Desktop nav links */}
        <div className="hidden md:flex space-x-8 items-center">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="relative text-foreground/80 hover:text-primary transition-colors duration-300
                after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300
                hover:after:w-full"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Right side: theme toggle and mobile menu button */}
        <div className="flex items-center space-x-2">
          {/* Theme toggle: visible on all screens, replaces mobile menu button */}
          <span className="inline-flex transition-transform duration-300 hover:scale-110 hover:rotate-12">
            <ThemeToggle />
          </span>
        </div>
      </div>
    </nav>
  );
};
