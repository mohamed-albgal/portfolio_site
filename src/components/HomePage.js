import React from 'react'
import {title, tagLine, body} from '../../content/home.yaml'
import Container from "../components/Container"
import selfImage from "../images/self-image.jpg"
export default () => {
    return (
        <Container heading={title} subHeading={tagLine}>
            
                
                    <div style={{height:'50vh', width:'50vh'}} className="relative w-screen mx-auto">
                        <img className="h-full w-full object-cover object-center absolute sm:mr-20 rounded-full " src={selfImage} alt="mohamed's grill"/>
                    </div>
            <div className="sm:text-lg mt-5 sm:w-10/12 mx-auto text-gray-800 sm:leading-7 font-thin">{body}</div>
        </Container>
    )
}
