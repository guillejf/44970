import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ItemListContainer";
export default function ItemListContainer({ greeting }) {
  const { idcategory } = useParams();

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

  useEffect(() => {
    // alert("cambio la categoria por eso salta de nuevo este efecto");
    const productosPromise = new Promise((res, rej) => {
      setTimeout(() => {
        res(productosHC);
      }, 2000);
    });

    productosPromise.then((res) => {
      if (idcategory) {
        setProductos(res.filter((item) => item.category == idcategory));
      } else {
        setProductos(res);
      }
    });
  }, [idcategory]);

  return (
    <div>
      {!productos.length && "Loading..."}
      {productos.map((item) => (
        <div key={item.id}>
          {JSON.stringify(item)}
          <br />
          <br />
        </div>
      ))}
    </div>
  );
}
