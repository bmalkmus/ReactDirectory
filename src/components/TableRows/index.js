import React from "react";
import "./style.css";

function Rows (props) {
    return (
        
        <tr key = {props.id}>
        <td>{props.id}</td>
        <td>{props.hero}</td>
        <td>{props.name}</td>
        <td>{props.strength}</td>
        <td>
            <button 
                type = "button" 
                width = "100%" 
                id = {props.id}
                onClick ={() => props.Activate(props.id)}

            >Activate Mission</button> 
        </td>
        </tr>
    )
};

export default Rows;
