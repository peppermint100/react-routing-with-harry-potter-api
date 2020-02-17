import React, { useEffect } from "react";

export default function About({ history, location, match }) {
  useEffect(() => {
    console.log("history", history);
    console.log("location", location);
    console.log("match", match);
  });
  const onClick = () => {
    history.goBack();
  };
  return (
    <div>
      <h1>About</h1>
      <button onClick={onClick}>GoBack!</button>
    </div>
  );
}
