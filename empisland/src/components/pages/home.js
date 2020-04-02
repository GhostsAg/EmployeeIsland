import React from 'react';
import Wrapper from "../wrapper";
import Title from "../title";
import employees from "../../employees.json";
import EmpCard from "../EmpCard"; 


class Home extends React.Component {

    state = {
        employees
    };

    removeEmployee = id => {
        const employees = this.state.employees.filter(employee => employee.id !== id);

        this.setState({ employees });
    }

    render() {
        return (
            <Wrapper>
                <Title>All Employees</Title>
                {this.state.employees.map(employee => (
                    <EmpCard 
                        removeEmployee = {this.removeEmployee}
                        id = {employee.id}
                        key = {employee.id}
                        name = {employee.firstName + " " + employee.lastName}
                        image = {employee.image}
                        email = {employee.email}
                        role = {employee.role}
                        department = {employee.department}
                    />
                ))}
            </Wrapper>
        );
    }
}

export default Home;
