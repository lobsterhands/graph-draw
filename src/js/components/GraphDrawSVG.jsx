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
                                <Circle x={d.x} y={d.y} r={d.radius} />
                            ];
                            if(i > 0) {
                                // var line = this.getLineFromTo(data[i-1].x, d.x, data[i-1].y, d.y, d.radius);
                                // console.log(line);
                                arr.push(
                                    <Line x1={data[i-1].x} y1={data[i-1].y} x2={d.x} y2={d.y} />
                                );
                            }
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
        return (
            <circle className="draggable" cx={x} cy={y} r={r} stroke="black" strokeWidth="5"/>
        );
    }
}

class Line extends React.Component {
    render() {
        let { x1, y1, x2, y2} = this.props;
        return (
            <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="black" strokeWidth="5"/>
        );
    }
}
