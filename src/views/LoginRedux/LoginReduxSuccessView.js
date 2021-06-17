import PropTypes from "prop-types";

function LoginReduxSuccessView({ email, password }) {
    return (
        <div>
            <p>
                Email - {email}, password - {password}
            </p>
        </div>
    );
}

LoginReduxSuccessView.propTypes = {
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
};

export default LoginReduxSuccessView;
