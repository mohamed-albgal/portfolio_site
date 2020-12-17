import React from 'react'
import {heading, subHeading, skills} from '../../content/skills.yaml'
import Container from "./Container"

export default () => {
    const SkillCard = ({title,image,description}) => {
        return (
            <div className="h-full">
                <div className="h-auto">
                    <img src={image} className=" object-fill mx-auto my-auto">
                    </img>
                </div>
                <div className="text-center m-auto">
                    <div className="font-text-logo-darkBlue font-thin text-xl">{title}</div>
                    <div className="font-gray-800 font-thin">{description}</div>
                </div>
            </div>
        )
    }

    return (
        <Container heading={heading} subHeading={subHeading}>
            <div className="flex  justify-center flex-wrap container">
                {skills.map((skill) => {
                    const {title, description} = skill.item
                    const image = `${title.toLowerCase().split(" ").shift()}_logo`
                    const props = { title, description, image }
                    return <div className="sm:w-2/12 mx-4  shadow-xl hover:shadow-2xl  py-5">
                        <SkillCard {...props}/>
                    </div>
                })}
            </div>
        </Container>
    )
}