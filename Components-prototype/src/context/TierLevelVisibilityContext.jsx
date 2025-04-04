import { createContext, useContext, useState } from "react";

const TierLevelVisibilityContext = createContext();

export const TierLevelVisibilityProvider = ({ children }) => {
  const [showTierLevel, setShowTierLevel] = useState(true);

  const toggleTierLevel = () => {
    setShowTierLevel((prev) => !prev);
  };

  return (
    <TierLevelVisibilityContext.Provider value={{ showTierLevel, toggleTierLevel }}>
      {children}
    </TierLevelVisibilityContext.Provider>
  );
};

export const useTierLevelVisibility = () => {
  return useContext(TierLevelVisibilityContext);
};