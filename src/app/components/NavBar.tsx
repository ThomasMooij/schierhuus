"use client"
import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

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

  const pathname = usePathname()

  return (
    <nav className={`${colorChange ? 'bg-gray-800' : 'bg-transparent' && 'text-black'}    p-5 fixed top-0 w-full z-10 transition-colors duration-300 ease-in-out`}>
        <div className="container mx-auto flex justify-between">
            <div className="flex flex-col items-center  text-md bg-sky-400 rounded-full p-2 text-black">
              <p>Schierhuys</p>
              <p>Natuur vakantie in drenthe</p>             
          </div>
            <div>
                <a href="/" className={`px-3 ${pathname === '/' ? 'underline underline-offset-4' : ''} `}>Home</a>
                <a href="/reviews" className={`px-3 ${pathname === '/reviews' ? 'underline underline-offset-4' : ''}`}>Reviews</a>
                <a href="/about" className={`px-3 ${pathname === '/about' ? 'underline underline-offset-4' : ''}`}>About</a>
                <a href="/contact" className={`px-3 ${pathname === '/contact' ? 'underline underline-offset-4' : ''}`}>Contact</a>
            </div>
        </div>
    </nav>
  )
}


export default Navbar;
