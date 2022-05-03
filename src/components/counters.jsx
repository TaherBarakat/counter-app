import React, { Component } from 'react';
import Counter from './counter';
class Counters extends Component {
    render() {
        const { onReset, onDelete, counters, onIncrement, onDecrement } =
            this.props;
        return (
            <div className="containe m-3">
                <button onClick={onReset} className="btn btn-primary">
                    reset
                </button>
                {counters.map((counter) => (
                    <Counter
                        key={counter.id}
                        onDelete={onDelete}
                        onIncrement={onIncrement}
                        counter={counter}
                        onDecrement={onDecrement}
                    >
                        <h4>Title #{counter.id}</h4>
                    </Counter>
                ))}
            </div>
        );
    }
}

export default Counters;
