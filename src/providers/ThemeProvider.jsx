"use client";
import { ThemeStates } from "@/context/ThemeContext";
import React, { useEffect, useState } from "react";

const ThemeProvider = ({ children }) => {
  const { theme } = ThemeStates();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (mounted) return <div className={theme}>{children}</div>;
};

export default ThemeProvider;
