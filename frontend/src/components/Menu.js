import React from "react";
import { useParams } from "react-router-dom";

import "../assets/css/App.css";
import {} from "react-bootstrap";

import img from "../assets/images/dashImg.png";
import img1 from "../assets/images/carros.png";
import img2 from "../assets/images/prototipo.png";

import NavDash from "./NavDash";
import proxy from "../proxy";

export default function Menu() {
  const { id } = useParams();

  return (
    <>
      <NavDash />
      <div className="container-fluid">
        <h1 className="menu-title">Menú Principal</h1>

        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 mt-3 mb-3">
              <a href={"/dashboard/" + id} className="c-link">
                <div className="c-menu">
                  <img className="card-img" src={img} />
                  <h5 className="c-title">Resúmen de Usuario</h5>
                </div>
              </a>
            </div>
            <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 mt-3 mb-3">
              <a href={"/compras/" + id} className="c-link">
                <div className="c-menu">
                  <img className="card-img" src={img1} />
                  <h5 className="c-title">Carrito de Compras</h5>
                </div>
              </a>
            </div>
            <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 mt-3 mb-3">
              <a href={"/amplistein/" + id} className="c-link">
                <div className="c-menu">
                  <img className="card-img" src={img2} />
                  <h5 className="c-title">Datos de prototipos</h5>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
