import { MarginButton } from "../Counter/styles";
import { withStyles } from "@material-ui/core/styles";
import CounterContainer from "../../containers/CounterContainer";
import PropTypes from "prop-types";
import styles from "./styles.js";
import NavBarView from "../Navbar";

function Index({
    handleAddCounterClick,
    handleRemoveCounterClick,
    handleRestartCountersClick,
    countersCount,
    classes,
}) {
    const counterListItems = [];
    for (let index = 0; index < countersCount; index++) {
        counterListItems.push(
            <li key={index.toString()}>
                <CounterContainer countersCount={countersCount} />
            </li>
        );
    }

    return (
        <>
            <NavBarView />
            <div className={classes.counterWrapper}>
                <div className={classes.counterWrapperControls}>
                    <MarginButton
                        variant="contained"
                        color="primary"
                        onClick={handleAddCounterClick}
                    >
                        Add Counter
                    </MarginButton>
                    <MarginButton
                        variant="contained"
                        color="primary"
                        onClick={handleRemoveCounterClick}
                    >
                        Remove Counter
                    </MarginButton>
                    <MarginButton
                        variant="contained"
                        color="primary"
                        onClick={handleRestartCountersClick}
                    >
                        Restart Counters
                    </MarginButton>
                </div>
                <div className={classes.controlsList}>
                    <ul className={classes.counterListItems}>
                        {counterListItems}
                    </ul>
                </div>
            </div>
        </>
    );
}

Index.propTypes = {
    classes: PropTypes.object.isRequired,
    handleAddCounterClick: PropTypes.func.isRequired,
    handleRemoveCounterClick: PropTypes.func.isRequired,
    handleRestartCountersClick: PropTypes.func.isRequired,
    countersCount: PropTypes.number.isRequired,
};

export default withStyles(styles)(Index);
