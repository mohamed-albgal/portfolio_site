import React from 'react'
import self from '../images/self-image.jpg'
import {Link} from 'gatsby';
import {name, links} from '../../content/nav.yaml'
const NavBar = () => {
    return (
        <header className="mt-4 container">
            
            <div id="head-box" className="container bg-indigo-50 py-3 shadow-md w-10/12 mx-72 relative">
                <div id="self_image" className="inline-block rounded-full h-32 w-32">  
                    <img src={self} className="  rounded-lg object-contain"></img>
                </div>
                <div id="name" className="inline-block text-4xl font-extrabold ml-10  uppercase tracking-widest">
                    <p className="p-8 text-logo-darkBlue">{name}</p>
                    <div id="tags" className="flex pl-5">
                    <Link to="/" className="px-4 font-medium hover:text-logo-darkBlue  text-logo-lightIndigo text-sm uppercase tracking-widest">home</Link>
                    {links.split(',').map(link => <Link to={`/${link}`} className="px-4 font-medium hover:text-logo-darkBlue  text-logo-lightIndigo text-sm uppercase tracking-widest">{link}</Link>)}    
                    </div>
                </div>
            </div>
        </header>
        );

        
}
export default NavBar;