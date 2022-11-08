import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./ItemListContainer";
import { productosHC } from "./data.js";
import ItemList from "./ItemList";
export default function ItemListContainer({ greeting }) {
  const { idcategory } = useParams();

  const [productos, setProductos] = useState([]);

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
    <div style={{ border: "2px solid red", margin: "10px" }}>
      <ItemList productos={productos} />;
    </div>
  );
}
