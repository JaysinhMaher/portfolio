import { useState, useEffect } from "react";
import { ArrowDown } from "lucide-react";

// Each line is split into [before, keyword, after]
const lines = [
  ["Hi, I'm ", "Jaysinh", ""],
  ["I'm a ", "developer", ""],
  ["Software engineering ", "graduate", ""],
];

export const HeroSection = () => {
  const [lineIndex, setLineIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  // Combine the line for typing effect
  const fullLine = lines[lineIndex].join("");

  useEffect(() => {
    let timeout;
    if (typing) {
      if (displayed.length < fullLine.length) {
        timeout = setTimeout(() => {
          setDisplayed(fullLine.slice(0, displayed.length + 1));
        }, 70);
      } else {
        timeout = setTimeout(() => setTyping(false), 1200);
      }
    } else {
      timeout = setTimeout(() => {
        setTyping(true);
        setDisplayed("");
        setLineIndex((prev) => (prev + 1) % lines.length);
      }, 700);
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, lineIndex, fullLine]);

  // Find the keyword boundaries for highlighting
  const [before, keyword, after] = lines[lineIndex];
  const beforeLen = before.length;
  const keywordLen = keyword.length;

  let beforeText = "";
  let keywordText = "";
  let afterText = "";

  if (displayed.length <= beforeLen) {
    beforeText = displayed;
  } else if (displayed.length <= beforeLen + keywordLen) {
    beforeText = before;
    keywordText = displayed.slice(beforeLen, displayed.length);
  } else {
    beforeText = before;
    keywordText = keyword;
    afterText = displayed.slice(beforeLen + keywordLen, displayed.length);
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="
          mx-auto
          rounded-2xl
          shadow-xl
          p-8 md:p-16
          backdrop-blur
          border
          bg-blue-500/10
          border-blue-200
          dark:border-blue-800
          transition-colors
          card-hover
          animate-bubble
        ">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              <span>
                {beforeText}
                <span className="text-primary">{keywordText}</span>
                {afterText}
                <span className={`inline-block w-1 ml-1 align-baseline ${typing ? "animate-blink" : ""}`}>
                  |
                </span>
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
              I use modern technology in an effort to create a web experience that is out of this world.
              I am an eager software engineer who specialises in react technologies.
            </p>

            <div className="pt-4 opacity-0 animate-fade-in-delay-4">
              <a href="#projects" className="cosmic-button">
                View My Work
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Modern scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center select-none">
        <div className="flex flex-col items-center animate-bounce-fade">
          <span className="text-2xl md:text-4xl font-bold tracking-widest mb-4 drop-shadow-lg text-primary">
            Explore the Portfolio
          </span>
          <svg
            className="h-16 w-16 md:h-24 md:w-24 text-primary"
            fill="none"
            stroke="currentColor"
            strokeWidth={3}
            viewBox="0 0 48 48"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M36 18l-12 12-12-12" />
          </svg>
        </div>
      </div>

      {/* Modern floating and scroll indicator animation */}
      <style>
        {`
          @keyframes blink {
            0%   { opacity: 1; }
            50%  { opacity: 0.2; }
            100% { opacity: 1; }
          }
          .animate-blink {
            animation: blink 1.1s ease-in-out infinite;
          }
          @keyframes float {
            0%   { transform: translateY(0); }
            50%  { transform: translateY(24px); }
            100% { transform: translateY(0); }
          }
          .animate-float {
            animation: float 1.8s cubic-bezier(0.4,0,0.2,1) infinite;
          }
          @keyframes bounceFade {
            0%   { opacity: 0; transform: translateY(24px);}
            15%  { opacity: 1; transform: translateY(0);}
            30%  { opacity: 1; transform: translateY(0);}
            50%  { opacity: 1; transform: translateY(12px);}
            70%  { opacity: 1; transform: translateY(0);}
            85%  { opacity: 1; transform: translateY(0);}
            100% { opacity: 0; transform: translateY(-12px);}
          }
          .animate-bounce-fade {
            animation: bounceFade 2.8s cubic-bezier(0.4,0,0.2,1) infinite;
          }
        `}
      </style>
    </section>
  );
};
