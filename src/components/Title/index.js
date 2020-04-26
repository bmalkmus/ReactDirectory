import React from "react";
import "./title.css";

function Title(props) {
    return (
        <div className = "title">
        <h1 className = "title-text">
            <img src ="../Images/Shield.png" className ="logo lg1" alt = "logo"/>  {props.children}  <img src ="../Images/Shield.png" className ="logo lg2" alt = "logo"/>
        </h1>
        </div>

       
    )}

export default Title;