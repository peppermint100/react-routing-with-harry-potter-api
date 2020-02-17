import React from "react";

export default function Main({ history }) {
  const onClick = () => {
    history.push("/about");
  };

  return (
    <div>
      <h1>Main</h1>
      <button onClick={onClick}>About</button>
    </div>
  );
}
