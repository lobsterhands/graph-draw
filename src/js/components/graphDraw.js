/*
 Project:   Graph Draw
 Author:    Lyle Denman
 */

import React from 'react';
import ReactDOM from 'react-dom';

import NavBar from './NavBar';
import GdSVG from './GraphDrawSVG';

import data from '../data/data';

var GraphDrawApp = React.createClass({
    getInitialState: function() {
        return {
            data: data
        }
    },
    addNode: function(x, y, radius, letter) {
        let {data} = this.state;
        var newData = data.slice(); // Make a shallow copy; Also, see Spread
        // (...)
        newData.push({x: x, y: y, radius: radius});
        this.setState({
            data: newData
        });
    },
    render: function() {
        return (
            <div className="graphDraw">
                <NavBar addNode={this.addNode} />
                <div className="graphDrawContainer" >
                    <GdSVG data={this.state.data} />
                </div>
            </div>
        )
    }
});

ReactDOM.render(
    <GraphDrawApp />,
    document.getElementById('graphDraw')
);