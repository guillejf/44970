import React from "react";
import { Link } from "react-router-dom";
import Item from "./Item";
export default function ItemList({ productos }) {
  return (
    <div style={{ border: "2px solid green", margin: "10px" }}>
      {!productos.length && "Loading..."}
      {productos.map((item) => (
        <Item item={item} />
      ))}
    </div>
  );
}
