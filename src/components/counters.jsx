import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };
  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };
  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };
  handleDelete = counterId => {
    //console.log("Delete Called", counterId);
    const counters = this.state.counters.filter(c => c.id !== counterId);
    // this.setState({ counters: counters }); as name are same you can write this like below;
    this.setState({ counters });
  };

  render() {
    return (
      <div>
        {/* <Counter />
        <Counter />
        <Counter />
        <Counter /> */}
        <button onClick={this.handleReset} className="btn-primary btn-sm m-2">
          Reset
        </button>
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            // value={counter.value}
            // id={counter.id}
            // selected={counter.selected}
            counter={counter}
          >
            {/* <h4>Counter # {counter.id}</h4> */}
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
