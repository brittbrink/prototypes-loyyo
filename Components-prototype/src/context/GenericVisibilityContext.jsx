// context/GenericVisibilityContext.jsx
import React, { createContext, useContext, useState } from "react";

const GenericVisibilityContext = createContext();

const defaultComponents = [
  "points",
  "tierLevel",
  "progressBar",
  "stampCard",
  "table",
  "texts",
  "location",
];

export const VisibilityProvider = ({ children }) => {
  const [visibility, setVisibility] = useState({
    table: true,
    tierLevel: true,
    progressBar: true,
    stampCard: true,
    points: true,
    texts: true,
    location: true,
  });

  const [componentOrder, setComponentOrder] = useState(defaultComponents);

  const toggleVisibility = (key) => {
    setVisibility((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const reorderComponents = (newOrder) => {
    setComponentOrder(newOrder);
  };

  return (
    <GenericVisibilityContext.Provider
      value={{ visibility, toggleVisibility, componentOrder, reorderComponents }}
    >
      {children}
    </GenericVisibilityContext.Provider>
  );
};

export const useVisibility = () => useContext(GenericVisibilityContext);
