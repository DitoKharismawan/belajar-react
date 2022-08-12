import React from "react";
import ReactDom from "react-dom";

const name = "Angela";
const number = 7;
const currentDate = new Date();
const year = currentDate.getFullYear();

ReactDom.render(
  <div>
    <h1>Hello {name}!</h1>
    <p> Copyright {year} </p>
      
   </div>,
   document.getElementById("root")
   );
export default name;