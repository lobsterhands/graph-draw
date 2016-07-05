import React from 'react';

import Circle from './Circle';
import Line from './Line';
import Rectangle from './Rectangle';

export default class GraphDrawSVG extends React.Component {

    render() {
        let { data, mode, addNode, removeNode, addEdge, currentId, nodeId, setCurrentId } = this.props;

        var clickHandler = function(event) {
            if (mode === "add") {
                var trueX = event.clientX - Math.floor(((window.innerWidth - 600)/2));
                var trueY = event.clientY - 125;
                addNode(trueX, trueY, 20);
            }
        };

        var className = "gdSVG";
        if (mode === "add") { className += "gdSVG addNode";
        } else if (mode === "remove") { className =  "gdSVG removeNode";
        } else if (mode === "connect") { className =  "gdSVG addEdge";
        } else { className = "gdSVG"; }

        return (
            <div classID="GraphDrawSVG">
                <svg className={className}
                     width={600} height={400}
                     onClick={clickHandler}>
                    {
                        data.map((d, i) => {
                            // Push Circle to array last so it's on top of line
                            var arr = [];
                            if (d.connections && i > 0) {
                                d.connections.map((dc, j) => {
                                    arr.push(
                                            <Line x1={data[i].x} y1={data[i].y} x2={data[dc].x} y2={data[dc].y} />
                                        );
                                });
                            }
                            arr.push(
                                <Circle x={d.x} y={d.y} r={d.radius} id={d.id}
                                    mode={mode} removeNode={removeNode}
                                    addEdge={addEdge} currentId={currentId}
                                    setCurrentId={setCurrentId}
                                />
                            );
                            arr.push(
                                <Rectangle />
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
