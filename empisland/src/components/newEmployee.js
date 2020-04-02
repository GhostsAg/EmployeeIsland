import React from "react";

const fs = require("fs");

class EmpForm extends React.Component {
    
    state = {
        firstName: "",
        lastName: "",
        email: "",
        role: "",
        department: ""
    }

    handleChange(event) {
        let value = event.target.value;
        let name = event.target.name;
        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state);
        let data = this.state;
        fs.writeFileSync("../employee.json", JSON.stringify(data, null, 2), (err) => {
            if (err) throw err;
            alert("Employee inserted: " + this.state.firstName + " " + this.state.lastName + ".");
        });

        this.setState({
            firstName: "",
            lastName: "",
            email: "",
            role: "",
            department: ""
        });
    }

    render() {
        return(
            <form class="col s12">
                <div class="row">
                    <div class="input-field col s6">
                        <input name="firstName" id="first_name" type="text" class="validate" onChange={this.handleChange} value={this.state.firstName} />
                        <label for="first_name">First Name</label>
                    </div>
                    <div class="input-field col s6">
                        <input name="lastName" id="last_name" type="text" class="validate" onChange={this.handleChange} value={this.state.lastName} />
                        <label for="last_name">Last Name</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input name="email" id="email" type="text" class="validate" onChange={this.handleChange} value={this.state.email} />
                        <label for="email">Email</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input name="role" id="role" type="text" class="validate" onChange={this.handleChange} value={this.state.role} />
                        <label for="role">Role</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input name="department" id="department" type="text" class="validate" onChange={this.handleChange} value={this.state.department} />
                        <label for="department">Department</label>
                    </div>
                </div>
                <input onClick={this.handleSubmit} type="submit" value="Submit">Submit</input>
            </form>
        );
    }
}

export default EmpForm;