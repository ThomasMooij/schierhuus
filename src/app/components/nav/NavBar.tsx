"use client"
import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import NavLogo from './NavLogo';
import NavItem from './NavItem';

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

  const NavItems =["Home" , "Reviews" , "About"]

  return (
    <nav className={`${colorChange ? 'bg-gray-800' : 'bg-transparent' && 'text-black'}    p-5 fixed top-0 w-full z-10 transition-colors duration-300 ease-in-out`}>
        <div className="container mx-auto flex justify-between">
          <div>

         <NavLogo />
         {
           NavItems.map((tag)=> {
             return  <NavItem tag={tag} path={pathname} />
            })
          }
          </div>
         
        </div>
    </nav>
  )
}


export default Navbar;
