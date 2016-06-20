/**
 * Created by Lyle on 6/19/2016.
 */
import React from 'react';

export default class Circle extends React.Component {
    render() {
        let { x, y, r, id, mode, removeNode } = this.props;
        
        var handleClick = function() {
            if (mode === "remove") {
                removeNode(id);
            }

            if (mode === "connect") {
                console.log('gonna connect nodes');
            }
        };
        
        return (
            <circle className="draggable" onClick={handleClick}
                    cx={x} cy={y} r={r} stroke="black" strokeWidth="5"/>
        );
    }
}
