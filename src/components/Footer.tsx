import { FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import Socials from './buttons/Socials';

const Footer = () => {
  return (
    <footer className="bg-navAndFooter text-white mt-10 p-10 text-center rounded-lg">

    <div className='flex justify-evenly '>

      <div className="flex flex-col space-y-4 justify-center ">
              <div className="flex">
                <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                  <FaMapMarkerAlt className="h-6 w-6" />
                </div>
                <div className="ml-4">
               
                  <p className="text-gray-600 dark:text-slate-400">
                    1230 Maecenas Street Donec Road
                  </p>
                  <p className="text-gray-600 dark:text-slate-400">
                    New York, EEUU
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                  <FaPhone className="h-6 w-6" />
                </div>
                <div className="ml-4">
  
                  <p className="text-gray-600 dark:text-slate-400">
                    Mobile: +1 (123) 456-7890
                  </p>
         
                </div>
              </div>
            </div>



      <div className="flex flex-col justify-evenly">
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
        <p>© {new Date().getFullYear()} Schierhuus. All rights reserved.</p>
        </div>
      </div>

      

    </footer>
  );
};

export default Footer;
