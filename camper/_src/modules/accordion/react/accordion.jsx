import React from 'react';

class Item extends React.Component {
	render() { 
		return (
			<div>
				<div className="m-accordion_item">
					<div className="m-accordion_headline" data-key={this.props.key}>
						{this.props.name}
					</div>
				</div> 
				<div className="m-accordion_content">
					{this.props.name}
				</div>
			</div>
		);
	} 
}

export class CamperAccordion extends React.Component {
	render() {
		var notes = this.props.data.notes;
		return (
			<div className="m-accordion">
				  {
                    notes.map(function (note) {
                        var title = note.content.substring(0,
                            note.content.indexOf('\n')
                        );
                        title = title || note.content;
                    
                        return (
                        	<Item name={title} key={note.id} />
                        );
                    })
				}
				
			</div> 
		);
	} 
} 
