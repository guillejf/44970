import React, { useState, useContext } from 'react';

export default function ItemCount({ ini, max, onAdd }) {
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
      <button onClick={() => onAdd(count)}>AGREGAR</button>
    </div>
  );
}
