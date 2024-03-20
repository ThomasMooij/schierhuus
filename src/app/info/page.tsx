"use client"
import React, { useState } from 'react';
import Head from 'next/head';
import { MotionHeader1 } from '../components/frames/MotionHeader1';
import { MotionParagraph } from '../components/frames/MotionParagraph';
import { MotionDiv } from '../components/frames/MotionDiv';

type SectionKey = 'keuken' | 'fietsen' | 'hottub';

type ExpandedState = {
  [key in SectionKey]: boolean;
};


export default function Facilities() {
  const [expandedSection, setExpandedSection] = useState<ExpandedState>({
    keuken: false,
    fietsen: false,
    hottub: false,
  });

  const toggleSection = (section: SectionKey) => {
    setExpandedSection((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-amber-200">
      <Head>
        <title>Faciliteiten - Schierhuus</title>
      </Head>
      <div className="text-white p-5 md:p-10 max-w-4xl bg-blue-500 rounded-lg shadow-xl">
        <MotionHeader1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-amber-200 text-3xl font-bold mb-5"
          title="Onze Faciliteiten"
        />

        <MotionDiv
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
          onClick={() => toggleSection('keuken')}
        >
          <h2 className="cursor-pointer text-xl font-semibold mb-2">Keuken</h2>
          {expandedSection.keuken && (
            <MotionParagraph
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-md"
              title="Ontdek de gebruiksaanwijzingen voor onze combi magnetron-oven en inductiekoken. Onze keuken is volledig uitgerust voor jouw comfort."
            />
          )}
        </MotionDiv>

        {/* Repeat for other sections like Fietsen and Hottub */}

      </div>
    </section>
  );
}
