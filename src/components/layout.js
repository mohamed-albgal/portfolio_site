import React from 'react'
import Navbar from '../components/Navbar'


const Layout = ({ children }) => {
    return (
        // <div style={{margin:`3rem auto`, maxWidth:650, padding:`0 1rem`}}>
        //     { children }
        // </div>
        <Navbar>
                {children}
        </Navbar>
    );
}

export default Layout;