import React from 'react';

interface NavItems {
    tag: string;
    path: string;
    url:string;
}

const NavItem: React.FC<NavItems> = ({url, tag, path }) => {

    return (
        <article className='bg-mosgroen rounded-full mb-4 '>
            <a href={url} className={`font-bold px-3 text-white    ${path === url ? 'underline underline-offset-4' : 'transition duration-300 ease-in-out animate-pulse'}`}>{tag}</a>   
        </article>
    );
};

export default NavItem;
