'use client'
import { FacilityTextVariants, aboutVariants, sliderVariants } from "@/utils/Variants";
import { MotionDiv } from "../frames/MotionDiv";
import dynamic from "next/dynamic";
import AreaText from "./AreaText";
import { areas } from "@/utils/Area";
import { useAreas } from "@/context/AreaContext";
import Slider from "../Slider";
import { AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const AreaContent = () => {
  const { selectedArea, setSelectedArea } = useAreas();

  const AreaCarousel = dynamic(
    () => import("@/components/area/AreaCarousel"),
    { ssr: false }
  );

  return !selectedArea ? (
    <AnimatePresence>
      <section className="flex flex-col md:flex-row items-center justify-center w-full p-5">
        <MotionDiv
          variants={FacilityTextVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center justify-center w-full md:w-1/2"
          exit={{ x: "-100vh", opacity: 0 }}
        >
          <AreaText />
        </MotionDiv>

        <MotionDiv
          variants={FacilityTextVariants}
          initial="hidden"
          animate="visible"
          className="w-full md:w-1/2"
          exit={{ x: "-100vh", opacity: 0 }}
        >
          <AreaCarousel areas={areas} />
        </MotionDiv>
      </section>
    </AnimatePresence>
  ) : (
    <section className="flex flex-row w-full text-white">
      <MotionDiv
        variants={aboutVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8 }}
        className="w-1/2"
      >
        <Slider images={selectedArea.images} width='50vw' height="90vh" />
      </MotionDiv>

      <MotionDiv
        className="flex flex-col justify-evenly w-1/2"
        variants={sliderVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="w-full flex justify-end">
          <button className="cursor-pointer opacity-75 mr-28" onClick={() => setSelectedArea(null)}>
            <FaTimes className="text-3xl text-white" />
          </button>
        </div>
        <div className="text-white p4 flex justify-center items-center p-10 flex-col">
          <h1 className="text-4xl font-bold mb-4">{selectedArea.title}</h1>
          <article className="mb-4">
            {selectedArea.description}
          </article>
        </div>
      </MotionDiv>
    </section>
  );
};

export default AreaContent;
