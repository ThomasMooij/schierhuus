import React from 'react';
import dynamic from 'next/dynamic';
import { FacilitiesProvider } from "@/context/FacilityContext";
import { facilities } from "@/utils/Facilities";
import { MotionHeader1 } from '@/components/frames/MotionHeader1';
import { MotionDiv } from '@/components/frames/MotionDiv';
import { MotionParagraph } from '@/components/frames/MotionParagraph';


const FacilitiesCarousel = dynamic(() => import('@/components/facilities/FacilityCarousel'), { ssr: false });

const FacilitiesPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <FacilitiesProvider>
      <section className="flex flex-col md:flex-row items-center justify-center min-h-screen p-5">
        <MotionDiv variants={containerVariants} initial="hidden" animate="visible" className="flex flex-col items-center justify-center w-full md:w-1/2">
          {/* Text Content */}
          <MotionHeader1 variants={itemVariants} className="text-4xl mb-4" title="Onze faciliteiten" />
          <MotionParagraph variants={itemVariants} className="text-xl mb-8" title="Explore Our Best Services" />
          
        </MotionDiv>

        <MotionDiv variants={containerVariants} initial="hidden" animate="visible" className="w-full md:w-1/2">
          <FacilitiesCarousel facilities={facilities} />
        </MotionDiv>
      </section>
    </FacilitiesProvider>
  );
};

export default FacilitiesPage;
