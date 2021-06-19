import React, { useState } from "react";
import LoginView from "../views/Login";
import validateEmail from "../helper/validateEmail";

export default function LoginContainer() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({
        email: "",
        password: "",
    });

    const handleSubmit = (event) => {
        if (handleValidation()) {
            console.log(`email: ${email}, password ${password}`);
            setEmail("");
            setPassword("");
        } else {
            if (errors["email"]) {
                alert(`${errors["email"]}`);
            }
            if (errors["password"]) {
                alert(`${errors["password"]}`);
            }
        }

        event.preventDefault();
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
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
        <LoginView
            handleEmailChange={handleEmailChange}
            handlePasswordChange={handlePasswordChange}
            handleSubmit={handleSubmit}
            email={email}
            password={password}
        />
    );
}
