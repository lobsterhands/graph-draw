import React from 'react';

import Circle from './Circle';
import Line from './Line';

export default class GraphDrawSVG extends React.Component {
    render() {
        let { data, mode, removeNode } = this.props;
        return (
            <div classID="GraphDrawSVG">
                <svg version="1.1" baseProfile="full"className="gdSVG"
                     width={600} height={400}>
                    {
                        data.map((d, i) => {
                            // Push Circle to array last so it's on top of line
                            var arr = [];
                            if(i > 0) {
                                arr.push(
                                    <Line x1={data[i-1].x} y1={data[i-1].y} x2={d.x} y2={d.y} />
                                );
                            }
                            arr.push(
                                <Circle x={d.x} y={d.y} r={d.radius} id={i} 
                                    mode={mode} removeNode={removeNode}
                                />
                            );
                            return (
                                arr
                            )
                        })
                    }
                </svg>
            </div>
        )
    }
}
