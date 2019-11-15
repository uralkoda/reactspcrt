import React, { Component } from 'react';

class Counter extends Component {

    // CONSTRUCTOR() {
    //     SUPER();
    //     THIS.HANDELINCREMENT = THIS.HANDELINCREMENT.BIND(THIS);
    // }
    styles = {
        fontSize: 10,
        fontWeight: "bold"
    }
    renderTags() {
        if (this.props.counter.tags.length === 0) return <p>There are no tags!</p>
        return <ul>{this.props.counter.tags.map(tag => <li key={tag}> {tag} </li>)}</ul>
    }
    //handelDelete = (product) => {
    //  console.log(product.id);
    //}


    render() {
        console.log('props', this.props)
        return (
            <React.Fragment>
                {this.props.children}
                <img src={this.props.counter.imageUrl} alt="" />
                <span style={this.styles} className={this.getBadgeClasses()}> {this.formatCount()} </span>
                <button onClick={() => this.props.onIncrement(this.props.counter)} style={{ fontSize: 15, fontWeight: "bold" }} className="btn btn-secondary btn-sm">Increment</button>
                <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
                {this.props.counter.tags.length === 0 && "plz create a new list"}
                {this.renderTags()}
            </React.Fragment>
        );
    }

    formatCount() {
        const { value } = this.props.counter;
        return value === 0 ? <span>Zero</span> : value;
    }
    getBadgeClasses() {
        let classes = "badge m-2 badge-"
        classes += (this.props.counter.value === 0) ? "warning" : "primary";
        return classes
    }

}

export default Counter;