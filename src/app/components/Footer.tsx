import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import Socials from './buttons/Socials';

const Footer = () => {
  return (
    <footer className="bg-navAndFooter text-white mt-10 p-10 text-center">
      <div className="mb-4">
        <h5 className="text-xl font-bold mb-2">Follow Us</h5>
        <div className="flex justify-center space-x-4">
          <Socials 
            FBClass = "hover:text-blue-600 cursor-pointer"
            TwitClass = "hover:text-pink-600 cursor-pointer"
            InstaClass = "hover:text-sky-400 cursor-pointer" 
            facebookUrl= "#"
            twitterUrl= "#"
            instagramUrl= "#"
          />
    
        </div>
      </div>
      <div>
        <p>© {new Date().getFullYear()} Schierhuus. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
