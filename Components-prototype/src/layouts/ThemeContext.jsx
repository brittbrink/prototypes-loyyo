import { createContext, useContext, useState } from "react";

const ThemeContext = createContext({
  primaryColor: "blue.400",
  colorScheme: "blue",
  setPrimaryColor: (color) => {},
});

export function ThemeProvider({ children }) {
  const [primaryColor, setPrimaryColor] = useState("blue.400");

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
