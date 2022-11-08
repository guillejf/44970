import React from "react";
import { Link } from "react-router-dom";

export default function Item({ item }) {
  return (
    <div style={{ border: "2px solid yellow", margin: "10px" }} key={item.id}>
      {JSON.stringify(item)}
      <Link to={"/item/" + item.id}>IR AL ITEM</Link>
      <br />
      <br />
    </div>
  );
}
