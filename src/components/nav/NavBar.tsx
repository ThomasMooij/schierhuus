"use client"
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import NavLogo from "./NavLogo";
import NavItem from "./NavItem";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [openHam, setOpenHam] = useState(false);

  const pathname = usePathname();

  const NavItems = [
    { tag: "Home", url: "/" },
    { tag: "Reviews", url: "/reviews" },
    { tag: "Over ons", url: "/about" },
    { tag: "De omgeving", url: "/area" },
    { tag: "Praktische info", url: "/info" },
    { tag: "Contact", url: "/contact" },
  ];

  return (
    <nav
      className=
      "text-black fixed top-0 w-full z-10 transition-colors duration-300 ease-in-out "
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo Section */}
        <div className="mb-3">
          <NavLogo />
        </div>
        {/* Items Section - shown only on large screens */}
        <div className="hidden lg:flex items-center space-x-8 mt-2">
          {NavItems.map(({ tag, url }) => (
            <NavItem key={url} url={url} tag={tag} path={pathname} />
          ))}
        </div>
        {/* Hamburger Menu - shown only on small screens */}
        <div className="lg:hidden">
          <button onClick={() => setOpenHam(!openHam)} className="cursor-pointer opacity-75">
            {openHam ? <FaTimes className="text-3xl" /> : <FaBars className="text-2xl" />}
          </button>
          {openHam && (
            <div className="flex flex-col absolute top-full right-0 mt-2 py-2 shadow-md bg-white">
              {NavItems.map(({ tag, url }) => (
                <NavItem key={url} url={url} tag={tag} path={pathname} />
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
