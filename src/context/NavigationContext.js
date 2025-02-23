import React, { createContext, useContext, useState } from "react";

const NavigationContext = createContext();

const NavigationProvider = ({ children }) => {
  const [activeComponent, setActiveComponent] = useState("Dashboard");

  const navigate = (component) => {
    setActiveComponent(component);
  };

  return (
    <NavigationContext.Provider value={{ activeComponent, navigate }}>
      {children}
    </NavigationContext.Provider>
  );
};

const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error("useNavigation must be used within a NavigationProvider");
  }
  return context;
};

export { useNavigation, NavigationProvider };
