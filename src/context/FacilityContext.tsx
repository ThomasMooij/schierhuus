'use client'
import React, { createContext, useContext, ReactNode, useState } from 'react';

interface FacilitiesContextProps {
  expandedFacilityId: string | null;
  setExpandedFacilityId: (id: string | null) => void;
  handleCloseClick: (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => void;
}

interface FacilitiesProviderProps {
    children: ReactNode;
}
  
const FacilitiesContext = createContext<FacilitiesContextProps>({
  expandedFacilityId: null,
  setExpandedFacilityId: () => {},
  handleCloseClick: () => {}
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
