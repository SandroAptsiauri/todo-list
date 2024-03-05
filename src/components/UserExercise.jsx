import React from "react";

export default function UserExercise({ Todo, action, index }) {
  return (
    <div>
      <p>{Todo}</p>
      {Todo === "" ? "" : <button onClick={() => action(index)}>Done</button>}
    </div>
  );
}
