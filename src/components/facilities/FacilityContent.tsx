"use client"
import { FacilityTextVariants, aboutVariants, sliderVariants } from "@/utils/Variants";
import { MotionDiv } from "../frames/MotionDiv";
import dynamic from "next/dynamic";
import FacilityText from "./FacilityText";
import { facilities } from "@/utils/Facilities";
import { useFacilities } from "@/context/FacilityContext";
import Slider from "../Slider";
import { AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const FacilitiesContent = () => {
    const { selectedFacility, setSelectedFacility } = useFacilities();

    const FacilitiesCarousel = dynamic(
        () => import("@/components/facilities/FacilityCarousel"),
        { ssr: false }
    );

    return !selectedFacility ? (
        <AnimatePresence>
            <section className="flex md:flex-row items-center justify-center min-h-[70vh] p-5">
                <MotionDiv
                    variants={FacilityTextVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col items-center justify-center w-full md:w-1/2"
                    exit={{ x: "-100vh", opacity: 0 }}
                >
                    <FacilityText />
                </MotionDiv>

                <MotionDiv
                    variants={FacilityTextVariants}
                    initial="hidden"
                    animate="visible"
                    className="w-full md:w-1/2"
                    exit={{ x: "-100vh", opacity: 0 }}
                >
                    <FacilitiesCarousel facilities={facilities} />
                </MotionDiv>
            </section>
        </AnimatePresence>
    ) : (
        <section className="flex flex-row text-white ">
            <MotionDiv
                variants={aboutVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.8 }}
            >
                <Slider images={selectedFacility.images} width='50vw' height="90vh" />
            </MotionDiv>

            <MotionDiv
                className="flex flex-col justify-evenly w-1/2"
                variants={sliderVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <div className="w-full flex justify-end ">
                    <button className="cursor-pointer opacity-75 mr-28" onClick={() => setSelectedFacility(null)}>
                        <FaTimes
                            className="text-3xl text-white "
                        />
                    </button>
                </div>
                <div className="text-white p4 flex justify-center items-center p-10 flex-col">
                    <h1 className="text-4xl font-bold mb-4">{selectedFacility.title}</h1>
                    <article className="mb-4">
                        {selectedFacility.description}
                    </article>
                </div>
            </MotionDiv>
        </section>
    );
};

export default FacilitiesContent