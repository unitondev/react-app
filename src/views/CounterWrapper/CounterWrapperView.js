import { MarginButton } from "../Counter/styles";
import CounterContainer from "../../containers/CounterContainer";
import PropTypes from "prop-types";
import "../../views/CounterWrapper/style.css";

function CounterWrapperView({
    handleAddCounterClick,
    handleRemoveCounterClick,
    handleRestartCountersClick,
    countersCount,
    isEven,
    isOdd,
}) {
    const counterListItems = [];

    if (isEven || isOdd) {
        for (let index = 0; index < countersCount; index++) {
            if (isEven) {
                if (index % 2 === 0) {
                    counterListItems.push(
                        <li key={index.toString()}>
                            <CounterContainer isEven={true} />
                        </li>
                    );
                    continue;
                }
            } else {
                if (index % 2 === 1) {
                    counterListItems.push(
                        <li key={index.toString()}>
                            <CounterContainer isOdd={true} />
                        </li>
                    );
                    continue;
                }
            }
            counterListItems.push(
                <li key={index.toString()}>
                    <CounterContainer />
                </li>
            );
        }
    } else {
        for (let index = 0; index < countersCount; index++) {
            counterListItems.push(
                <li key={index.toString()}>
                    <CounterContainer />
                </li>
            );
        }
    }

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
    countersCount: PropTypes.number.isRequired,
    isEven: PropTypes.bool.isRequired,
    isOdd: PropTypes.bool.isRequired,
};

export default CounterWrapperView;
