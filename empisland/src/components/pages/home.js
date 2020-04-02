import React from 'react';
import Wrapper from "../wrapper";
import Title from "../title";
import allEmployees from "../../employees.json";
import EmpCard from "../EmpCard";

const fs = require("fs");

class Home extends React.Component {

    state = {
        allEmployees
    };

    removeEmployee = id => {
        const newEmployees = this.state.allEmployees.filter(emp => emp.id !== id);

        this.setState({ newEmployees });

        // fs.writeFileSync("../../employees.json", JSON.stringify(newEmployees, null, 2), (err) => {
        //     if (err) throw err;
        // });
    }

    render() {
        return (
            <Wrapper>
                <Title>All Employees</Title>
                {this.state.allEmployees.map(emp => (
                    <EmpCard 
                        removeEmployee = {this.removeEmployee}
                        id = {emp.id}
                        key = {emp.id}
                        name = {emp.firstName + " " + emp.lastName}
                        image = {emp.image}
                        email = {emp.email}
                        role = {emp.role}
                        department = {emp.department}
                    />
                ))}
            </Wrapper>
        );
    }
}

export default Home;
