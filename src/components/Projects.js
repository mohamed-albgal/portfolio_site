import React from 'react'
import {heading, subHeading, projects} from '../../content/projects.yaml'
import DisplayCard from './DisplayCard'
import Container from "../components/Container"
/**
 * 
 * show a grid of the skills I know
 */
export default () => {
    console.log(projects)
    return (
        <Container>
            <div className="text-2xl">{heading}</div>
            <div className="text-xl">{subHeading}</div>
            <div className="flex  justify-center flex-wrap container pb-10">
                {projects.map((proj) => {
                    return <DisplayCard
                        title={proj.item.title} 
                        image={proj.item.image}
                        link={proj.item.link}
                        description={proj.item.description}
                    />
                })}
            </div>
        </Container>
    )
}