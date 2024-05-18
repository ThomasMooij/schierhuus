import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import Socials from './buttons/Socials';
import Calendar from './Calendar';

export default function Reserve() {
  return (
  <section id='reservation' className='bg-paginaAchtergrond flex justify-center items-star'>
      <div className="flex flex-col justify-between items-start " style={{ height: '90vh' }}>
          <div className="flex space-x-10  mt-20 underline-offset-2 "> 
            <Socials 
                FBClass= "text-6xl cursor-pointer  hover:text-blue-600"
                TwitClass= "text-6xl cursor-pointer  hover:text-pink-500"
                InstaClass= "text-6xl cursor-pointer  hover:text-sky-400"
                facebookUrl= "#"
                twitterUrl= "#"
                instagramUrl= "#"
            />
          </div>
          <div className='flex '>
            <Calendar />
          </div>
      </div>
    </section>
  )
}
