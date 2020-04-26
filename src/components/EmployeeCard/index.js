import React from "react";
import "./style.css";

function EmployeeCard(props) {

    return (
        <div className = "card">
            <div className = "img-container">
                <img className = "card-img"
                    alt = {props.hero} 
                    src={props.image}
                />
            </div>
            <div className ="card-body">
                <h4 className = "card-title">
                     {props.hero} 
                </h4>
                <p className = "card-text card-name">
                    Name: {props.name} 
                </p>
                <p className = "card-text card-strength">
                    Strength: {props.strength} 
                </p>
                <button 
                    className = "dbBTN lgBTN"
                    type ="button"
                    onClick ={() => props.debrief(props.id)}
                    
                    >Debrief Mission</button>
                <button 
                    className = "dbBTN smBTN"
                    type ="button"
                    onClick ={() => props.debrief(props.id)}
                    
                    >Debrief</button>
            </div>

        </div>
    );
}

export default EmployeeCard