import React from "react";
import "./style.css";
import logo from "./Shield.png"

function Title(props) {
    return (
        <div className = "title">
        <h1 className = "title-text">
            <img src ={logo} className ="logo lg1" alt = "logo"/>  {props.children}  <img src ={logo} className ="logo lg2" alt = "logo"/>
        </h1>
        </div>

       
    )}

export default Title;