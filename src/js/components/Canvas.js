import React from 'react';

class SVGContainer extends React.Component {
	constructor(props) {
		super(props);
  
		this.state = {
			nodes: []
		};
	}

	addNode(x, y) {
		var currentNodes = this.state.nodes;
		currentNodes.push([x,y])

		this.setState({
			nodes: currentNodes
		})
	}

	renderNode(node) {
		return (<circle cx={node[0]} cy={node[1]} r={10} fill="red" />);
	}

	content() {
		return this.state.nodes.map((node, i) => {
	    	return (
	    		this.renderNode(node)
	    	)
		})
	}

	render() {
		return (
			<div>
				<button onClick={() => { 
					this.addNode(Math.ceil(Math.random()*100),Math.ceil(Math.random()*100)) }}>
					Add Node
				</button>
				<svg>
					{this.content()}
				</svg>
		    </div>
		);
	}

}

export default SVGContainer;

