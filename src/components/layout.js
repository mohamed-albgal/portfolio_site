import { Link } from 'gatsby';
import React from 'react'
import Navbar from '../components/Navbar'
import logo from '../images/logo_malb.svg'


const Layout = ({ children }) => {
    return (
        // <div style={{margin:`3rem auto`, maxWidth:650, padding:`0 1rem`}}>
        //     { children }
        // </div>
        <div className="" id="layout-container">
            <Link to="/">
                <div className="w-28 border-white shadow-lg  border-2 hover:bg-indigo-200 ml-4 mt-4 bg-indigo-100 rounded-full " id="logo">
                    <img className="pt-2" src={logo}/>
                </div>
            </Link>
            <div className="">
                <button onClick={e=> alert('button clicked')} className=" h-12 border-gray-100 border-2 rounded-2xl shadow-xl  right-28 top-16 absolute hover:bg-logo-lightIndigo hover:text-logo-darkBlue text-blue-900 font-bold  bg-indigo-200">
                    <p className="text-base tracking-wide px-2 py-1">View <span className="text-lg  tracking-wide">Résumé</span></p>
                </button>
            </div>
        
                {children}
        </div>
    );
}

export default Layout;