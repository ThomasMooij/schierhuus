"use client"
import { useFacilities } from '@/context/FacilityContext';
import { MotionDiv } from '../frames/MotionDiv';
import { FacilityCardVariants } from '@/utils/Variants';
import Image, { StaticImageData } from 'next/image';
import { Facility } from '@/utils/Facilities';

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
    const { selectedFacility, setSelectedFacility } = useFacilities();

    const handleExpandClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        event.preventDefault();
        event.stopPropagation();
        setSelectedFacility(facility); 
      };
      
    return (

        <MotionDiv
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`cursor-pointer flex w-full md:w-4/5 lg:max-w-4xl h-44 my-2 bg-white rounded-lg shadow-lg overflow-hidden`} 
            variants={FacilityCardVariants}
            onClick={handleExpandClick}
    >
        <div className="relative w-1/2 h-full">
            
            <Image src={facility.images[0]} alt="" layout='fill' objectFit="cover"  />
        </div>
        <div className="w-1/2 h-full flex flex-col p-4 justify-center">
            <h2 className="text-xl font-semibold">{facility.title}</h2>
            <p className="text-sm">Klik voor meer info!</p> {/* Truncate after 100 characters */}
        </div>
    </MotionDiv>

    );
};

export default FacilityCard;
