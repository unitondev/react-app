import React, { Component, useState } from "react";
import CounterWrapperView from "../views/CounterWrapper";

export default function CounterWrapperContainer() {
    const [countersCount, setCountersCount] = useState(1);

    const handleAddCounterClick = () => {
        setCountersCount(countersCount + 1);
    };

    const handleRemoveCounterClick = () => {
        if (countersCount > 1) {
            setCountersCount(countersCount - 1);
        }
    };

    const handleRestartCountersClick = () => {
        setCountersCount(1);
    };

    return (
        <CounterWrapperView
            handleAddCounterClick={handleAddCounterClick}
            handleRemoveCounterClick={handleRemoveCounterClick}
            handleRestartCountersClick={handleRestartCountersClick}
            countersCount={countersCount}
        />
    );
}
