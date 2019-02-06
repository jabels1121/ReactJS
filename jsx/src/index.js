// import React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
import {Exercise} from './exercise';


// Create React component
const App = () => {
    const buttonText = 'Click me!';

    return (
        <div>
            <label htmlFor="name" className="label">
                Enter name:
            </label>
            <input id="name" type="text"/>
            <button style={{backgroundColor: 'blue', color: 'white'}}>
                {buttonText}
            </button>
            <Exercise/>
        </div>
    );
};

//  Take react component and show it on the screen
ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);