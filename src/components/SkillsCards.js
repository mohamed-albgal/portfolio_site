import React from 'react';
import sample from "../images/bw_self.svg"

export default () => {
    return (
        <div className="py-12">
        <div className="container mx-auto">
            <div>
                <h1 className="text-2xl font-black text-gray-900 pb-6 px-6 md:px-12">
                    MY BLOG
                </h1>
            </div>
            <div className="flex flex-wrap px-6">
                <div className="w-full lg:w-1/2   md:px-4 lg:px-6 py-5">
                    <div className="bg-white hover:shadow-xl">
                        <div className="">
                            <img src={sample}
                                className="h-56 w-full border-white border-8 hover:opacity-25"/>
                        </div>
                        <div className="px-4 py-4 md:px-10">
                            <h1 className="font-bold text-lg">
                                UI,UX Concepts
                            </h1>
                            <p className="py-4">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quas sapiente
                                voluptate
                                earum natus facilis dolor deserunt dolorum tempora obcaecati consequatur rem, vel
                                distinctio
                                perferendis tempore nemo sequi eos accusantium.
                            </p>
                            <div className="flex flex-wrap pt-8">
                                <div className="w-full md:w-1/3 text-sm font-medium">
                                    NOVEMBER 1,2019
                                </div>
                                <div className="2/3">
                                    <div className="text-sm font-medium">
                                        SHARE:
                                        <a href="" className="text-blue-700 px-1 ">
                                            FACEBOOk
                                        </a>
                                        <a href="" className="text-blue-500 px-1 ">
                                            TWITTER
                                        </a>
                                        <a href="" className="text-red-600 px-1 ">
                                            GOOGLE+
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-1/2  md:px-4 lg:px-6 py-5">
                    <div className="bg-white hover:shadow-xl">
                        <div className="">
                            <img src={sample}
                                className="h-56 w-full border-white border-8 hover:opacity-25"/>
                        </div>
                        <div className="px-4 py-4 md:px-10">
                            <h1 className="font-bold text-lg">
                                UI,UX Concepts
                            </h1>
                            <p className="py-4">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quas sapiente
                                voluptate
                                earum natus facilis dolor deserunt dolorum tempora obcaecati consequatur rem, vel
                                distinctio
                                perferendis tempore nemo sequi eos accusantium.
                            </p>
                            <div className="flex flex-wrap pt-8">
                                <div className="w-full md:w-1/3 text-sm font-medium">
                                    NOVEMBER 1,2019
                                </div>
                                <div className="md:2/3">
                                    <div className="text-sm font-medium">
                                        SHARE:
                                        <a href="" className="text-blue-700 px-1 ">
                                            FACEBOOk
                                        </a>
                                        <a href="" className="text-blue-500 px-1 ">
                                            TWITTER
                                        </a>
                                        <a href="" className="text-red-600 px-1 ">
                                            GOOGLE+
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}