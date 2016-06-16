/*
 Project:   Graph Draw
 Author:    Lyle Denman
 */

import React from 'react';
import ReactDOM from 'react-dom';

import NavBar from './NavBar.jsx';
import GdSVG from './GraphDrawSVG.jsx';
import Hello from './SayHello.jsx';

var GraphDrawApp = React.createClass({
    getInitialState: function() {
        return {
            name: 'Lyle'
        }
    },
    render: function() {
        return (
            <div className="graphDrawContainer">
                <NavBar name={this.state.name} />
                <GdSVG />
                <Hello name={this.state.name} lastName="Denman"/>
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