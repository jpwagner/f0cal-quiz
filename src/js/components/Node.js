import React from 'react';

class Node extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      uuid: props.uuid,
      x: Math.ceil(Math.random()*480)+10,
      y: Math.ceil(Math.random()*280)+10
    };
  }

  handleMouseDown = (e) => {
    this.coords = {
      x: e.pageX,
      y: e.pageY
    }
    document.addEventListener('mousemove', this.handleMouseMove);
  };
  
  handleMouseUp = () => {
    document.removeEventListener('mousemove', this.handleMouseMove);
    this.coords = {};
  };
  
  handleMouseMove = (e) => {
    const xDiff = this.coords.x - e.pageX;
    const yDiff = this.coords.y - e.pageY;

    this.coords.x = e.pageX;
    this.coords.y = e.pageY;

    this.setState({
      x: this.state.x - xDiff,
      y: this.state.y - yDiff
    });
  };

  render() {
    return (
      <g transform={"translate(" + this.state.x + "," + this.state.y + ")"}>
        <circle
          r="15"
          fill="grey"
          stroke="black"
          strokeWidth="1"
          onMouseDown={this.handleMouseDown}
          onMouseUp={this.handleMouseUp}
        />
        <text 
          dx="-20"
          fontSize="12">
            {this.state.uuid.substring(0,5)}
        </text>
      </g>
    )
  }
}

export default Node;
