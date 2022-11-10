import React, { useState, createContext } from "react";

export const contextoGeneral = createContext();

export default function ContextContainer({ children }) {
  const [darkMode, setdarkMode] = useState(false);
  const x = 10;
  function algo() {}

  /* 
  const [carrito, set carrito] = useState([]);
  
  function addItem(item, quantity) // agregar cierta cantidad de un ítem al carrito
function removeItem(itemId) // Remover un item del cart por usando su id
function clear() // Remover todos los items
function isInCart: (id) => true|false 

<contextoGeneral.Provider value={{ addItem, removeItem, clear, isInCart }}>
*/

  return (
    <contextoGeneral.Provider value={{ darkMode, setdarkMode, x, algo }}>
      {children}
    </contextoGeneral.Provider>
  );
}
