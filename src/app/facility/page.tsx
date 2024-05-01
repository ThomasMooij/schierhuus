import React from "react";
import dynamic from "next/dynamic";
import { facilities } from "@/utils/Facilities";
import { MotionDiv } from "@/components/frames/MotionDiv";
import FacilityText from "@/components/facilities/FacilityText";
import { FacilityTextVariants } from "@/utils/Variants";
import { FacilitiesProvider, useFacilities } from '@/context/FacilityContext';

const FacilitiesCarousel = dynamic(
  () => import("@/components/facilities/FacilityCarousel"),
  { ssr: false }
);

const FacilitiesContent = () => {
  const { selectedFacility, setSelectedFacility } = useFacilities();

  console.log(selectedFacility)

  return (
    <>
      <MotionDiv
        variants={FacilityTextVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center justify-center w-full md:w-1/2"
      >
        <FacilityText />
      </MotionDiv>

      <MotionDiv
        variants={FacilityTextVariants}
        initial="hidden"
        animate="visible"
        className="w-full md:w-1/2"
      >
        <FacilitiesCarousel facilities={facilities} />
      </MotionDiv>
    </>
  );
};

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
