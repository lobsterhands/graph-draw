import React from 'react';

import Circle from './Circle';
import Line from './Line';

export default class GraphDrawSVG extends React.Component {

    render() {
        let { data, mode, addNode, removeNode, addEdge, currentId, setCurrentId } = this.props;
        var clickHandler = function(event) {
            var trueX = event.clientX - Math.floor(((window.innerWidth - 600)/2));
            var trueY = event.clientY - 125;
            if (mode === "add") {
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
                     onClick={/*(mode === "add") ? GraphDrawSVG.clickHandler
                      : null*/ clickHandler}>
                    {
                        data.map((d, i) => {
                            // Push Circle to array last so it's on top of line
                            var arr = [];
                            if (d.connections) {
                                d.connections.map((dc, j) => {
                                    arr.push(
                                            <Line x1={data[i].x} y1={data[i].y} x2={data[dc].x} y2={data[dc].y} />
                                        );
                                });
                                
                            }
                            arr.push(
                                <Circle x={d.x} y={d.y} r={d.radius} id={i} 
                                    mode={mode} removeNode={removeNode}
                                    addEdge={addEdge} currentId={currentId}
                                    setCurrentId={setCurrentId}
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
