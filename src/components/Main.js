import React from "react";
import dotenv from "dotenv";

dotenv.config();
export default function Main({ history }) {
  const onClick = () => {
    // history.push("/about");
    console.log(process.env.REACT_APP_KEY);
  };

  return (
    <div>
      <h1>Main</h1>
      <button onClick={onClick}>About</button>
    </div>
  );
}
