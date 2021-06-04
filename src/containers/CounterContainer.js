import React, { Component } from "react";
import CounterView from "../views/Counter/index";

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

export default CounterContainer;
