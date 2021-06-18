import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Index from "../views/LoginReduxSuccess";
import { getEmail, getPassword } from "../redux/selectors/loginSelectors";

function LoginReduxSuccessContainer(props) {
    return (
        <Index email={props.email} password={props.password} />
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
