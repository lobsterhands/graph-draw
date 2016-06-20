/**
 * Created by Lyle on 6/19/2016.
 */
import React from 'react';

export default class Circle extends React.Component {
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
