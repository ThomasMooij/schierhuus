import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface SliderNavigationButtonProps {
  direction: 'left' | 'right';
  onClick: () => void;
}

const SliderNavigationButton: React.FC<SliderNavigationButtonProps> = ({ direction, onClick }) => {
  const isLeft = direction === 'left';
  const Icon = isLeft ? FaChevronLeft : FaChevronRight;
  return (
    <button
      id={`${direction  === 'left' ? 'slideLeftBtn' : 'slideRightbtn'}`}
      onClick={onClick}
        className={`absolute top-1/2 ${direction === 'left' ? '-translate-x-1/2 left-10' : 'translate-x-1/2 right-10'} transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full cursor-pointer hover:bg-opacity-70 focus:outline-none transition`}
    >
      <Icon />
    </button>
  );
};

export default SliderNavigationButton;
