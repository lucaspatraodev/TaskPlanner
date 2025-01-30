import React, { createContext, useState } from "react";

const PanelContext = createContext();

const PanelProvider = ({ children }) => {
  const [activeComponent, setActiveComponent] = useState("");

  return (
    <PanelContext.Provider value={{ activeComponent, setActiveComponent }}>
      {children}
    </PanelContext.Provider>
  );
};
const usePanel = () => {
  const context = React.useContext(PanelContext);
  if (!context) {
    throw new Error("usePanel must be used within a PanelProvider");
  }
  return context;
};

export { usePanel, PanelProvider };
