import React from "react";

export default function TestPromesas() {
  /*   let array = ["guille", "romina", "gian"];
  if (array.length > 0) {
    console.log(array);
  } else {
    console.log("che hay un errror el array no esat cargado");
  } */

  //HAY UNA DEUDA
  /*   let pago;
  if (pago) {
    console.log("genial porque la persona pago");
  } else {
    console.log("no pago y no tengo nada basicamente");
  } */
  useEffect(() => {
    let arrayDeProductos = [];

    let pago = new Promise((res, rej) => {
      setTimeout(() => {
        res([
          { id: 100, name: "pelota" },
          { id: 100, name: "arco de futbol" },
        ]);
        //rej("TODO MAL");
      }, 2000);
    });

    pago
      .then((res) => {
        //console.log(res);
        //setState(res)
      })
      .catch((e) => {
        console.error(e);
      })
      .finally(() => {
        console.log("aca si que termino todo!");
      });
  }, [third]);

  return (
    <div>
      <div>{/* <ItemList res={res}/> */}</div>
    </div>
  );
}
