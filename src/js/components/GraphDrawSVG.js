import React from 'react';

import Circle from './Circle';
import Line from './Line';

export default class GraphDrawSVG extends React.Component {
    handleClick(event) {
        event.preventDefault();
    }
    render() {
        let { data } = this.props;
        return (
            <div classID="GraphDrawSVG">
                <svg version="1.1" onClick={this.handleClick}
                     baseProfile="full"className="gdSVG" width={600} height={400}>
                    {
                        data.map((d, i) => {
                            var arr = [

                            ];
                            if(i > 0) {
                                arr.push(
                                    <Line x1={data[i-1].x} y1={data[i-1].y} x2={d.x} y2={d.y} />
                                );
                            }
                            arr.push(
                                <Circle x={d.x} y={d.y} r={d.radius} />
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
