import PropTypes from "prop-types";

export default function Index({ email, password }) {
    return (
        <div>
            <p>
                Email - {email}, password - {password}
            </p>
        </div>
    );
}

Index.propTypes = {
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
};
