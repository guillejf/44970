import React, { useState, createContext } from 'react';
import { useEffect } from 'react';

export const contextoGeneral = createContext();

export default function ContextContainer({ children }) {
  const [carrito, setCarrito] = useState([]);

  function posInCart(id) {
    const pos = carrito.findIndex((item) => item.id == id);
    return pos;
  }

  function addItem(item, quantity) {
    const pos = posInCart(item.id);
    if (pos == -1) {
      setCarrito([...carrito, { ...item, quantity }]);
    } else {
      const carritoAux = [...carrito];
      carritoAux[pos] = { ...carritoAux[pos], quantity: carritoAux[pos].quantity + quantity };
      setCarrito(carritoAux);
    }
  }
  function removeItem(id) {
    setCarrito(carrito.filter((product) => product.id !== id));
  }
  function clear() {
    setCarrito([]);
  }

  return <contextoGeneral.Provider value={{ carrito, addItem, removeItem, clear }}>{children}</contextoGeneral.Provider>;
}
