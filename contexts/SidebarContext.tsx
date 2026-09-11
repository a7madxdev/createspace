"use client";

import { createContext, ReactNode, useContext, useState } from "react";

type ContextType = {
  isOpen: boolean;
  closeSidebar: () => void;
  openSidebar: () => void;
  toggleSidebar: () => void;
};

const SidebarContext = createContext<ContextType | undefined>(undefined);

export const SidebarProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const openSidebar = () => setIsOpen(true);
  const closeSidebar = () => setIsOpen(false);
  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <SidebarContext.Provider
      value={{ isOpen, openSidebar, closeSidebar, toggleSidebar }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context)
    throw new Error("You can't use useSidebar outside SidebarProvider");
  return context;
};
