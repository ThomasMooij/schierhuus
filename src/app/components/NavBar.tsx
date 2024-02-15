'use client'

import React, { useEffect, useState } from 'react'



const Navbar = () => {

  const [colorChange, setColorChange] = useState(false);

  const changeNavbarColor = () => {
     if(window.scrollY >= 80) {
       setColorChange(true);
     }
     else {
       setColorChange(false);
     }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNavbarColor);
    return () => {
      window.removeEventListener('scroll', changeNavbarColor);
    }
  }, []);
  return (
    <nav className={`${colorChange ? 'bg-gray-800' : 'bg-transparent'} text-green-500 p-5 fixed top-0 w-full z-10 transition-colors duration-300 ease-in-out`}>
        <div className="container mx-auto flex justify-between">
            <div className="font-bold">Schierhuys</div>
            <div>
                <a href="#home" className="px-3">Home</a>
                <a href="#about" className="px-3">About</a>
                <a href="#contact" className="px-3">Contact</a>
            </div>
        </div>
    </nav>
  )
}


export default Navbar;
