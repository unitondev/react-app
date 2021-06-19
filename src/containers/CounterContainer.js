import React, { Component, useEffect, useMemo, useRef, useState } from "react";
import CounterView from "../views/Counter";
import PropTypes from "prop-types";

function CounterContainer(props) {
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

    const incrementValue = () => {
        console.log("fuck");
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
            this.decrementValue();
        }
    };

    const memoizedCounterElement = useMemo(
        () => (
            <CounterView
                handleIncrementClick={handleIncrementClick}
                handleDecrementClick={handleDecrementClick}
                handleResetClick={handleResetClick}
                counterValue={counterValue}
            />
        ),
        [counterValue]
    );

    return memoizedCounterElement;
}

CounterContainer.propTypes = {
    countersCount: PropTypes.number.isRequired,
};

export default CounterContainer;
