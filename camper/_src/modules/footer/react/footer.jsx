import React from 'react';
import {Item} from './elements/box.jsx';

export class CamperFooter extends React.Component {
	render() {
		var notes = this.props.data.notes;
		return (
			<div className="m-footer clearfix">
				  {
                    notes.map(function (note, index) {
                    	var activeElement = index == 0 ? true : false;
                        return (
                        	<Box 
                        		title={footer.headline} 
                        		content={footer.content} 
                        		key={footer.id} 
                        	/>
                        ); 
                    })
				}
				
			</div> 
		);
	} 
} 
