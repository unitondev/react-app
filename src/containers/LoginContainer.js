import React, { Component } from "react";
import LoginView from "../views/Login/LoginView";

class LoginContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        console.log(
            `email: ${this.state.email}, password ${this.state.password}`
        );
        event.preventDefault();
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    handleValidation() {}

    render() {
        return (
            <LoginView
                handleSubmit={this.handleSubmit}
                handleChange={this.handleChange}
                email={this.state.email}
                password={this.state.password}
            />
        );
    }
}

export default LoginContainer;
