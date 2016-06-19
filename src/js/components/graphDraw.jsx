/*
 Project:   Graph Draw
 Author:    Lyle Denman
 */

import React from 'react';
import ReactDOM from 'react-dom';

import NavBar from './NavBar.jsx';
import GdSVG from './GraphDrawSVG.jsx';

import data from '../data/data.jsx';

var GraphDrawApp = React.createClass({
    getInitialState: function() {
        return {
            name: 'Lyle',
            data: data,
            fart: null
        }
    },
    render: function() {
        return (
            <div className="graphDraw">
                <NavBar name={this.state.name} testStatus="Test passed"/>
                <div className="graphDrawContainer">
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

/*
 Is it passed in from a parent via props? If so, it probably isn't state.
 Does it change over time? If not, it probably isn't state.
 Can you compute it based on any other state or props in your component? If so, it's not state.


 For each piece of state in your application:
 Identify every component that renders something based on that state.
 Find a common owner component (a single component above all the components that
 need the state in the hierarchy).
 Either the common owner or another component higher up in the hierarchy should
 own the state.
 If you can't find a component where it makes sense to own the state, create a
 new component simply for holding the state and add it somewhere in the hierarchy
 above the common owner component.
 */
