import React from "react";
import { FacilitiesProvider } from '@/context/FacilityContext';
import FacilitiesContent from "@/components/facilities/FacilityContent";


const FacilitiesPage = () => {
  return (
    <FacilitiesProvider>
      <main className="max-h-[70vh]">
        <FacilitiesContent />
      </main>
    </FacilitiesProvider>
  );
};

export default FacilitiesPage;
