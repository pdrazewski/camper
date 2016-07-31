import React from 'react';
import ReactDOM from 'react-dom';
import {CamperAccordion} from './modules/accordion/react/accordion.jsx';


var notepad = {
    notes: [
        {
            id: 1,
            title: "Hello, world!",
            content: "Boring."
        },
        {
            id: 2,
            title: "React is awesome.",
            content: "Seriously, it's the greatest."

        },
        {
            id: 3,
            title: "Robots are pretty cool.",
            content: "Robots are awesome, until they take over."
        },
        {
            id: 4,
            title: "Monkeys",
            content: "Who doesn't love monkeys?"
        }
    ]
};

ReactDOM.render(
	<CamperAccordion 
		name="Trolololo" 
		data={notepad} />, 
	document.querySelector("#js-accordion-react")
);
  