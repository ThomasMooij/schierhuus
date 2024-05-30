"use client";
import { useAreas } from '@/context/AreaContext';
import { navItems } from '@/utils/Area';

export const AreaNav = () => {
  const { selectedNavItem, setSelectedNavItem } = useAreas();
  const { selectedArea } = useAreas()

  console.log(selectedArea)

  if (selectedArea === null) {
    return (
      <nav className="mt-20">
    <ul className="flex gap-2">
      {navItems.map((navItem) => (
        <li key={navItem.id}>
          <button
            onClick={() => setSelectedNavItem(navItem.id)}
            className={`font-bold px-3 text-white rounded-full mb-4 ${
              selectedNavItem === navItem.id
                ? 'bg-Terracota'
                : 'bg-mosgroen hover:bg-Terracota'
            }`}
          >
            {navItem.name}
          </button>
        </li>
      ))}
    </ul>
  </nav>
    )
    
  }

  return null
};
