import { createContext, useContext, useState } from "react";

const ThemeContext = createContext({
  primaryColor: "purple.400",
  colorScheme: "purple",
  setPrimaryColor: (color) => {},
});

export function ThemeProvider({ children }) {
  const [primaryColor, setPrimaryColor] = useState("purple.400");

  // Extract base color for `colorScheme` (e.g., "red.400" → "red")
  const colorScheme = primaryColor.split(".")[0];

  return (
    <ThemeContext.Provider value={{ primaryColor, colorScheme, setPrimaryColor }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useThemeContext() {
  return useContext(ThemeContext);
}
