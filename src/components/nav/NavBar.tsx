"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import NavLogo from "./NavLogo";
import NavItem from "./NavItem";
import { FaBars, FaTimes } from "react-icons/fa";

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
    { tag: "Over ons", url: "/about" },
    { tag: "De omgeving", url: "/area" },
    { tag: "Praktische info", url: "/info" },
    { tag: "Contact", url: "/contact" },
  ];

  return (
    <nav
      className={`${
        colorChange ? "bg-navAndFooter text-black" : " text-black"
      } fixed pt-1 top-0 w-full z-10 transition-colors duration-300 ease-in-out`}
    >
      <div
        className="container mx-auto flex items-center justify-center"
        style={{ justifyContent: "space-between" }}
      >
        {/* Logo Section */}
        <div className="flex-none mb-3">
          <NavLogo />
        </div>
        <div className="flex-grow text-center hidden lg:block text-white">
          {colorChange && (
            <p>Het perfecte vakantiehuisje voor uw hele familie!</p>
          )}
        </div>
        {/* Items  Section */}
        <div className="flex-none flex items-center">
          {openHam && (
            <div className="flex flex-col absolute top-full mt-2 right-0 shadow-md py-2">
              {NavItems.map(({ tag, url }) => (
                <NavItem key={url} url={url} tag={tag} path={pathname} />
              ))}
            </div>
          )}
          {/* MENU  Section */}
          <div
            onClick={() => setOpenHam(!openHam)}
            className="cursor-pointer ml-auto opacity-75 m-12"
          >
            {openHam ? (
              <button className="bg-menu p-2 shadow-lg">
                <FaTimes className="   shadow-cyan-500/50 opacity-75 text-3xl" />{" "}
              </button>
            ) : (
              <button className="bg-menu p-2 shadow-lg">
                <FaBars className="  text-2xl " />
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
