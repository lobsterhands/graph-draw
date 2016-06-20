/**
 * Created by Lyle on 6/19/2016.
 */
import React from 'react';

export default class Circle extends React.Component {
    render() {
        let { x, y, r, id, mode } = this.props;
        
        var test = function() {
            console.log(id);
            console.log(mode);
        };
        
        return (
            <circle className="draggable" onClick={test}
                    cx={x} cy={y} r={r} stroke="black" strokeWidth="5"/>
        );
    }
}
