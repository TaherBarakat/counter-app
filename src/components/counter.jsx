import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0,
    };
    render() {
        return (
            <div>
                <span className={this.getBadgeColor()}>
                    {this.formatCount()}
                </span>
                <button className=" btn btn-secondary btn-sm">Increment</button>
            </div>
        );
    }
    getBadgeColor() {
        let classes = 'badge  m-2 badge-';
        classes += this.state.count === 0 ? 'warning' : 'primary';
        return classes;
    }

    formatCount() {
        return this.state.count === 0 ? 'zero' : this.state.count;
    }
}

export default Counter;
