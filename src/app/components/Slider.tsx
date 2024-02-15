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

const Slider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  return (
    <section className="relative" style={{ height: '60vh' }}>
      {images.map((image, index) => (
        <ImageComponent key={index} src={image} alt={`Slide ${index}`} isActive={index === currentSlide} />
      ))}

      <SliderNavigationButton direction="left" onClick={prevSlide} />
      <SliderNavigationButton direction="right" onClick={nextSlide} />
      
      <ReservationBtn />
    </section>
  );
};

export default Slider;
