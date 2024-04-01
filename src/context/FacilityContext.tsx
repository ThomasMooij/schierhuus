'use client'
import React, { createContext, useContext, ReactNode, useState } from 'react';

interface FacilitiesContextType {
  expandedFacilityId: string | null;
  setExpandedFacilityId: (id: string | null) => void;
}
interface FacilitiesProviderProps {
    children: ReactNode;
  }
  

const FacilitiesContext = createContext<FacilitiesContextType>({
  expandedFacilityId: null,
  setExpandedFacilityId: () => {},
});

export const useFacilities = () => useContext(FacilitiesContext);


export const FacilitiesProvider: React.FC<FacilitiesProviderProps> = ({ children }) => {
  const [expandedFacilityId, setExpandedFacilityId] = useState<string | null>(null);

  return (
    <FacilitiesContext.Provider value={{ expandedFacilityId, setExpandedFacilityId }}>
      {children}
    </FacilitiesContext.Provider>
  );
};
