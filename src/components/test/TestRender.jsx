import React, { useState, useEffect } from 'react';
import Isla from './Isla';

export default function TestRender() {
  const [name, setName] = useState('si ya tengo algo');

  console.log('render test render');

  return (
    <>
      <input onChange={(e) => setName(e.target.value)} value={name} />
      <Isla />
    </>
  );
}
