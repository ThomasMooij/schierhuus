import React from 'react';
import { MotionLi } from '../frames/MotionLi';
import { NavLiVariants } from '@/utils/Variants';

interface NavItems {
    tag: string;
    path: string;
    url:string;
}

const NavItem: React.FC<NavItems> = ({url, tag, path }) => {

    return (
        <MotionLi variants={NavLiVariants} className='bg-mosgroen rounded-full mb-4 hover:bg-Terracota'>
            <a href={url} className={`font-bold px-3 text-white ${path === url ? 'underline underline-offset-4' : 'transition duration-300 ease-in-out'} `}>{tag}</a>   
        </MotionLi>
    );
};

export default NavItem;
