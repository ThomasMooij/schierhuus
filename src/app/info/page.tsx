import React from 'react';
import dynamic from 'next/dynamic';
import { FacilitiesProvider } from "@/context/FacilityContext";
import { facilities } from "@/utils/Facilities";
import { MotionHeader1 } from '@/components/frames/MotionHeader1';
import { MotionHeader2 } from '@/components/frames/MotionHeader2';
MotionHeader2

const FacilitiesCarousel = dynamic(() => import('@/components/facilities/FacilityCarousel'), { ssr: false });

const fadeAnimation = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 1 } 
};

const FacilitiesPage = () => {
  return (
    <FacilitiesProvider>
      <section className="flex flex-col items-center justify-center min-h-screen p-5">
        <div className="text-center"> 
          <MotionHeader1 {...fadeAnimation} className="text-4xl mb-4" title="Onze faciliteiten" />
          <MotionHeader2 {...fadeAnimation} className="text-xl mb-8" title="Explore Our Best Services" />
        </div>
        <FacilitiesCarousel facilities={facilities} />
      </section>
    </FacilitiesProvider>
  );
};

export default FacilitiesPage;
