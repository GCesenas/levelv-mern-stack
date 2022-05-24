import React from "react";
import "../assets/css/App.css";
import {} from "react-bootstrap";
import logo from "../assets/images/logowhite.svg";
import playstore from "../assets/images/playstore.png";

function generarAño() {
  let año = new Date().getFullYear();
  let leyenda = `Copyright © ${año} Derechos reservados <a href="#"> LEVEL V Software</a>.`;
  return { __html: leyenda };
}

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-4 ml-4">
            <img src={logo} className="logo-footer" />
          </div>

          <div className="col-6 col-md-3">
            <h6>Productos</h6>
            <ul className="footer-links">
              <li>
                <a href="/productos">Yamaha UNO Custom</a>
              </li>
              <li>
                <a href="/productos">Stinger-Car</a>
              </li>
              <li>
                <a href="/productos">SmartDispenser</a>
              </li>
              <li>
                <a href="/productos">AdruBank</a>
              </li>
              <li>
                <a href="/productos">Smart Flowerpot</a>
              </li>
            </ul>
          </div>

          <div className="col-6 col-md-3">
            <h6>Categorias</h6>
            <ul className="footer-links ">
              <li>
                <a href="/Home#acercade">Acerca de</a>
              </li>
              <li>
                <a href="/Home#equipo">Equipo</a>
              </li>
              <li>
                <a href="/productos">Productos</a>
              </li>
              <li>
                <a href="/Home#contacto">Contacto</a>
              </li>
              <li>
                <a href="/login">Dashboard</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-6 col-12">
              <p id="copy" className="copyright-text" dangerouslySetInnerHTML={generarAño()}></p>
            </div>
            <div className="col-md-4 col-sm-6 col-12">
              <a href="http://davidalvarezti.epizy.com/play_store_level_v/?i=1#" target="_blank">
                <img className="w-50" src={playstore} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
