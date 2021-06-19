import React, { Component, useState } from "react";
import { connect } from "react-redux";
import LoginReduxView from "../views/LoginRedux";
import { changeEmail, changePassword } from "../redux/actions";
import PropTypes from "prop-types";
import validateEmail from "../helper/validateEmail";
import { getEmail, getPassword } from "../redux/selectors";

function LoginReduxContainer(props) {
    const { email, password, changeEmail, changePassword } = props;

    const [errors, setErrors] = useState({
        email: "",
        password: "",
    });

    const handleSubmit = (event) => {
        if (!handleValidation()) {
            event.preventDefault();
            if (errors["email"]) {
                alert(`${errors["email"]}`);
            }
            if (errors["password"]) {
                alert(`${errors["password"]}`);
            }
        }
    };

    const handleEmailChange = (event) => {
        changeEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        changePassword(event.target.value);
    };

    const handleValidation = () => {
        let validationErrors = errors;
        let isFormValid = true;

        if (!email) {
            isFormValid = false;
            validationErrors["email"] = "Email Required";
        } else if (!validateEmail(email)) {
            isFormValid = false;
            validationErrors["email"] = "Invalid email";
        } else {
            validationErrors["email"] = "";
        }

        if (!password) {
            isFormValid = false;
            validationErrors["password"] = "Password required";
        } else if (password.length < 6) {
            isFormValid = false;
            validationErrors["password"] =
                "Password must be more than 6 characters";
        } else {
            validationErrors["password"] = "";
        }

        setErrors(validationErrors);

        return isFormValid;
    };

    return (
        <LoginReduxView
            handleSubmit={handleSubmit}
            handleEmailChange={handleEmailChange}
            handlePasswordChange={handlePasswordChange}
            email={email}
            password={password}
        />
    );
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
