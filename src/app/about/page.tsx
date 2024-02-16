"use client"

import { motion } from 'framer-motion';
import { Suspense } from 'react';
import Slider from '../components/Slider';
import LoadingSkeleton from '../components/LoadingSkeleton';


export default function About() {

  const aboutVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  const sliderVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="flex flex-wrap w-full h-screen">
      <motion.div
        variants={aboutVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/2 flex items-center justify-center p-10 bg-gradient-to-r from-cyan-500"
      >
        <div className="text-white max-w-md">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className="mb-4">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
          <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.
          </p>
        </div>
      </motion.div>
      <motion.div
        variants={sliderVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full md:w-1/2 h-full overflow-hidden"
      >
        <Suspense fallback={<LoadingSkeleton />}>
          <Slider height='100%'/>
        </Suspense>
      </motion.div>
    </div>
  );
}
