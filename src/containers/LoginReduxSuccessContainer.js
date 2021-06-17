import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import LoginReduxSuccessView from "../views/LoginReduxSuccess/LoginReduxSuccessView";

function LoginReduxSuccessContainer(props) {
    return (
        <LoginReduxSuccessView email={props.email} password={props.password} />
    );
}

LoginReduxSuccessContainer.propTypes = {
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
    email: state.login.email,
    password: state.login.password,
});

export default connect(mapStateToProps)(LoginReduxSuccessContainer);
