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

  const NavItems = [
    { tag: "Home", url: "/" },
    { tag: "Reviews", url: "/reviews" },
    { tag: "Over het huisje", url: "/about" },
    { tag: "De omgeving", url: "/area" },
    { tag: "Contact", url: "/contact" },
  ];

  return (
    <nav className={`${colorChange ? 'bg-navAndFooter' : 'bg-transparent' && 'text-black'} fixed pt-1 top-0 w-full z-10 transition-colors duration-300 ease-in-out`}>
        <div className="container mx-auto flex justify-between items-center">
          <section className="flex flex-col items-center  text-md bg-mosgroen rounded-full p-2 m-2  text-white">
            <NavLogo />
          </section>
          {
            colorChange ? <article>Het perfecte vakantiehuisje voor uw hele familie!</article> : ""
          }
          <section className='flex flex-row items-center text-white'>
          {
            NavItems.map(({tag, url})=> {
              return  <NavItem key={url} url={url} tag={tag} path={pathname} />
              })
            }
          </section>     
        </div>
    </nav>
  )
}


export default Navbar;
