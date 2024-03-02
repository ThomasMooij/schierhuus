"use client"
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import NavLogo from "./NavLogo";
import NavItem from "./NavItem";
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [colorChange, setColorChange] = useState(false);
  const [openHam, setOpenHam] = useState(false);

  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorChange(true);
    } else {
      setColorChange(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavbarColor);
    return () => {
      window.removeEventListener("scroll", changeNavbarColor);
    };
  }, []);

  const pathname = usePathname();

  const NavItems = [
    { tag: "Home", url: "/" },
    { tag: "Reviews", url: "/reviews" },
    { tag: "Over het huisje", url: "/about" },
    { tag: "De omgeving", url: "/area" },
    { tag: "Praktische info", url: "/info" },
    { tag: "Contact", url: "/contact" },
  ];

  return (
    <nav className={`${colorChange ? "bg-navAndFooter h-20 text-black" : "bg-transparent text-black"} fixed pt-1 top-0 w-full z-10 transition-colors duration-300 ease-in-out`}>
      <div className="container mx-auto flex justify-between items-center">
        <section>
          <NavLogo />
        </section>
        {colorChange && (
          <article className="hidden lg:block text-white">
            Het perfecte vakantiehuisje voor uw hele familie!
          </article>
        )}

        <section className="flex flex-row pt-10 pr-10 justify-between text-white">
          {openHam && (
            <div className="flex flex-col">
              {NavItems.map(({ tag, url }) => (
                <NavItem key={url} url={url} tag={tag} path={pathname} />
              ))}
            </div>
          )}
          <div
            className="cursor-pointer"
            onClick={() => setOpenHam(!openHam)}
          >
            {openHam ? <FaTimes className="bg-black text-2xl" /> : <FaBars className="bg-black  text-2xl" />}
          </div>
        </section>
      </div>
    </nav>
  );
};

export default Navbar;
