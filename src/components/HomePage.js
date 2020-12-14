import React from 'react'
import {title, tagLine, body} from '../../content/home.yaml'

export default () => {
    return (
        <div className=" relative  h-screen sm:w-8/12 bg-blue-500 mx-48 pt-10 mt-10">
            <div id="text-heading" className=" text-center text-3xl">{title}</div>
            <div id="sub-text" className=" text-left px-10`` whitespace-pre-wrap text-xl font-thin text-gray-300">
            {tagLine}</div>
            <div className="text-sm text-gray-500">{body}</div>

        </div>
    )
}