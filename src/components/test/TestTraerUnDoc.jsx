import React from 'react';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

export default function TestTraerUnDoc() {
  const db = getFirestore();

  let docSinNorm = doc(db, 'productos', 'UlKP7Mp0QZOlf26oZE4o');

  getDoc(docSinNorm).then((item) => {
    console.log(item);
    //ACA ESTA LO QUE QUIERO YO
    console.log(item.id);
    console.log(item.data());
    //const docNorm = { id: item.id, name: item.data().nombre, category: item.data().categoria, precio: item.data().precio, stock: item.data().stock };
    const docNorm = { id: item.id, ...item.data() };

    console.log(docNorm);
  });

  /* const arrayNorm = res.docs.map((item) => {

        return { id: item.id, name: item.data().nombre, category: item.data().categoria, precio: item.data().precio, stock: item.data().stock };

      }); */

  return <div>TestTraerUnDoc</div>;
}
