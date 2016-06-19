import React from 'react';

export default class NavBar extends React.Component {
    render() {
        var { testStatus } = this.props;
        return (
            <div className="navBar">
                <AddNode />
                <AddVertex testStatus={testStatus}/>
                <DeleteNode />
                <DragNode />
            </div>
        )
    }
}

class AddNode extends React.Component {
    handleClick(event) {
        event.preventDefault();
        console.log('+Node');
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
        console.log('+Vertex');
    }
    render() {
        return (
            <a onClick={this.handleClick.bind(this)} className="btnAddVertex">
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
            <a onClick={this.handleClick.bind(this)} className="btnDeleteNode">
                -Node
            </a>
        )
    }
}

class DragNode extends React.Component {
    handleClick(event) {
        event.preventDefault();
        console.log('Drag Node');
    }
    render() {
        return (
            <a onClick={this.handleClick.bind(this)} className="btnDeleteNode">
                Drag
            </a>
        )
    }
}
