import React from 'react';
import {Item} from './elements/item.jsx';

export class CamperAccordion extends React.Component {
	render() {
		var notes = this.props.data.notes;
		return (
			<div className="m-accordion" id="js-m-accordion">
				  {
                    notes.map(function (note, index) {
                    	var activeElement = index == 0 ? true : false;
                        return (
                        	<Item 
                        		title={note.title} 
                        		content={note.content} 
                        		key={note.id} 
                        		active={activeElement} 
                        	/>
                        ); 
                    })
				}
				
			</div> 
		);
	} 
} 
