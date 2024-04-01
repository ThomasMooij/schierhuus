'use client'
import React, { createContext, useContext, ReactNode, useState } from 'react';

interface FacilitiesContextType {
  expandedFacilityId: string | null;
  setExpandedFacilityId: (id: string | null) => void;
  handleCloseClick: () => void;
}

interface FacilitiesProviderProps {
    children: ReactNode;
}
  

const FacilitiesContext = createContext<FacilitiesContextType>({
  expandedFacilityId: null,
  setExpandedFacilityId: () => {},
  handleCloseClick: () => void
});

export const useFacilities = () => useContext(FacilitiesContext);

export const FacilitiesProvider: React.FC<FacilitiesProviderProps> = ({ children }) => {
  const [expandedFacilityId, setExpandedFacilityId] = useState<string | null>(null);
 
  const handleCloseClick = (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    event.preventDefault();
    event.stopPropagation(); 
    setExpandedFacilityId(null);
  };

  return (
    <FacilitiesContext.Provider value={{ expandedFacilityId, setExpandedFacilityId, handleCloseClick }}>
      {children}
    </FacilitiesContext.Provider>
  );
};
