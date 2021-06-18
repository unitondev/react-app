import logo from "../../logo.svg";
import NavBarView from "../Navbar";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

function Index(props) {
    const { classes } = props;
    return (
        <>
            <NavBarView />
            {/* how can i add container from AppStyle.js */}
            <div className={classes.aboutBlock}>
                <div className={classes.aboutTextBlock}>
                    <div className={classes.aboutDescriptionBlock}>
                        <p className={classes.aboutDescriptionText}>
                            Google LLC is an American multinational technology
                            company that specializes in Internet-related
                            services and products, which include online
                            advertising technologies, a search engine, cloud
                            computing, software, and hardware. It is considered
                            one of the five Big Tech companies along with
                            Amazon, Facebook, Apple, and Microsoft.
                        </p>
                    </div>
                </div>

                <div className={classes.AppHeader}>
                    <img src={logo} className="App-logo" alt="logo" />
                </div>
            </div>
        </>
    );
}

Index.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Index);
