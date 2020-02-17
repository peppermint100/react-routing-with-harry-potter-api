import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";

export default function SpellDetail() {
  const data = useLocation().state.spells;
  const id = useParams();
  const [spell, setSpell] = useState([]);

  const getSpell = () => {
    const spellData = data.filter(data => data._id === id.id);
    setSpell(spellData);
  };

  useEffect(() => {
    getSpell();
  }, []);
  return (
    <div>
      <h1>SpellDetail</h1>
      {typeof spell[0] === "undefined" ? (
        ""
      ) : (
        <section>
          <p>spell : {spell[0].spell}</p>
          <p>type : {spell[0].type}</p>
          <p>effect : {spell[0].effect}</p>
        </section>
      )}
    </div>
  );
}
