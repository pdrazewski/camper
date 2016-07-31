import React from 'react';
export class App extends React.Component {
	render() {
		return (
			<div>
				<h1>{this.props.name}</h1>
				<p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
				<p><a className="btn btn-primary btn-lg">Learn more</a></p>
			</div> 
		);
	} 
} 