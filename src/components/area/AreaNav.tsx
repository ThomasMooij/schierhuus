import { navItems } from '@/utils/Area'
import React from 'react'

export const AreaNav = () => {


  return (

        <nav className="mt-20  ">
          <ul className="flex gap-2">
            {
                navItems.map((navItem) => (
                    <button className="font-bold px-3 text-white bg-mosgroen rounded-full mb-4 hover:bg-Terracota">
                    <li key={navItem.id}>{navItem.name}</li>
                  </button>
                ))
            }
          </ul>
        </nav>
  )
}
