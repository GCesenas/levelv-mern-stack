import React from "react";
import { useParams } from "react-router-dom";
import { FaAddressCard, FaShoppingBag, FaShoppingCart } from "react-icons/fa";

import logo from "../assets/images/logowhite.svg";

export default function Sidenav() {
  const { id } = useParams();

  return (
    <div className="col-sm-12 col-md-4 col-lg-3 col-xl-2">
      <nav className="sidenav">
        <a href={"/menu/" + id} className="d-title">
          <img src={logo} />
        </a>
        <p className="d-sep">Secciones</p>
        <hr className="d-line" />
        <ul>
          <li>
            <a href={`/dashboard/` + id}>
              <FaAddressCard /> Usuario
            </a>
          </li>
          <li>
            <a href={"/tienda/" + id}>
              <FaShoppingBag /> Tienda
            </a>
          </li>
          <li>
            <a href={`/compras/` + id}>
              <FaShoppingCart /> Carrito
            </a>
          </li>
          <p className="d-sep-2">Prototipos</p>
          <hr className="d-line-s" />
          <li>
            <a href={"/amplistein/" + id}>Amplistein</a>
          </li>
          <li>
            <a href={"/ardbank/" + id}>Ardu Bank</a>
          </li>
          <li>
            <a href={"/smartpot/" + id}>Smart Pot</a>
          </li>
          <li>
            <a href={"/stingercar/" + id}>Stinger Car</a>
          </li>
          <li>
            <a href={"/dispensador/" + id}>Smart Dispenser</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
