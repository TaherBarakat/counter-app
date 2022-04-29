import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0,
        // tags: ['tag1', 'tag2', 'tag3'],
    };

    handleIncrement = (product) => {
        console.log(product);
        this.setState({ count: this.state.count + 1 });
    };

    // renderTags() {
    //     if (this.state.tags.length === 0) return <p>no tags</p>;
    //     return (
    //         <ul>
    //             {this.state.tags.map((tag) => (
    //                 <li key={tag}> {tag}</li>
    //             ))}
    //         </ul>
    //     );
    // }

    render() {
        return (
            <div>
                <span className={this.getBadgeColor()}>
                    {this.formatCount()}
                </span>
                <button
                    onClick={() => this.handleIncrement({ id: 1 })}
                    className=" btn btn-secondary btn-sm"
                >
                    Increment
                </button>
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
