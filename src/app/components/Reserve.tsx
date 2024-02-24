import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import Socials from './buttons/Socials';

export default function Reserve() {
  return (
  <section id='reservation' className='bg-amber-200 '>
      <div className="flex  justify-center items-start " style={{ height: '90vh' }}>
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
      </div>
    </section>
  )
}
