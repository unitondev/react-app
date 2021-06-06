import { MarginButton } from "../Counter/styles";
import Counter from "../../containers/CounterContainer";
import PropTypes from "prop-types";

function CounterWrapperView({
    handleAddCounterClick,
    handleRemoveCounterClick,
    handleRestartCountersClick,
    counterArray,
}) {
    const counterListItems = counterArray.map((number) => (
        <li key={number.toString()}>
            <Counter number={number} />
        </li>
    ));

    return (
        <>
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
    counterArray: PropTypes.array.isRequired,
};

export default CounterWrapperView;
