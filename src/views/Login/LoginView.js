import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";
import NavBarView from "./../../views/Navbar/NavBarView";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { useFormik } from "formik";
import * as Yup from "yup";

function LoginView({ classes }) {
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: Yup.object({
            email: Yup.string().email("Invalid email").required("Required"),
            password: Yup.string()
                .min(6, "Must be more than 6 characters ")
                .required("Required"),
        }),
        onSubmit: (values) => {
            console.log(JSON.stringify(values));
        },
    });
    return (
        <>
            <NavBarView />
            <div>
                <form
                    onSubmit={formik.handleSubmit}
                    className={classes.loginBlock}
                >
                    <TextField
                        className={classes.textField}
                        type="text"
                        name="email"
                        {...formik.getFieldProps("email")}
                        id="outlined-basic"
                        label="Enter Email"
                        variant="outlined"
                    ></TextField>
                    {formik.touched.email && formik.errors.email ? (
                        <p>{formik.errors.email}</p>
                    ) : null}

                    <TextField
                        className={classes.textField}
                        type="password"
                        name="password"
                        {...formik.getFieldProps("password")}
                        id="outlined-basic"
                        label="Enter Password"
                        variant="outlined"
                    ></TextField>
                    {formik.touched.password && formik.errors.password ? (
                        <p>{formik.errors.password}</p>
                    ) : null}

                    <Button variant="contained" color="secondary" type="submit">
                        Log In
                    </Button>
                </form>
            </div>

            <div className={classes.loginBlock}>
                <p>email: {JSON.stringify(formik.values.email)}</p>
                <p>password: {JSON.stringify(formik.values.password)}</p>
            </div>
        </>
    );
}

LoginView.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LoginView);
