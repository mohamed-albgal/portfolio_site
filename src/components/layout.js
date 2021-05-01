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
        <div className="sm:w-auto w-screen">
            <div className="bg-white shadow-lg rounded-lg hover:shadow-2xl sm:flex sm:flex-row flex-col justify-center flex-wrap pt-10 z-30 fixed w-screen">
                <Link className="" to="/">
                    <div className="lg:absolute left-3 top-5 w-32 h-32 border-white shadow-lg sm:inline-block  border-2 self-center hover:bg-indigo-200 ml-4 mt-4 bg-indigo-100 rounded-full " id="logo">
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
                <div className="h-12  mr-10 sm:max-w-none max-w-xs text-center rounded-lg shadow-lg self-center lg:absolute right-2 bottom-20  bg-logo-lightIndigo hover:text-logo-darkBlue text-white   hover:bg-indigo-200">
                    <a target="_blank" href={resumeURL}>
                        <button className="font-bold text-lg sm:text-base py-3 px-4  tracking-wide">View Résumé  &rarr;</button>
                    </a>
                </div>
            </div>
        
                <div className="pt-40 sm:max-w-none max-w-sm">
                    {children}
                </div>
        </div>
    );
}

export default Layout;
