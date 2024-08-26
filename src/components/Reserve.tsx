"use client"
import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import Socials from './buttons/Socials';
import Calendar from './Calendar';
import { AnimatePresence } from 'framer-motion';
import { MotionDiv } from './frames/MotionDiv';
import { aboutVariants, FacilityCardVariants, sliderVariants } from '@/utils/Variants';

export default function Reserve() {
  return (
    <section id='reservation' className='bg-paginaAchtergrond flex justify-center items-center h-screen'>
      <div className="flex flex-col justify-center items-center w-full max-w-4xl text-center space-y-10">
        
        {/* Social Icons */}
        <div className="flex space-x-8">
          <Socials 
              FBClass="text-4xl cursor-pointer hover:text-blue-600"
              TwitClass="text-4xl cursor-pointer hover:text-pink-500"
              InstaClass="text-4xl cursor-pointer hover:text-sky-400"
              facebookUrl="#"
              twitterUrl="#"
              instagramUrl="#"
          />
        </div>

        {/* Calendar with Animation */}
        <AnimatePresence>
          <MotionDiv
            className="w-full " 
            variants={FacilityCardVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <Calendar />
          </MotionDiv>
        </AnimatePresence>
      </div>
    </section>
  );
}
