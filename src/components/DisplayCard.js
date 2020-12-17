import React from 'react';


export default ({title, description, link, image,}) => {
    return (
        <div  className=" rounded-xl">
            <div className="rounded-md overflow-hidden h-full">
                <img src={image} className="h-56 w-full rounded-xl object-contain"/>
            </div>
            <div className="px-4 py-4 md:px-10 ">
                <h1 className="font-bold text-lg">{title}</h1>
                <p className="py-4 font-thin sm:leading-6 h-full">{description}</p>
            </div>
            <div className="text-sm font-medium ">
                {link && <a target="_blank" href={link} className="text-blue-700 px-1 ">
                VIEW GITHUB REPO &rarr;</a>}
            </div>
        </div>
    )
}