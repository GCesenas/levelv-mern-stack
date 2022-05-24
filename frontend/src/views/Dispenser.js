import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import proxy from "../proxy";

import Swal from "sweetalert2";
import {} from "react-icons/ri";

import NavDash from "../components/NavDash";
import Sidenav from "../components/Sidenav";

import mano from "../assets/images/mano.gif";

export default function Dispenser() {
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(proxy.url + "/dispenser")
      .then((response) => response.json())
      .then((json) => setData(json.data));
  }, []);

  var usoTotal = 0;

  for (let i = 0; i < data.length; i++) {
    usoTotal += data[i].uso;
  }

  return (
    <>
      <NavDash />
      <div className="container-fluid">
        <div className="row">
          <Sidenav />
          <div className="col-sm-12 col-md-8 col-lg-9">
            <div className="container">
              <div className="card mt-0 p-3 dispenser-card">
                <div className="row">
                  <div className="col-md-7 px-3">
                    <div className="card-block px-6">
                      <h4 className="card-title dispenser-title">Smart Dispenser</h4>
                      <h4 className="dispenser-subtitle">Panel de estadísticas</h4>
                      <p className="card-text dispenser-text">¿Cuántas personas se han desinfectado hoy? Consúltalo ahora, en tiempo real.</p>

                      <p className="card-text dispenser-text2 mt-5"></p>
                      <button type="button" onClick={() => info1()} className="btn btn-primary mt-5 dispenser-btn">
                        ¿Su uso es seguro?
                      </button>
                      <button type="button" onClick={() => info2()} className="btn btn-primary mt-5 dispenser-btn">
                        ¿Cómo funciona?
                      </button>
                      <a href="https://www.who.int/es/emergencies/diseases/novel-coronavirus-2019" target="_blank" className="btn btn-primary mt-5 dispenser-btn">
                        Saber más del COVID-19
                      </a>
                    </div>
                  </div>

                  <div className="col-md-5">
                    <img className="d-block dispenser-img-card" src={mano} alt="" />
                  </div>
                </div>
              </div>

              <div className="row justify-content-evenly">
                <div className="col-md">
                  <div className="card mt-2 dispenser-card">
                    <div className="card-body">
                      <h5 className="card-title dispenser-title2">Total de usos</h5>
                      <p className="card-text txt mt-1 mb-1 dispenser-text3">{usoTotal}</p>
                    </div>
                  </div>
                </div>
                <div className="col-md">
                  <div className="card mt-2 mb-1 dispenser-card">
                    <div className="card-body">
                      <h5 className="card-title dispenser-title2">Información en tabla</h5>
                      <div className="dispenser-tablecont">
                        <table id="table" className="table table-striped dispenser-table">
                          <thead>
                            <tr>
                              <th scope="col" className="dispenser-tablecol">
                                Fecha y Hora
                              </th>
                              <th scope="col" className="dispenser-tablecol">
                                Temperatura (°C)
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {data.map((registro) => (
                              <tr>
                                <td className="dispenser-row">{registro.fecha}</td>
                                <td className="dispenser-row">{registro.temp}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
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

function info1() {
  Swal.fire({
    icon: "info",
    title: '<h1 style="color: black; font-family: Red Hat Display; ">Usamos el mejor desinfectante</h1>',
    html: '<p style="font-family: Cabin; color: #a970eb;">Nuestra fórmula está aprobada por la OMS, siguiendo rigurosamente los lineamientos de higiene para asegurarte a ti y los tuyos.</p>',
    confirmButtonText: "¡Genial!",
    showCloseButton: true,
    footer: '<a style="color: black; font-family: Cabin;" href="https://www.who.int/gpsc/5may/tools/ES_PSP_GPSC1_GuiaParaLaElaboracionLocalWEB-2012.pdf" target="_blank">Obtener más información</a>',
  });
}

function info2() {
  Swal.fire({
    icon: "info",
    title: '<h1 style="color: black; font-family: Red Hat Display; ">Desinfecta y conoce tu temperatura corporal</h1>',
    html: '<p style="font-family: Cabin; color: #a970eb;">Deja que el dispositivo haga todo por ti. Sin contacto alguno, para mayor protección, desinfecta tus manos y conoce tu temperatura corporal en segundos</p>',
    width: 600,
    confirmButtonText: "Aceptar",
    showCloseButton: true,
  });
}
