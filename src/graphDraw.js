/**
 * Created by wally on 6/13/16.
 */
var GraphDraw = React.createClass({
  render: function() {
    return (
        <div className="graphDrawContainer">
          <NavBar />
          <GraphDrawSVG />
        </div>
    )
  }
});

/*
  - NavBar
    - Buttons
      - Drop-down options
 */
var NavBar = React.createClass({
  render: function() {
    return (
        <div className="navBar">
          <AddNode />
          <AddVertex />
          <DeleteNode />
        </div>
    )
  }
});

// BEGIN NavButtons -> Separate Component File
var AddNode = React.createClass({
  handleClick: function(event) {
    event.preventDefault();
    console.log('+Node');
  },
  render: function() {
    return (
        <a onClick={this.handleClick} className="btnAddNode">
          +Node
        </a>
    )
  }
  // OnClick to drag node thus changing vertex length
});

var AddVertex = React.createClass({
  handleClick: function(event) {
    event.preventDefault();
    console.log('+Vertex');
  },
  render: function() {
    return (
        <a onClick={this.handleClick} className="btnAddVertex">
          +Vertex
        </a>
    )
  }
});

var DeleteNode = React.createClass({
  handleClick: function(event) {
    event.preventDefault();
    console.log('-Node');
  },
  render: function() {
    return (
        <a onClick={this.handleClick} className="btnDeleteNode">
          -Node
        </a>
    )
  }
});
// END NavButtons

// BEGIN SVG
var GraphDrawSVG = React.createClass({
  test: function(msg) {
    console.log(msg);
  },
  render: function() {
    return (
        <svg className="graphDrawSVG">
        </svg>
    )
  }
});
// END SVG

ReactDOM.render(
    <GraphDraw />,
    document.getElementById('graphDraw')
);
