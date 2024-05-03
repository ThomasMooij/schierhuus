"use client"
import { FacilityTextVariants, aboutVariants, sliderVariants } from "@/utils/Variants";
import { MotionDiv } from "../frames/MotionDiv";
import dynamic from "next/dynamic";
import FacilityText from "./FacilityText";
import { facilities } from "@/utils/Facilities";
import { useFacilities } from "@/context/FacilityContext";
import Slider from "../Slider";
import { AnimatePresence } from "framer-motion";

const FacilitiesContent = () => {
    const { selectedFacility } = useFacilities();
  
    console.log(selectedFacility)

    const FacilitiesCarousel = dynamic(
        () => import("@/components/facilities/FacilityCarousel"),
        { ssr: false }
      );
  
    return !selectedFacility ? (
      <AnimatePresence>
        <section className="flex md:flex-row items-center justify-center min-h-[75vh] p-5">
            <MotionDiv
            variants={FacilityTextVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center justify-center w-full md:w-1/2"
            exit={ {x: "-100vh", opacity: 0} }
            >
            <FacilityText />
            </MotionDiv>
    
            <MotionDiv
            variants={FacilityTextVariants}
            initial="hidden"
            animate="visible"
            className="w-full md:w-1/2"
            exit={ {x: "-100vh", opacity: 0} }
            >
            <FacilitiesCarousel facilities={facilities} />
            </MotionDiv>
        </section>
      </AnimatePresence>  
    ) : ( 
        <section className="">

          <MotionDiv
            variants={aboutVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8 }}
          >
            <Slider images={selectedFacility.images} width='50vw' height="80vh" />
          </MotionDiv>

          <MotionDiv
            variants={sliderVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {selectedFacility.title}
          </MotionDiv>
      </section>
    );
  };

  export default FacilitiesContent