import LoadingSkeleton from "@/components/LoadingSkeleton";
import Reserve from "@/components/Reserve";
import Slider from "@/components/Slider";
import { Suspense } from "react";
import { MotionDiv } from "@/components/frames/MotionDiv";
import { aboutVariants, sliderVariants } from "@/utils/Variants";
import MainImages from "@/images/MainImages";
import { ScrollToReservation } from "@/utils/Functions";
import { ReviewsComponent } from "@/components/reviews/ReviewsComponent";
import Socials from "@/components/buttons/Socials";

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
        {/* Social Icons */}
        <div className="flex space-x-8 justify-center py-8">
          <Socials
              FBClass="text-8xl cursor-pointer  hover:text-blue-600"
              TwitClass="text-8xl cursor-pointer hover:text-pink-500"
              InstaClass="text-8xl cursor-pointer hover:text-sky-400"
              facebookUrl="#"
              twitterUrl="#"
              instagramUrl="#"
          />
        </div>
          <MotionDiv
            variants={sliderVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Suspense fallback={<LoadingSkeleton />} >
              <div id='reviews' className="flex justify-center h-[65vh] pt-10">
                <ReviewsComponent />
              </div>
            </Suspense>   

            <Suspense fallback={<LoadingSkeleton />} >
              <div id='reservation'>
                <Reserve />
              </div>
            </Suspense>

            <ScrollToReservation />

          </MotionDiv>
        </main>
    </>
  );
}
