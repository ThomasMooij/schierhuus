import LoadingSkeleton from "@/components/LoadingSkeleton";
import Reserve from "@/components/Reserve";
import Slider from "@/components/Slider";
import { Suspense } from "react";
import { MotionDiv } from "@/components/frames/MotionDiv";
import { aboutVariants, sliderVariants } from "@/utils/Variants";
import MainImages from "@/images/MainImages";

export default function Home() {
  return (
    <>
        <main className="#">
          <MotionDiv
            variants={aboutVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8 }}
          >
            <Slider images={MainImages} height="100vh" />
          </MotionDiv>

          <MotionDiv
            variants={sliderVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Suspense fallback={<LoadingSkeleton />}>
              <Reserve />
            </Suspense>
          </MotionDiv>
        </main>
    </>
  );
}
