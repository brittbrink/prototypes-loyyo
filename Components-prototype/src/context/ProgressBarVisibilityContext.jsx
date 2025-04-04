import { createContext, useContext, useState } from "react";

const ProgressBarVisibilityContext = createContext();

export const ProgressBarVisibilityProvider = ({ children }) => {
  const [showProgressBar, setShowProgressBar] = useState(true);

  const toggleProgressBar = () => {
    setShowProgressBar((prev) => !prev);
  };

  return (
    <ProgressBarVisibilityContext.Provider value={{ showProgressBar, toggleProgressBar }}>
      {children}
    </ProgressBarVisibilityContext.Provider>
  );
};

export const useProgressBarVisibility = () => {
  return useContext(ProgressBarVisibilityContext);
};