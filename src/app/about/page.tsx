"use client"
import Head from 'next/head'
import { motion } from 'framer-motion';
import { Suspense } from 'react';
import Slider from '../components/Slider';
import LoadingSkeleton from '../components/LoadingSkeleton';
import dynamic from 'next/dynamic';
import AboutComponent from '../components/about/AboutComponent';

export default function About() {

  const aboutVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  const sliderVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };

  const ReserveComponent = dynamic(() => import('../components/Reserve'));

  return (
    <main className="flex flex-wrap w-full h-screen">
      <Head>
        <title>Vakanties in Drenthe!</title>
        <meta property="og:title" content="about page holiday home" key="about" />
      </Head>  
      <motion.div
        variants={aboutVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/2 flex items-center justify-center p-10 bg-gradient-to-r from-cyan-500"
      >
        {/* TEXT SECTION */}
       <AboutComponent />
      </motion.div>
      <motion.div
        variants={sliderVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full md:w-1/2 h-full overflow-hidden"
      >
        {/* IMAGE SLIDER */}
        <Suspense fallback={<LoadingSkeleton />}>
          <Slider height='100%'/>
        </Suspense>
      </motion.div>
    </main>
  );
}
