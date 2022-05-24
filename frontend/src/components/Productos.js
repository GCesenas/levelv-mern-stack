import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import proxy from "../proxy";

import "../assets/css/App.css";
import "../assets/css/productos.css";
import { FaCartPlus } from "react-icons/fa";

import Swal from "sweetalert2";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

import amplistein from "../assets/images/ampl.png";
import ardubank from "../assets/images/bank.png";
import stingerCar from "../assets/images/car.png";
import pot from "../assets/images/pot.png";
import dispenser from "../assets/images/dispensador.png";
import imgNF from "../assets/images/ImgNF.jpg";

export default function Productos() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const notify = () => toast("Wow so easy!");

  useEffect(() => {
    fetch(`${proxy.url}/productos/`)
      .then((response) => response.json())
      .then((json) => setData(json.data));
  }, []);

  return (
    <>
      <div className="container">
        <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
        <div className="">
          <div className="row">
            {data.map((producto) => (
              <Producto pid={producto._id} uid={id} nombre={producto.nombre} descripcion={producto.descripcion} precio={producto.precio} status={producto.status} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

const Producto = ({ pid, uid, nombre, descripcion, precio, status }) => (
  <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 mt-3 mb-3">
    <div className="card dark">
      <div className="card-header">NUEVO</div>
      <a onClick={() => AlertInfo(nombre, descripcion)} data-target="">
        <img className="card-img-top img-prod" src={loadImg(nombre)} alt="Card image cap" />
      </a>
      <div className="card-body">
        <h5 className="card-title">{nombre}</h5>
        <big>
          <strong> ${precio}</strong>
        </big>
        <small>MXN</small>
        <p className="card-text">{descripcion}</p>
      </div>
      <button
        onClick={() => {
          fetch(proxy.url + `/addcarrito/${uid}/${pid}/${nombre}/${descripcion}/${precio}/`)
            .then((response) => response.json())
            .then((json) => toast(json.mensaje));
        }}
        className="btn btn-primary btn-block"
      >
        <FaCartPlus /> Añadir al carrito
      </button>
      <div className="card-footer">{status} en LEVEL V</div>
    </div>
  </div>
);

function AlertInfo(nombre, descripcion) {
  Swal.fire({
    title: nombre,
    text: descripcion,
    imageUrl: loadImg(nombre),
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: nombre,
  });
}

function loadImg(nom) {
  switch (nom) {
    case "Amplistein":
      if (amplistein) {
        return amplistein;
      } else {
        return imgNF;
      }

    case "ArduBank":
      if (ardubank) {
        return ardubank;
      } else {
        return imgNF;
      }

    case "StingerCar":
      if (stingerCar) {
        return stingerCar;
      } else {
        return imgNF;
      }

    case "Smart Dispenser":
      if (dispenser) {
        return dispenser;
      } else {
        return imgNF;
      }

    case "Smart Pot":
      if (pot) {
        return pot;
      } else {
        return imgNF;
      }

    default:
      break;
  }
}


