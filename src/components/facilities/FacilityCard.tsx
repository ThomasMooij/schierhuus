"use client"
import React from 'react';
import { useFacilities } from '@/context/FacilityContext';
import { MotionDiv } from '../frames/MotionDiv';
import { MotionParagraph } from '../frames/MotionParagraph';
import Slider from '../Slider';
import MainImages from '@/images/MainImages';
import { FacilityCardVariants } from '@/utils/Variants';
import { slice } from '@/utils/Functions';
import { StaticImageData } from 'next/image';
import ImageComponent from '../ImageComponent';

interface Facility {
    id: string;
    title: string;
    description: string;
    images:StaticImageData[]
}

interface FacilityCardProps {
    facility: Facility;
    index : number;
}

interface CloseIconProps {
    onClick: (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => void;
}

const CloseIcon: React.FC<CloseIconProps> = ({ onClick }) => (
    <svg onClick={onClick} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
);

const FacilityCard: React.FC<FacilityCardProps> = ({ facility, index }) => {

    console.log(facility.images[0].src);

    const { expandedFacilityId, setExpandedFacilityId } = useFacilities();
    const expanded = facility.id === expandedFacilityId;
    const alignment = index % 2 === 0 ? 'mr-10' : 'ml-10';

    const handleExpandClick = () => {
        setExpandedFacilityId(expanded ? null : facility.id);
    };

    const handleCloseClick = (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
        event.stopPropagation(); 
        setExpandedFacilityId(null);
    };

    return expanded ? (
        <div className="fixed inset-0 bg-white z-50 flex flex-row items-center justify-center p-4">
            <div className="w-1/2">
                <MotionParagraph initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-lg" title={facility.description} />
            </div>
            <div className="w-1/2 relative">
                <CloseIcon onClick={handleCloseClick} />
                <Slider images={MainImages} />
            </div>
        </div>
    ) : (
        <MotionDiv
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, delay: index * 0.1 }} // Adjust for desired effect
        className={`cursor-pointer flex w-full md:w-4/5 lg:max-w-4xl h-44 my-2 bg-white rounded-lg shadow-lg overflow-hidden ${alignment}`} // Include alignmentClass here
        variants={FacilityCardVariants}
        onClick={handleExpandClick}
    >
        <div className="w-1/2 h-full">
            <ImageComponent key={index}  src={facility.images[0].src} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="w-1/2 h-full flex flex-col p-4 justify-between">
            <h2 className="text-xl font-semibold">{facility.title}</h2>
            <p className="text-sm">{slice(facility.description, 100)}</p> {/* Truncate after 100 characters */}
        </div>
    </MotionDiv>
    );
};

export default FacilityCard;
