import React from 'react';

export class Headline extends React.Component {
	constructor(props) {
    	super(props);
  	}
	render() { 
		return (
			<h3 className="m-footer_headline">
				{this.props.title}
			</h3> 
		);
	} 
}
