"use client"
import React, { useEffect, useState } from 'react';
import SliderNavigationButton from './buttons/SliderBtn';
import ImageComponent from './ImageComponent'; 
import ReservationBtn from './buttons/ReservationBtn';
import { StaticImageData } from 'next/image';

interface SliderProps {
  images: string[]; 
  height?: string; 
  width?: string;
}

const Slider: React.FC<SliderProps> = ({ images, height, width }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [openReserves, setOpenReserves] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const nextSlide = () => setCurrentSlide(prev => (prev === images.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentSlide(prev => (prev === 0 ? images.length - 1 : prev - 1));

  const openReserveComponent = () => {
    setOpenReserves(true);
  };

  useEffect(() => {
    const slideInterval = setInterval(() => {
      if (!isHovering) {
        nextSlide();
      }
    }, 2500);

    return () => clearInterval(slideInterval);
  }, [isHovering, images]);

  return (
    <section
      className="relative"
      style={{ height, width }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
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
