import React from "react";
import { FacilitiesProvider } from '@/context/FacilityContext';
import FacilitiesContent from "@/components/facilities/FacilityContent";


const FacilitiesPage = () => {
  return (
    <FacilitiesProvider>
      <main className="#">
        <FacilitiesContent />
      </main>
    </FacilitiesProvider>
  );
};

export default FacilitiesPage;
