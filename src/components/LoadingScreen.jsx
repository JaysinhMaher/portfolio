import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete, theme = "dark" }) => {
  const [text, setText] = useState("");
  const fullText = "<Hello Wolrd />";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(interval);

        setTimeout(() => {
          onComplete();
        }, 1000);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  // Set colors based on theme
  const isLight = theme === "light";
  const bgColor = isLight ? "bg-white" : "bg-black";
  const textColor = isLight ? "text-gray-900" : "text-gray-100";
  const barBg = isLight ? "bg-gray-200" : "bg-gray-800";
  const barFg = isLight ? "bg-blue-700 shadow-[0_0_15px_#1d4ed8]" : "bg-blue-500 shadow-[0_0_15px_#3b82f6]";

  return (
    <div className={`fixed inset-0 z-50 ${bgColor} ${textColor} flex flex-col items-center justify-center`}>
      <div className="mb-4 text-4xl font-mono font-bold">
        {text} <span className="animate-blink ml-1"> | </span>
      </div>

      <div className={`w-[200px] h-[2px] ${barBg} rounded relative overflow-hidden`}>
        <div className={`w-[40%] h-full ${barFg} animate-loading-bar`}></div>
      </div>
      <style>
        {`
          @keyframes loadingBar {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(250%); }
          }
          .animate-loading-bar {
            animation: loadingBar 1.6s cubic-bezier(0.4,0,0.2,1) infinite;
          }
          @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.2; }
          }
          .animate-blink {
            animation: blink 1.1s ease-in-out infinite;
          }
        `}
      </style>
    </div>
  );
};