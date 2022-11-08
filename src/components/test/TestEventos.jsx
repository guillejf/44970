import React, { useState } from "react";

export default function TestEventos() {
  const [tel, setTel] = useState("+5411 - 911332423");
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");

  function handleKeyDownTel(e) {
    //console.log(e);
    //e.preventDefault();
  }

  console.log(tel);

  return (
    <>
      Nombre:
      <input type="text" />
      Email:
      <input type="text" />
      tel:
      <input
        value={tel}
        onChange={(e) => setTel(e.target.value)}
        onKeyDown={handleKeyDownTel}
        type="text"
      />
    </>
  );
}
