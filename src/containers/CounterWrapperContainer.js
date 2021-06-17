import React, { Component } from "react";
import CounterWrapperView from "../views/CounterWrapper/CounterWrapperView";

class CounterWrapperContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            countersCount: 1,
        };
    }

    handleAddCounterClick = (event) => {
        this.setState((state) => ({
            countersCount: ++state.countersCount,
        }));
    };

    handleRemoveCounterClick = (event) => {
        if (this.state.countersCount > 1) {
            this.setState((state) => ({
                countersCount: --state.countersCount,
            }));
        }
    };

    handleRestartCountersClick = (event) => {
        this.setState((state) => ({
            countersCount: 1,
        }));
    };

    render() {
        console.log("render in CounterWrapperContainer");
        return (
            <CounterWrapperView
                handleAddCounterClick={this.handleAddCounterClick}
                handleRemoveCounterClick={this.handleRemoveCounterClick}
                handleRestartCountersClick={this.handleRestartCountersClick}
                countersCount={this.state.countersCount}
            />
        );
    }
}

export default CounterWrapperContainer;
