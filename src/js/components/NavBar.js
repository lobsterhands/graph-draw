import React from 'react';

export default class NavBar extends React.Component {
    render() {
        var { data } = this.props;
        return (
            <div className="navBar">
                <AddNode data={data} />
                <AddVertex />
                <DeleteNode />
            </div>
        )
    }
}

class AddNode extends React.Component {
    handleClick(event) {
        let { data } = this.props;
        event.preventDefault();
        console.log('+Node');
        data.push({x: 10, y: 10, radius: 20});
        console.log(data);
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
