import React from 'react'
import {title, tagLine, body} from '../../content/home.yaml'
import Container from "../components/Container"
export default () => {
    return (
        <Container heading={title} subHpwdeading={tagLine}>
            <div className="text-lg mt-10 text-gray-500">{body}</div>
        </Container>
    )
}