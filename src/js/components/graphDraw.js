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
            currentId: null, // the currently selected node
            nodeId: 0 // Total nodes created for providing unique id's
        }
    },

    setMode: function(modeString) {
        switch(modeString) {
            case "remove":
                if (this.state.mode != "remove") {
                    this.setState({
                        mode: "remove",
                        currentId: null
                    });
                }
                break;
            case "add":
                if (this.state.mode != "add") {
                    this.setState({
                        mode: "add",
                        currentId: null
                    });
                }
                break;
            case "connect":
                if (this.state.mode != "connect") {
                    this.setState({
                        mode: "connect",
                        currentId: null
                    });
                }
                break;
            default:
                break;
        }
    },

    addNode: function(x, y, radius) {
        let { data, nodeId } = this.state;
        var newData = data.slice(); // Make a shallow copy; Also, see Spread
        // (...)
        newData.push({id: nodeId, x: x, y: y, radius: radius, connections: []});
        var incNodeId = nodeId + 1;
        this.setState({
            data: newData,
            nodeId: incNodeId
        });
        console.log(newData);
    },

    removeNode: function(id) {
        let { data } = this.state;
        var newData = data.slice();

        if (data.length > 0) {
            newData.map((d, i) => {
                if (d.id === id) {
                    newData.splice(i, 1);
                    this.setState({
                        data: newData
                    });
                }
            });
        }
    },

    // TODO: WATCH REACT VIDEOS AND LEARN STUFF BEFORE CONTINUING; YOU'RE
    // ABOUT OVER YOUR HEAD
    findNodeById(array, searchTerm, nodeId) {
        for (var i = 0; i < array.length; i++) {
            if (array[i][searchTerm] === nodeId) {
                return i;
            }
        }
        return -1;
    },

    addEdge: function(sourceId, destId) {
        if (sourceId != destId) {
            let { data } = this.state;
            var newData = data.slice();

            var sourceIdIndex = this.findNodeById(data, "id", sourceId);
            var destIdIndex = this.findNodeById(data, "id", destId);

            newData[sourceIdIndex].connections.push(destIdIndex);
            newData[destIdIndex].connections.push(sourceIdIndex);

            this.setState({
                data: newData
            });
        }
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
                        setCurrentId={this.setCurrentId} nodeId={this.state.nodeId}
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