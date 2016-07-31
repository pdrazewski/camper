import React from 'react';

export class Content extends React.Component {
	constructor(props) {
    	super(props);
  	}
	render() { 
		return (
			<div className="m-accordion_content">
				{this.props.content}
			</div> 
		);
	} 
}
