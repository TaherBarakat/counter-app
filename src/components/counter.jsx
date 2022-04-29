import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0,
        tags: ['tag1', 'tag2', 'tag3'],
    };
    renderTags() {
        if (this.state.tags.length === 0) return <p>no tags</p>;
        return (
            <ul>
                {this.state.tags.map((tag) => (
                    <li key={tag}> {tag}</li>
                ))}
            </ul>
        );
    }

    render() {
        return (
            <div>
                {/* <span className={this.getBadgeColor()}>
                    {this.formatCount()}
                </span>
                <button className=" btn btn-secondary btn-sm">Increment</button> */}
                {this.state.tags.length === 0 && <p>ll</p>}
                {this.renderTags()}{' '}
            </div>
        );
    }
    // getBadgeColor() {
    //     let classes = 'badge  m-2 badge-';
    //     classes += this.state.count === 0 ? 'warning' : 'primary';
    //     return classes;
    // }

    // formatCount() {
    //     return this.state.count === 0 ? 'zero' : this.state.count;
    // }
}

export default Counter;
