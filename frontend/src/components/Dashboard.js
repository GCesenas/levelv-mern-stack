import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Sidenav from "./Sidenav";
import { FaUserAlt, FaShoppingCart, FaMailBulk, FaShoppingBag } from "react-icons/fa";

import NavDash from "./NavDash";

import proxy from "../proxy";

export default function Dashboard() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [count, setCount] = useState([]);

  useEffect(() => {
    fetch(`${proxy.url}/getarticulos/${id}`)
      .then((response) => response.json())
      .then((json) => {
        setCount(json.data.articulos);
      });
  }, []);

  useEffect(() => {
    fetch(`${proxy.url}/buscarUser/${id}`)
      .then((response) => response.json())
      .then((json) => {
        setData(json.data);
      });
  }, []);

  var nombre = data.nombre;
  var apellidos = data.apellidos;
  var email = data.email;
  var articulos = count.length;

  var rutaBtn;
  var iconBtn;
  var msjBtn;

  if (articulos == 0) {
    articulos = "No hay articulos en el carrito";
    rutaBtn = "/tienda/";
    msjBtn = "Comprar Artículos ";
    iconBtn = <FaShoppingBag />;
  } else {
    rutaBtn = "/compras/";
    iconBtn = <FaShoppingCart />;
    msjBtn = "Ir al carrito ";
  }

  return (
    <>
      <NavDash />
      <div className="container-fluid">
        <div className="row">
          <Sidenav />
          <div className="col-sm-12 col-md-8 col-lg-9">
            <div className="container">
              <div className="row">
                <div className="u-info card-block px-6 col-12 mt-0">
                  <h4 className="tit card-title dispenser-title mt-2">Dashboard de usuario</h4>
                  <h4 className="dispenser-subtitle">Información de Usuario</h4>
                </div>
                <div className="col-sm-12 col-md-10 col-lg-3 u-info ug-1">
                  <strong>
                    <FaUserAlt />
                    <big> Nombre</big>
                  </strong>
                  <p className="u-info-p">{`${nombre}  ${apellidos}`}</p>
                </div>
                <div className="col-sm-12 col-md-10 col-lg-3 u-info ug-2">
                  <strong>
                    <FaMailBulk />
                    <big> Email</big>
                  </strong>
                  <p className="u-info-p">{email}</p>
                </div>
                <div className="col-sm-12 col-md-10 col-lg-3 u-info ug-3">
                  <strong>
                    <FaShoppingCart />
                    <big> Artículos en Carrito</big>
                  </strong>
                  <p className="u-info-p"> {articulos} </p>
                  <a href={rutaBtn + id} className="btn btn-outline-light btn-block">
                    {msjBtn}
                    {iconBtn}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
