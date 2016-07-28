"use strict";

var Accordion = React.createClass({
  displayName: "Accordion",

  render: function render() {
    return React.createElement(
      "div",
      null,
      "Hello hej boy to jest zmiana w js leci x ",
      this.props.name
    );
  }
});

ReactDOM.render(React.createElement(Accordion, { name: "Accordion" }), document.getElementById('js-accordion-react'));
