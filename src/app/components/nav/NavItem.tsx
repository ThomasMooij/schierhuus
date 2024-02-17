import React from 'react';

interface NavItems {
    tag: string;
    path: string;
}

const NavItem: React.FC<NavItems> = ({ tag, path }) => {
    const lowerTag = tag.toLowerCase();
    if(lowerTag === 'home'){
        const lowerTag = '/';     
    }
    console.log(lowerTag)
    return (
        <div>
             <a href={`/${lowerTag != 'home' ? lowerTag : ''}`} className={`font-bold px-3 ${path === lowerTag ? 'underline underline-offset-4' : ''}`}>{tag}</a>   
        </div>
    );
};

export default NavItem;
