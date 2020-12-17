import React from 'react'
import {heading, subHeading, projects} from '../../content/projects.yaml'
import DisplayCard from './DisplayCard'
import Container from "./Container"

export default () => {
    return (
        <Container heading={heading} subHeading={subHeading}>
            <div className="flex  justify-center flex-wrap container pb-10 sm:w-auto w-screen">
                {projects.map((proj) => {
                    return<div className="sm:w-1/3 px-5 w-full h-full  shadow-xl hover:shadow-2xl  py-5"> <DisplayCard
                        title={proj.item.title} 
                        image={`./${proj.item.image}`}
                        link={proj.item.link}
                        description={proj.item.description}
                    /></div>
                })}
            </div>
        </Container>
    )
}