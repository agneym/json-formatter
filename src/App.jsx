/* eslint-disable */
import React, { Component } from "react";
import "whatwg-fetch";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ""
    };
  }
  handleClick = (event) => {
    event.preventDefault();
  }
  render() {
    return (
      <div>
        <p>App</p>
        <button onClick={this.handleClick}>Click</button>
      </div>
    );
  }
}
export default App;
