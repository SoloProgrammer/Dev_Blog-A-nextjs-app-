"use client";

import { createContext, useContext, useState } from "react";

export const ThemeContext = createContext();
var LIGHT = "light",
  DARK = "dark";
export const ThemeContextprovider = ({ children }) => {
  function getFromLocalStorage(key) {
    if (typeof window !== "undefined") {
      return localStorage.getItem(key);
    }
  }
  const preservedTheme = getFromLocalStorage("theme") || LIGHT;
  const [theme, setTheme] = useState(preservedTheme);

  function toggle() {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === LIGHT ? DARK : LIGHT;
      localStorage.setItem("theme", newTheme);
      return newTheme;
    });
  }
  
  const skeletonTheme = {
    color: theme === "light" ? "#efefef" : "#1f273a",
    highlightColor: theme === "light" ? "#f5f5f5" : "#2d354a",
  };

  return (
    <ThemeContext.Provider value={{ theme, skeletonTheme, setTheme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const ThemeStates = () => {
  return useContext(ThemeContext);
};
