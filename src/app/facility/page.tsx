import React from "react";
import { FacilitiesProvider } from '@/context/FacilityContext';
import FacilitiesContent from "@/components/facilities/FacilityContent";


const FacilitiesPage = () => {
  return (
    <FacilitiesProvider>
      <section className="h-[100vh]">
        <FacilitiesContent />
      </section>
    </FacilitiesProvider>
  );
};

export default FacilitiesPage;
