import { doc, getDoc, getFirestore } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';

export default function ItemDetailContainer({ greeting }) {
  const { iditem } = useParams();

  const [producto, setProducto] = useState({});

  useEffect(() => {
    const db = getFirestore();

    let docSinNorm = doc(db, 'productos', iditem);

    getDoc(docSinNorm).then((item) => {
      setProducto({ id: item.id, ...item.data() });
    });
  }, [iditem]);

  return (
    <div style={{ border: '2px solid black', margin: '10px' }}>
      <ItemDetail producto={producto} />
    </div>
  );
}
