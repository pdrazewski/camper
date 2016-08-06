import React from 'react';
import {Headline} from './headline.jsx';
import {Content} from './items.jsx';

export class Box extends React.Component { 
	constructor(props) {
    	super(props);
  	}
	render() { 
		var activeClass;
		return (
			<div className="m-footer_box">
				<Headline title={this.props.title} /> 
				<Items content={this.props.content} />
			</div> 
		);
	} 
}
Item.propTypes = {
	globalItemClassName: React.PropTypes.string,
	additionalClassName: React.PropTypes.string,
	itemId:React.PropTypes.string, 
	active: React.PropTypes.bool
};
Item.defaultProps = {
	globalItemClassName: "",
	additionalClassName: "",
	itemId: "",
	active: true
};

