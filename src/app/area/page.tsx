import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Over de omgeving",
  description: "Information about the area",
};

export default function Area() {
  return (
    <section className="flex flex-wrap w-full h-[70vh]">
      <div className="flex justify-center w-full h-full">
        {/* NAV */}
        <nav className="mt-20  ">
          <ul className="flex gap-2">
            <button className="font-bold px-3 text-white bg-mosgroen rounded-full mb-4 hover:bg-Terracota">
              <li>Kinderen</li>
            </button>
            <button className="font-bold px-3 text-white bg-mosgroen rounded-full mb-4 hover:bg-Terracota">
              <li>Natuur</li>
            </button>
            <button className="font-bold px-3 text-white bg-mosgroen rounded-full mb-4 hover:bg-Terracota">
              <li>Avontuur</li>
            </button>
          </ul>
        </nav>
        {/* Cards */}
        <div></div>
      </div>
    </section>
  );
}
