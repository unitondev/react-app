import React, { Component } from "react";
import LoginView from "../views/Login/LoginView";

class LoginContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            errors: { email: "", password: "" },
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        if (this.handleValidation()) {
            console.log(
                `email: ${this.state.email}, password ${this.state.password}`
            );
            this.setState({
                email: "",
                password: "",
            });
        } else {
            if (this.state.errors["email"]) {
                alert(`${this.state.errors["email"]}`);
            }
            if (this.state.errors["password"]) {
                alert(`${this.state.errors["password"]}`);
            }
        }

        event.preventDefault();
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    validateEmail(email) {
        const re =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    handleValidation() {
        let email = this.state.email;
        let password = this.state.password;
        let errors = this.state.errors;
        let isFormValid = true;

        if (!email) {
            isFormValid = false;
            errors["email"] = "Email Required";
        } else if (!this.validateEmail(email)) {
            isFormValid = false;
            errors["email"] = "Invalid email";
        } else {
            errors["email"] = "";
        }

        if (!password) {
            isFormValid = false;
            errors["password"] = "Password required";
        } else if (password.length < 6) {
            isFormValid = false;
            errors["password"] = "Password must be more than 6 characters";
        } else {
            errors["password"] = "";
        }

        this.setState({
            errors: errors,
        });
        return isFormValid;
    }

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
