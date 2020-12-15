import React from 'react'
import {title, tagLine, body} from '../../content/home.yaml'
import Container from "../components/Container"
export default () => {
    return (
        <Container>
            <div id="text-heading" className=" text-center text-xl">{title}</div>
            <div id="sub-text" className=" text-left px-10`` whitespace-pre-wrap text-xl font-thin text-gray-300">{tagLine}</div>
            <div className="text-sm text-gray-500">{body}</div>
        </Container>
    )
}