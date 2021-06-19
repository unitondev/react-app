import React, { Component, useEffect, useRef, useState } from "react";
import CounterView from "../views/Counter";
import PropTypes from "prop-types";

export default function CounterContainer(props) {
    const { countersCount } = props;
    const [counterValue, setCounterValue] = useState(0);

    const prevCountersCount = useRef(countersCount);

    useEffect(() => {
        if (countersCount > prevCountersCount.current) {
            handleEvenValue();
        }
        if (countersCount < prevCountersCount.current) {
            handleOddValue();
        }
        prevCountersCount.current = countersCount;
    }, [countersCount]);

    // function shouldComponentUpdate(_, nextState) {
    //     return nextState.counterValue !== counterValue;
    // }

    const incrementValue = () => {
        setCounterValue(counterValue + 1);
    };

    const decrementValue = () => {
        setCounterValue(counterValue - 1);
    };

    const handleIncrementClick = () => {
        incrementValue();
    };

    const handleDecrementClick = () => {
        decrementValue();
    };

    const handleResetClick = () => {
        setCounterValue(0);
    };

    const handleEvenValue = () => {
        if (counterValue % 2 === 0) {
            incrementValue();
        }
    };

    const handleOddValue = () => {
        if (counterValue % 2 === 1) {
            decrementValue();
        }
    };

    return (
        <CounterView
            handleIncrementClick={handleIncrementClick}
            handleDecrementClick={handleDecrementClick}
            handleResetClick={handleResetClick}
            counterValue={counterValue}
        />
    );
}

CounterContainer.propTypes = {
    countersCount: PropTypes.number.isRequired,
};
