import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";
import NavBarView from "../Navbar";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

function Index({
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
                <form onSubmit={handleSubmit} className={classes.loginBlock}>
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

                    <Button variant="contained" color="secondary" type="submit">
                        Log In
                    </Button>
                </form>
                <div>
                    <p>email: {JSON.stringify(email)}</p>
                    <p>password: {JSON.stringify(password)}</p>
                </div>
            </div>
        </>
    );
}

Index.propTypes = {
    classes: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    handleEmailChange: PropTypes.func.isRequired,
    handlePasswordChange: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
};

export default withStyles(styles)(Index);
