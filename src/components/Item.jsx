import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { contextoGeneral } from '../components/ContextContainer';

export default function Item({ item }) {
  console.log('render de item ');

  const { x } = useContext(contextoGeneral);

  return (
    <div key={item.id}>
      {JSON.stringify(item)}
      <Link to={'/item/' + item.id}>IR AL ITEM</Link>
      <br />
    </div>
  );
}
