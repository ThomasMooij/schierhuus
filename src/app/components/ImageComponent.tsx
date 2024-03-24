import Image, { StaticImageData } from 'next/image';
import React from 'react';

interface ImageProps {
  src: StaticImageData[];
  alt: string;
  isActive: boolean;
}

const ImageComponent: React.FC<ImageProps> = ({ src, alt, isActive }) => {
  return (
    <div className={`shadow-imageEdge absolute inset-0 transition-opacity duration-1000 ease-in-out rounded-xl ${isActive ? 'opacity-100' : 'opacity-0'}`}>
      <Image src={src} alt={alt} layout='fill' objectFit="cover" />
    </div>
  );
};

export default ImageComponent;
