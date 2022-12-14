import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    imgeUrl: "https://picsum.photos/200",
  };
  render() {
    return (
      <React.Fragment>
        <h1>Sagara Driving School</h1>
        <img src={this.state.imgeUrl} alt="" />
        <span>{this.formatCount()}</span>

        <button type="button" class="btn btn-success">
          counter
        </button>
      </React.Fragment>
    );
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
