"use client";

import { usePathname, useRouter } from 'next/navigation';
import React from 'react';

interface ReservationBtnProps {
  openReserveComponent: () => void;
}

const ReservationBtn: React.FC<ReservationBtnProps> = ({ openReserveComponent }) => {
  const pathname = usePathname();
  const router = useRouter();

  const handleClick = () => {
    if (pathname === '/') {
      // Scroll to the reservation section on the same page
      const reservePage = document.getElementById('reservation');
      reservePage?.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Redirect to home page with query parameter or hash
      router.push('/#reservation');
    }
  };

  return (
    <button
      id="ReservationBtn"
      onClick={handleClick}
      className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-[#E2725B] text-white font-bold py-2 px-4 rounded-full hover:bg-[#C14431] transition duration-300 ease-in-out"
    >
      Make a Reservation
    </button>
  );
};

export default ReservationBtn;
