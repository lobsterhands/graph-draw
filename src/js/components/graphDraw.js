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
    render: function() {
        return (
            <div className="graphDraw">
                <NavBar data={this.state.data}/>
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