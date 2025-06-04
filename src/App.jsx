import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Toaster } from "@/components/ui/toaster";
import { LoadingScreen } from "./components/LoadingScreen";

function App() {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    setTheme(storedTheme === "light" ? "light" : "dark");
    // Listen for theme changes in localStorage
    const onStorage = () => {
      const updatedTheme = localStorage.getItem("theme");
      setTheme(updatedTheme === "light" ? "light" : "dark");
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  return (
    <>
      <Toaster />
      {loading ? (
        <LoadingScreen theme={theme} onComplete={() => setLoading(false)} />
      ) : (
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
