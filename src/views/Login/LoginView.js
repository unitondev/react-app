import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";
import NavBarView from "./../../views/Navbar/NavBarView";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

function LoginView({ handleSubmit, handleChange, email, password, classes }) {
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
                        onChange={handleChange}
                        id="outlined-basic"
                        label="Enter Email"
                        variant="outlined"
                    ></TextField>

                    <TextField
                        className={classes.textField}
                        type="password"
                        name="password"
                        value={password}
                        onChange={handleChange}
                        id="outlined-basic"
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

LoginView.propTypes = {
    classes: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
};

export default withStyles(styles)(LoginView);
