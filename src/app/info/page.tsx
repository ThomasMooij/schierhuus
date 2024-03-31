"use client"
import React, { useState } from 'react';
import FacilityCard from '@/components/facilities/FacilityCard';
import { facilities } from '@/utils/Facilities';

const FacilitiesPage = () => {
  const [expandedFacilityId, setExpandedFacilityId] = useState<string | null>(null);

  const handleToggleExpand = (id: string) => {
    if (expandedFacilityId === id) {
      setExpandedFacilityId(null);
    } else {
      setExpandedFacilityId(id); 
    }
  };
 
  return (
    <section className="flex flex-col items-center justify-center min-h-screen p-5">
   
      <div className="container max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 place-items-center">
          {facilities.map((facility) => (
            <FacilityCard
              key={facility.id}
              facility={facility}
              expanded={expandedFacilityId === facility.id}
              onToggleExpand={handleToggleExpand}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacilitiesPage;
