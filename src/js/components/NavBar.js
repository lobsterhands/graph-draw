import React from 'react';

export default class NavBar extends React.Component {
    render() {
        var { data, addNode, setRemove } = this.props;
        return (
            <div className="navBar">
                <AddNode data={data} addNode={addNode} />
                <AddVertex />
                <RemoveNode setRemove={setRemove} />
            </div>
        )
    }
}

class AddNode extends React.Component {
    handleClick(event) {
        this.props.addNode(30, 30, 20);
        let x;
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

class RemoveNode extends React.Component {
    handleClick(event) {
        event.preventDefault();
        console.log('-Node');
        this.props.setRemove();
    }
    render() {
        return (
            <a onClick={this.handleClick.bind(this)} className="btnDeleteNode">
                -Node
            </a>
        )
    }
}
