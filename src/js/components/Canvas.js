import React from 'react';
import Node from './node';

function generateUUID () { // Public Domain/MIT
    var d = new Date().getTime();
    if (typeof performance !== 'undefined' && typeof performance.now === 'function'){
        d += performance.now(); //use high-precision timer if available
    }
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
}

class SVGContainer extends React.Component {
	constructor(props) {
		super(props);
  
		this.state = {
			nodes: []
		};
	}

	createNode(node){
		var uuid = generateUUID();
		var currentNodes = this.state.nodes;
		currentNodes.push(uuid)

		this.setState({
			nodes: currentNodes
		})
	}

	renderNode(node) {
		return (<Node uuid={node} />);
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
				<button onClick={() => { this.createNode() }}>
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

