import React, { Component } from "react";
import { connect } from "react-redux";
import LoginReduxView from "../views/LoginRedux";
import { changeEmail, changePassword } from "../redux/actions";
import PropTypes from "prop-types";
import validateEmail from "../helper/validateEmail";
import { getEmail, getPassword } from "../redux/selectors";

class LoginReduxContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            errors: { email: "", password: "" },
        };
    }

    handleSubmit = (event) => {
        if (!this.handleValidation()) {
            event.preventDefault();
            if (this.state.errors["email"]) {
                alert(`${this.state.errors["email"]}`);
            }
            if (this.state.errors["password"]) {
                alert(`${this.state.errors["password"]}`);
            }
        }
    };

    handleEmailChange = (event) => {
        this.props.changeEmail(event.target.value);
    };

    handlePasswordChange = (event) => {
        this.props.changePassword(event.target.value);
    };

    handleValidation() {
        let email = this.props.email;
        let password = this.props.password;
        let errors = this.state.errors;
        // TODO: if i get errors object not from state - state can't be in time in handleSubmit
        // let errors = { email: "", password: "" };
        let isFormValid = true;

        if (!email) {
            isFormValid = false;
            errors["email"] = "Email Required";
        } else if (!validateEmail(email)) {
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
            errors,
        });
        return isFormValid;
    }

    render() {
        return (
            <LoginReduxView
                handleSubmit={this.handleSubmit}
                handleEmailChange={this.handleEmailChange}
                handlePasswordChange={this.handlePasswordChange}
                email={this.props.email}
                password={this.props.password}
            />
        );
    }
}

const mapStateToProps = (state) => ({
    email: getEmail(state),
    password: getPassword(state),
});

const mapDispatchToProps = {
    changeEmail,
    changePassword,
};

LoginReduxContainer.propTypes = {
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    changeEmail: PropTypes.func.isRequired,
    changePassword: PropTypes.func.isRequired,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginReduxContainer);
