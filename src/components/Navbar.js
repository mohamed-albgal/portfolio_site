import React from 'react'
import self from '../images/self-image.jpg'
import {Link} from 'gatsby';
const NavBar = () => {
    return (
        <header className="-mt-2 container">
            
            <div id="head-box" className=" container w-10/12 mx-72 relative">
                <div id="self_image" className="inline-block rounded-full h-32 w-32">  
                    <img src={self} className="  rounded-lg object-contain"></img>
                </div>
                <div id="name" className="inline-block text-2xl font-extrabold ml-10  uppercase tracking-widest">
                    <p className="p-8 text-logo-darkBlue">Mohamed Albgal</p>
                    <div id="tags" className="flex pl-5">
                    <Link to="/skills" className="px-4 font-medium hover:text-logo-darkBlue  text-logo-lightIndigo text-sm uppercase tracking-widest">Skills</Link>
                    <Link to="/projects" className="px-4 font-medium hover:text-logo-darkBlue  text-logo-lightIndigo text-sm uppercase tracking-widest">Projects</Link>
                    <Link to="/contact" className="px-4 font-medium hover:text-logo-darkBlue  text-logo-lightIndigo text-sm uppercase tracking-widest">Contact</Link>

                    </div>
                </div>
            </div>
        </header>
        );

        
}
export default NavBar;