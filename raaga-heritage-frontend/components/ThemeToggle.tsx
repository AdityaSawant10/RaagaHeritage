"use client";

import { useState } from "react";

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    const body = document.body;

    if (!darkMode) {
      body.style.backgroundColor = "#1f1f1f";
      body.style.color = "#faf7f2";
    } else {
      body.style.backgroundColor = "#faf7f2";
      body.style.color = "#1f1f1f";
    }

    setDarkMode(!darkMode);
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-24 right-6 z-50 bg-[#8B5E3C] text-white px-3 py-2 text-sm rounded-md shadow-md"
    >
      {darkMode ? "☀️" : "🌙"}
    </button>
  );
}
