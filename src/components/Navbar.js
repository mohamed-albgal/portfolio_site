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
                    <p className="p-8 text-gray-800">Mohamed Albgal</p>
                    <div id="tags" className="flex pl-5">
                    <Link to="/skills" className="px-4 font-medium hover:text-indigo-700  text-indigo-400 text-sm uppercase tracking-widest">Skills</Link>
                    <a className="px-4 font-medium hover:text-indigo-700  text-indigo-400 text-sm uppercase tracking-widest" href="#">Resume</a>
                    <a className="px-4 font-medium hover:text-indigo-700  text-indigo-400 text-sm uppercase tracking-widest" href="#">Contact</a>

                    </div>
                </div>
            </div>
        </header>
        );

        
}
export default NavBar;