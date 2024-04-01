import React from "react";
import { FacilitiesProvider } from "@/context/FacilityContext";
import FacilityCard from "@/components/facilities/FacilityCard";
import { facilities } from "@/utils/Facilities";

const FacilitiesPage = () => {
  return (
    <FacilitiesProvider>
      <section className="flex flex-col items-center justify-center min-h-screen p-5">
          <div className="w-full flex flex-col items-center gap-4">
            {facilities.map((facility, index) => (
              <FacilityCard
                key={facility.id}
                facility={facility}
                index={index}
              />
            ))}
          </div>
      </section>
    </FacilitiesProvider>
  );
};

export default FacilitiesPage;
