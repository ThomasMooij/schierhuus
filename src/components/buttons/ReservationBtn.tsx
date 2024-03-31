"use client"
import { usePathname } from 'next/navigation'
import React, { useState } from 'react';

interface ReservationBtnProps {
  openReserveComponent: () => void;
}

const ReservationBtn : React.FC<ReservationBtnProps> = ({openReserveComponent}) => {

  const pathname = usePathname()

const handleClick = () => {
  if (pathname ==='/'){
    const reservePage = document.getElementById('reservation');
    reservePage?.scrollIntoView({ behavior: 'smooth' });
  } else {
    openReserveComponent()
  }
};
  return (
    <button
      id="ReservationBtn"
      onClick={handleClick}
      className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white font-bold py-2 px-4 rounded-full hover:bg-blue-700 transition duration-300 ease-in-out animate-pulse"
    >
      Make a Reservation
    </button>
  );
};

export default ReservationBtn;
