import { MyButton } from "./styles";
import PropTypes from "prop-types";

function CounterView({
    handleIncrementClick,
    handleDecrementClick,
    handleResetClick,
    counterValue,
}) {
    return (
        <div>
            <MyButton
                variant="contained"
                className="button incrementButton"
                onClick={handleIncrementClick}
            >
                increment
            </MyButton>
            <MyButton
                variant="contained"
                className="button decrementButton"
                onClick={handleDecrementClick}
            >
                decrement
            </MyButton>
            <MyButton
                variant="contained"
                className="button resetButton"
                onClick={handleResetClick}
            >
                reset
            </MyButton>
            <span className="CounterValue">{counterValue}</span>
        </div>
    );
}

CounterView.propTypes = {
    handleIncrementClick: PropTypes.func,
    handleDecrementClick: PropTypes.func,
    handleResetClick: PropTypes.func,
    counterValue: PropTypes.number,
};

export default CounterView;
