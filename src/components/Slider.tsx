"use client"
import React, { useState } from 'react';
import SliderNavigationButton from './buttons/SliderBtn';
import ImageComponent from './ImageComponent'; 
import ReservationBtn from './buttons/ReservationBtn';
import { StaticImageData } from 'next/image';

interface SliderProps {
  images: StaticImageData[]; 
  height?: string; 
}

const Slider: React.FC<SliderProps> = ({ images, height }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [openReserves, setOpenReserves] = useState(false);

  const nextSlide = () => setCurrentSlide(prev => (prev === images.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentSlide(prev => (prev === 0 ? images.length - 1 : prev - 1));

  const openReserveComponent = () => {
    setOpenReserves(true);
  };


  return (
    <section className="relative" style={{ height }}>
      {images.map((image, index) => (
        <ImageComponent key={index} src={image} alt={`Image ${index}`} isActive={index === currentSlide} />
      ))}

      <SliderNavigationButton direction="left" onClick={prevSlide} />
      <SliderNavigationButton direction="right" onClick={nextSlide} />
      
      <ReservationBtn openReserveComponent={openReserveComponent} />
    </section>
  );
};

export default Slider;
