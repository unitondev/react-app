import { MarginButton } from "../Counter/styles";
import CounterContainer from "../../containers/CounterContainer";
import PropTypes from "prop-types";
import "../../views/CounterWrapper/style.css";
import NavBarView from "./../../views/Navbar/NavBarView";

function CounterWrapperView({
    handleAddCounterClick,
    handleRemoveCounterClick,
    handleRestartCountersClick,
    countersCount,
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
            <div>
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
                <ul>{counterListItems}</ul>
            </div>
        </>
    );
}

CounterWrapperView.propTypes = {
    handleAddCounterClick: PropTypes.func.isRequired,
    handleRemoveCounterClick: PropTypes.func.isRequired,
    handleRestartCountersClick: PropTypes.func.isRequired,
    countersCount: PropTypes.number.isRequired,
};

export default CounterWrapperView;
