import React, { useState, useEffect } from "react";
import Spell from "./Spell";
import { Link } from "react-router-dom";
import dotenv from "dotenv";

dotenv.config();
const API_KEY = process.env.REACT_APP_API_KEY;
const URL = `https://www.potterapi.com/v1/spells?key=${API_KEY}`;

export default function Spells() {
  const [spells, setSpells] = useState([]);
  useEffect(() => {
    getSpells();
  }, []);

  const getSpells = async () => {
    const data = await fetch(URL);
    const json = await data.json();
    setSpells(json);
  };

  return (
    <div>
      <h1>Spells</h1>
      {spells.length === 0 ? (
        ""
      ) : (
        <ul>
          {spells.map(({ spell, _id }) => {
            return (
              <li key={_id}>
                <Link to={{ pathname: `/spell/${_id}`, state: { spells } }}>
                  <Spell spell={spell} />
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
