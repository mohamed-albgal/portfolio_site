import React from 'react'
import {title, tagLine, body} from '../../content/home.yaml'
import Container from "../components/Container"
import selfImage from "../images/self-image.jpg"

export default () => {
  return (
    <Container heading={title} subHeading={tagLine}>
      <div className="w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 mx-auto relative rounded-full overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
        <img
          className="h-full w-full object-cover object-bottom"
          src={selfImage}
          alt="mohamed's profile"
        />
      </div>
      <div className="sm:text-lg mt-8 sm:w-10/12 mx-auto text-gray-800 sm:leading-7 font-thin px-4 sm:px-0">
        {body}
      </div>

    </Container>
  )
}
