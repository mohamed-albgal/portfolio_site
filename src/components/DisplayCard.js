import React from 'react';
import sample from "../images/bw_self.svg"

export default ({title, description, link, image,}) => {
    return (
        <div className=" rounded-xl">
            <div className="rounded-md">
                <img src={sample} className="h-56 w-full rounded-xl  hover:opacity-25"/>
            </div>
            <div className="px-4 py-4 md:px-10">
                <h1 className="font-bold text-lg">{title}</h1>
                <p className="py-4">{description}</p>
                <div className="flex flex-wrap pt-8">
                    <div className="2/3">
                        <div className="text-sm font-medium">
                            {   link && <a href="https://www.github.com/mohamed-albgal" className="text-blue-700 px-1 ">
                            VIEW GITHUB REPO &rarr;</a>     }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}