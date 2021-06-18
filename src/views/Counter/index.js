import { MarginButton } from "./styles";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

function Index({
    handleIncrementClick,
    handleDecrementClick,
    handleResetClick,
    counterValue,
    classes,
}) {
    return (
        <div>
            <MarginButton
                variant="contained"
                className="button incrementButton"
                onClick={handleIncrementClick}
            >
                increment
            </MarginButton>
            <MarginButton
                variant="contained"
                className="button decrementButton"
                onClick={handleDecrementClick}
            >
                decrement
            </MarginButton>
            <MarginButton
                variant="contained"
                className="button resetButton"
                onClick={handleResetClick}
            >
                reset
            </MarginButton>
            <span className={classes.counterValue}>{counterValue}</span>
        </div>
    );
}

Index.propTypes = {
    handleIncrementClick: PropTypes.func.isRequired,
    handleDecrementClick: PropTypes.func.isRequired,
    handleResetClick: PropTypes.func.isRequired,
    counterValue: PropTypes.number.isRequired,
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Index);
