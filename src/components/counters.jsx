import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    state = {
        counters: [
            { id: 1, value: 4, tags: ['tag1', 'tag2', 'tag3'], imageUrl: "https://via.placeholder.com/150.png/09f/fff%20C/O" },
            { id: 2, value: 0, tags: ['tag1', 'tag2', 'tag3'], imageUrl: "https://via.placeholder.com/150.png/09f/fff%20C/O" },
            { id: 3, value: 0, tags: ['tag1', 'tag2', 'tag3'], imageUrl: "https://via.placeholder.com/150.png/09f/fff%20C/O" },
            { id: 4, value: 0, tags: ['tag1', 'tag2', 'tag3'], imageUrl: "https://via.placeholder.com/150.png/09f/fff%20C/O" },
        ]
    }
    handelIncrement = (counter) => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counter[index] = { ...counter };
        counters[index].value++;
        this.setState({ counters });
    }
    handelDelete = (counterId) => {
        const counters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({ counters: counters })
    }
    handelReset = () => {

        const counters = this.state.counters.map(counter => { counter.value = 0; return counter });
        this.setState({ counters })

    }
    render() {
        return (
            <div >
                <button onClick={this.handelReset} className="btn btn-primary btn-sm m-2">Reset</button>
                {this.state.counters.length === 0 && "your card is empty"}
                {this.state.counters.map(counter =>
                    <Counter
                        key={counter.id}
                        counter={counter}
                        onDelete={this.handelDelete}
                        onIncrement={this.handelIncrement}
                    >
                        <h4>Counter # {counter.id}</h4>
                    </Counter>
                )}
            </div>
        );
    }
}

export default Counters;