import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavTabs() {
    const location = useLocation();

    return (
        <ul>
            <li className="nav-item">
                <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
                Home View
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/add" className={location.pathname === "/add" ? "nav-link active" : "nav-link"}>
                Add New Employee
                </Link>
            </li>
        </ul>
    );
}

export default NavTabs;