import React from "react";
import "./style.css";

function Container(props){
    return <div className = "container card-column teamContent">{props.children}</div>;
}

export default Container 