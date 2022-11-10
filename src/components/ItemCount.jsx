import React, { useState, useContext } from "react";
import { contextoGeneral } from "../components/ContextContainer";

export default function ItemCount({ ini, max, addItem }) {
  const { darkMode, setdarkMode } = useContext(contextoGeneral);
  const [count, setCount] = useState(ini);
  function restar() {
    if (count >= 2) {
      setCount(count - 1);
    }
  }

  function sumar() {
    if (count < max) {
      setCount(count + 1);
    }
  }

  return (
    <div>
      <button onClick={restar}>-</button>
      {count}
      <button onClick={sumar}>+</button>
      <br />
      <button onClick={() => addItem(count)}>AGREGAR</button>
    </div>
  );
}
