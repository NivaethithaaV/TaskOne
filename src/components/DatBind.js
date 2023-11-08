import React, { Component } from "react";

class DatBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
    };
  }
  handleInput = (e) => {
    this.setState({
      name: e.target.value,
    });
  };
  render() {
    return (
      <div>
        <input type="text" onChange={this.handleInput} />
        <h1> Hi my name is {this.state.name}</h1>
      </div>
    );
  }
}

export default DatBind;
