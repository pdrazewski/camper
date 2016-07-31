var React = require('react/addons');

module.exports = React.createClass({displayName: "exports",
  	render: function() {
    	return React.createElement("div", null, "Hello hej boy to jest zmiana w js leci z ", this.props.name);
  	} 
});

 