import { Suspense } from 'react';
import Slider from '@/components/Slider';
import LoadingSkeleton from '@/components/LoadingSkeleton';
import AboutComponent from '@/components/about/AboutComponent';
import { MotionDiv } from '@/components/frames/MotionDiv';
import { aboutVariants, sliderVariants } from '@/utils/Variants';
import MainImages from '@/images/MainImages';
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: "Over Ons",
  description: "about page",
};

export default function About() {

  return (
    <section className="flex flex-wrap w-full h-[100vh]">
      <MotionDiv
        variants={aboutVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/2 flex items-center justify-center p-10"
      >
        {/* TEXT */}
       <AboutComponent />    
      </MotionDiv>
      <MotionDiv
        variants={sliderVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full md:w-1/2 h-full"
      >
        {/* IMAGE SLIDER */}
        <Suspense fallback={<LoadingSkeleton />}>
          <Slider images={MainImages} height='100%'/>
        </Suspense>
      </MotionDiv>
    </section>
  );
}
