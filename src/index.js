import React from "react";
import ReactDom from "react-dom";

const name = "Angela";
const number = 7;

ReactDom.render(
  <div>
    <h1>Hello {name}!</h1>
    <p>Your lucky number is {number} </p>
      
   </div>,
   document.getElementById("root")
   );
