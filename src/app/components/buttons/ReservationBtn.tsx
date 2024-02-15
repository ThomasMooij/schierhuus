import React from "react";

const ReservationBtn : React.FC = () => {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white font-bold py-2 px-4 rounded-full hover:bg-blue-700 transition duration-300 ease-in-out animate-pulse"
    >
      Make a Reservation
    </button>
  );
};

export default ReservationBtn;
