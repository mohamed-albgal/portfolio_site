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
            <div className="bg-indigo-50 shadow-lg mb-20 py-3">
                <Link className="" to="/">
                    <div className="w-32 h-32 border-white shadow-lg inline-block  border-2 hover:bg-indigo-200 ml-4 mt-4 bg-indigo-100 rounded-full " id="logo">
                        <img className="mt-3 ml-1" src={logo}/>
                    </div>
                </Link>
                <div className=" w-1/2 inline-block">
                    <p className="p-8 text-logo-darkBlue">{name}</p>
                    <div id="tags" className="flex pl-5">
                    <Link to="/" activeClassName="activeNavLink" className="px-4 py-1 font-medium  text-logo-lightIndigo text-sm uppercase tracking-widest">about</Link>
                    {links.split(',').map(link => <Link to={`/${link}`} activeClassName="activeNavLink" className="px-4 py-1 font-medium  text-logo-lightIndigo text-sm uppercase tracking-widest">{link}</Link>)}    
                    </div>
                </div>
                <div className="">
                    <a target="_blank" href={resumeURL}>
                        <button className=" h-12 border-gray-50 border-2 rounded-2xl shadow-lg  right-28 top-16 absolute hover:bg-logo-lightIndigo hover:text-logo-darkBlue text-blue-900 font-bold  bg-indigo-200">
                            <p className="text-base tracking-wide px-2 py-1">View <span className="text-lg  tracking-wide">Résumé</span></p>
                        </button>
                    </a>
                </div>
            </div>
        
                {children}
        </div>
    );
}

export default Layout;