"use client";
import React, { useState } from "react";
import Slider from "react-slick";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import FacilityCard from "./FacilityCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Facility } from "@/utils/Facilities";
import { useFacilities } from "@/context/FacilityContext";

interface FacilitiesCarouselProps {
  facilities: Facility[];
}
const FacilitiesCarousel: React.FC<FacilitiesCarouselProps> = ({
  facilities,
}) => {
  const [sliderRef, setSliderRef] = useState<any>(null);

  const { expandedFacilityId } = useFacilities();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    arrows: false,
  };

  return (
    <div className="flex flex-col items-center justify-center w-full mt-20">
      <div className="flex items-center justify-center space-x-4">
        <article className="max-w-md">
          <Slider ref={setSliderRef} {...settings} className="w-auto">
            {facilities.map((facility, index) => (
              <div key={facility.id}>
                <FacilityCard facility={facility} index={index} />
              </div>
            ))}
          </Slider>
        </article>
        {!expandedFacilityId && (
          <div className="flex flex-col justify-center">
            <button onClick={() => sliderRef?.slickPrev()} className="p-2">
              <FaChevronUp className="text-3xl text-gray-800" />
            </button>
            <button onClick={() => sliderRef?.slickNext()} className="p-2">
              <FaChevronDown className="text-3xl text-gray-800" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FacilitiesCarousel;
