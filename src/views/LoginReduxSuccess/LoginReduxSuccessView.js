import PropTypes from "prop-types";

export default function LoginReduxSuccessView({ email, password }) {
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
