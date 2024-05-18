"use client";
import React, { useState } from "react";
import Slider from "react-slick";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import FacilityCard from "./FacilityCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Area } from "@/utils/Area";
import { useArea } from "@/context/FacilityContext";

interface AreaCarouselProps {
  Areas: Area[];
}
const AreaCarousel: React.FC<AreaCarouselProps> = ({
  Areas,
}) => {
  const [sliderRef, setSliderRef] = useState<any>(null);

  const { expandedFacilityId } = useArea();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    arrows: false,
  };

  return (
    <div className="flex flex-col items-center justify-center w-full mt-4">
      <div className="flex items-center justify-center space-x-4">
        <article className="max-w-md">
          <Slider ref={setSliderRef} {...settings} className="w-auto">
            {Area.map((facility, index) => (
              <div key={facility.id}>
                <FacilityCard facility={facility} index={index} />
              </div>
            ))}
          </Slider>
        </article>
          <div className="flex flex-col justify-center">
            <button onClick={() => sliderRef?.slickPrev()} className="p-2">
              <FaChevronUp className="text-3xl text-gray-800" />
            </button>
            <button onClick={() => sliderRef?.slickNext()} className="p-2">
              <FaChevronDown className="text-3xl text-gray-800" />
            </button>
          </div>
      </div>
    </div>
  );
};

export default AreaCarousel;
