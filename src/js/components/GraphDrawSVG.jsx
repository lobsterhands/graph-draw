import React from 'react';
import Default from '../data/DefaultGraph.jsx';

export default class GraphDrawSVG extends React.Component {
    handleClick(event) {
        event.preventDefault();
        console.log(event.screenX);
    }
    render() {
        let { data } = this.props;
        let fasfd;
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

class Circle extends React.Component {
    handleClick(event) {
        event.preventDefault();
        console.log(event);
    }
    render() {
        let { x, y, r} = this.props;
        let xz;
        return (
            <circle className="draggable" cx={x} cy={y} r={r} stroke="black"
                    strokeWidth="5"/>
        );
    }
}

class Line extends React.Component {
    getLineFromTo(x1, y1, x2, y2, radius = 20) {
        // This function avoids the problem of a non-draggable line interrupting
        // a draggable circle

        // angleRadians must be negative to account for SVG's coordinate system
        var angleRadians = -Math.atan2(y2 - y1, x2 - x1);

        var xS = x1 + radius * Math.cos(angleRadians);
        var yS = y1 + radius * Math.sin(-angleRadians);

        return {xStart: xS, yStart: yS, xEnd: x2, yEnd: y2};
    }
    render() {
        let { x1, y1, x2, y2} = this.props;
        var line = this.getLineFromTo(x1, y1, x2, y2);
        console.log(line);
        return (
            <line x1={line.xStart} y1={line.yStart} x2={line.xEnd} y2={line.yEnd}
                  stroke="black" strokeWidth="5"/>
        );
    }
}
