import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import LoginReduxSuccessView from "../views/LoginReduxSuccess/LoginReduxSuccessView";
import { getEmail, getPassword } from "../redux/selectors";

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
    email: getEmail(state),
    password: getPassword(state),
});

export default connect(mapStateToProps)(LoginReduxSuccessContainer);
