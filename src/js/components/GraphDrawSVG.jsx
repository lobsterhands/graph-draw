import React from 'react';
import Default from '../data/DefaultGraph.jsx';

import data from '../data/data.jsx';

export default class GraphDrawSVG extends React.Component {
    render() {
        console.log(data[0]);
        return (
            <div classID="GraphDrawSVG">
                <svg version="1.1"
                     baseProfile="full"className="gdSVG" width={600} height={400}>
                    <rect width="100%" height="100%" fill="red" />
                    <circle cx="150" cy="100" r="80" fill="green" />
                    <rect x="0" y="0" width="300" height="300" fill="black" />
                    <line x1="100" x2="100" y1="0" y2="300" stroke="white" strokeWidth="5"/>
                    <line x1="200" x2="200" y1="0" y2="300" stroke="white" strokeWidth="5"/>
                    <line x1="0" x2="300" y1="100" y2="100" stroke="white" strokeWidth="5"/>
                    <line x1="0" x2="300" y1="200" y2="200" stroke="white" strokeWidth="5"/>

                    <circle cx="100" cy="100" r="20" stroke="blue" fill="transparent" strokeWidth="5"/>
                    <circle cx="200" cy="200" r="20" stroke="blue" fill="transparent" strokeWidth="5"/>

                    <line x1="114.2" x2="185.8" y1="114.2" y2="185.8" stroke="white" strokeWidth="5"/>
                    {/*<circle cx="25" cy="75" r="20" stroke="blue" fill="transparent" strokeWidth="5"/>
                    <line x1="25" x2="45" y1="75" y2="150" stroke="orange" fill="transparent" strokeWidth="5"/>
                     <text x="150" y="125" fontSize="60" textAnchor="middle" fill="white">SVG</text>*/}
                </svg>
            </div>
        )
    }
}
