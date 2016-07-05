/**
 * Created by Lyle on 7/5/2016.
 */
import React from 'react';

export default class Rectangle extends React.Component {
    render() {
        return (
            <rect x="400" y="100" width="400" height="200"
                  fill="yellow" stroke="navy" stroke-width="10"  />
        );
    }
}
