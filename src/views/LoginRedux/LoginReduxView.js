import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";
import NavBarView from "./../../views/Navbar/NavBarView";
import PropTypes from "prop-types";
import Link from "@material-ui/core/Link";
import TextField from "@material-ui/core/TextField";
import { Link as RouterLink } from "react-router-dom";

function LoginReduxView({
    handleSubmit,
    handleEmailChange,
    handlePasswordChange,
    email,
    password,
    classes,
}) {
    return (
        <>
            <NavBarView />
            <div className={classes.loginBlock}>
                <form className={classes.loginBlock}>
                    <TextField
                        className={classes.textField}
                        type="text"
                        name="email"
                        value={email}
                        onChange={handleEmailChange}
                        label="Enter Email"
                        variant="outlined"
                    ></TextField>

                    <TextField
                        className={classes.textField}
                        type="password"
                        name="password"
                        value={password}
                        onChange={handlePasswordChange}
                        label="Enter Password"
                        variant="outlined"
                    ></TextField>
                    <Link
                        component={RouterLink}
                        to="/login-redux/success"
                        onClick={handleSubmit}
                    >
                        Log In
                    </Link>
                </form>
                <div>
                    <p>email: {JSON.stringify(email)}</p>
                    <p>password: {JSON.stringify(password)}</p>
                </div>
            </div>
        </>
    );
}

LoginReduxView.propTypes = {
    classes: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    handleEmailChange: PropTypes.func.isRequired,
    handlePasswordChange: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
};

export default withStyles(styles)(LoginReduxView);
