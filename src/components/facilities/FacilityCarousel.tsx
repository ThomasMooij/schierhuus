"use client";
import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import FacilityCard from "./FacilityCard";
import { Facility } from "@/utils/Facilities";
import "./FacilitiesCarousel.css";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";


interface FacilitiesCarouselProps {
  facilities: Facility[];
}

const FacilitiesCarousel: React.FC<FacilitiesCarouselProps> = ({
  facilities,
}) => {
  const [currentPage, setCurrentPage] = useState(0);
  const facilitiesPerPage = 1;

  const indexOfMainFacility = currentPage + 1;

  const handlePageClick = ({ selected }: { selected: number }) => {
    setCurrentPage(selected);
  };

  return (
    <div className="carousel-container">
      <div className="facilities-carousel">
        {facilities
          .slice(indexOfMainFacility - 1, indexOfMainFacility + 2)
          .map((facility, index) => (
            <FacilityCard key={facility.id} facility={facility} index={index} />
          ))}
      </div>

      <ReactPaginate
        previousLabel={<FaChevronUp />}
        nextLabel={<FaChevronDown />}
        pageCount={facilities.length}
        onPageChange={handlePageClick}
        breakLabel={null}
        containerClassName={"pagination"}
        previousLinkClassName={"previousBtn"}
        nextLinkClassName={"nextBtn"}
        activeClassName={"active"}
        pageRangeDisplayed={0}
        marginPagesDisplayed={0}
      />
    </div>
  );
};

export default FacilitiesCarousel;
