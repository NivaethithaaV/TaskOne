import React, { Component } from "react";

export class ClassClick extends Component {
  handleClick = () => {
    document.getElementById("i1").innerHTML = "Hi iam superman";
  };
  render() {
    return (
      <div>
        <h1 id="i1">Hi i am batman</h1>
        <button onClick={this.handleClick}>Change content</button>
      </div>
    );
  }
}

export default ClassClick;
