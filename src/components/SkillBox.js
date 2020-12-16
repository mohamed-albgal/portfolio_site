import React from 'react'
import {heading, subHeading, skills} from '../../content/skills.yaml'
import DisplayCard from './DisplayCard'
import Container from "./Container"

export default () => {
    const images = {
        android:"./android_logo.png",
        aws: "./aws_img.png",
        gatsby: "./gatsby_img.png",
        react: "./react_logo.png",
        java: "./java_logo.png",
        mongodb: "./mongodb_img.png",
        node:"./node_icon.png",
        spring:"./spring_icon.png",
        swift:"./swift_logo.png"
        }
    return (
        <Container heading={heading} subHeading={subHeading}>
            <div className="flex  justify-center flex-wrap container pb-10">
                {skills.map((skill) => {
                    const {title, description} = skill.item
                    const image = images[title.toLowerCase().split(" ").shift()];
                    const props = {title,description,image}
                    return <div className="sm:w-2/12 mx-4  shadow-xl hover:shadow-2xl  py-5">
                        <DisplayCard {...props}/>
                    </div>
                })}
            </div>
        </Container>
    )
}