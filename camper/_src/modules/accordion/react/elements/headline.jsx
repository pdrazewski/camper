import React from 'react';

export class Headline extends React.Component {
	constructor(props) {
    	super(props);
  	}
	render() { 
		return (
			<div className="m-accordion_headline">
				{this.props.title}
			</div> 
		);
	} 
}
