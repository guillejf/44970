import React from "react";
import ItemCount from "./ItemCount";

export default function ItemDetail({ producto }) {
  function addItem(x) {
    alert("quiere agregar " + x + " de este item: " + producto.name);
  }
  return (
    <div style={{ border: "2px solid violet", margin: "10px" }}>
      {producto.id ? (
        <>
          ID: {producto.id}
          <br />
          PRODUCTO: {producto.name}
          <br />
          CATEGORIA: {producto.category}
          <br />
          PRECIO: {producto.precio}
          <br />
          SOTCK: {producto.stock}
          <br />
          <ItemCount ini={1} max={producto.stock} addItem={addItem} />
        </>
      ) : (
        <>Loading...</>
      )}
    </div>
  );
}
