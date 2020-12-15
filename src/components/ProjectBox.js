import React from 'react'
import {heading, subHeading, projects} from '../../content/projects.yaml'
import DisplayCard from './DisplayCard'
import Container from "./Container"

export default () => {
    return (
        <Container heading={heading} subHeading={subHeading}>
            <div className="flex  justify-center flex-wrap container pb-10">
                {projects.map((proj) => {
                    return <DisplayCard
                        twWidth="w-1/3"
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