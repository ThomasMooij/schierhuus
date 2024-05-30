"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";
import { Area } from "@/utils/Area";

interface AreasContextProps {
  selectedArea: Area | null;
  setSelectedArea: (area: Area | null) => void;
  selectedNavItem: number;
  setSelectedNavItem: (item: number) => void;
  handleCloseClick: (
    event: React.MouseEvent<SVGSVGElement, MouseEvent>
  ) => void;
}

interface AreasProviderProps {
  children: ReactNode;
}

const AreasContext = createContext<AreasContextProps>({
  selectedArea: null,
  selectedNavItem: 1, 
  setSelectedNavItem: () => {},
  setSelectedArea: () => {},
  handleCloseClick: () => {},
});

export const useAreas = () => useContext(AreasContext);

export const AreasProvider: React.FC<AreasProviderProps> = ({ children }) => {

  const [selectedArea, setSelectedArea] = useState<Area | null>(null);
  const [selectedNavItem, setSelectedNavItem] = useState<number>(1);

  const handleCloseClick = (
    event: React.MouseEvent<SVGSVGElement, MouseEvent>
  ) => {
    event.preventDefault();
    event.stopPropagation();
    setSelectedArea(null);
  };

  return (
    <AreasContext.Provider
      value={{
        selectedArea,
        setSelectedArea,
        selectedNavItem, 
        setSelectedNavItem,
        handleCloseClick,
      }}
    >
      {children}
    </AreasContext.Provider>
  );
};
