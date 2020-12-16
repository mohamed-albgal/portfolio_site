import { Link } from 'gatsby';
import React from 'react'
import logo from '../images/logo_malb.svg'
import { resumeURL} from '../../content/home.yaml'
import {name, links} from '../../content/nav.yaml'



const Layout = ({ children }) => {
    return (
        // <div style={{margin:`3rem auto`, maxWidth:650, padding:`0 1rem`}}>
        //     { children }
        // </div>
        <div>
            <div className="bg-gray-50 shadow-2xl flex justify-between flex-wrap pt-10">
                <Link className="" to="/">
                    <div className="w-32 h-32 border-white shadow-lg inline-block  border-2 self-center hover:bg-indigo-200 ml-4 mt-4 bg-indigo-100 rounded-full " id="logo">
                        <img className="mt-3 ml-1" src={logo}/>
                    </div>
                </Link>
                <div className=" inline-block   self-center mt-14 flex-shrink-0">
                    <p className=" text-logo-darkBlue text-4xl sm:mb-10 font-extrabold text-center  uppercase tracking-widest">{name}</p>
                    <div id="tags" className="flex">
                        <Link to="/" activeClassName="activeNavLink" className="px-12 py-1 font-medium  text-logo-lightIndigo text-sm uppercase tracking-widest">about</Link>
                        {links.split(',').map(link => <Link to={`/${link}`} activeClassName="activeNavLink" className="px-12 py-1 font-medium  text-logo-lightIndigo text-sm uppercase tracking-widest">{link}</Link>)}    
                    </div>
                </div>
                <div className="h-12 border-gray-50 border-2 mr-10 rounded-2xl shadow-lg self-center  hover:bg-logo-lightIndigo hover:text-logo-darkBlue text-blue-900   bg-indigo-200">
                    <a target="_blank" href={resumeURL}>
                        <button className="font-bold p-2 text-lg  tracking-wide">View Résumé&rarr;</button>
                    </a>
                </div>
            </div>
        
                {children}
        </div>
    );
}

export default Layout;