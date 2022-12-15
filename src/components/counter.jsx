import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 4,
    tags: ["tag1", "tag2", "tag3"],
    imgeUrl: "https://picsum.photos/200",
  };

  styles = {
    fontSize: 25,
    fontWeight: "bold",
  };

  render() {
    return (
      <div>
        <h1>Sagara Driving School</h1>
        <img src={this.state.imgeUrl} alt="" />
        <span style={this.styles}>{this.formatCount()}</span>

        <button type="button" className={this.getButtonClasses()}>
          counter
        </button>
        <ul>
          {this.state.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>
    );
  }

  getButtonClasses() {
    let classes = "btn btn-sm btn-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
