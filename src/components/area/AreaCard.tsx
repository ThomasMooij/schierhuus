"use client"
import { useAreas } from '@/context/AreaContext';
import { MotionDiv } from '../frames/MotionDiv';
import { FacilityCardVariants } from '@/utils/Variants';
import Image, { StaticImageData } from 'next/image';
import { Area } from '@/utils/Area';

interface AreaCardProps {
    area: Area;
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

const AreaCard: React.FC<AreaCardProps> = ({ area, index }) => {
    const { selectedArea, setSelectedArea } = useAreas();

    const handleExpandClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        event.preventDefault();
        event.stopPropagation();
        setSelectedArea(area); 
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
            
            <Image src={area.images[0]} alt="" layout='fill' objectFit="cover"  />
        </div>
        <div className="w-1/2 h-full flex flex-col p-4 justify-center">
            <h2 className="text-xl font-semibold">{area.title}</h2>
            <p className="text-sm">Klik voor meer info!</p>
        </div>
    </MotionDiv>

    );
};

export default AreaCard;
