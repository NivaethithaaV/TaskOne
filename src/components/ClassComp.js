import React, { Component } from "react";

class ClassComp extends Component {
  constructor() {
    super();
    this.state = {
      name: "jet airways",
      date: "2 October",
      price: 6500,
    };
  }

  render() {
    return (
      <div>
        <h1>Iam class component</h1>
        <p>Iam paragraph inside component</p>
        <h1>
          Hi I am travelling in {this.state.name} on {this.state.date} worth
          rupees {this.state.price}
        </h1>
      </div>
    );
  }
}

export default ClassComp;
