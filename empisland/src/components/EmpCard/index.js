import React from "react";
import "./style.css";


function EmpCard(props) {
    return (
        <div className="card">
            <div className="img-container">
                <img alt={props.name} src={props.image} />
            </div>
            <div className="content">
                <ul>
                    <li>
                        <strong>Name:</strong> {props.name}
                    </li>
                    <li>
                        <strong>Email:</strong> {props.email}
                    </li>
                    <li>
                        <strong>Role:</strong> {props.role}
                    </li>
                    <li>
                        <strong>Department:</strong> {props.department}
                    </li>
                </ul>
            </div>
            <span onClick={() => props.removeEmployee(props.id)} className="remove">
                𝘅
            </span>
        </div>
    );
}

export default EmpCard;