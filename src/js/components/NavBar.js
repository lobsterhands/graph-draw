import React from 'react';

export default class NavBar extends React.Component {
    render() {
        var { data, addNode, setMode } = this.props;
        return (
            <div className="navBar">
                <AddNode data={data} addNode={addNode} setMode={setMode} />
                <AddVertex setMode={setMode} />
                <RemoveNode setMode={setMode} />
            </div>
        )
    }
}

class AddNode extends React.Component {
    handleClick(event) {
        this.props.addNode(30, 30, 20);
        this.props.setMode("add");
    }
    render() {
        return (
            <a onClick={this.handleClick.bind(this)} className="btnAddNode">
                +Node
            </a>
        )
    }
}

class AddVertex extends React.Component {
    handleClick(event) {
        event.preventDefault();
        this.props.setMode("connect");
    }
    render() {
        return (
            <a onClick={this.handleClick.bind(this)} className="btnAddVertex">
                +Vertex
            </a>
        )
    }
}

class RemoveNode extends React.Component {
    handleClick(event) {
        event.preventDefault();
        this.props.setMode("remove");
    }
    render() {
        return (
            <a onClick={this.handleClick.bind(this)} className="btnDeleteNode">
                -Node
            </a>
        )
    }
}
