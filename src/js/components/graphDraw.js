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
            mode: null, // Can be "add", "remove", "connect"
            currentId: null
        }
    },

    setMode: function(modeString) {
        switch(modeString) {
            case "remove":
                if (this.state.mode != "remove") {
                    this.setState({
                        mode: "remove"
                    });
                    console.log('mode', modeString);
                }
                break;
            case "add":
                if (this.state.mode != "add") {
                    this.setState({
                        mode: "add"
                    });
                    console.log('mode', modeString);
                }
                break;
            case "connect":
                if (this.state.mode != "connect") {
                    this.setState({
                        mode: "connect"
                    });
                    console.log('mode', modeString);
                }
                break;
            default:
                break;
        }
    },

    addNode: function(x, y, radius, letter) {
        let { data } = this.state;
        var newData = data.slice(); // Make a shallow copy; Also, see Spread
        // (...)
        newData.push({x: x, y: y, radius: radius, connections: []});
        this.setState({
            data: newData
        });
    },

    removeNode: function(id) {
        let { data } = this.state;
        var newData = data.slice();

        if (data.length > 0) {
            newData.splice(id, 1);
            this.setState({
                data: newData
            });
        }
    },

    addEdge: function(source, dest) {
        let { data } = this.state;
        var newData = data.slice();

        if (source != dest) {
            newData[source].connections.push(dest);
            newData[dest].connections.push(source);
        }

        this.setState({
            data: newData
        });
    },

    setCurrentId: function(id) {
        this.setState({
            currentId: id
        });
    },

    render: function() {
        return (
            <div className="graphDraw">
                <NavBar setMode={this.setMode} addNode={this.addNode} />
                <div className="graphDrawContainer" >
                    <GdSVG data={this.state.data} mode={this.state.mode}
                       addNode={this.addNode} removeNode={this.removeNode}
                       addEdge={this.addEdge} currentId={this.state.currentId}
                        setCurrentId={this.setCurrentId}
                    />
                </div>
            </div>
        )
    }
});

ReactDOM.render(
    <GraphDrawApp />,
    document.getElementById('graphDraw')
);