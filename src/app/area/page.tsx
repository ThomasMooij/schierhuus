import React from "react";
import type { Metadata } from "next";
import { AreaNav } from "@/components/area/AreaNav";
import { AreasProvider } from "@/context/AreaContext";
import { MotionDiv } from "@/components/frames/MotionDiv";
import { aboutVariants } from "@/utils/Variants";
import AreasContent from "@/components/area/AreaContent";

export const metadata: Metadata = {
  title: "Over de omgeving",
  description: "Information about the area",
};

export default function Area() {
  return (
    <AreasProvider>
      <section className="flex flex-col w-full h-[100vh]">
        <MotionDiv
          variants={aboutVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8 }}
          className="w-full flex justify-center"
        >
          {/* NAV */}
          <AreaNav />
        </MotionDiv>
        <MotionDiv
          variants={aboutVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8 }}
          className="w-full flex justify-center"
        >
          <AreasContent />
        </MotionDiv>
      </section>
    </AreasProvider>
  );
}
