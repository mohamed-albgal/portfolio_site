import React from 'react'
export default ({children, heading, subHeading}) => {
    return (
        <div className=" relative  h-screen sm:w-8/12 mx-48 pt-10 mt-10">
            <div id="text-heading" className=" text-center text-xl font-light leading-10 ">{heading}</div>
            <div id="sub-text" className=" text-center px-10 whitespace-pre-wrap text-xl font-thin text-gray-800">{subHeading}</div>
            {children}
        </div>
    )
}