import { createContext, useContext, useState } from "react";

const TableVisibilityContext = createContext();

export const TableVisibilityProvider = ({ children }) => {
  const [showTable, setShowTable] = useState(true);

  const toggleTable = () => {
    setShowTable((prev) => !prev);
  };

  return (
    <TableVisibilityContext.Provider value={{ showTable, toggleTable }}>
      {children}
    </TableVisibilityContext.Provider>
  );
};

export const useTableVisibility = () => {
  return useContext(TableVisibilityContext);
};
