import React, { useContext } from "react";
import { ThemeContext } from "../theme.context";

const ToggleTheme = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return theme === "dark" ? (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="text-gray-500 bg-white shadow-none p-2 rounded-sm cursor-pointer"
    >
      Set Light
    </button>
  ) : (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="text-gray-500 dark:text-gray-400 bg-white shadow-none p-2 rounded-sm cursor-pointer"
    >
      Set Dark
    </button>
  );
};

export default ToggleTheme;
