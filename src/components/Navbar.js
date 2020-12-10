import React from 'react'
import logo from '../images/black_logo.svg'
const NavBar = () => {
    return (
        <div className="mx-6 sm:mx-10 md:mx-20 lg:mx-32">
            <div className="mx-auto max-w-screen-sm font-display pb-8 pt-8 sm:pt-12 md:pt-16 lg:pt-20">
                <div className="flex flex-col lg:flex-row lg:items-center">
                    <div className="border-gray-200 border-2 shadow-lg bg-indigo-200 rounded-full h-24 w-24 p-2 hover:bg-white"><img className=" pt-4 lg:mb-0 object-cover" src={logo}></img></div>
                    
                    <div className="lg:ml-12"><a href="/"><p className="text-2xl text-gray-900">Mohamed Albgal</p></a></div>
                    
                    <div className="mt-10 justify-items-start text-gray-500 uppercase tracking-widest text-xs font-bold">
                        <a href="/" className="hover:text-blue-800 text-indigo-300 mr-6">Project</a>
                        <a href="/" className="hover:text-blue-800 text-indigo-300 mr-6">Skills</a>
                        <a href="/" className="hover:text-blue-800 text-indigo-300 mr-6">Resume</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default NavBar;