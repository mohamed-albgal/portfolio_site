import React from 'react'
import {title, tagLine, body} from '../../content/home.yaml'
import Container from "../components/Container"
import selfImage from "../images/self-image.jpg"
export default () => {
    return (
        <Container heading={title} subHeading={tagLine}>
            
                
                    <div style={{height:'50vh', width:'50vh'}} className="relative  mx-auto">
                        <img className="h-full w-full object-cover object-center mr-20 rounded-full " src={selfImage} alt="mohamed's grill"/>
                    </div>
                
            
            <div className="text-lg mt-5 w-10/12 mx-auto text-gray-500">{body}</div>
        </Container>
    )
}