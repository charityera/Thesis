import React, { createContext, useContext, useState, ReactNode } from "react";

interface HomeContextProps {
  message: string;
}

const HomeContext = createContext<HomeContextProps | undefined>(undefined);

export const HomeProvider = ({ children }: { children: ReactNode }) => {
  const [message] = useState("Welcome to the Home Context!");

  return (
    <HomeContext.Provider value={{ message }}>{children}</HomeContext.Provider>
  );
};

export const useHomeContext = () => {
  const context = useContext(HomeContext);
  if (!context) {
    throw new Error("useHomeContext must be used within a HomeProvider");
  }
  return context;
};
