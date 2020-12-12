import React from 'react'
import self from '../images/self-image.jpg'
const NavBar = () => {
    return (
        <header className="mt-5 container">
            
            <div id="head-box" className=" container w-10/12 mx-72">
                <div id="self_image" className="inline-block rounded-full w-32 h-32">  
                    <img src={self} className="w-36 h-32 object-cover overflow-hidden rounded-full"></img>
                </div>
                <div id="name" className="inline-block text-3xl font-extrabold  uppercase tracking-widest">
                    <p className="p-8">Mohamed Albgal</p>
                    <div id="tags" className="flex pl-5">
                    <a className="px-3 font-thin text-sm uppercase tracking-widest" href="#">Skills</a>
                    <a className="px-3 font-thin text-sm uppercase tracking-widest" href="#">Resume</a>
                    <a className="px-3 font-thin text-sm uppercase tracking-widest" href="#">Contact</a>

                    </div>
                </div>
            </div>
        </header>
        );

        
}
export default NavBar;