var Accordion = React.createClass({
  	render: function() {
    	return <div>Hello hej boy to jest zmiana w js leci x1 {this.props.name}</div>;
  	} 
});
    
ReactDOM.render( 
  	<Accordion name="Accordion" />,
  	document.getElementById('js-accordion-react')
);
