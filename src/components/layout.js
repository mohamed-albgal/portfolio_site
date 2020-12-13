import React from 'react'
import Navbar from '../components/Navbar'
import logo from '../images/logo_malb.svg'


const Layout = ({ children }) => {
    return (
        // <div style={{margin:`3rem auto`, maxWidth:650, padding:`0 1rem`}}>
        //     { children }
        // </div>
        <div className="bg-white relative shadow-2xl w-11/12 mx-10" id="layout-container">
        <div className="w-28 h-28 border-gray-200 shadow-2xl  border-4 mt-2 ml-2 bg-indigo-100 rounded-full " id="logo">
            <img className="pt-2" src={logo}/>
            <button onClick={e=> alert('button clicked')} className=" h-12 rounded-2xl shadow-lg  right-9 top-9 absolute hover:text-gray-200 hover:bg-indigo-600 text-blue-900 font-bold  bg-indigo-200">
            <p className="text-base tracking-wide px-2 py-1">View <span className="text-lg  tracking-wide">Résumé</span></p></button>
        </div>
                {children}
        </div>
    );
}

export default Layout;