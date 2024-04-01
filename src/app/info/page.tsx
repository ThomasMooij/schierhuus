import React from 'react';
import dynamic from 'next/dynamic';
import { FacilitiesProvider } from "@/context/FacilityContext";
import { facilities } from "@/utils/Facilities";
import { MotionHeader1 } from '@/components/frames/MotionHeader1';

const FacilitiesCarousel = dynamic(() => import('@/components/facilities/FacilityCarousel'), { ssr: false });

const FacilitiesPage = () => {
  return (
    <FacilitiesProvider>
      <section className="flex flex-col items-center justify-center min-h-screen p-5">
        <MotionHeader1 > Onze faciliteiten</MotionHeader1>
        <FacilitiesCarousel facilities={facilities} />
      </section>
    </FacilitiesProvider>
  );
};

export default FacilitiesPage;
