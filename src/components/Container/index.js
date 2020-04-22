import React from "react";
import "./style.css";

function Container(props){
    return <div className = "container teamContent">{props.children}</div>;
}

export default Container