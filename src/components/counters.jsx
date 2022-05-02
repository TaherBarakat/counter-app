import { Button } from 'bootstrap';
import React, { Component } from 'react';
import Counter from './counter';
class counters extends Component {
    state = {
        counters: [
            { id: 1, value: 3 },
            { id: 2, value: 0 },
            { id: 3, value: 0 },
            { id: 4, value: 0 },
        ],
    };
    handleIncrement = (c) => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(c);
        counters[index] = { ...c };
        counters[index].value++;
        this.setState({ counters });
    };
    handleDelete = (counterId) => {
        const counters = this.state.counters.filter((c) => c.id !== counterId);
        this.setState({ counters });
    };
    handleReset = () => {
        const counters = this.state.counters.map((c) => {
            c.value = 0;
            return c;
        });
        this.setState({ counters });
    };

    render() {
        return (
            <div>
                <button onClick={this.handleReset} className="btn btn-primary">
                    reset
                </button>
                {this.state.counters.map((counter) => (
                    <Counter
                        key={counter.id}
                        onDelete={this.handleDelete}
                        onIncrement={this.handleIncrement}
                        counter={counter}
                    >
                        <h4>Title #{counter.id}</h4>
                    </Counter>
                ))}
            </div>
        );
    }
}

export default counters;
