import React, { useState, useEffect } from "react";
import CartWidget from "./CartWidget";

export default function Navbar({ conBoton, color, funcionLogin }) {
  // let colorx = "#dddddd";

  const [colorx, setColorx] = useState("#dddddd");
  const [cont, setCont] = useState(0);
  const [categoria, setCategoria] = useState("todas");

  //CICLOS DE VIDA EN REACT
  //NACIMIENTO - MONTAJE o MOUNT // EL PRIMER PINTADO
  //VIDA - CAMBIOS               // CADA VEZ QUE PINTO O RENDERIZO
  //MUERTE - DESMONTAJE          // RETIRO EL COMPONENTE

  //LISTADO CON FILTRO
  //FETCH //RECUPERAR DEL LOCAL STORAGE
  useEffect(() => {
    //MONTAJE -NACE
    console.log("pimer render o montaje");

    //DESMONTAJE - MUERTE
    return () => {
      console.log("muere");
    };
  }, []);

  //VIDA Y VA CAMBIANDO
  useEffect(() => {
    //array.filter(categoria)
  }, [categoria]);

  console.log("se ejecuto el componente");
  console.log("pongo un color" + colorx);
  console.log("pongo el contador" + cont);

  return (
    <div
      style={{ backgroundColor: colorx }}
      onClick={() => {
        //alert(colorx);
        //colorx = "#000000";
        setColorx("#000000");
        //pone el color en negro en la variable
        //causa el render/pintado/ejecucion/dibuja de nuevo del componente

        console.log("cambio el color a #000000");
      }}
    >
      <button
        onClick={() => {
          //if....
          setCont(cont + 1);
        }}
      >
        SUMAR AL CONTADOR: {cont}
      </button>
      LOGO
      <ul>
        <li>
          <a href="http://google.com">ir a google</a>
        </li>
        <li>
          <a href="http://google.com">ir a google</a>
        </li>
        <li>
          <a href="http://google.com">ir a google</a>
        </li>
        <li>
          <a href="http://google.com">ir a google</a>
        </li>
      </ul>
      {conBoton ? <button onClick={() => funcionLogin()}>LOGIN</button> : null}
      <CartWidget />
    </div>
  );
}
