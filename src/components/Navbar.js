import React from 'react'
import self from '../images/self-image.jpg'
import {Link} from 'gatsby';
import {name, links} from '../../content/nav.yaml'
const NavBar = () => {
    return (
        <header className="mt-4 container">
            <div id="head-box" className=" bg-indigo-50 py-3 shadow-md w-10/12 relative">
                <div id="name" className="inline-block text-4xl font-extrabold ml-10  uppercase tracking-widest">
                    <p className="p-8 text-logo-darkBlue">{name}</p>
                    <div id="tags" className="flex pl-5">
                    <Link to="/" activeClassName="activeNavLink" className="px-4 py-1 font-medium  text-logo-lightIndigo text-sm uppercase tracking-widest">about</Link>
                    {links.split(',').map(link => <Link to={`/${link}`} activeClassName="activeNavLink" className="px-4 py-1 font-medium  text-logo-lightIndigo text-sm uppercase tracking-widest">{link}</Link>)}    
                    </div>
                </div>
            </div>
        </header>
        );

        
}
export default NavBar;