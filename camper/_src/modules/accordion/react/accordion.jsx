import React from 'react';
import {Item} from './elements/item.jsx';

export class CamperAccordion extends React.Component {
	render() {
		var accordion = this.props.data.accordion;
		return (
			<div className="m-accordion" id="js-m-accordion">
				  {
                    accordion.map(function (accordion, index) {
                    	var activeElement = index == 0 ? true : false;
                        return (
                        	<Item 
                        		title={accordion.title} 
                        		content={accordion.content} 
                        		key={accordion.id} 
                        		active={activeElement} 
                        	/>
                        ); 
                    })
				}
				
			</div> 
		);
	} 
} 
