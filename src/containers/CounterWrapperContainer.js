import React, { Component } from "react";
import CounterWrapperView from "../views/CounterWrapper/CounterWrapperView";

class CounterWrapperContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counterCount: 1,
            isEven: false,
            isOdd: false,
        };
        this.handleAddCounterClick = this.handleAddCounterClick.bind(this);
        this.handleRemoveCounterClick =
            this.handleRemoveCounterClick.bind(this);
        this.handleRestartCountersClick =
            this.handleRestartCountersClick.bind(this);
    }

    handleAddCounterClick(event) {
        this.setState((state) => ({
            counterCount: ++state.counterCount,
            isEven: true,
        }));
    }

    handleRemoveCounterClick(event) {
        if (this.state.counterCount > 1) {
            this.setState((state) => ({
                counterCount: --state.counterCount,
                isOdd: true,
            }));
        }
    }

    handleRestartCountersClick(event) {
        this.setState((state) => ({
            counterCount: 1,
        }));
    }

    componentDidUpdate() {
        console.log("componentDidUpdate in CounterWrapperContainer");
        if (this.state.isEven || this.state.isOdd) {
            this.setState(() => ({
                isEven: false,
                isOdd: false,
            }));
        }
    }

    render() {
        console.log("render in CounterWrapperContainer");
        return (
            <CounterWrapperView
                handleAddCounterClick={this.handleAddCounterClick}
                handleRemoveCounterClick={this.handleRemoveCounterClick}
                handleRestartCountersClick={this.handleRestartCountersClick}
                counterCount={this.state.counterCount}
                isEven={this.state.isEven}
                isOdd={this.state.isOdd}
            />
        );
    }
}

export default CounterWrapperContainer;
