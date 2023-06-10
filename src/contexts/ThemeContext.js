import React, { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  //state
  const [theme, setTheme] = useState({
    isLightTheme: true,
    light: {
      background: "rgb(240, 240, 240)",
      color: "black",
    },
    dark: {
      background: "rgb(39, 39, 39)",
      color: "white",
    },
  });

  useEffect(() => {
    const theme = localStorage.getItem("theme");

    if (theme) setTheme(JSON.parse(theme));
  }, []);

  //Function to toggle theme
  const toggleTheme = () => {
    const newTheme = {
      ...theme,
      isLightTheme: !theme.isLightTheme,
    };
    setTheme(newTheme);
    localStorage.setItem("theme", JSON.stringify(newTheme));
  };

  //Context data
  const themeContextData = {
    theme,
    toggleTheme,
  };

  //Return provider
  return (
    <ThemeContext.Provider value={themeContextData}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
