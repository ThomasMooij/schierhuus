import React from 'react'

export default function NavBar() {
  return (
    <nav className="bg-transparent text-white p-5 fixed top-0 w-full z-10 transition-colors duration-300 ease-in-out">
        <div className="container mx-auto flex justify-between">
            <div className="font-bold">Holiday Homes</div>
            <div>
                <a href="#home" className="px-3">Home</a>
                <a href="#about" className="px-3">About</a>
                <a href="#contact" className="px-3">Contact</a>
            </div>
        </div>
    </nav>
  )
}
