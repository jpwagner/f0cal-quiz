import React from 'react';

class Edge extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
    	startNode: props.startNode,
    	endNode: props.endNode
    };
  }

  render() {
    return (
      <line
        x1={this.state.startNode.x}
        x2={this.state.endNode.x}
        y1={this.state.startNode.y}
        y2={this.state.endNode.y}
      />
    )
  }
}

export default Edge;
