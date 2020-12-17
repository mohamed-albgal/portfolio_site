import { Link } from 'gatsby';
import React from 'react'
import logo from '../images/logo_malb.svg'
import { resumeURL} from '../../content/home.yaml'
import {name, links} from '../../content/nav.yaml'

const socialsLinks = <div className="inline-block self-center">
            <div className="sm:p-0 py-10 flex justify-items-end">
                <a className="px-2 pb-4" href="https://linkedin.com/in/mohamed-albgal" target="_blank">
                    <img className="h-8" src="../linkedin_logo"/>
                </a>    
                <a className="sm:px-3 px-2 pb-4" href="https://github.com/mohamed-albgal" target="_blank">
                    <img className="h-8" src="../github_logo"/>
                </a>
                <a className="px-2" href="mailto:malbgal@gmail.com" target="_blank">
                    <img className="h-8" src="../email_icon"/>
                </a>
            </div>
        </div>

const Layout = ({ children }) => {
    return (
        <div className="sm:max-w-none max-w-xs">
            <div className="bg-gray-50 shadow-2xl sm:flex sm:flex-row flex-col justify-center flex-wrap pt-10 relative">
                <Link className="" to="/">
                    <div className="sm:absolute left-3 top-5 w-32 h-32 border-white shadow-lg inline-block  border-2 self-center hover:bg-indigo-200 ml-4 mt-4 bg-indigo-100 rounded-full " id="logo">
                        <img className="mt-3 ml-1" src={logo}/>
                    </div>
                </Link>
                <div className=" inline-block   self-center mt-14 w-auto ">
                    <div className="flex-row">
                        <p className=" text-logo-darkBlue sm:text-4xl text-xl sm:mb-10 font-extrabold text-center  uppercase tracking-widest max-w-screen">{name}</p>
                    </div>
                    
                    <div id="tags" className="flex">
                        <Link to="/" activeClassName="activeNavLink" className="sm:px-16 px-2 py-1 font-medium  text-logo-lightIndigo text-sm uppercase tracking-widest">about</Link>
                        {links.split(',').map(link => <Link to={`/${link}`} activeClassName="activeNavLink" className="sm:px-14 px-2 py-1 font-medium  text-logo-lightIndigo text-sm uppercase tracking-widest">{link}</Link>)}    
                    </div>
                    
                </div>
                {socialsLinks}
                <div className="h-12 border-gray-50 border-2 mr-10 sm:max-w-none max-w-xs text-center rounded-2xl shadow-lg self-center sm:absolute right-2 bottom-20  hover:bg-logo-lightIndigo hover:text-logo-darkBlue text-blue-900   bg-indigo-200">
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