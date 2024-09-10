import React from "react";
import { FacilitiesProvider } from '@/context/FacilityContext';
import FacilitiesContent from "@/components/facilities/FacilityContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Praktische informatie",
  description: "Information about the available facilities",
};

const FacilitiesPage = () => {
  return (
    <FacilitiesProvider>
      <section className="h-[80vh] flex justify-center">
        <FacilitiesContent />
      </section>
    </FacilitiesProvider>
  );
};

export default FacilitiesPage;
