"use client"
import { FacilityTextVariants, aboutVariants, sliderVariants } from "@/utils/Variants";
import { MotionDiv } from "../frames/MotionDiv";
import dynamic from "next/dynamic";
import FacilityText from "./FacilityText";
import { facilities } from "@/utils/Facilities";
import { useFacilities } from "@/context/FacilityContext";
import Slider from "../Slider";

const FacilitiesContent = () => {
    const { selectedFacility } = useFacilities();
  
    console.log(selectedFacility)

    const FacilitiesCarousel = dynamic(
        () => import("@/components/facilities/FacilityCarousel"),
        { ssr: false }
      );
  
    return !selectedFacility ? (
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
    ) : ( 
        <>

          <MotionDiv
            variants={aboutVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8 }}
          >
            <Slider images={selectedFacility.images} height="100vh" />
          </MotionDiv>

          <MotionDiv
            variants={sliderVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {selectedFacility.title}
          </MotionDiv>
      </>
    );
  };

  export default FacilitiesContent