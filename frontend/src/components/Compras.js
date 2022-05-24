import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import "../assets/css/App.css";
import { FaTrashAlt } from "react-icons/fa";
import { Button, Table } from "react-bootstrap";

import Swal from "sweetalert2";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

import proxy from "../proxy";
import NavDash from "./NavDash";
import Sidenav from "./Sidenav";

import amplistein from "../assets/images/ampl.png";
import ardubank from "../assets/images/bank.png";
import stingercar from "../assets/images/car.png";
import pot from "../assets/images/pot.png";
import dispenser from "../assets/images/dispensador.png";

export default function Compras() {
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`${proxy.url}/getarticulos/${id}`)
      .then((response) => response.json())
      .then((json) => {
        setData(json.data.articulos);
      });
  });

  /* Propiedades del artículo en array id = 0, nombre = 1, descipción = 2, precio = 3 */

  let total = 0;
  data.map((art) => (total += Number(art[3])));

  if (data.length == 0) {
    return (
      <>
        <NavDash />
        <div className="container-fluid">
          <div className="row">
            <Sidenav />
            <div className="col-sm-12 col-md-8 col-lg-9">
              <div className="">
                <div className="row">
                  <div class="u-info card-block px-6 col-12 mt-0">
                    <h4 class="tit card-title dispenser-title mt-2">Carrito de comrpas</h4>
                    <h4 class="dispenser-subtitle">No hay artículos en tu carrito</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <NavDash />
        <div className="container-fluid">
          <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
          <div className="row">
            <Sidenav />
            <div className="col-sm-12 col-md-8 col-lg-9">
              <div className="">
                <div className="row">
                  <div class="u-info card-block px-6 col-12 mt-0">
                    <h4 class="tit card-title dispenser-title mt-2">Carrito de compras</h4>
                    <h4 class="dispenser-subtitle">Artículos en tu carrito</h4>
                  </div>
                  <div className="col-sm-12 col-md-12 col-lg-8 col-xl-8 mt-3 mb-3">
                    <Table className="table">
                      <thead>
                        <tr>
                          <th>Nombre</th>
                          <th>Precio</th>
                          <th>Imagen</th>
                          <th>Borrar</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.map((art) => (
                          <tr>
                            <td> {art[1]} </td>
                            <td> ${art[3]} MXN </td>
                            <td className="td-img">{loadImg(art[1])}</td>
                            <td>
                              <Button
                                className="btn btn-danger"
                                onClick={() => {
                                  fetch(proxy.url + `/delcarrito/${id}/${art[0]}`)
                                    .then((response) => response.json())
                                    .then((json) => ToastyDel(json.mensaje));
                                }}
                              >
                                <FaTrashAlt />
                              </Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  </div>
                  <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 mt-3 mb-3">
                    <div className="card dark">
                      <div className="card-header">Resúmen del Carrito</div>
                      <div className="card-body">
                        <p className="card-text">
                          {data.map((art) => (
                            <p>
                              {art[1]} ${art[3]}
                            </p>
                          ))}
                        </p>
                      </div>
                      <div className="card-header">
                        <p>
                          Total a Pagar:{" "}
                          <strong>
                            <big> ${(total = parseFloat(total.toFixed(2)))}</big>
                          </strong>
                          <small> MXN</small>
                        </p>
                      </div>
                      <div className="card-header">
                        <Button onClick={() => SAlert()} className="btn btn-block btn-success">
                          Pagar
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

function loadImg(nom) {
  switch (nom) {
    case "Amplistein":
      return <img className="w-50" src={amplistein} />;

    case "ArduBank":
      return <img className="w-50" src={ardubank} />;

    case "StingerCar":
      return <img className="w-50" src={stingercar} />;

    case "Smart Dispenser":
      return <img className="w-50" src={dispenser} />;

    case "Smart Pot":
      return <img className="w-50" src={pot} />;

    default:
      break;
  }
}

function SAlert() {
  Swal.mixin({
    input: "text",
    confirmButtonText: "Siguiente &rarr;",
    showCancelButton: true,
    progressSteps: ["1", "2", "3", "4", "5"],
  })
    .queue([
      {
        title: "Ingresa tu dirección",
        text: "Aquí enviaremos tu pedido",
      },
      "Ingresa tu Código Postal",
      "Ingresa tu tarjeta de crédito",
      "Fecha de Vencimento de tu tarjeta",
      "CVV",
    ])
    .then((result) => {
      if (result.value) {
        const answers = JSON.stringify(result.value);
        const swalWithBootstrapButtons = Swal.mixin({
          customClass: {
            confirmButton: "btn btn-danger ml-2",
            cancelButton: "btn btn-success",
          },
          buttonsStyling: false,
        });

        swalWithBootstrapButtons
          .fire({
            title: "Confirmar pedido",
            icon: "question",
            showCancelButton: true,
            confirmButtonText: "Cancelar",
            cancelButtonText: "Confirmar pedido",
            reverseButtons: true,
          })
          .then((result) => {
            if (result.isConfirmed) {
              Swal.fire("Canelado", "Pedido cancelado", "error");
            } else if (result.dismiss === Swal.DismissReason.cancel) {
              Swal.fire("Pedido realizado", "Tu pedido llegara en máximo 5 dias hábiles", "success");
            }
          });
      }
    });
}

function ToastyDel(msj) {
  toast(msj);
}
