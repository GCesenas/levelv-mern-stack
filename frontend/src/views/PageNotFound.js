import React from "react";
import Navigbar from "../components/Navbar";

export default function PageNotFound() {
  return (
    <>
      <Navigbar />
      <div className="container">
        <h1 className="nf-title">ERROR 404</h1>
        <div className="nf-info alert alert-primary">         
          <h1>Página no encontrada</h1>
          <p>Lo sentimos. La página que buscas no esta disponible o no existe</p>
        </div>
      </div>
    </>
  );
}
