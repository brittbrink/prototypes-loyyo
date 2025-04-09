import { createContext, useContext, useState } from "react";

const VisibilityContext = createContext();

export const VisibilityProvider = ({ children }) => {
  const [visibility, setVisibility] = useState({
    table: true,
    tierLevel: true,
    stampCard: true,
    progressBar: true,
    points: true,
    // Add more components here if needed
  });

  const toggleVisibility = (key) => {
    setVisibility((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const setComponentVisibility = (key, value) => {
    setVisibility((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <VisibilityContext.Provider value={{ visibility, toggleVisibility, setComponentVisibility }}>
      {children}
    </VisibilityContext.Provider>
  );
};

export const useVisibility = () => {
  return useContext(VisibilityContext);
};
