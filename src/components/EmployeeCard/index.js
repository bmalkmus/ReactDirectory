import React from "react";
import "./style.css";

function EmployeeCard(props) {
    return (
        <div className = "card">
            <div className = "img-container">
                <img 
                    alt = {props.hero} 
                    src={props.image}
                />
            </div>
            <div className ="card-body">
                <h4 className = "card-title">
                     {props.hero} 
                </h4>
                <p className = "card-text">
                    Name: {props.name} 
                </p>
                <p className = "card-text">
                    Strength: {props.strength} 
                </p>
                <button 
                    className = "dbBTN"
                    type ="button"
                    onClick ={() => props.debrief(props.id)}
                    
                    >Debrief Mission</button>
            </div>

        </div>
    );
}

export default EmployeeCard