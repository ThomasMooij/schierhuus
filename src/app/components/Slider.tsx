"use client"

import React, { useState } from 'react';
import SliderNavigationButton from './buttons/SliderBtn';
import ImageComponent from './ImageComponent';
import ReservationBtn from './buttons/ReservationBtn';
import image1 from '../images/foto1.jpg';
import image2 from '../images/foto2.jpg';
import image3 from '../images/foto3.webp';
import { StaticImageData } from 'next/image';

const images: StaticImageData[] = [image1, image2, image3];

interface SliderProps {
  height?: string; 
}

const Slider: React.FC<SliderProps>  = ({height}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [openReserves , setOpenReserves] = useState(false)

  const nextSlide = () => setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  const openReserveComponent = () => {
    setOpenReserves(true)
  }

console.log(openReserves)

  return (
    <section className="relative" style={{ height }}>
      {images.map((image, index) => (
        <ImageComponent key={index} src={image} alt={`Holiday home image ${index}`} isActive={index === currentSlide} />
      ))}

      <SliderNavigationButton direction="left" onClick={prevSlide} />
      <SliderNavigationButton direction="right" onClick={nextSlide} />
      
      <ReservationBtn openReserveComponent={openReserveComponent} />
    </section>
  );
};

export default Slider;
