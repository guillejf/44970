import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { contextoGeneral } from "../components/ContextContainer";

export default function Item({ item }) {
  const { darkMode, setdarkMode } = useContext(contextoGeneral);
  return (
    <div
      style={{
        border: "2px solid yellow",
        margin: "10px",
        color: darkMode ? "white" : "black",
        backgroundColor: darkMode ? "black" : "white",
      }}
      key={item.id}
    >
      {JSON.stringify(item)}
      <Link to={"/item/" + item.id}>IR AL ITEM</Link>
      <br />
      <br />
      <button onClick={() => setdarkMode(!darkMode)}>CAMBIAR DAK MODE</button>
    </div>
  );
}
