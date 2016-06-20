/**
 * Created by Lyle on 6/19/2016.
 */
import React from 'react';

export default class Line extends React.Component {
    getLineFromTo(x1, y1, x2, y2, radius = 20) {
        // This function avoids the problem of a non-draggable line interrupting
        // a draggable circle

        // angleRadians must be negative to account for SVG's coordinate system
        var angleRadians = -Math.atan2(y2 - y1, x2 - x1);

        var xS = x1 + radius * Math.cos(angleRadians);
        var yS = y1 + radius * Math.sin(-angleRadians);

        return {xStart: xS, yStart: yS};
    }
    render() {
        let { x1, y1, x2, y2} = this.props;
        var line = this.getLineFromTo(x1, y1, x2, y2);
        return (
            <line x1={line.xStart} y1={line.yStart} x2={x2} y2={y2}
                  stroke="black" strokeWidth="5"/>
        );
    }
}
