import React from 'react';
import ReactDOM from 'react-dom';
import {CamperAccordion} from './modules/accordion/react/accordion.jsx';


var notepad = {
    notes: [
        {
            id: 1,
            content: "Hello, world!\nBoring.\nBoring.\nBoring."
        },
        {
            id: 2,
            content: "React is awesome.\nSeriously, it's the greatest."
        },
        {
            id: 3,
            content: "Robots are pretty cool.\nRobots are awesome, until they take over."
        },
        {
            id: 4,
            content: "Monkeys.\nWho doesn't love monkeys?"
        }
    ]
};

ReactDOM.render(<CamperAccordion name="Trolololo" data={notepad} />, document.querySelector("#js-accordion-react"));
  