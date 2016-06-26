/**
 * Created by Lyle on 6/19/2016.
 */
import React from 'react';

export default class Circle extends React.Component {
    render() {
        let { x, y, r, id, currentId, mode, removeNode, addEdge, setCurrentId } = this.props;

        var handleClick = function(event) {
            console.log('svgX', x);
            console.log('svgY', y);

            if (mode === "remove") {
                removeNode(id);
            }

            if (mode === "connect") {
                console.log('gonna connect nodes');
                if (currentId == null) {
                    console.log('first: ' + id);
                    setCurrentId(id);
                } else {
                    addEdge(currentId, id);
                }
            }

            if (mode === "add") {
                console.log('cannot add on top');
            }

            // TODO: can I use the x,y values and then just get a mouse
            // offset to move the circle?
        };
        
        return (
            <circle className="draggable" onClick={handleClick}
                    cx={x} cy={y} r={r} stroke="black" strokeWidth="5"/>
        );
    }
}
