import React from "react";
import "./style.css";

function Table (props){
    return (
        <div>
            <br></br>;
            <br></br>;
            <table className = "inactiveTab">
                <thead>
                    <tr>
                        <th>Hero I.D.</th>
                        <th>Alias</th>
                        <th>Name</th>
                        <th>Strength</th>
                        <th>Send to Mission</th>
                    </tr>
                </thead>
                <tbody>
                    {props.children}
                </tbody>
            </table>
        </div>
    )
}
export default Table;
