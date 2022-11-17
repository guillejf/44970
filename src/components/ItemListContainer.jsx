import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import './ItemListContainer';
import { productosHC } from './data.js';
import ItemList from './ItemList';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';

export default function ItemListContainer() {
  console.log('render de item list container');
  const { idcategory } = useParams();

  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    let productos;
    if (idcategory) {
      productos = query(collection(db, 'productos'), where('categoria', '==', idcategory));
    } else {
      productos = collection(db, 'productos');
    }

    getDocs(productos).then((res) => {
      console.log(res.docs);

      //YA SOY UN NINJA! DENME UN MES SOLO PARA PRACTICAR!
      const arrayNorm = res.docs.map((element) => {
        return { id: element.id, name: element.data().nombre, category: element.data().categoria, precio: element.data().precio, stock: element.data().stock };
      });

      //BECOMING A NINJA
      //  const arrayNorm = res.docs.map((element) => {
      //     return { id: element.id, ...element.data() };
      //   });

      //FULL NINJA
      //const arrayNorm = res.docs.map((element) => ({ id: element.id, ...element.data() }));

      console.log(arrayNorm);
      setProductos(arrayNorm);

      /* if (idcategory) {
        setProductos(arrayNorm.filter((item) => item.category == idcategory));
      } else {
        setProductos(arrayNorm);
      } */
    });
  }, [idcategory]);

  return (
    <div style={{ border: '2px solid red', margin: '10px' }}>
      <ItemList productos={productos} />;
    </div>
  );
}
