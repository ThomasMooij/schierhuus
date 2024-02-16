import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

export default function Reserve() {
  return (
  <section className='bg-amber-200 '>
      <div className="flex  justify-center items-start " style={{ height: '90vh' }}>
          <div className="flex space-x-10  mt-20 underline-offset-2 "> 
            <FaFacebook className="text-6xl cursor-pointer  hover:text-blue-600" />
            <FaInstagram className="text-6xl cursor-pointer  hover:text-pink-500" />
            <FaTwitter className="text-6xl cursor-pointer  hover:text-sky-400" />
          </div>
      </div>
    </section>
  )
}
