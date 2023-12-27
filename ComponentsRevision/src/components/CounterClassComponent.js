import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
class CounterClassComponent extends React.Component {
  constructor(props) {
    super(props);
    console.log("----In Constructor Function of CounterClassComponent----");
    this.state = {
      count: 0, //count state is defined
      name: "Govinda",
    };
  }
  //we will first increment when an event occurs (clicking is an event we are using)
  increment = () => {
    this.setState({ ...this.state, count: this.state.count + 1 }, () => {
      console.log(this.state.count);
    });
  };
  decrement = () => {
    this.setState({ ...this.state, count: this.state.count - 1 });
    console.log(this.state.count);
  };
  resetClicks = () => {
    this.setState({ ...this.state, count: 0 });
  };
  render() {
    console.log("----In Render function of Counter Class Component----");
    return (
      <div>
        {this.state.count > 0 ? (
          this.state.count <= 1 ? (
            <h1>
              <label for="inc">Bless You</label>
            </h1>
          ) : (
            <h1>Button clicked {this.state.count - 1} times</h1>
          )
        ) : (
          <h1>
            <label for="inc">Click Me please</label>
          </h1>
        )}
        <button
          type="button"
          className="btn btn-success"
          name="btn"
          id="inc"
          onClick={this.increment}
        >
          Increment
        </button>
        <button
          type="button"
          className="btn btn-primary"
          name="btn"
          id="dec"
          onClick={this.decrement}
        >
          Decrement
        </button>
        <button
          type="button"
          className="btn btn-info"
          name="btn"
          id="rest"
          onClick={this.resetClicks}
        >
          Reset Me
        </button>
      </div>
    );
  }
}
export default CounterClassComponent;
