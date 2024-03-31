import { FC } from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

interface SocialsProps {
  FBClass: string;
  TwitClass: string;
  InstaClass: string;
  facebookUrl: string; 
  twitterUrl: string;
  instagramUrl: string;
}

const Socials: FC<SocialsProps> = ({ FBClass, TwitClass, InstaClass, facebookUrl, twitterUrl, instagramUrl }) => {
  return (
    <> 
        <a href={facebookUrl} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebook className={FBClass} />
        </a>
        <a href={instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram className={TwitClass} />
        </a>
        <a href={twitterUrl} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <FaTwitter className={InstaClass}/>
        </a>
    </>
  );
}

export default Socials;
