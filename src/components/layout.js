import React from 'react'
import Navbar from '../components/Navbar'
import logo from '../images/logo_malb.svg'


const Layout = ({ children }) => {
    return (
        // <div style={{margin:`3rem auto`, maxWidth:650, padding:`0 1rem`}}>
        //     { children }
        // </div>
        <div className="" id="layout-container">
        <div className="w-24 " id="logo">
            <img className="ml-1" src={logo}/>
        </div>
                {children}
        </div>
    );
}

export default Layout;