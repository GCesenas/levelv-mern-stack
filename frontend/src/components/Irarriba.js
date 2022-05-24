import React, { useState } from "react";

import arriba from "../assets/images/arriba.gif";

import "../assets/css/irarriba.css";

export default function Irarriba() {

  const [irarriba, mostrarirarriba] = useState(false);

  const mostrarBtn = () => {
    if (window.scrollY >= 80) {
        mostrarirarriba(true);
    } else {
        mostrarirarriba(false);
    }
  }

    function irArriba () {
      window.scrollTo({
          top: 0,
          behavior: "smooth"
      });
  }

  window.addEventListener('scroll', mostrarBtn);

  return (
    <>
    <button className={irarriba ? 'irarriba mostrar' : 'irarriba' } onClick={irArriba}>
      <img className="irarribagif" src={ arriba } alt="" />
    </button>
    </>
  );
}