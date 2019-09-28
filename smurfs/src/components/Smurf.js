import React from "react";

export const Smurf = (props) => {
  return (
    <div className="smurf-info">
      <h2>{props.name} </h2>
      <p><strong>Age:  </strong>{props.age} years old</p>
      <p><strong>Height:  </strong>{props.height} tall</p>
      <p><strong>ID#:  </strong>{props.id}</p>
    </div>
  )
}
