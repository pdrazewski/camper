import React from 'react';
import {Headline} from './headline.jsx';
import {Content} from './box.jsx';

export class Items extends React.Component { 
	constructor(props) {
    	super(props);
  	}
	render() { 
		return (
			<ul className="m-footer_content">
				{
                    notes.map(function (note, index) {
                    	var activeElement = index == 0 ? true : false;
                        return (
                        	<li>
                        		{footer.headline}  
                        	</li>
                        ); 
                    })
				}
			</ul> 
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

