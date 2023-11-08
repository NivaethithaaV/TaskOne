import React from "react";

function FuncComp(props) {
  console.log(props);
  return (
    <div>
      <h1> Hello world, I am functional component</h1>
      <p> Hello i am paragraph inside funcComp</p>
      <h1>{props.name}</h1>
      <h1>{props.profession}</h1>
      <h1>{props.age}</h1>
    </div>
  );
}

export default FuncComp;
