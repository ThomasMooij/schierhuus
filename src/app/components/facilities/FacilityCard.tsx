import React from 'react';
import { MotionDiv} from '../frames/MotionDiv'; 
import { MotionParagraph } from '../frames/MotionParagraph';
import { facilities } from '@/app/utils/Facilities';
import { FaChevronDown } from 'react-icons/fa';

interface Props {
  facility: typeof facilities;
  expanded: boolean;
  toggleExpanded: () => void;
}

const FacilityCard: React.FC<Props> = ({ facility, expanded, toggleExpanded }) => (
  <MotionDiv
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
    className="w-4/5 max-w-4xl bg-white rounded-lg shadow-lg cursor-pointer mb-5 hover:shadow-2xl transition"
    onClick={toggleExpanded}
  >
    <div className="p-6 flex flex-col items-center">
      <h2 className="text-xl font-semibold mb-2">{facility.title}</h2>
      <div
        className={`transform transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}
      >
      <FaChevronDown />
        <span>▼</span>
      </div>
      {expanded && (
        <MotionParagraph
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-md mt-2"
          title={facility.description}
        />
      )}
    </div>
  </MotionDiv>
);

export default FacilityCard;
