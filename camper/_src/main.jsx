var React = require('react/addons');

console.log('hello from jsx')

var CamperAccordion = require('./modules/accordion/react/accordion.jsx');
var CamperBreadcrmb = require('./modules/breadcrumb/react/breadcrumb.jsx');

    
ReactDOM.render( 
  	<CamperAccordion name="Accordion" />,
  	document.getElementById('js-accordion-react')
);

ReactDOM.render( 
  	<CamperBreadcrmb name="Breadcrumb" />,
  	document.getElementById('js-breadcrumb-react')
);