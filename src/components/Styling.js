import React from "react";
import "../components/styles.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
function Styling() {
  const style = {
    color: "red",
    backgroundColor: "blue",
  };
  return (
    <div>
      <h1 style={{ color: "red" }}> Hi i am inline styling component </h1>
      <p style={style}> I am internal css in react </p>
      <h1 id="h1"> Hi i am external styling component </h1>
      <h1 className="text-danger"> Hi iam bootstrap styling in component</h1>
    </div>
  );
}

export default Styling;
