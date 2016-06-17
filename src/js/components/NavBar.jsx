import React from 'react';

export default class NavBar extends React.Component {
    handleClickAdd(event) {
        var { name, testStatus } = this.props;
        event.preventDefault();
        console.log('+Node2');
        console.log(name); // Requires .bind(this) on function call
        console.log(testStatus)
    }
    render() {
        var { testStatus } = this.props;
        return (
            <div className="navBar">
                <a onClick={this.handleClickAdd.bind(this)} className="btnAddNode2">
                    +Node2
                </a>
                <AddNode name={this.props.name}/>
                <AddVertex testStatus={testStatus}/>
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
                +Vertex {this.props.testStatus != null ? this.props.testStatus : 'fart'}
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
