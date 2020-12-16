import React from 'react'
import {heading, subHeading, skills} from '../../content/skills.yaml'
import DisplayCard from './DisplayCard'
import Container from "./Container"

export default () => {
    return (
        <Container heading={heading} subHeading={subHeading}>
            <div className="flex  justify-center flex-wrap container pb-10">
                
                {skills.map((skill) => {
                    return <div className="sm:w-2/12 mx-4  shadow-xl hover:shadow-2xl  py-5">
                        <DisplayCard
                        title={skill.item.title} 
                        image={skill.item.image}
                        description={skill.item.description}
                        />
                    </div>
                })}
            </div>
        </Container>
    )
}