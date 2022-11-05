//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import SecondsCounter from "./component/SecondsCounter.jsx";

let count = 0;

setInterval (() => {
    const numberOne = Math.floor(count / 1) % 10;
    const numberTwo = Math.floor(count / 10) % 10;
    count++;

    ReactDOM.render(<SecondsCounter numOne={numberOne} numTwo={numberTwo}/>, document.querySelector("#app"));

}, 1000);



