"use client"
import React from 'react';
import Slider from '../Slider';
import { MotionDiv } from '../frames/MotionDiv';
import { MotionParagraph } from '../frames/MotionParagraph';
import FacilityImages from '@/app/images/FacilityImages';
import MainImages from '@/app/images/MainImages';

interface Facility {
    id: string;
    title: string;
    description: string;
}

interface FacilityCardProps {
    facility: Facility;
    expanded: boolean;
    onToggleExpand: (id: string) => void;
}

const FacilityCard: React.FC<FacilityCardProps> = ({ facility, expanded, onToggleExpand }) => {
    const handleExpandClick = () => {
        onToggleExpand(facility.id);

    };

    if (expanded) {
        return (
            <div className="fixed inset-0 bg-white z-50 flex flex-row items-center justify-center p-4">
                <div className="w-1/2">
                    <MotionParagraph
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-lg"
                        title={facility.description}
                    />
                </div>
                <div className="w-1/2">
                    <Slider images={MainImages} />
                </div>
            </div>
        );
    }

    return (
        <MotionDiv
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="aspect-square w-full md:w-64 bg-white rounded-lg shadow-lg cursor-pointer mb-5 hover:shadow-xl transition-all flex items-center justify-center"
            onClick={handleExpandClick}
        >
            <h2 className="text-xl font-semibold">{facility.title}</h2>
        </MotionDiv>
    );
};

export default FacilityCard;
