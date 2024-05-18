import React from "react";
import { FacilitiesProvider } from '@/context/FacilityContext';
import FacilitiesContent from "@/components/facilities/FacilityContent";


const FacilitiesPage = () => {
  return (
    <FacilitiesProvider>
      <section className="max-h-[70vh]">
        <FacilitiesContent />
      </section>
    </FacilitiesProvider>
  );
};

export default FacilitiesPage;
