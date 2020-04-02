import React from "react";
import EmpForm from "../newEmployee";
import Wrapper from "../wrapper";
import Title from "../title";

function Add() {
    return (
        <Wrapper>
            <Title>Add a New Employee</Title>
            <div class="body">
                <EmpForm />
            </div>
        </Wrapper>
    );
}

export default Add;