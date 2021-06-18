import { NavLink } from "react-router-dom";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

function Index(props) {
    const { classes } = props;
    return (
        <nav>
            {/* how can i add container from AppStyle.js */}
            <ul className={classes.navbarLinks}>
                <li className={classes.navbarLinkBlock}>
                    <NavLink
                        to="/about"
                        className={classes.navbarLink}
                        activeClassName={classes.activeLink}
                    >
                        About Us
                    </NavLink>
                </li>

                <li className={classes.navbarLinkBlock}>
                    <NavLink
                        to="/counters"
                        className={classes.navbarLink}
                        activeClassName={classes.activeLink}
                    >
                        Counters
                    </NavLink>
                </li>

                <li className={classes.navbarLinkBlock}>
                    <NavLink
                        to="/login"
                        className={classes.navbarLink}
                        activeClassName={classes.activeLink}
                    >
                        Login
                    </NavLink>
                </li>

                <li className={classes.navbarLinkBlock}>
                    <NavLink
                        to="/login-redux"
                        className={classes.navbarLink}
                        activeClassName={classes.activeLink}
                    >
                        Login with Redux
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

Index.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Index);
