import React, { useEffect, useState } from "react";

export default function TestPokeApi() {
  //ItemDatailContainer (genera los datos es el padre contenedor)
  // tiene un useeffect que espera dos segundos hasta que la promesa...
  //... devuelve un producto (item) (objeto) para guardalo en un estado...
  //... luego paso por props el estado al hijo que solo...
  //... se encarga de mostrar: seria el ItemDetail.js

  const [arrayDePokes, setArrayDePokes] = useState([]);
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0")
      .then((res) => res.json())
      .then((resJson) => {
        console.log(resJson);
        setArrayDePokes(resJson.results);
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {
        console.log("ya termino todo!");
      });
  }, []);

  return (
    <div>
      {arrayDePokes.map((item, i) => (
        <div key={item.name}>
          <h2>{item.name}</h2>
          <p>url = {item.url}</p>
        </div>
      ))}
    </div>
  );
}
