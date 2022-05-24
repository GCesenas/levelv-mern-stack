import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import proxy from "../proxy";

import {} from "react-icons/ri";

import NavDash from "../components/NavDash";
import Sidenav from "../components/Sidenav";

import carro from "../assets/images/carro.png";

export default function StingerCar() {
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(proxy.url + "/stingerCar")
      .then((response) => response.json())
      .then((json) => setData(json.data[0]));
  });

  console.log(data["Velocidad c/s"]);

  return (
    <>
      <NavDash />
      <div className="container-fluid">
        <div className="row">
          <Sidenav />
          <div className="col-sm-12 col-md-8 col-lg-9">
            <div className="container">
              <div className="row">
                <div className="card mt-4 p-3 stinger-card">
                  <div className="row">
                    <div className="col-md-5 px-3">
                      <div className="card-block px-6">
                        <h4 className="card-title stinger-title">STINGER-CAR</h4>
                        <h4 className="stinger-subtitle">Estadísticas</h4>
                      </div>
                    </div>

                    <div className="col-md-3">
                      <img className="d-block stinger-img-card" src={carro} alt="" />
                    </div>

                    <div className="col-md-4">
                      <div className="card-comprars">
                        <div className="card-body">
                          <h5 className="card-title">Deseas comprar un nuevo chasis?</h5>
                          <p className="card-text">La estructura esta hecha en acrílico transparente de alta resistencia. En el kit se incluyen encoders que se pueden utilizar para detectar la velocidad del robot.</p>
                          <center>
                            <a href="https://articulo.mercadolibre.com.mx/MLM-581932565-chasis-de-carro-kit-arduino-4-llantas--_JM#position=1&type=item&tracking_id=e39c916c-b223-4ae2-9966-55ec91b89e6e" className="btn btn-primary">
                              Comprar
                            </a>
                          </center>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row justify-content-evenly">
                    <div className="col-md-4">
                      <div className="card mt-4 stinger-card">
                        <div className="card-body">
                          <h5 className="card-title stinger-title2">RPM</h5>
                          <p className="card-text txt mt-1 mb-1 stinger-text3">{data.RPM}</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="card mt-4 stinger-card">
                        <div className="card-body">
                          <h5 className="card-title stinger-title2">CM/S</h5>
                          <p className="card-text txt mt-1 mb-1 stinger-text3">{data["Velocidad c/s"]}</p>
                        </div>
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
