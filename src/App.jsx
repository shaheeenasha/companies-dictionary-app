import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import CompanyList from "./components/CompanyList";
import "./index.css";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  // 🖼 Choose background image based on theme
  const backgroundImage =
    theme === "light"
      ? "url('/light.pg.jpg')" // Light mode background
      : "url('/favicon.pg.jpg')"; // Dark mode background

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${
        theme === "light"
          ? "bg-linear-to-br from-[#f4f2ee] via-[#eae7dc] to-[#d8cfc4]"
          : "bg-linear-to-br from-gray-900 via-gray-800 to-gray-900"
      } text-gray-900 dark:text-gray-100`}
      style={{
        backgroundImage,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Navbar toggleTheme={toggleTheme} theme={theme} />

      <main className="container mx-auto px-6 py-10">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-serif font-bold tracking-wide text-blue-900 dark:text-indigo-400">
            📘 Companies Dictionary
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2 text-lg italic">
            Explore and learn about top companies across industries.
          </p>
        </div>

        <CompanyList />
      </main>
    </div>
  );
}

export default App;
