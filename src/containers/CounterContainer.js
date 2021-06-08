import React, { Component } from "react";
import CounterView from "../views/Counter/CounterView";
import PropTypes from "prop-types";

class CounterContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counterValue: 0,
        };
        this.handleIncrementClick = this.handleIncrementClick.bind(this);
        this.handleDecrementClick = this.handleDecrementClick.bind(this);
        this.handleResetClick = this.handleResetClick.bind(this);
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        if (nextProps.isEven) {
            return this.setState((state) => ({
                counterValue: ++state.counterValue,
            }));
        }
        if (nextProps.isOdd) {
            return this.setState((state) => ({
                counterValue: --state.counterValue,
            }));
        }
    }

    handleIncrementClick(event) {
        this.setState((state) => ({
            counterValue: ++state.counterValue,
        }));
    }

    handleDecrementClick(event) {
        this.setState((state) => ({
            counterValue: --state.counterValue,
        }));
    }

    handleResetClick(event) {
        this.setState((state) => ({
            counterValue: 0,
        }));
    }

    render() {
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
};

export default CounterContainer;
