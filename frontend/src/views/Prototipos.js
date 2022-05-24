import React, { Suspense, lazy } from "react";
import {} from "react-router-dom";

import { Alert } from "react-bootstrap";
import { FaCartPlus } from "react-icons/fa";

import "../assets/css/App.css";
import "../assets/css/productos.css";
import Swal from "sweetalert2";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import proxy from "../proxy";

import amplistein from "../assets/images/ampl.png";
import ardubank from "../assets/images/bank.png";
import stingerCar from "../assets/images/car.png";
import pot from "../assets/images/pot.png";
import dispenser from "../assets/images/dispensador.png";
import imgNF from "../assets/images/ImgNF.jpg";

export default class Productos extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      productos: [],
    };

    this.getProductos = this.getProductos.bind(this);
    this.renderProductos = this.renderProductos.bind(this);
  }

  async getProductos() {
    const res = await fetch(proxy.url + "/productos");
    const json = await res.json();
    return json.data;
  }

  async componentDidMount() {
    const productos = await this.getProductos();
    this.setState({ productos });
  }

  renderProductos() {
    let productos = this.state.productos;
    const productosList = [];
    productos.forEach((producto) => {
      let id = producto._id;
      let nombre = producto.nombre;
      let descripcion = producto.descripcion;
      let precio = producto.precio;
      let status = producto.status;
      let imagen = producto.imagen;
      productosList.push(<Producto key={id} nombre={nombre} descripcion={descripcion} precio={precio} status={status} imagen={imagen} boton={<ButtonAdd />} />);
    });
    return productosList;
  }

  render() {
    return (
      <>
        <Suspense fallback={<h1 className="titulosec-3"> Cargando ... </h1>}>
          <Navbar />
          <div className="container-fluid">
            <h1 className="titulosec-3">Productos</h1>
            <hr className="linea" />
            <Alert className="container alert w-75 col-8" variant="primary">
              <Alert.Link href="/registro">Regístrate</Alert.Link> o <Alert.Link href="/login">Inicia sesión</Alert.Link> en el dashboard para adqirir nuestros productos y ver sus estadísticas.
            </Alert>
            <div className="container">
              <div>
                <div className="row mt-5">{this.renderProductos()}</div>
              </div>
            </div>
          </div>
          <Footer />
        </Suspense>
      </>
    );
  }
}

const Producto = ({ id, nombre, descripcion, precio, status, imagen, boton }) => (
  <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 mt-3 mb-3" key={id}>
    <div className="card dark">
      <div className="card-header">NUEVO</div>
      <a onClick={() => AlertInfo(nombre, descripcion)} data-toggle="modal" data-target="#stinger_car">
        <img className="card-img-top img-prod " src={loadImg(nombre)} alt="Card image cap" />
      </a>
      <div className="card-body">
        <h5 className="card-title">{nombre}</h5>${precio} <small>MXN</small>
        <p className="card-text">{descripcion}</p>
      </div>
      <div className="card-footer">{status} en LEVEL V</div>
    </div>
  </div>
);

const ButtonAdd = () => (
  <button className="btn btn-primary btn-block">
    <FaCartPlus /> Añadir al carrito
  </button>
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
