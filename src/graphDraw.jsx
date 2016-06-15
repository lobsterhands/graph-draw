/**
 * Created by Lyle Denman on 6/13/16.
 */

/*
  - NavBar
    - Buttons
      - Drop-down options
 */
class NavBar extends React.Component {
    handleClickAdd(event) {
        event.preventDefault();
        console.log('+Node2');
        console.log(this.props.name); // Requires .bind(this) on function call
    }
    render() {
        return (
            <div className="navBar">
                <a onClick={this.handleClickAdd.bind(this)} className="btnAddNode2">
                    +Node2
                </a>
                <AddNode name={this.props.name}/>
                <AddVertex />
                <DeleteNode />
            </div>
        )
    }
}

// BEGIN NavButtons -> Separate Component File
class AddNode extends React.Component {
    handleClick(event) {
        event.preventDefault();
        console.log('+Node');
        console.log(this.props.name);
    }
    render() {
        return (
            <a onClick={this.handleClick.bind(this)} className="btnAddNode">
                +Node {this.props.name}
            </a>
        )
    }
}


class AddVertex extends React.Component {
    handleClick(event) {
        event.preventDefault();
        console.log('+Vertex');
    }
    render() {
        return (
            <a onClick={this.handleClick} className="btnAddVertex">
                +Vertex
            </a>
        )
    }
}

class DeleteNode extends React.Component {
    handleClick(event) {
        event.preventDefault();
        console.log('-Node');
    }
    render() {
        return (
            <a onClick={this.handleClick} className="btnDeleteNode">
                -Node
            </a>
        )
    }
}
// END NavButtons

// BEGIN SVG
class GraphDrawSVG extends React.Component {
    render() {
        return (
            <svg className="graphDrawSVG" width={600} height={400}>svg</svg>
        )
    }
}
// END SVG

var HelloMessage = React.createClass({
    render: function() {
        return <h1>Hello {this.props.name} {this.props.lastName}</h1>;
    }
});

var GraphDrawApp = React.createClass({
    getInitialState: function() {
        return {
            name: 'Lyle',
            addNode: AddNode
        }
    },
    render: function() {
        return (
            <div className="graphDrawContainer">
                <NavBar name={this.state.name} />
                <GraphDrawSVG />
                <HelloMessage name={this.state.name} lastName="Denman"/>
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