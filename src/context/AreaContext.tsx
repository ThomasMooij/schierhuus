"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";
import { Area } from "@/utils/Area";

interface AreasContextProps {
  selectedArea: Area | null;
  setSelectedArea: (area: Area | null) => void;
  handleCloseClick: (
    event: React.MouseEvent<SVGSVGElement, MouseEvent>
  ) => void;
}

interface AreasProviderProps {
  children: ReactNode;
}

const AreasContext = createContext<AreasContextProps>({
  selectedArea: null,
  setSelectedArea: () => {},
  handleCloseClick: () => {},
});

export const useAreas = () => useContext(AreasContext);

export const AreasProvider: React.FC<AreasProviderProps> = ({ children }) => {

  const [selectedArea, setSelectedArea] = useState<Area | null>(null);

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
        handleCloseClick,
      }}
    >
      {children}
    </AreasContext.Provider>
  );
};
