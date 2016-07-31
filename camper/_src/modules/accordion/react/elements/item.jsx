import React from 'react';
import {Headline} from './headline.jsx';
import {Content} from './content.jsx';

export class Item extends React.Component { 
	constructor(props) {
    	super(props);
  	}
	render() { 
		var activeClass;
		if (this.props.active === true) {
			activeClass = 'm-accordion_item js-m-accordion_item active'
		} else {
			activeClass = 'm-accordion_item js-m-accordion_item'
		}
		return (
			<div className={activeClass}>
				<Headline title={this.props.title} /> 
				<Content content={this.props.content} />
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

