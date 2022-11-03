import React from "react";
import { useState } from "react";
import "./ItemListContainer";
export default function ItemListContainer({ greeting }) {
  const [productos, setProductos] = useState([]);
  let productosHC = [
    { id: 100, name: "pelota", category: "deportes", precio: 100 },
    { id: 101, name: "arco", category: "deportes", precio: 100 },
    { id: 102, name: "pantalon", category: "deportes", precio: 100 },
    { id: 103, name: "vestido lola", category: "fiesta", precio: 200 },
    {
      id: 104,
      name: "cartera con diamantes",
      category: "fiesta",
      precio: 1000,
    },
  ];

  const productosPromise = new Promise((res, rej) => {
    setTimeout(() => {
      res(productosHC);
    }, 2000);
  });

  productosPromise.then((res) => setProductos(res));

  return (
    <div>
      {!productos.length && "Loading..."}
      {productos.map((item) => (
        <>
          {JSON.stringify(item)}
          <br />
          <br />
        </>
      ))}
    </div>
  );
}
