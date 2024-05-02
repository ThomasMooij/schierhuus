"use client"
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Facility } from '@/utils/Facilities'; 

interface FacilitiesContextProps {
  expandedFacilityId: string | null;
  setExpandedFacilityId: (id: string | null) => void;
  selectedFacility: Facility | null;
  setSelectedFacility: (facility: Facility | null) => void;
  handleCloseClick: (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => void;
}

interface FacilitiesProviderProps {
  children: ReactNode;
}

const FacilitiesContext = createContext<FacilitiesContextProps>({
  expandedFacilityId: null,
  setExpandedFacilityId: () => {},
  selectedFacility: null,
  setSelectedFacility: () => {},
  handleCloseClick: () => {},
});

export const useFacilities = () => useContext(FacilitiesContext)

export const FacilitiesProvider: React.FC<FacilitiesProviderProps> = ({ children }) => {
  const [expandedFacilityId, setExpandedFacilityId] = useState<string | null>(null);
  const [selectedFacility, setSelectedFacility] = useState<Facility | null>(null);

  const handleCloseClick = (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    event.preventDefault();
    event.stopPropagation(); 
    setExpandedFacilityId(null);
    setSelectedFacility(null); 
  };

  return (
    <FacilitiesContext.Provider value={{
      expandedFacilityId,
      setExpandedFacilityId,
      selectedFacility,
      setSelectedFacility,
      handleCloseClick
    }}>
      {children}
    </FacilitiesContext.Provider>
  );
};
