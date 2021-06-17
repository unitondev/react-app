import React, { Component } from "react";
import CounterView from "../views/Counter/CounterView";
import PropTypes from "prop-types";

class CounterContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counterValue: 0,
        };
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        console.log("UNSAFE_componentWillReceiveProps in CounterContainer");
        if (nextProps.countersCount > this.props.countersCount) {
            this.handleEvenValue();
        }
        if (nextProps.countersCount < this.props.countersCount) {
            this.handleOddValue();
        }
    }

    incrementValue() {
        this.setState((state) => ({
            counterValue: state.counterValue + 1,
        }));
    }

    decrementValue() {
        this.setState((state) => ({
            counterValue: state.counterValue - 1,
        }));
    }

    handleIncrementClick = (event) => {
        this.incrementValue();
    };

    handleDecrementClick = (event) => {
        this.decrementValue();
    };

    handleResetClick = (event) => {
        this.setState((state) => ({
            counterValue: 0,
        }));
    };

    handleEvenValue() {
        if (this.state.counterValue % 2 === 0) {
            this.incrementValue();
        }
    }

    handleOddValue() {
        if (this.state.counterValue % 2 === 1) {
            this.decrementValue();
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate in CounterContainer");
        if (nextState.counterValue === this.state.counterValue) {
            console.log(
                "shouldComponentUpdate in CounterContainer returns false"
            );
            return false;
        }
        console.log("shouldComponentUpdate in CounterContainer returns true");
        return true;
    }

    render() {
        console.log("render in CounterContainer");
        return (
            <CounterView
                handleIncrementClick={this.handleIncrementClick}
                handleDecrementClick={this.handleDecrementClick}
                handleResetClick={this.handleResetClick}
                counterValue={this.state.counterValue}
            />
        );
    }
}

CounterContainer.propTypes = {
    isEven: PropTypes.bool,
    isOdd: PropTypes.bool,
    countersCount: PropTypes.number.isRequired,
};

export default CounterContainer;
