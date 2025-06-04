import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export const Footer = () => {
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if user is at (or near) the bottom of the page
      const scrollPosition = window.innerHeight + window.scrollY;
      const threshold = 10; // px from bottom
      setIsAtBottom(scrollPosition >= document.body.offsetHeight - threshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer
      className={[
        // Emphasize: thicker border, more shadow, subtle bg
        "px-4 bg-blue-500/20 border-t-2 border-blue-400 dark:border-blue-300 backdrop-blur shadow-2xl shadow-blue-200/40 dark:shadow-blue-900/40 mt-12 flex flex-wrap justify-between items-center transition-all duration-300",
        isAtBottom ? "py-8" : "py-12"
      ].join(" ")}
    >
      <p className="text-sm text-muted-foreground transition-all duration-300">
        &copy; {new Date().getFullYear()} Jaysinh - All rights reserved
      </p>
      <a
        href="#hero"
        className={[
          "rounded-full bg-primary/10 hover:bg-primary/20 text-white transition-all duration-300 flex items-center justify-center",
          isAtBottom ? "p-2" : "p-4"
        ].join(" ")}
        style={{
          transition: "all 0.3s"
        }}
      >
        <ArrowUp size={isAtBottom ? 20 : 28} />
      </a>
    </footer>
  );
};
