import React, { Component } from "react";
class Counter extends Component {
  state = {
    value: this.props.counter.value
  };
  // constructor() {
  // super();
  //this.handleIncrement = this.handleIncrement.bind(this);
  //}
  // handleIncrement = product => {      -- passing aurguments
  //   handleIncrement = () => {
  //     this.setState({ value: this.state.value + 1 });
  //   };
  //   doHandleIncrement = () => {     -- passing aurguments
  //     this.handleIncrement({ id: 1 });
  //   };
  render() {
    let classes = this.getBadgeClasses();
    return (
      <div>
        {/* to show children  */}
        {/* {this.props.children} */}
        {/* <h4>{this.props.id}</h4> */}
        <span className={classes}>{this.formatCount()}</span>
        <button
          //   onClick={() => this.handleIncrement({ id: 1 })}     -- passing aurguments
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    // classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}
export default Counter;
