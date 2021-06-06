import React, { Component } from "react";
import CounterView from "../views/Counter/index";
import PropTypes from "prop-types";

class CounterContainer extends React.Component {
    constructor({ number }) {
        super({ number });
        this.state = {
            counterValue: number,
        };
        this.handleIncrementClick = this.handleIncrementClick.bind(this);
        this.handleDecrementClick = this.handleDecrementClick.bind(this);
        this.handleResetClick = this.handleResetClick.bind(this);
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
        this.setState(() => ({
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
    number: PropTypes.number.isRequired,
};

export default CounterContainer;
