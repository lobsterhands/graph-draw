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
            data: data,
            mode: null // Can be "add", "remove", "connect"
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

    setRemove: function() {
        if (this.state.mode != "remove") {
            this.setState({
                mode: "remove"
            });
            console.log('now removing');
        }
    },

    removeNode: function(id) {
        let {data} = this.state;
        var newData = data.slice();
        console.log(id);

        if (data.length > 0) {
            newData.splice(id, 1);
            this.setState({
                data: newData
            });
        }
    },

    render: function() {
        return (
            <div className="graphDraw">
                <NavBar addNode={this.addNode} setRemove={this.setRemove} />
                <div className="graphDrawContainer" >
                    <GdSVG data={this.state.data} mode={this.state.mode} />
                </div>
            </div>
        )
    }
});

ReactDOM.render(
    <GraphDrawApp />,
    document.getElementById('graphDraw')
);