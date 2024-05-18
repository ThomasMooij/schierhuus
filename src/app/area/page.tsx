import React from "react";
import type { Metadata } from "next";
import { AreaNav } from "@/components/area/AreaNav";
import { AreasProvider } from "@/context/AreaContext";

export const metadata: Metadata = {
  title: "Over de omgeving",
  description: "Information about the area",
};

export default function Area() {
  return (
  <AreasProvider>
    <section className="flex flex-wrap w-full h-[70vh]">
      <div className="flex justify-center w-full h-full">
        {/* NAV */}
          <AreaNav />
      </div>
    </section>
    </AreasProvider>
  );
}
