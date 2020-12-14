import React from 'react'
import {heading, subHeading, projects} from '../../content/projects.yaml'
import DetailCard from './DetailCard'
/**
 * 
 * show a grid of the skills I know
 */
export default () => {
    return (
        <div className="h-full bg-gray-600">
            <div className="text-2xl">{heading}</div>
            <div className="text-xl">{subHeading}</div>
            <ul>
                {projects.map((proj, index) => {
                    return <DetailCard 
                        title={proj.items[0].title} 
                        image={proj.item[0].image}
                        link={proj.item[0].link}
                        description={proj.item[0].description}
                    />
                })}
            </ul>
        </div>
    )
}