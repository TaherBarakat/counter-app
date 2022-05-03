import React, { Component } from 'react';

class Counter extends Component {
    render() {
        return (
            <div>
                <div className="row ">
                    <div className="col-1">
                        <span className={this.getBadgeColor()}>
                            {this.formatCount()}
                        </span>
                    </div>
                    <div className="col">
                        <button
                            onClick={() =>
                                this.props.onIncrement(this.props.counter)
                            }
                            className=" btn btn-secondary btn-sm m-2"
                        >
                            +
                        </button>
                        <button
                            onClick={() =>
                                this.props.onDecrement(this.props.counter)
                            }
                            className="btn btn-secondary btn-sm m-2"
                            disabled={this.buttonDisabled()}
                        >
                            -
                        </button>

                        <button
                            onClick={() =>
                                this.props.onDelete(this.props.counter.id)
                            }
                            className="btn btn-danger btn-sm m-2"
                        >
                            *
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    getBadgeColor() {
        let classes = 'badge  m-2 badge-';
        classes += this.props.counter.value === 0 ? 'warning' : 'primary';
        return classes;
    }

    formatCount() {
        const { value } = this.props.counter;
        return value === 0 ? 'zero' : value;
    }

    buttonDisabled() {
        if (this.props.counter.value === 0) {
            return 'true';
        }
    }
}
export default Counter;
