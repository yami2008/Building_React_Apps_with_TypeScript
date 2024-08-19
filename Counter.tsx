import React, { Component } from 'react';

// Step 2: Define an interface for the state
interface CounterState {
    count: number; // The 'count' state is expected to be a number
}

// Step 3: Convert the class component to TypeScript
class Counter extends Component<{}, CounterState> {
    // Step 3a: Initialize the state with the correct type
    state: CounterState = {
        count: 0
    };

    // Step 4: Type the increment method
    increment = (): void => {
        this.setState({ count: this.state.count + 1 });
    };

    render() {
        return (
            <div>
                <p>Count: {this.state.count}</p>
                <button onClick={this.increment}>Increment</button>
            </div>
        );
    }
}

export default Counter;
