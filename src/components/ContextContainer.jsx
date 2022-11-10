import React, { useState, createContext } from "react";

export const contextoGeneral = createContext();

export default function ContextContainer({ children }) {
  const [darkMode, setdarkMode] = useState(false);
  const x = 10;
  function algo() {}

  /* 
  const [carrito, set carrito] = useState([]);
  
  addItem(item, quantity) // agregar cierta cantidad de un ítem al carrito
removeItem(itemId) // Remover un item del cart por usando su id
clear() // Remover todos los items
isInCart: (id) => true|false */

  return (
    <contextoGeneral.Provider value={{ darkMode, setdarkMode, x, algo }}>
      {children}
    </contextoGeneral.Provider>
  );
}
