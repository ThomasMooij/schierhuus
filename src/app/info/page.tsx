"use client"
import React, { useState } from 'react';
import Head from 'next/head';
import FacilityCard from '../components/facilities/FacilityCard';
import { facilities } from '../utils/Facilities'; 

export default function Facilities() {
  const [expandedFacility, setExpandedFacility] = useState<string | null>(null);

  const toggleFacility = (id: string) => {
    setExpandedFacility(prev => (prev === id ? null : id));
  };

  return (
    <section className="min-h-screen flex flex-col items-center  p-5">
      <Head>
        <title>Facilities - Your Site Name</title>
      </Head>
      {facilities.map((facility) => (
        <FacilityCard
          key={facility.id}
          facility={facility}
          expanded={expandedFacility === facility.id}
          toggleExpanded={() => toggleFacility(facility.id)}
        />
      ))}
    </section>
  );
}
