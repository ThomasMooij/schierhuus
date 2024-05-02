import React from "react";
import { FacilitiesProvider } from '@/context/FacilityContext';
import FacilitiesContent from "@/components/facilities/FacilityContent";


const FacilitiesPage = () => {
  return (
    <FacilitiesProvider>
      <main className="flex flex-col md:flex-row items-center justify-center min-h-[75vh] p-5">
        <FacilitiesContent />
      </main>
    </FacilitiesProvider>
  );
};

export default FacilitiesPage;
