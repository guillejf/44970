import React, { useContext } from 'react';
import ItemCount from './ItemCount';
import { contextoGeneral } from '../components/ContextContainer';

export default function ItemDetail({ producto }) {
  const { carrito, addItem } = useContext(contextoGeneral);
  function onAdd(cant) {
    addItem(producto, cant);
  }
  return (
    <div style={{ border: '2px solid violet', margin: '10px' }}>
      {producto.id ? (
        <>
          ID: {producto.id}
          <br />
          PRODUCTO: {producto.nombre}
          <br />
          CATEGORIA: {producto.categoria}
          <br />
          PRECIO: {producto.precio}
          <br />
          SOTCK: {producto.stock}
          <br />
          <ItemCount ini={1} max={producto.stock} onAdd={onAdd} />
        </>
      ) : (
        <>Loading...</>
      )}
    </div>
  );
}
