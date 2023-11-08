import React, { Component } from "react";

class StateChange extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Nivaethithaa",
      id: 10,
    };
  }
  handleState = () => {
    this.setState({
      name: "John",
      id: 20,
    });
  };
  render() {
    return (
      <div>
        <h1>
          Hi my name is {this.state.name} and my id is {this.state.id}
        </h1>
        <button onClick={this.handleState}>change state</button>
      </div>
    );
  }
}

export default StateChange;
