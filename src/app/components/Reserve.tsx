import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function Reserve() {
  return (
  <section className='bg-slate-50 '>
      <div className="flex  justify-center items-start bg-white" style={{ height: '90vh' }}>
          <div className="flex space-x-10  mt-20"> 
          <FaFacebook className="text-6xl cursor-pointer hover:text-blue-600" />
          <FaInstagram className="text-6xl cursor-pointer hover:text-pink-500" />
          <FaTwitter className="text-6xl cursor-pointer hover:text-sky-400" />
          </div>
      </div>
    </section>
  )
}
