/**
 * Created by Lyle Denman on 6/13/16.
 */
var GraphDraw = React.createClass({
  getInitialState: function() {
    return {name:"lyle"}
  },
  render: function() {
    return (
        <svg>
          <circle cx={300} cy={50} r={10} fill="red" />
        </svg>
    )
  }
});

ReactDOM.render(
  <GraphDraw />,
  document.getElementById('graph-draw')
);
