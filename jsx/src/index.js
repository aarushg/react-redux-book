//Import the react and react dom lib 
import React from 'react';
import ReactDom from 'react-dom'



//create a react component
const App = () => {
    const buttonText = {text: 'Click!'};
    const style = {backgroundColor: "blue", color: "white" };
    return (
        <div>
            <label className="label" htmlFor="name">Enter Name:</label>
            <input id="name" type="text" />
            <button style={style}>{buttonText.text}</button>
        </div>)

};


//take the react component and show on screen 
ReactDom.render(
    <App />,
    document.querySelector('#root')
);