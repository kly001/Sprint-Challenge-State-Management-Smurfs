import React from "react";

export const Smurf = (props) => {
  return (
    <div>
      <h3> Name:{props.name} </h3>
      <p> Age: {props.age} years old</p>
      <p> Height: {props.height} tall</p>
      <p>ID:  #{props.id}</p>
    </div>
  )
}
