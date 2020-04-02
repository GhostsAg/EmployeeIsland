import React from 'react';
import Wrapper from "../wrapper";
import Title from "../title";
import empFile from "../../employees.json";
import EmpCard from "../EmpCard";

const fs = require("fs");

class Home extends React.Component {

    state = {
        empFile
    };

    removeEmployee = id => {
        const employees = this.state.empFile.filter(emp => emp.id !== id);

        this.setState({ employees });

        fs.writeFileSync("../../employees.json", JSON.stringify(employees, null, 2), (err) => {
            if (err) throw err;
        });
    }

    render() {
        return (
            <Wrapper>
                <Title>All Employees</Title>
                {this.state.empFile.map(emp => (
                    <EmpCard 
                        removeEmp = {this.removeEmployee}
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
