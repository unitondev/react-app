import React, { Component } from "react";
import CounterWrapperView from "../views/CounterWrapper/index";

class CounterWrapperContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counterArray: [0],
        };
        this.handleAddCounterClick = this.handleAddCounterClick.bind(this);
        this.handleRemoveCounterClick =
            this.handleRemoveCounterClick.bind(this);
        this.handleRestartCountersClick =
            this.handleRestartCountersClick.bind(this);
    }

    componentDidMount() {}

    handleAddCounterClick(event) {
        this.setState((state) => ({
            counterArray: state.counterArray.concat(0),
        }));
    }

    handleRemoveCounterClick(event) {
        if (this.state.counterArray.length > 1) {
            this.setState((state) => ({
                counterArray: state.counterArray.slice(
                    0,
                    state.counterArray.length - 1
                ),
            }));
        }
    }

    handleRestartCountersClick(evet) {
        this.setState((state) => ({
            counterArray: (state.counterArray = [0]),
        }));
    }

    render() {
        return (
            <CounterWrapperView
                handleAddCounterClick={this.handleAddCounterClick}
                handleRemoveCounterClick={this.handleRemoveCounterClick}
                handleRestartCountersClick={this.handleRestartCountersClick}
                counterArray={this.state.counterArray}
            />
        );
    }
}

export default CounterWrapperContainer;
