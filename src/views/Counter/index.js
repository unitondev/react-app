import { MarginButton } from "./styles";
import PropTypes from "prop-types";

function CounterView({
    handleIncrementClick,
    handleDecrementClick,
    handleResetClick,
    counterValue,
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
            <span className="CounterValue">{counterValue}</span>
        </div>
    );
}

CounterView.propTypes = {
    handleIncrementClick: PropTypes.func.isRequired,
    handleDecrementClick: PropTypes.func.isRequired,
    handleResetClick: PropTypes.func.isRequired,
    counterValue: PropTypes.number.isRequired,
};

export default CounterView;
