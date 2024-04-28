import React from 'react';
import dynamic from 'next/dynamic';
import { facilities } from "@/utils/Facilities";
import { MotionDiv } from '@/components/frames/MotionDiv';
import FacilityText from '@/components/facilities/FacilityText';


const FacilitiesCarousel = dynamic(() => import('@/components/facilities/FacilityCarousel'), { ssr: false });

const FacilitiesPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  return (
      <main className="flex flex-col md:flex-row items-center justify-center min-h-[75vh] p-5">
        <MotionDiv variants={containerVariants} initial="hidden" animate="visible" className="flex flex-col items-center justify-center w-full md:w-1/2">
          {/* Text Content */}
     
          <FacilityText />
        </MotionDiv>

        <MotionDiv variants={containerVariants} initial="hidden" animate="visible" className="w-full md:w-1/2 mt-20">
          <FacilitiesCarousel facilities={facilities} />
        </MotionDiv>
      </main>
  );
};

export default FacilitiesPage;
