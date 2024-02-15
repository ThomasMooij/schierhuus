import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white mt-10 p-10 text-center">
      <div className="mb-4">
        <h5 className="text-xl font-bold mb-2">Follow Us</h5>
        <div className="flex justify-center space-x-4">
          <FaFacebook className="hover:text-blue-600 cursor-pointer" />
          <FaInstagram className="hover:text-pink-600 cursor-pointer" />
          <FaTwitter className="hover:text-sky-400 cursor-pointer" />
        </div>
      </div>
      <div>
        <p>© {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
